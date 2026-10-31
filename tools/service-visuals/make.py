#!/usr/bin/env python3
"""Dựng ảnh trực quan cho bài đọc kỹ trang dịch vụ bằng đúng mẫu ảnh blog SOHO (Editorial Frame v2, goha-seo-ws2).

Đọc docs/articles/<slug>/visuals.json:
    {"title": "...", "category": "...", "theme": "orange|violet|coral",
     "hero": {"photo": "<file trong photos/cand>", "focal": [0.5, 0.5]},
     "inArticle": [{"photo": "...", "label": "chữ trên dải đen (thường là H2)", "focal": [0.5, 0.5]}]}
Ra:
    public/media/articles/<slug>/<slug>-hero.webp        1600×900, chữ trái + ảnh phải (như banner blog)
    public/media/articles/<slug>/<slug>-anh-NN.webp      1200×800, ảnh lớn + dải nhãn (như ảnh trong bài blog)
    docs/articles/<slug>/credits.json                     ghi nguồn từng ảnh, dán vào trường credits của bài
Dùng:
    python3 tools/service-visuals/make.py <slug> [<slug> ...]
Thư mục Editorial Frame lấy từ $SOHO_FRAME_DIR, mặc định goha-seo-ws2/tools/soho-editorial-frame.
"""
import json, os, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FRAME = Path(os.environ.get('SOHO_FRAME_DIR', str(Path.home() / '.gemini/antigravity-ide/scratch/goha-seo-ws2/tools/soho-editorial-frame')))
sys.path.insert(0, str(FRAME))
from generator import render  # noqa: E402


def credit(src):
    lic = src.get('license', '')
    return {
        'text': f"{src['title'].rsplit('.', 1)[0]}, {src['author']}, Wikimedia Commons ({lic})",
        'url': src['page'],
    }


def build(slug):
    base = ROOT / 'docs/articles' / slug
    cfg = json.loads((base / 'visuals.json').read_text(encoding='utf-8'))
    cand = base / 'photos/cand'
    out = ROOT / 'public/media/articles' / slug
    out.mkdir(parents=True, exist_ok=True)
    article = {'id': slug, 'slug': slug, 'h1': cfg['title'], 'visualTitle': None, 'category': cfg['category'],
               'theme': cfg.get('theme', 'orange'), 'heroTitle': True,
               'inArticleImages': [{'visualLabel': it['label']} for it in cfg.get('inArticle', [])]}
    credits = []

    def one(item, variant, idx, dst):
        fx, fy = item.get('focal', [0.5, 0.5])
        img = render({**article, 'focalX': fx, 'focalY': fy}, variant, photo_override=str(cand / item['photo']), section_index=idx)
        img.save(dst, format='WEBP', quality=84, method=6)
        src = json.loads((cand / item['photo'].replace('.jpg', '.source.json')).read_text(encoding='utf-8'))
        credits.append({**credit(src), 'image': dst.name})
        print('OK', dst.relative_to(ROOT), f'{dst.stat().st_size // 1024} KB')

    one(cfg['hero'], 'hero', 0, out / f'{slug}-hero.webp')
    for i, it in enumerate(cfg.get('inArticle', [])):
        one(it, 'in-article', i, out / f'{slug}-anh-{i + 1:02d}.webp')
    (base / 'credits.json').write_text(json.dumps(credits, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    for s in sys.argv[1:]:
        build(s)
