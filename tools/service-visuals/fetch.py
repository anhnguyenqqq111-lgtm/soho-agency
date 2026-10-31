#!/usr/bin/env python3
"""Tìm và tải ảnh CC0 (chủ yếu kho Unsplash trên Wikimedia Commons) làm ứng viên cho bài đọc kỹ trang dịch vụ.

Dùng:
    python3 tools/service-visuals/fetch.py <slug> "<từ khóa tiếng Anh>" [--n 9]
Ra:
    docs/articles/<slug>/photos/cand/<slug>-<mã>.jpg       ảnh rộng 1600 (hoặc gốc nếu nhỏ hơn)
    docs/articles/<slug>/photos/cand/<slug>-<mã>.source.json  nguồn, tác giả, giấy phép, link
    docs/articles/<slug>/photos/cand/sheet-<từ khóa>.jpg   ảnh lưới đánh số để chọn bằng mắt
Chỉ nhận ảnh có LicenseShortName chứa CC0, cạnh dài ≥ 1600. Không chọn ảnh có người, logo thương hiệu, chữ lớn.
"""
import argparse, hashlib, io, json, re, sys, urllib.parse, urllib.request
from datetime import date
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
UA = {'User-Agent': 'SOHO-site-builder/1.0 (service article visuals)'}
API = 'https://commons.wikimedia.org/w/api.php'


def get(url, binary=False):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    return data if binary else json.loads(data)


def strip_html(s):
    return re.sub(r'<[^>]+>', '', s or '').strip()


def search(query, n):
    params = {
        'action': 'query', 'format': 'json', 'generator': 'search', 'gsrnamespace': 6, 'gsrlimit': 40,
        'gsrsearch': f'{query} Unsplash', 'prop': 'imageinfo', 'iiprop': 'url|extmetadata|size|mime', 'iiurlwidth': 1600,
    }
    d = get(API + '?' + urllib.parse.urlencode(params))
    out = []
    for p in sorted(d.get('query', {}).get('pages', {}).values(), key=lambda p: p.get('index', 0)):
        ii = p['imageinfo'][0]
        m = ii.get('extmetadata', {})
        lic = strip_html(m.get('LicenseShortName', {}).get('value'))
        if 'CC0' not in lic or ii.get('mime') not in ('image/jpeg', 'image/png'):
            continue
        if max(ii['width'], ii['height']) < 1600 or ii['width'] < ii['height']:
            continue  # cần ảnh ngang đủ lớn cho khung 1600×900
        out.append({
            'source': 'Wikimedia Commons', 'title': p['title'].replace('File:', ''), 'page': ii.get('descriptionurl'),
            'url': ii.get('thumburl') or ii['url'], 'author': strip_html(m.get('Artist', {}).get('value')) or 'Không rõ',
            'license': lic, 'license_url': strip_html(m.get('LicenseUrl', {}).get('value')),
            'width': ii['width'], 'height': ii['height'], 'query': query, 'downloaded': date.today().isoformat(),
        })
        if len(out) >= n:
            break
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('slug')
    ap.add_argument('query')
    ap.add_argument('--n', type=int, default=9)
    a = ap.parse_args()
    folder = ROOT / 'docs/articles' / a.slug / 'photos/cand'
    folder.mkdir(parents=True, exist_ok=True)
    found = search(a.query, a.n)
    if not found:
        sys.exit(f'Không có ảnh CC0 ngang đủ lớn cho "{a.query}". Thử từ khóa khác.')
    tiles = []
    for i, it in enumerate(found, 1):
        code = hashlib.sha1(it['page'].encode()).hexdigest()[:8]
        dst = folder / f'{a.slug}-{code}.jpg'
        if not dst.exists():
            img = Image.open(io.BytesIO(get(it['url'], binary=True))).convert('RGB')
            if img.width > 1600:
                img = img.resize((1600, round(img.height * 1600 / img.width)), Image.LANCZOS)
            img.save(dst, quality=88)
        it['file'] = dst.name
        (folder / f'{a.slug}-{code}.source.json').write_text(json.dumps(it, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        tiles.append((i, dst, it))
        print(f'{i}. {dst.relative_to(ROOT)}  |  {it["title"][:70]}  |  {it["author"][:40]}')
    # ảnh lưới 3 cột để chọn bằng mắt
    tw, th = 520, 330
    cols = 3
    rows = (len(tiles) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * tw, rows * th), 'white')
    d = ImageDraw.Draw(sheet)
    for k, (i, path, it) in enumerate(tiles):
        im = Image.open(path).convert('RGB')
        im.thumbnail((tw - 10, th - 10))
        x, y = (k % cols) * tw + 5, (k // cols) * th + 5
        sheet.paste(im, (x, y))
        d.rectangle([x, y, x + 46, y + 40], fill='black')
        d.text((x + 12, y + 8), str(i), fill='white', font=ImageFont.load_default(size=26))
    name = re.sub(r'[^a-z0-9]+', '-', a.query.lower()).strip('-')
    out = folder / f'sheet-{name}.jpg'
    sheet.save(out, quality=82)
    print('Ảnh lưới:', out.relative_to(ROOT))


if __name__ == '__main__':
    main()
