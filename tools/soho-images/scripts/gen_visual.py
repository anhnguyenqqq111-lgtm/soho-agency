#!/usr/bin/env python3
"""Sinh ảnh minh họa cho ảnh bìa SOHO bằng model ảnh Gemini, từ các trường trong file dữ liệu .data.js.

Đọc trong file dữ liệu:
    aiPrompt   chủ thể và bố cục của hình (tiếng Anh, không chữ, không logo), ví dụ
               'a magnet pulling small glowing user cards out of a stream of grey cards'
    aiStyle    tên phong cách trong STYLES bên dưới (mặc định isometric)
    palette    tên bảng hoặc {accent, mode}: màu chủ đạo được dịch thành chỉ dẫn màu cho model
    allowPeople true nếu người dùng cho phép có người trong hình (mặc định không)
Ghi ra cạnh file dữ liệu:
    <tên>-visual.png          ảnh minh họa, dùng qua trường visualImage của cover.html
    <tên>-visual.prompt.txt   prompt cuối đã gửi, để ghi manifest và tái tạo

Dùng:
    python3 .agent/skills/creating-images-soho/scripts/gen_visual.py <topic>/images/src/soho-<slug>-cover.data.js [...]
    tùy chọn: --model <tên model>  --force (ghi đè ảnh đã có)  --dry-run (chỉ in prompt)
Khóa: GEMINI_API_KEY trong môi trường hoặc trong file .env ở thư mục cha gần nhất có .env.
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path

SKILL = Path(__file__).resolve().parents[1]
DEFAULT_MODEL = "gemini-2.5-flash-image"

# Phong cách luân phiên giữa các bài để danh sách bài không đơn điệu. Mỗi phong cách là một đoạn mô tả gửi kèm prompt.
STYLES = {
    "isometric": "clean isometric 3D illustration, soft matte materials, gentle studio lighting, subtle shadows",
    "clay": "soft clay 3D render, rounded shapes, matte pastel materials, soft global illumination",
    "flat": "flat vector illustration, bold simple shapes, minimal detail, smooth two-tone shading",
    "papercut": "layered paper-cut illustration, soft drop shadows between layers, crisp edges",
    "glass": "frosted glass and glossy plastic 3D objects floating in space, soft rim light",
    "line": "thin line-art illustration with a few filled accent shapes, generous white space",
    "photo": "editorial product-style photograph of physical objects on a seamless studio background, shallow depth of field",
}
RULES = (
    "no text, no letters, no numbers, no logos, no watermarks, no user interface screenshots, "
    "no charts with readable values, single clear focal subject, plenty of negative space on the left side, "
    "composition suitable for a wide 16:9 cover image"
)


def find_key(start: Path) -> str:
    key = os.environ.get("GEMINI_API_KEY", "")
    if key:
        return key
    for folder in [start, *start.parents]:
        env = folder / ".env"
        if env.is_file():
            match = re.search(r"^\s*GEMINI_API_KEY\s*=\s*['\"]?([^'\"\n]+)", env.read_text(encoding="utf-8"), re.M)
            if match:
                return match.group(1).strip()
    raise SystemExit("Không tìm thấy GEMINI_API_KEY (biến môi trường hoặc file .env của workspace).")


def read_data(data_file: Path) -> dict:
    """Chạy file dữ liệu bằng node để lấy window.DATA, tránh phải viết parser JS."""
    script = "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window.DATA||{}))"
    out = subprocess.run(["node", "-e", script, str(data_file)], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def palette_words(spec) -> str:
    """Dịch palette thành chỉ dẫn màu: màu nhấn và tông nền. Lấy từ palettes.js qua node để không lệch với template."""
    script = (
        "global.window={};global.document={documentElement:{style:{setProperty(){}}}};"
        "require(process.argv[1]);const p=window.resolvePalette(JSON.parse(process.argv[2]));"
        "process.stdout.write(p?JSON.stringify({accent:p.vars.accent,paper:p.vars.paper,logo:p.logo}):'null')"
    )
    out = subprocess.run(["node", "-e", script, str(SKILL / "assets" / "palettes.js"), json.dumps(spec)],
                         capture_output=True, text=True, check=True)
    info = json.loads(out.stdout)
    if not info:
        raise ValueError(f"palette không hợp lệ: {spec}")
    tone = "dark, deep background" if info["logo"] == "light" else "light, airy background"
    return (f"dominant accent color {info['accent']}, background tone {info['paper']} ({tone}), "
            f"one or two harmonious supporting colors, no other strong hues")


def build_prompt(data: dict) -> str:
    subject = (data.get("aiPrompt") or "").strip()
    if not subject:
        raise ValueError("thiếu aiPrompt trong file dữ liệu")
    style = STYLES.get(data.get("aiStyle") or "isometric")
    if not style:
        raise ValueError(f"aiStyle không hợp lệ: {data.get('aiStyle')} (dùng {', '.join(STYLES)})")
    people = "" if data.get("allowPeople") else ", no people, no faces, no hands"
    return f"{subject}. {style}. {palette_words(data.get('palette') or 'soho')}. {RULES}{people}."


def generate(prompt: str, key: str, model: str) -> bytes:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}},
    }
    req = urllib.request.Request(url, data=json.dumps(body).encode(), method="POST",
                                 headers={"Content-Type": "application/json", "x-goog-api-key": key})
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            payload = json.load(resp)
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"Gemini trả lỗi {exc.code}: {exc.read().decode(errors='replace')[:400]}") from exc
    for cand in payload.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            inline = part.get("inlineData")
            if inline and inline.get("data"):
                return base64.b64decode(inline["data"])
    raise RuntimeError("Gemini không trả ảnh: " + json.dumps(payload)[:400])


def run(data_file: Path, model: str, force: bool, dry: bool) -> bool:
    data_file = data_file.resolve()
    name = data_file.name.removesuffix(".data.js")
    target = data_file.with_name(name.removesuffix("-cover").removesuffix("-og") + "-visual.png")
    try:
        data = read_data(data_file)
        prompt = build_prompt(data)
    except (ValueError, subprocess.CalledProcessError) as exc:
        print(f"LỖI  {name}: {exc}")
        return False
    if dry:
        print(f"PROMPT {target.name}:\n  {prompt}")
        return True
    if target.exists() and not force:
        print(f"BỎ QUA {target.name}: đã có, thêm --force để sinh lại")
        return True
    try:
        png = generate(prompt, find_key(data_file.parent), model)
    except RuntimeError as exc:
        print(f"LỖI  {name}: {exc}")
        return False
    target.write_bytes(png)
    target.with_suffix(".prompt.txt").write_text(prompt + "\n", encoding="utf-8")
    print(f"OK   {target.name}  {len(png) // 1024} KB  (model {model})")
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description="Sinh ảnh minh họa AI cho ảnh bìa SOHO")
    parser.add_argument("data_files", nargs="+", type=Path)
    parser.add_argument("--model", default=os.environ.get("GEMINI_IMAGE_MODEL", DEFAULT_MODEL))
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    results = [run(path, args.model, args.force, args.dry_run) for path in args.data_files]
    return 0 if all(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
