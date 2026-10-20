import visuals from './blogVisuals.json';

/*
  Ảnh do SOHO Image Studio tạo (tools/soho-editorial-frame trong goha-seo-ws2) và đưa vào repo này.
  - Dữ liệu: components/blogVisuals.json, khóa là slug bài viết; file WebP nằm trong public/blog/generated/.
  - Studio chỉ ghi hai nơi đó. title (H1), metaTitle, excerpt, content và image gốc trong blogData.js không bị đụng tới.
  - Bài không có mục trong JSON dùng ảnh gốc như trước, nên thêm Studio không làm đổi bài cũ.
  - Ảnh trong bài gắn theo vị trí H2 (h2Index) và được đối chiếu lại với chữ H2 hiện tại: H2 đã đổi mà chưa đưa ảnh mới
    thì ảnh đó không hiện, tránh ảnh mang nhãn cũ nằm dưới tiêu đề mới.
  Kiểm tra tham chiếu và kích thước: `npm run visuals:check` (tự chạy trước `npm run build`).
*/
export function getVisuals(slug) {
  return visuals[slug] || null;
}

// Ảnh gốc 1600×1000 trong blogData.js là dự phòng cho mọi vị trí.
function fallback(article) {
  return {src: article.image.src, alt: article.image.alt, width: 1600, height: 1000};
}

export function thumbnailOf(article) {
  const v = getVisuals(article.slug);
  return v?.thumbnail ? {...v.thumbnail} : fallback(article);
}

export function heroOf(article) {
  const v = getVisuals(article.slug);
  return v?.hero ? {...v.hero} : fallback(article);
}

// Ảnh chia sẻ (Open Graph, JSON-LD): thumbnail có H1 trên ảnh, cùng ảnh với thẻ bài viết.
export function shareImageOf(article) {
  return thumbnailOf(article);
}

export function creditOf(article) {
  const v = getVisuals(article.slug);
  return v?.credit?.text ? v.credit : null;
}

const normalize = text =>
  String(text || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const escapeAttr = text =>
  String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');

// Chèn <figure> ngay sau H2 tương ứng. Không có ảnh, hoặc H2 không còn khớp, thì trả về nội dung nguyên vẹn.
export function contentWithVisuals(article, sitePath = p => p) {
  const v = getVisuals(article.slug);
  if (!v?.inArticle?.length) return article.content;
  let index = -1;
  return article.content.replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g, (match, inner) => {
    index += 1;
    const item = v.inArticle.find(i => i.h2Index === index);
    if (!item || normalize(inner) !== normalize(item.h2)) return match;
    return (
      match +
      `<figure class="visual"><img src="${escapeAttr(sitePath(item.src))}" alt="${escapeAttr(item.alt)}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" /></figure>`
    );
  });
}
