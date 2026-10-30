# Brief cho Codex: hình ảnh cho website SOHO (bản "vuông, gọn", denim 60-30-10)

Ngày: 31/10/2026. Người đọc: Codex (dựng hình bằng code, gen ảnh AI, chụp màn hình) và người phụ trách Marketing của SOHO
(duyệt ảnh trước khi đưa lên web).

Thiết kế tham chiếu: canvas "SOHO Website Redesign", trang "Bản vuông, gọn" (https://claude.ai/artifact/Tt6xZABXP1yBSC5Xq7L19Q).
Luật bằng chứng đầy đủ: `docs/services/EVIDENCE_ASSET_BRIEF.md`. Số liệu khách: `docs/private/` (không commit, repo public).

---

## 0. Ba loại hình, ba cách làm (bắt buộc)

| Loại | Là gì | Ai làm | Được dùng AI? |
|---|---|---|---|
| **A. Bằng chứng** | Biểu đồ từ số thật, ảnh chụp báo cáo, website, mẫu quảng cáo đã chạy, ảnh người thật | Code dựng từ dữ liệu; chụp màn hình thật | **Không.** AI không vẽ số, không vẽ giao diện, không tạo cảnh người |
| **B. Trình bày bằng chứng** | Khung điện thoại, laptop, nền màu, bố cục ghép | Code (HTML/SVG) hoặc AI cho phần khung rỗng | Được, nhưng nội dung bên trong phải là ảnh A |
| **C. Minh họa** | Hình nền, biểu tượng 3D, hình ý tưởng cho bài viết | AI | Được, gắn nhãn "Ảnh minh họa" khi có cảnh vật |

Một ảnh AI bị phát hiện đứng ở chỗ bằng chứng làm hỏng toàn bộ phần còn lại. Khi phân vân, coi là loại A.

## 1. Màu và phong cách chung (dán vào đầu mọi prompt AI)

```
Brand palette 60-30-10: 60% white and very light blue #EEF3FA; 30% denim blue #1E4E8C and deep denim #0F2340;
10% orange #F26522 as small accents only. Clean, bright, editorial. Mix of square blocks and rounded cards (20-28px).
Thick ring and half-ring shapes as decoration (inspired by the two O's in the SOHO logo). No text, no letters, no numbers,
no logos, no fake UI, no charts. No people unless the brief says so. Soft daylight, no neon, no glossy 3D blobs.
```

Phông khi cần chữ (chữ luôn đặt bằng code, không để AI viết): Bricolage Grotesque 500, Plus Jakarta Sans 400–700.

## 2. Ảnh người phụ trách Marketing và thực thi web

Nguồn: ảnh thật người dùng gửi ngày 31/10/2026 (đứng, áo blazer đen, áo thun trắng, quần jean, nền rèm trắng).
Lưu bản gốc ở `docs/private/team/` (không commit).

**Cần trước khi làm:**
- Tên, chức danh, số năm kinh nghiệm, dịch vụ phụ trách.
- **Người trong ảnh đồng ý** cho dùng ảnh trên website và cho chỉnh bằng AI (tin nhắn hoặc email, lưu lại).

**Được làm bằng AI hoặc công cụ chỉnh ảnh (giữ nguyên mặt, dáng, trang phục; không đổi tuổi, dáng người, nét mặt):**

| ID | Dùng ở | Yêu cầu | Kích thước |
|---|---|---|---|
| p-01 | Trang Giới thiệu, khối "Người phụ trách" | Tách nền, đặt trên nền denim #1E4E8C phẳng, có một vòng tròn cam dày phía sau vai | 1200×1500 (4:5) |
| p-02 | Trang chủ, cạnh dải "ba điều SOHO giữ" | Cắt nửa người, nền #EEF3FA, góc bo 24px làm bằng code | 1000×1000 |
| p-03 | Trang dịch vụ, khối "Ai làm việc với bạn" | Cắt vai trở lên, nền trắng | 600×600 |
| p-04 | Ảnh tác giả cho blog | Cắt mặt, nền denim đậm #0F2340 | 400×400 |

Prompt mẫu cho p-01 (công cụ có chế độ giữ nhân dạng, chỉnh từ ảnh gốc):
```
Edit this exact photo. Keep the person's face, expression, body, pose and clothing unchanged.
Remove the background and replace it with a flat denim blue #1E4E8C background, with one thick orange #F26522 ring
partly behind the left shoulder. Even soft studio light. No text. Portrait 4:5.
```

**Không làm:**
- Cảnh người này đang họp khách, thuyết trình, ở văn phòng, cầm laptop có số… rồi đặt như ảnh thật.
- Ghép nhiều người để giả đông đội ngũ.

### 2b. Người phụ trách quản lý dự án và quan hệ khách hàng

Nguồn: 3 ảnh thật gửi ngày 31/10/2026, lưu ở `docs/private/team/pm-lead-1..3.png` (418–541 px rộng, đủ cho p-03/p-04,
hơi nhỏ cho p-01). Cùng luật mục 2: cần tên, chức danh, đồng ý của người trong ảnh.
- pm-lead-3 (áo khoác jean, áo thun xanh đậm): hợp màu denim nhất, dùng cho p-01.
- pm-lead-2 (áo thun đen có logo ICADO): ICADO là khách của SOHO. Hỏi khách trước nếu muốn để logo, nếu không thì dùng ảnh khác.
- pm-lead-1 (vest, hoa, ly có chữ): nền sự kiện, logo trên ly phải xóa nếu dùng.

Đợt thử 1 do Claude gọi Codex CLI (`codex exec`, tính năng image_generation): ra `docs/private/raw/`, xem `README-batch1.md`.

Cảnh làm việc thật: chụp bằng điện thoại trong một buổi 2 giờ (danh sách ở `EVIDENCE_ASSET_BRIEF.md` mục hub-02, hub-03).

## 3. Hình dựng từ số thật (code, không AI)

Nguồn dữ liệu: Google Search Console qua MCP. Chỉ dữ liệu của khách **đã đồng ý**:

| Dự án | Mức đồng ý | Dữ liệu | Hình cần dựng |
|---|---|---|---|
| Studio chụp ảnh ở TP.HCM (ẩn tên) | anonymous | tệp số theo tuần trong `docs/private/data/` | g-01: cột lượt nhấp 5 tuần, 1600×900, nền trắng, cột denim, cột cuối cam; dòng nguồn ở dưới |
| Le Viva Resort | full (số đã công bố) | `components/data/cases.js` | g-02: 3 ô số ×2,3 / +135% / −35% trên nền denim, 1600×900 |
| Everlog, May Mặc CTH | **chưa có phép** | Search Console có quyền đọc | Chưa dựng. Xin phép trước (mẫu tin ở `EVIDENCE_ASSET_BRIEF.md` mục 7) |

**Không dùng:** các tài khoản GA4 và Search Console của Letweb, Goha và khách của họ (goha.vn, Pacco, Heritage,
Pasteur Street, Trung Nguyên, MQ Flavor, GTR, Hoàng Tiến Phát, An Dương, JOMO, Volta…). Đây không phải dự án SOHO,
trừ khi SOHO xác nhận bằng văn bản.

Cách dựng: SVG hoặc HTML chụp bằng Chrome ở deviceScaleFactor 2, xuất WebP q80 bản 1600 và 800. Mọi hình có dòng nguồn:
"Nguồn: Google Search Console của website khách, <khoảng ngày>, kéo ngày <ngày>." Không làm tròn lên, không cắt khoảng ngày đẹp.

## 4. Ảnh chụp thật (Codex chụp, không AI)

| ID | Nội dung | Ghi chú |
|---|---|---|
| s-01 | Hồ sơ Google Partner của SOHO (google.com/partners/agency?id=6437141441) | Chụp nguyên trang, 1440 rộng |
| s-02 | Báo cáo Lighthouse trang chủ SOHO (mobile và desktop) | Dùng ở trang Thiết kế website |
| s-03 | Website SOHO trên máy tính và điện thoại | Đặt vào khung thiết bị dựng bằng code |
| s-04 | Mẫu quảng cáo đã chạy của Le Viva, Kronos, Helen Bridal | Đội Ads xuất từ Ads Manager; che ID tài khoản bằng khối #0F2340 đặc |
| s-05 | Điểm sao và số đánh giá Google Business của SOHO | Nếu SOHO có hồ sơ; ghi ngày chụp |

## 5. Hình minh họa bằng AI (loại C)

| ID | Dùng ở | Prompt (sau khối phong cách mục 1) | Kích thước |
|---|---|---|---|
| c-01 | Nền hero trang chủ (thay banner A nếu muốn) | "Bright minimal desk scene from above on very light blue surface: closed notebook, pencil, phone face down, a small orange sticky note with no writing. Large empty area on the left." | 1920×1080 |
| c-02 | Ảnh đầu bài blog SEO | "Abstract search concept: a magnifying glass made of thick denim ring shapes over stacked paper sheets, flat illustration." | 1600×1000 |
| c-03 | Ảnh đầu bài blog Quảng cáo | "Abstract funnel made of four stacked rounded bars in denim shades narrowing down to one orange dot, flat illustration." | 1600×1000 |
| c-04 | Ảnh đầu bài blog Chiến lược | "Two paths made of thick rings merging into one road, denim and light blue, one orange dot at the end, flat illustration." | 1600×1000 |
| c-05 | Biểu tượng 6 dịch vụ (bổ sung bộ 3D hiện có) | "Single 3D icon, matte ceramic white with denim blue accents and one small orange detail, centered on transparent background: [magnifier / target / megaphone / browser window / color swatch / phone]." | 512×512 PNG nền trong |

Không gen: ảnh người (trừ mục 2), văn phòng, khách hàng, dashboard, giao diện website/app, logo, ảnh "trước/sau".

## 6. Quy cách tệp

- Thư mục: `public/media/<loại>/<id>.webp` và `<id>-800.webp`. Loại: `team`, `proof`, `chart`, `illustration`, `icon`.
- Bản gốc chưa duyệt, ảnh người chưa có đồng ý: `docs/private/raw/` (gitignored).
- Ghi mỗi ảnh vào `components/data/proofAssets.js`: `id`, `type` (A/B/C), `src`, `width`, `height`, `alt`, `caption`, `source`
  (bắt buộc với A), `consentRef` (bắt buộc với ảnh người và dữ liệu khách).

## 7. Duyệt trước khi lên web

Người phụ trách Marketing duyệt từng ảnh theo 4 câu:
1. Ảnh này là A, B hay C, và có đúng chỗ không?
2. Nếu có số: có nguồn, khoảng ngày, và khách đã đồng ý chưa?
3. Nếu có người: người đó đã đồng ý chưa, mặt và dáng có bị AI làm khác đi không?
4. Ảnh C có gắn nhãn "Ảnh minh họa" khi có cảnh vật không?
