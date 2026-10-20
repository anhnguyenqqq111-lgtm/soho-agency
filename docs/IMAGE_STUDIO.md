# Ảnh blog từ SOHO Image Studio

Ảnh thumbnail, hero và ảnh trong bài của blog có thể do **SOHO Image Studio** tạo. Studio nằm trong workspace nội dung
`goha-seo-ws2/tools/soho-editorial-frame` và chạy trên máy biên tập viên (không có trên hosting, vì site xuất tĩnh và chưa có đăng nhập).

## Studio ghi gì vào repo này

- `public/blog/generated/{thumbnails,banners,in-article}/*.webp` (1200×675, 1600×900, 1200×800; tên file kèm hash nội dung).
- `components/blogVisuals.json`: slug → đường dẫn, kích thước, alt, ghi công, giấy phép, hash H1/H2 lúc đưa lên.

Studio **không** sửa `components/blogData.js`. H1, meta title, excerpt, nội dung, slug và ảnh gốc giữ nguyên.

## Site dùng dữ liệu đó ở đâu

`components/blogVisuals.js` là nơi duy nhất đọc JSON:

| Hàm | Dùng ở | Khi bài chưa có ảnh Studio |
|---|---|---|
| `thumbnailOf` | `BlogCard`, `BlogRow`, Open Graph, JSON-LD | ảnh gốc 1600×1000 |
| `heroOf`, `creditOf` | banner dưới H1 ở `app/blog/[slug]/page.js` | ảnh gốc, không ghi công |
| `contentWithVisuals` | thân bài: chèn `<figure class="visual">` sau H2 tương ứng | nội dung nguyên vẹn |

Ảnh trong bài gắn theo vị trí H2 và được đối chiếu với chữ H2 hiện tại. Sửa H2 mà chưa đưa ảnh mới thì ảnh đó tự ẩn,
không hiện ảnh mang nhãn cũ dưới tiêu đề mới.

## Kiểm tra

`npm run visuals:check` chạy trước mỗi `npm run build`: slug có thật, file tồn tại, đúng định dạng và kích thước, có giấy phép.
Sai là build dừng, bản đang chạy giữ nguyên.

## Quy trình

1. Sửa bài trong `blogData.js` như bình thường.
2. Mở Studio, chọn bài, chọn và duyệt ảnh nguồn (Pexels hoặc ảnh có bản quyền), chọn H2 cần ảnh, xuất WebP, bấm "Đưa ảnh đã duyệt vào website".
3. Trong repo này: `git status` để xem file mới, `npm run build`, xem lại trang, rồi commit và push.

Gỡ ảnh Studio của một bài: xóa mục của slug trong `blogVisuals.json` (hoặc "unpublish" trong Studio); bài quay về ảnh gốc.
