#!/usr/bin/env python3
"""Render ảnh bài viết SOHO từ file dữ liệu .data.js bằng Chrome headless, kiểm tra rồi xuất file cuối.

File dữ liệu phải nằm trong thư mục images/src/ của topic. Mỗi file cho ra một file cuối trong images/:
    preset og                          → <tên>.jpg   1200×630
    preset cover                       → <tên>.webp  1600×1000 (thumbnail: chữ trái, minh họa phải)
    preset banner                      → <tên>.webp  1600×800  (chỉ minh họa)
    preset inline, inline-tall, square → <tên>.webp  1360×850, 1360×1120, 1360×1360

Dùng (chạy từ thư mục nào cũng được):
    python3 .agent/skills/creating-images-soho/scripts/render.py <topic>/images/src/<tên>.data.js [...]
    python3 .agent/skills/creating-images-soho/scripts/render.py --keep-png <...>

Trả mã 1 nếu có ảnh lỗi: sai kích thước, có dải cảnh báo đỏ của template, vượt dung lượng.
Ảnh lỗi giữ lại file PNG cạnh file dữ liệu để mở xem nội dung cảnh báo.
"""
from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
from pathlib import Path

from PIL import Image

SKILL = Path(__file__).resolve().parents[1]
TEMPLATES = SKILL / "assets" / "templates"

# preset: (template, rộng CSS, cao CSS, device scale, đuôi file cuối, dung lượng tối đa KB)
PRESETS = {
    "og": ("cover.html", 1200, 630, 1, ".jpg", 300),
    "cover": ("cover.html", 1600, 1000, 1, ".webp", 200),
    "banner": ("cover.html", 1600, 800, 1, ".webp", 200),
    "inline": ("diagram.html", 680, 425, 2, ".webp", 200),
    "inline-tall": ("diagram.html", 680, 560, 2, ".webp", 200),
    "square": ("diagram.html", 680, 680, 2, ".webp", 200),
}
QUALITY = {".jpg": (85, 78, 70), ".webp": (82, 75, 68)}
WARN_RGB = (176, 0, 32)  # #B00020, màu dải cảnh báo trong hai template


def find_chrome() -> str:
    candidates = (
        os.environ.get("CHROME", ""),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        shutil.which("google-chrome") or "",
        shutil.which("chromium") or "",
    )
    for candidate in candidates:
        if candidate and Path(candidate).exists():
            return candidate
    raise SystemExit("Không tìm thấy Chrome. Đặt biến môi trường CHROME trỏ tới file chạy Chrome.")


def read_preset(data_file: Path) -> str:
    match = re.search(r"\bpreset\s*:\s*['\"]([\w-]+)['\"]", data_file.read_text(encoding="utf-8"))
    if not match:
        raise ValueError("thiếu trường preset trong file dữ liệu")
    if match.group(1) not in PRESETS:
        raise ValueError(f"preset không hợp lệ: {match.group(1)} (dùng {', '.join(PRESETS)})")
    return match.group(1)


def has_warning_band(png: Path) -> bool:
    """Template in dải đỏ #B00020 ở chân ảnh khi có lỗi nội dung hoặc thiếu font."""
    with Image.open(png) as image:
        rgb = image.convert("RGB")
        width, height = rgb.size
        data = rgb.crop((0, int(height * 0.9), width, height)).resize((200, 20)).tobytes()
    pixels = [data[i:i + 3] for i in range(0, len(data), 3)]
    near = sum(1 for r, g, b in pixels if abs(r - WARN_RGB[0]) < 30 and g < 40 and abs(b - WARN_RGB[2]) < 40)
    return near / len(pixels) > 0.25


def export(png: Path, target: Path, quality: int) -> float:
    with Image.open(png) as image:
        rgb = image.convert("RGB")
        if target.suffix == ".jpg":
            rgb.save(target, "JPEG", quality=quality, optimize=True, progressive=True)
        else:
            rgb.save(target, "WEBP", quality=quality, method=6)
    return target.stat().st_size / 1024


def render(chrome: str, data_file: Path, keep_png: bool) -> bool:
    data_file = data_file.resolve()
    name = data_file.name.removesuffix(".data.js")
    if not data_file.is_file() or not data_file.name.endswith(".data.js"):
        print(f"LỖI  {data_file}: không phải file .data.js")
        return False
    if data_file.parent.name != "src":
        print(f"LỖI  {name}: file dữ liệu phải nằm trong images/src/ của topic")
        return False
    try:
        preset = read_preset(data_file)
    except ValueError as exc:
        print(f"LỖI  {name}: {exc}")
        return False

    template, width, height, scale, suffix, max_kb = PRESETS[preset]
    png = data_file.with_name(name + ".png")
    png.unlink(missing_ok=True)
    url = f"{(TEMPLATES / template).as_uri()}?data={data_file.as_uri()}"
    # Chrome in nhiều dòng ERROR vô hại trên macOS (CVDisplayLink, task_policy_set...), nên bỏ qua stderr
    # và đánh giá kết quả bằng file ảnh.
    subprocess.run(
        [chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
         f"--window-size={width},{height}", f"--force-device-scale-factor={scale}",
         "--virtual-time-budget=10000", f"--screenshot={png}", url],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False, timeout=120,
    )
    if not png.exists():
        print(f"LỖI  {name}: Chrome không tạo được ảnh")
        return False

    with Image.open(png) as image:
        size = image.size
    expected = (width * scale, height * scale)
    if size != expected:
        print(f"LỖI  {name}: ảnh {size[0]}×{size[1]}, cần {expected[0]}×{expected[1]}. Giữ {png.name} để kiểm tra.")
        return False
    if has_warning_band(png):
        print(f"LỖI  {name}: ảnh có dải cảnh báo đỏ. Mở {png} đọc nội dung dải đỏ, xử lý (sửa file dữ liệu, "
              "hoặc kiểm tra mạng nếu báo thiếu font) rồi chạy lại.")
        return False

    target = data_file.parent.parent / (name + suffix)
    for quality in QUALITY[suffix]:
        kb = export(png, target, quality)
        if kb <= max_kb:
            break
    else:
        print(f"LỖI  {target.name}: {kb:.0f} KB, vượt {max_kb} KB kể cả ở chất lượng thấp nhất. Bớt chi tiết trong ảnh.")
        return False

    if not keep_png:
        png.unlink()
    print(f"OK   {target.name}  {expected[0]}×{expected[1]}  {kb:.0f} KB  (preset {preset}, chất lượng {quality})")
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description="Render ảnh bài viết SOHO từ file .data.js")
    parser.add_argument("data_files", nargs="+", type=Path, help="file images/src/<tên>.data.js")
    parser.add_argument("--keep-png", action="store_true", help="giữ file PNG trung gian sau khi xuất")
    args = parser.parse_args()
    chrome = find_chrome()
    results = [render(chrome, path, args.keep_png) for path in args.data_files]
    return 0 if all(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
