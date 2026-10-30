# Brief tài sản bằng chứng cho 12 trang dịch vụ

Ngày: 23/10/2026. Người đọc: Codex (dựng code, chụp màn hình, kéo dữ liệu), đội SOHO (gom tài liệu, xin phép khách),
AI tạo ảnh (chỉ phần loại C ở mục 8).

Mục tiêu: mỗi trang dịch vụ phải có ít nhất một thứ người đọc **nhìn thấy được và kiểm tra được** — ảnh chụp màn hình thật,
ảnh thật, dữ liệu có nguồn và khoảng ngày. Không thêm chữ mô tả nữa; thêm bằng chứng.

Đọc kèm: `docs/services/SERVICE_EXPERIENCE_V6.md` (cấu trúc trang hiện tại), `docs/services/SERVICE_DESIGN_SYSTEM.md`
(token, kiểu chữ), `docs/private/CLIENT_EVIDENCE_DATA.md` (số liệu khách, **không commit**, chỉ có trên máy SOHO).

---

## 1. Vì sao trang chưa thật

Kiểm tra mã nguồn ngày 23/10/2026:

| Chỗ | Hiện trạng |
|---|---|
| `components/data/cases.js` | 4 dự án công bố (Le Viva, King Decor, Kronos, Helen Bridal), cả 4 là fanpage và quảng cáo Facebook. Không có dự án SEO, website, nhận diện, app, đo lường nào có kết quả công bố. |
| `components/data/serviceExperience.js` | 8 trên 11 trang có `proof: null`. Trang SEO và Content dùng King Decor với `resultApplies: false` (kết quả thuộc kênh khác). |
| `components/data/clients.js` | 4 khách có logo trên dải logo nhưng `image`, `result`, `context`, `work` đều `null`. |
| Trang Nhận diện | Phòng trưng bày dùng chính bộ nhận diện SOHO, vì chưa có dự án khách được phép công bố. |
| `components/data/proof.js` | 4 nhận xét chỉ có tên hoặc ngành, không ảnh, không tên doanh nghiệp, không link. |
| Toàn site | Không có ảnh người SOHO, buổi làm việc, văn phòng, tài liệu bàn giao thật. Hình duy nhất là sơ đồ SVG và 2 ảnh chụp trang chủ SOHO (`public/showcase/`). |

Kết luận: phần giải thích đã đủ. Thứ thiếu là **ảnh chụp từ công việc thật** và **người thật**.

## 2. Đối thủ đưa bằng chứng lên trang thế nào

Khảo sát ngày 23/10/2026: trang dịch vụ và một case của 11 agency. Việt Nam: GTV SEO, SEONGON, Mona Media, Adsplus, Bratus.
Nước ngoài: WebFX, Ramotion, Clay, Instrument, Refokus, Directive, Thrive.

**Bằng chứng mạnh nhất mỗi loại dịch vụ:**

| Dịch vụ | Đối thủ làm tốt | Dạng bằng chứng |
|---|---|---|
| SEO | GTV (case TOTO) | Ảnh Semrush còn nguyên giao diện, trục thời gian 01/2022–07/2023, **khung đánh dấu mốc bắt đầu dự án**; bảng chỉ tiêu → kết quả → % đạt |
| AI search | GTV | Lưới 2×2 ảnh AI Overview / AI Mode, khoanh chỗ khách được nhắc, **ghi tên khách và truy vấn** ở chú thích |
| AI search | WebFX (URAC) | Biểu đồ số lần xuất hiện theo tháng, **chỉ làm mờ tên miền đối thủ**, tên khách giữ nguyên |
| Local | SEONGON (Maps) | Ảnh local pack trên di động trong khung điện thoại: sao, số đánh giá, địa chỉ của khách thật |
| Ads | Adsplus, Thrive | Mẫu quảng cáo thật của khách; số trước → sau có đơn vị (CPL 182k → 60k); **kỳ so sánh ghi rõ** ("02/2025 so với 02/2024"); chỉ số tách theo kênh |
| Website | Ramotion, Clay, Refokus | Site đã ra mắt trong khung thiết bị, nhiều kích thước màn hình, link xem trực tiếp, wireframe, bảng UI kit |
| Nhận diện | Bratus (Stella), Clay | Bảng màu Pantone/CMYK/RGB/HEX, phông, lưới dựng logo, ảnh ứng dụng tại chỗ (biển hiệu, bao bì). Không cần số |
| Content/PR | WebFX, Mona (Acecook) | Ảnh bài báo đã đăng; ảnh hậu trường, moodboard, timeline, lưới thành phẩm |
| Đo lường | WebFX | Ảnh dashboard thật trong khung laptop |
| Người | GTV, SEONGON, WebFX, Mona | Ảnh chân dung thật + số năm kinh nghiệm; ảnh làm việc tại văn phòng khách; video founder ngay dưới đầu trang (Mona) |

**Lỗi đối thủ mắc, SOHO tránh:**

- Số lệch giữa trang dịch vụ và trang case (WebFX: 118% ở một trang, 188% ở trang kia). → Mọi số đọc từ một chỗ (`cases.js`), không gõ lại.
- Ảnh ghép GA4/Ahrefs dán nhãn "+2.000%" mà không nói website nào (Mona). → Mọi ảnh công cụ có dòng nguồn.
- Ảnh AI Overview không chú thích (SEONGON). → Ghi tên khách, câu hỏi, ngày.
- Case có số nhưng không có ảnh công cụ nào (SEONGON Sumitech, Adsplus, Directive).
- Ảnh stock làm ảnh case, lưới số đặt trên ảnh stock (Thrive, Directive).
- Lời trích của nhân viên agency đặt chỗ lời khách (Directive).
- Số của doanh nghiệp khách trình bày như kết quả agency tạo ra (Ramotion: "Exit $150M").
- Đầu trang dùng giao diện giả có số (SEONGON "+92%"). → Đúng luật L2 bên dưới.

**SOHO không chép:** bảng "KPI cam kết" của GTV. SOHO đã bỏ cam kết kết quả; chỉ dùng "mục tiêu đã thống nhất → kết quả"
khi hợp đồng thật có mục tiêu đó.

Ảnh tham chiếu (máy tạo brief, không nằm trong repo): thư mục scratchpad `proofrefs/`, xem trước `gtv_case_toto_zoom.jpg`,
`gtv_seo_zoom1.jpg`, `seongon_maps_z.jpg`, `bratus_case_s0.jpg`, `webfx_case_z.jpg`.

---

## 3. Luật bằng chứng (bắt buộc)

**L1. Ba loại tài sản, gắn nhãn khác nhau trên trang.**

| Loại | Là gì | Nguồn | Nhãn hiển thị |
|---|---|---|---|
| **A — Bằng chứng** | Ảnh chụp màn hình công cụ (GSC, Ads Manager, GA4, Lighthouse), ảnh website/app/ấn phẩm khách, ảnh chụp thật (người, buổi làm việc), dữ liệu xuất từ công cụ | Chỉ từ tài khoản và tệp thật | Dòng nguồn: công cụ · tài khoản · khoảng ngày · ngày chụp |
| **B — Tài liệu làm việc** | Sơ đồ, bảng, mẫu bàn giao SOHO dựng lại từ dự án thật (cấu trúc site trước/sau, kế hoạch đo, ma trận ưu tiên) | Dựng bằng code/SVG từ dữ liệu thật | "Sơ đồ SOHO dựng lại từ dự án X" hoặc "Mẫu, đã bỏ thông tin khách" |
| **C — Minh họa** | Nền, kết cấu, khung thiết bị trống, ảnh OG | AI tạo ảnh hoặc vẽ tay | Không cần nhãn khi chỉ là nền; có nhãn "Ảnh minh họa" khi có cảnh vật |

**L2. Không dùng AI cho:** dashboard, số liệu, giao diện website/app của khách, logo, ảnh "trước/sau", ảnh người được gọi là khách
hàng hoặc nhân viên, ảnh văn phòng, ảnh ấn phẩm "đã in". Một ảnh AI bị phát hiện làm hỏng toàn bộ phần bằng chứng còn lại.

**L3. Kết quả chỉ đặt ở trang đúng kênh.** Kết quả fanpage không đặt ở trang SEO. Giữ cơ chế `resultApplies` hiện có.

**L4. Đồng ý của khách, 3 mức.** Ghi vào trường `consent` của mỗi dự án:

| Mức | Được đăng | Ví dụ |
|---|---|---|
| `full` | Tên, logo, ảnh, số liệu | "Tên khách · 73 lượt nhấp…" |
| `anonymous` | Ngành, quy mô, số liệu; không tên, không logo, che URL | "Studio ảnh cưới ở TP.HCM" |
| `work-only` | Việc đã làm, ảnh công khai sẵn có; không số liệu | "SOHO viết lại trang trụ cột…" |
| `none` (mặc định) | Không gì cả. Tài sản nằm ở `docs/private/` | — |

Bằng chứng đồng ý (email, tin nhắn chụp lại) lưu ở Drive dự án, ghi đường dẫn vào `consentRef`.

**L5. Che thông tin.** Che bằng khối màu Midnight `#141218` đặc 100%, **không làm mờ** (blur và pixelate có thể khôi phục).
Luôn che: email, số điện thoại, tên khách hàng cuối, ảnh đại diện người dùng, ID tài khoản quảng cáo, mã đo lường (G-…, AW-…),
tên chiến dịch có tên người. Che thêm khi `consent` không phải `full`: tên miền, logo, chi tiêu, doanh thu.

**L6. Con số luôn đi với khoảng thời gian và giới hạn.** Mẫu: "73 lượt nhấp từ Google, 02/08–22/10/2026. Tổng site chưa đổi rõ;
kế hoạch tính theo 6 tháng." Không làm tròn lên, không chọn khoảng ngày đẹp nhất. So sánh trước/sau dùng hai khoảng dài bằng nhau.

**L7. Ảnh thật hơn ảnh đẹp.** Ảnh chụp màn hình không chỉnh màu, không thêm bóng đổ giả 3D. Khung trình bày (viền, bo góc)
làm bằng CSS, không vẽ vào ảnh.

---

## 4. Chuẩn kỹ thuật (Codex)

### 4.1 Tệp

- Đường dẫn: `public/proof/<project-slug>/<asset-id>.webp` và bản nhỏ `<asset-id>-800.webp`. Tài sản của chính SOHO: `public/proof/soho/`.
- Ảnh gốc chưa che, ảnh chưa có đồng ý: `docs/private/raw/<project-slug>/` (gitignored). Chỉ chép sang `public/proof/` khi `consent` cho phép.
- Định dạng WebP, chất lượng 80, sRGB. Bản lớn rộng 1600px (≤ 220 KB), bản nhỏ rộng 800px (≤ 90 KB). Site là static export
  (`images.unoptimized`), nên dùng `<img srcset>` với 2 bản trên, luôn có `width`, `height`, `loading="lazy"` (trừ ảnh đầu trang).
- Chụp màn hình ở `deviceScaleFactor: 2`, rồi thu nhỏ. Desktop 1440×900, mobile 390×844 (giống `public/showcase/`).
- Tên `asset-id`: `<mã trang>-<số>-<mô tả ngắn>`, ví dụ `seo-01-pillar-desktop`.

### 4.2 Tỉ lệ khung theo vị trí

| Vị trí | Tỉ lệ | Ghi chú |
|---|---|---|
| Ảnh bìa `CaseEvidence` (`.caseMedia`) | 21:9 desktop, 4:3 mobile | Đã có trong `Modules.module.css`; cần `object-position` cho từng ảnh |
| Ảnh chụp công cụ (GSC, Ads, GA4) | 16:10 | Cắt đúng vùng có số, giữ thanh khoảng ngày trong khung |
| Kết quả tìm kiếm Google | 16:9 | Cắt tới kết quả cần chỉ, giữ ô tìm kiếm |
| Màn hình mobile | 390×844 | Khung điện thoại bằng CSS |
| Mẫu quảng cáo | 1:1, 4:5, 9:16 | Đúng tỉ lệ đã chạy |
| Ảnh người, buổi làm việc | 3:2 ngang, 4:5 dọc | Ảnh thật, ánh sáng tự nhiên |

### 4.3 Dữ liệu: `components/data/proofAssets.js` (mới)

```js
// Tài sản bằng chứng. type: 'A' bằng chứng | 'B' tài liệu dựng lại | 'C' minh họa.
// Chỉ hiện khi project.consent cho phép (xem cases.js). source bắt buộc với loại A.
export const proofAssets = [
  {
    id: 'seo-01-pillar-desktop',
    project: 'studio-1-nha',          // slug trong cases.js, 'soho' cho tài sản của SOHO
    type: 'A',
    src: '/proof/studio-1-nha/seo-01-pillar-desktop.webp',
    width: 1600, height: 1000,
    alt: 'Trang Studio chụp ảnh TP.HCM trên website khách, phần đầu trang',
    caption: 'Trang trụ cột SOHO viết tháng 9/2026.',
    source: 'Chụp từ website khách ngày 23/10/2026',
    masked: false
  }
];
export const assetsFor = project => proofAssets.filter(a => a.project === project);
```

Thêm vào mỗi mục `cases.js`: `consent: 'full' | 'anonymous' | 'work-only' | 'none'`, `consentRef`, `channel` (slug dịch vụ mà
kết quả thuộc về), `limits` (mảng câu giới hạn). `cases` hiển thị ở trang chỉ khi `consent !== 'none'`.

### 4.4 Thành phần mới (đặt ở `components/services/proof/`)

| Thành phần | Việc | Ghi chú thiết kế |
|---|---|---|
| `ProofFigure` | `<figure>` một ảnh + chú thích + dòng nguồn (chữ `small`, màu `--ink-3`); tùy chọn `highlight: {x, y, w, h}` (tính theo %) vẽ khung đánh dấu bằng SVG chồng lên ảnh | Viền 1px `--line`, bo `--r-md`, không bóng. Khung đánh dấu nét 2px Deep Orange `#C2410C`, không vẽ vào tệp ảnh |
| `ProofStrip` | Hàng 2–4 ảnh nhỏ cùng tỉ lệ, cuộn ngang trên mobile | `scroll-snap`, không vượt 390px (chạy `overflow.mjs`) |
| `SearchTrend` | Biểu đồ đường/cột SVG tĩnh dựng lúc build từ JSON GSC | Cùng ngôn ngữ nét với `ServiceDiagram`: nét 2px, chữ số Bricolage, cam cho đường chính, xám cho mốc trước; vạch dọc tại ngày bắt đầu; dòng nguồn dưới |
| `DeviceFrame` | Khung desktop/điện thoại bằng CSS bao ảnh chụp | Thay cho mockup AI |
| `PersonCard` | Ảnh thật + tên + vai trò + số năm + việc phụ trách ở dịch vụ này | Ảnh 4:5, không lọc màu |

Ràng buộc chung: không đổi `ServiceDiagram`, `Track`, `BeforeAfter` (so khớp 36/36 như V6), tối đa 2 khối tối mỗi trang,
không dùng `#FFF4E9`.

---

## 5. Kho tài sản theo trang

Cột **Ai làm**: `Codex` tự chụp/dựng được ngay · `SOHO` cần đội SOHO gửi tệp hoặc xin phép · `AI` loại C.
Cột **Đồng ý**: mức `consent` tối thiểu để đăng.

### 5.0 Trang tổng `/dich-vu` và dùng chung

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| hub-01 | Đầu trang, dưới chẩn đoán | Dải logo khách thật (đã có 4 trong `public/clients/`), thêm logo các khách đã đồng ý | A | SOHO | full |
| hub-02 | Khối "Ai làm" (mới, mọi trang) | Ảnh chân dung thật 4–6 người phụ trách: tên, vai trò, số năm, dịch vụ phụ trách | A | SOHO chụp | nhân viên đồng ý |
| hub-03 | Cùng khối | 2–3 ảnh buổi làm việc thật (họp khách, xem báo cáo, workshop) | A | SOHO chụp | người trong ảnh đồng ý |
| hub-04 | Cạnh huy hiệu Google Partner | Ảnh chụp trang hồ sơ đối tác `google.com/partners/agency?id=6437141441` | A | Codex | — |
| hub-05 | Nhận xét khách | Nâng 4 nhận xét hiện có: thêm ảnh, tên doanh nghiệp, link; tốt nhất là video 30–60 giây | A | SOHO | full |
| hub-06 | Ngay dưới đầu trang tổng | Video 60–90 giây người phụ trách nói cách SOHO chọn kênh (quay thật, có phụ đề) | A | SOHO quay | — |
| hub-07 | Cạnh huy hiệu Partner | Điểm và số đánh giá Google Business Profile của chính SOHO (bên thứ ba), ghi ngày | A | Codex | — |

Gợi ý chụp ảnh người: ánh sáng cửa sổ, nền văn phòng thật, áo thường ngày, không tạo dáng khoanh tay. Một buổi chụp 2 giờ đủ cho cả site.

### 5.1 SEO tổng thể — `seo-tong-the` (trang thí điểm `SeoService`)

**Cập nhật 23/10/2026 — đã làm:** khách đồng ý mức `anonymous`. Case `seo-studio-chup-anh-tphcm` trong `cases.js` đã gắn vào
trang SEO, trang Content, chẩn đoán "Ít người tìm thấy" ở `/dich-vu` và trang `/du-an/seo-studio-chup-anh-tphcm`. Bằng chứng là
6 bài SOHO viết tháng 9 (102 lượt nhấp, 4.771 hiển thị tới 22/10) qua `SearchTrend`, ảnh bìa là sơ đồ cụm nội dung (loại B).
Ở mức này **không chụp website khách, không chụp kết quả Google có tên miền khách**: seo-01, seo-02, seo-06, aio-04, cnt-01 (ảnh)
bỏ. Còn mở: seo-04 (che tên), seo-05, seo-07. Không dùng `/vu-garden/`, `/paris-garden/` làm bằng chứng: các trang này có từ trước.

Bảng gốc bên dưới giữ để tham khảo khi khách nâng lên mức `full`.

Hiện tại (trước cập nhật): `CaseEvidence` King Decor, kết quả không áp dụng. Dự án thay thế: **khách studio** (SEO từ 02/08/2026).

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| seo-01 | `CaseEvidence` ảnh bìa | Trang `/studio-chup-anh-tp-hcm/` desktop + mobile ghép trong `DeviceFrame` | A | Codex | work-only |
| seo-02 | `CaseEvidence` cột kết quả | Ảnh cắt kết quả Google cho "studio chụp ảnh" thấy trang trụ cột | A | Codex | work-only |
| seo-03 | `CaseEvidence` dưới cột kết quả | `SearchTrend`: lượt nhấp theo tuần của 4 trang mới (`/vu-garden/`, `/studio-chup-anh-tp-hcm/`, `/long-island`, `/paris-garden/`), vạch ngày tạo từng trang | A | Codex (dữ liệu) | full |
| seo-04 | Khối "Những chỗ hay sửa" | Ảnh chụp đoạn audit kỹ thuật thật: trang danh mục mỏng → noindex (từ "Hồ sơ dự án studio-case") | A | SOHO xuất, Codex che | anonymous |
| seo-05 | Khối bản đồ ý định | Sơ đồ cấu trúc site trước/sau của khách studio (trụ cột → trang phim trường → bài) | B | Codex dựng SVG | work-only |
| seo-06 | Phương pháp | Ảnh chụp Rich Results Test của một trang có schema SOHO thêm | A | Codex | work-only |
| seo-07 | Dự án thứ hai | Everlog: website + vị trí trung bình theo quý | A | SOHO xác nhận | full |

Bằng chứng nằm ở **từng trang SOHO tạo**, không ở tổng toàn site (tổng site chưa đổi rõ sau 12 tuần). Không dùng biểu đồ
toàn site. Số liệu, câu chữ được phép và giới hạn: `docs/private/CLIENT_EVIDENCE_DATA.md` (không đưa số khách vào repo public
trước khi có phép).

### 5.2 SEO cho AI Overview — `seo-ai-overview`

Chưa có dự án. Dùng tài sản của chính SOHO, không cần xin phép.

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| aio-01 | `EntityEvidence` | Rich Results Test / Schema validator của `sohoagency.vn` (Organization, Service, Article) | A | Codex | — |
| aio-02 | `EntityEvidence` | Ảnh chụp câu trả lời AI Overview, ChatGPT, Perplexity khi hỏi về SOHO **chỉ nếu SOHO thật sự được nhắc**; ghi câu hỏi và ngày | A | Codex | — |
| aio-03 | Phạm vi | Bảng thực thể dựng từ dữ liệu `company.js` (tên, địa chỉ, mạng xã hội, sameAs) | B | Codex | — |
| aio-04 | Dự án | khách studio: schema SOHO thêm vào trang phim trường (ảnh Rich Results Test) | A | Codex | work-only |
| aio-05 | Dự án | Lưới 2×2 ảnh AI Overview / AI Mode nhắc tới khách SOHO (thử "studio chụp ảnh concept tphcm", "phim trường vũ garden"…), khoanh bằng `highlight`, chú thích: tên khách · câu hỏi · ngày | A | Codex | work-only |

Nếu aio-02 không có kết quả, ghi trung thực "Chưa thấy SOHO trong câu trả lời AI tại ngày …" và không đăng ảnh.

### 5.3 Local SEO Google Maps — `local-seo-google-maps`

`clients.js` ghi khách studio là "Local SEO" nhưng hồ sơ Drive chỉ nói SEO website. **SOHO xác nhận trước.**

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| map-01 | `LocalJourney` bước "tìm quanh đây" | Ảnh cắt Google Maps cho truy vấn địa phương có hồ sơ khách | A | Codex | work-only |
| map-02 | `LocalJourney` bước "gọi điện" | Ảnh Hiệu suất Google Business Profile (cuộc gọi, chỉ đường, 6 tháng) | A | SOHO xuất | full |
| map-03 | Dự án | Ảnh thật mặt tiền/không gian của khách (từ khách) | A | SOHO | full |
| map-04 | Phạm vi | Trước/sau hồ sơ GBP: danh mục, ảnh, giờ, câu hỏi | A | SOHO xuất | work-only |

### 5.4 Google Ads & Shopping — `google-ads-shopping` (trang thí điểm `GoogleAdsService`)

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| gad-01 | Cạnh `PartnerBadge` | Ảnh trang hồ sơ đối tác Google (= hub-04) | A | Codex | — |
| gad-02 | Khối "chỗ rò tiền" | Báo cáo cụm từ tìm kiếm thật, khoanh các cụm bị loại trừ | A | SOHO xuất, Codex che | anonymous |
| gad-03 | Khối cây tài khoản | Ảnh cấu trúc chiến dịch/nhóm quảng cáo thật (đổi tên thành mô tả chung) | A | SOHO xuất | anonymous |
| gad-04 | `MeasurementLadder` bậc 3 | Ảnh Tag Assistant hoặc bảng chuyển đổi đang ghi nhận | A | SOHO xuất | anonymous |
| gad-05 | Dự án | Một tài khoản có kết quả trước/sau 2 khoảng bằng nhau (CPA, chuyển đổi) | A | SOHO | anonymous |

Huy hiệu Partner xác nhận chi tiêu từ 10.000 USD/90 ngày, nên SOHO chắc chắn có tài khoản đang chạy. Chọn 1 tài khoản, xin mức `anonymous`.

### 5.5 Quảng cáo Meta & TikTok — `meta-tiktok-ads`

Đã có số công bố (Le Viva). Thiếu ảnh chứng minh số và mẫu quảng cáo thật.

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| mta-01 | Dưới `CreativeExplorer` | 6–9 mẫu quảng cáo đã chạy của Le Viva, Kronos, Helen Bridal (đúng tỉ lệ 1:1, 4:5, 9:16) | A | SOHO xuất | full (đã công bố dự án) |
| mta-02 | `CaseEvidence` Le Viva | Ảnh Ads Manager chứng minh "−35% CPM" và "×2,3 tin nhắn", hai khoảng ngày | A | SOHO xuất, Codex che | full |
| mta-03 | `CaseEvidence` | Ảnh Meta Business Suite: tương tác tự nhiên fanpage 2 tháng (chứng minh "+135%") | A | SOHO xuất | full |
| mta-04 | Phạm vi | Luồng tin chào và trả lời tự động trong Messenger (che tên khách) | A | SOHO xuất | full |
| mta-05 | Dự án phụ | Ảnh fanpage trước/sau (bài cũ và bài mới, chụp từ fanpage công khai) | A | Codex | full |

### 5.6 CRO & landing page — `cro-landing-page`

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| cro-01 | `CroBeforeAfter` | Trước/sau thật của chính `sohoagency.vn`: bản cũ từ Wayback Machine, bản mới từ live | A | Codex | — |
| cro-02 | Cùng khối | Ảnh bản đồ nhiệt/ghi phiên (Microsoft Clarity) của một trang đích thật | A | SOHO | anonymous |
| cro-03 | Dự án | Fitfood (`clients.js` ghi CRO): trang đích trước/sau + tỉ lệ chuyển đổi 2 khoảng | A | SOHO | full |

Ghi chú cro-01: sơ đồ khung (wireframe) hiện tại giữ lại làm phần giải thích; ảnh thật đặt ngay dưới với chú thích
"Trang chủ sohoagency.vn: bản lưu Wayback ngày … và bản hiện tại ngày 23/10/2026".

### 5.7 Thiết kế website — `thiet-ke-website`

Đã có `WebsiteShowcase` (trang chủ SOHO + Lighthouse). Thêm:

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| web-01 | `WebsiteShowcase` | Bản cũ sohoagency.vn từ Wayback cạnh bản mới (= cro-01, dùng chung tệp) | A | Codex | — |
| web-02 | Cùng khối | Ảnh báo cáo Lighthouse thật (desktop 100, mobile 98) thay cho chỉ ghi số | A | Codex | — |
| web-03 | Dự án | Website khách do SOHO làm (Everlog nếu xác nhận): desktop + mobile + 3 trang con | A | Codex chụp, SOHO xác nhận | full |
| web-04 | Phạm vi | 2–3 khung Figma thật của quá trình (wireframe → bản duyệt) | A | SOHO xuất | work-only |

### 5.8 Nhận diện thương hiệu — `nhan-dien-thuong-hieu` (trang thí điểm `BrandService`)

Hai nhận xét trong `proof.js` nói về bộ nhận diện (chủ nhà hàng Nhật; ngành chăm sóc xe) → hai dự án này có thật. Xin tệp và phép.

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| brd-01 | Khối "lệch ở đâu" | Logo và ấn phẩm **trước** khi làm (ảnh khách gửi) | A | SOHO | full |
| brd-02 | Phòng trưng bày | 5 trang guideline thật của 1 dự án khách (logo, lưới dựng logo, màu kèm Pantone/CMYK/RGB/HEX, chữ, ứng dụng, quy tắc), đặt cạnh ví dụ SOHO hiện có | A | SOHO xuất PDF → Codex cắt | full |
| brd-03 | Phòng trưng bày, thẻ "Ứng dụng" | Ảnh chụp thật ấn phẩm đã in/biển hiệu/đồng phục | A | SOHO/khách chụp | full |
| brd-04 | Cùng thẻ | Mockup đặt thiết kế thật lên mẫu PSD (không AI), gắn nhãn "Phối cảnh mockup" | B | SOHO | full |
| brd-05 | Trích dẫn | Nhận xét gắn với dự án: ảnh người nói, tên doanh nghiệp | A | SOHO | full |

### 5.9 Thiết kế mobile app — `thiet-ke-mobile-app`

Hiện chỉ có `AppSuitability`. Nếu SOHO chưa có app công bố, **không thêm bằng chứng giả**; ghi rõ trên trang.

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| app-01 | Sau "Có hợp với bạn" | Trang App Store/Google Play của app SOHO đã làm (nếu có) | A | SOHO xác nhận, Codex chụp | full |
| app-02 | Phạm vi | Luồng màn hình từ một đề xuất thật, đã bỏ tên khách | B | SOHO | anonymous |

### 5.10 Content & PR — `content-marketing-pr`

`EditorialPortfolio` dùng bài trên blog SOHO. Thêm bài làm cho khách:

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| cnt-01 | `EditorialPortfolio` | 6 bài SOHO viết cho khách studio tháng 9/2026: ảnh đầu bài + lượt nhấp từng bài | A | Codex | work-only (ảnh) / full (số) |
| cnt-02 | Cùng khối | Bài PR đã đăng trên báo cho khách: ảnh trang báo + link | A | SOHO gửi danh sách | full |
| cnt-03 | Phạm vi | Lịch nội dung theo tháng thật (nhận xét "Chị Mai" nhắc tới), che tên khách | A | SOHO xuất | anonymous |

### 5.11 GA4 & Looker dashboard — `ga4-looker-dashboard`

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| ga4-01 | `MeasurementContract` | Bảng sự kiện GA4 thật của `sohoagency.vn` (DebugView hoặc Admin › Events) | A | Codex (cần đăng nhập lại GA4) | — |
| ga4-02 | Phạm vi | Dashboard Looker Studio SOHO dựng trên **tài khoản demo GA4 của Google** (Google Merchandise Store), ghi rõ nguồn demo | A | SOHO dựng, Codex chụp | — |
| ga4-03 | Dự án | Kế hoạch đo (tracking plan) thật, đã bỏ tên khách | A | SOHO xuất | anonymous |

ga4-02 là cách trung thực để có ảnh dashboard đầy số mà không lộ dữ liệu khách.

### 5.12 Tư vấn chiến lược sprint — `tu-van-chien-luoc-sprint`

| ID | Khối | Tài sản | Loại | Ai làm | Đồng ý |
|---|---|---|---|---|---|
| spr-01 | Đầu trang dưới hero | Ảnh thật một buổi workshop (bảng, giấy note, người) | A | SOHO chụp | người trong ảnh |
| spr-02 | `PriorityMatrix` | Ảnh bảng Miro/FigJam thật của một sprint, che tên | A | SOHO xuất | anonymous |
| spr-03 | Phạm vi | 3 trang đầu của một tài liệu bàn giao sprint thật, che tên | A | SOHO xuất | anonymous |

---

## 6. Việc của Codex, theo thứ tự

**Bước 1 — Hạ tầng (không cần tài liệu SOHO).** Tạo `proofAssets.js`, thêm trường `consent`/`consentRef`/`channel`/`limits`
vào `cases.js` (4 dự án hiện có: `consent: 'full'`), dựng 5 thành phần ở mục 4.4. Thêm dự án `studio-1-nha` vào `cases.js`
với `consent: 'none'` để không hiện cho tới khi có phép.

**Bước 2 — Tài sản SOHO tự có, làm ngay:** hub-04, aio-01, aio-03, cro-01/web-01, web-02. Không cần xin phép.

**Bước 3 — Chụp trang khách công khai** (seo-01, seo-02, seo-06, map-01, mta-05, web-03, cnt-01). Lưu vào `docs/private/raw/`,
**không** chép sang `public/` trước khi có `consent`.

Quy cách chụp: Chrome qua CDP hoặc Playwright; ẩn cookie banner, nút chat nổi, popup bằng CSS chèn vào trước khi chụp;
chờ `networkidle` và font tải xong; chụp vùng nhìn thấy, không chụp toàn trang dài. Kết quả Google: cửa sổ ẩn danh,
`hl=vi&gl=vn`, ghi ngày giờ chụp vào tên tệp (thứ hạng thay đổi theo ngày và vị trí).
Wayback: `https://web.archive.org/web/2025*/sohoagency.vn` → chọn bản lưu gần nhất trước ngày ra mắt site mới, dùng URL
dạng `id_` để bỏ thanh công cụ Wayback.

**Bước 4 — Kéo dữ liệu Search Console** (seo-03, cnt-01):

```
API:        searchconsole.searchanalytics.query
siteUrl:    https://website khách/          (dạng sc-domain trả 403)
type:       web, dataState: final
Khoảng:     2026-05-12 → 2026-10-22 (trước bắt đầu 82 ngày + sau 82 ngày; bắt đầu 2026-08-02)
Truy vấn 1: dimensions [date]                          → đã có sẵn: docs/private/studio-case-gsc-daily.csv
Truy vấn 2: dimensions [date, page], lọc page chứa từng URL mới → cộng theo tuần (thứ Hai đầu tuần)
Truy vấn 3: dimensions [page, query], lọc page = /studio-chup-anh-tp-hcm/ → truy vấn không thương hiệu
            (loại truy vấn chứa "1 nhà", "1nha", "một nhà", "studio1")
Đầu ra:     docs/private/data/studio-case-pages-weekly.json
            { "source": "...", "range": [...], "start": "2026-08-02",
              "series": [{ "page": "/vu-garden/", "created": "2026-08-..", "weeks": [{ "week": "2026-08-03", "clicks": 0 }] }] }
```

Dùng chiều `page` cho con số chính (tổng theo `page×query` thấp hơn vì GSC ẩn truy vấn ít người tìm). Ngày tạo từng trang
lấy từ "Báo cáo định kỳ studio-case" trên Drive. Không gán cho SOHO phần tăng cùng kỳ năm trước (đã có trước 02/08).

**Bước 5 — Gắn vào trang** theo mục 5. Với trang dùng `ServiceExperience`, đổi `proof` trong `serviceExperience.js`;
với 3 trang thí điểm, sửa trực tiếp `SeoService`, `GoogleAdsService`, `BrandService`.

**Bước 6 — Kiểm tra** (công cụ trong scratchpad V6: `qa3.mjs`, `flows.mjs`, `overflow.mjs`):
- `npm run build` qua; 36/36 sơ đồ trùng live; 0 link hỏng.
- Không tràn ngang ở 320–1440px; axe 0 lỗi; mọi ảnh có `alt` mô tả nội dung, ảnh trang trí `alt=""`.
- Lighthouse mobile trang SEO ≥ 95; ảnh đầu tiên trong màn hình đầu không lazy.
- `grep -r "docs/private" public components` rỗng; không tệp nào trong `public/proof/` thuộc dự án `consent: 'none'`.

---

## 7. SOHO cần cung cấp

| # | Việc | Cho tài sản | Người | Hạn |
|---|---|---|---|---|
| 1 | Xin phép khách studio đăng tên + số liệu SEO (mẫu tin nhắn bên dưới) | seo-01…07, cnt-01 | Account | |
| 2 | Xác nhận khách studio có làm Local SEO hay không (clients.js ghi vậy, Drive không) | map-01…04 | SEO lead | |
| 3 | Xác nhận SOHO thiết kế website Everlog; xin phép đăng | seo-07, web-03 | Account | |
| 4 | Chọn 1 tài khoản Google Ads, xuất báo cáo cụm từ tìm kiếm + cấu trúc + 2 khoảng kết quả | gad-02…05 | Ads lead | |
| 5 | Xuất mẫu quảng cáo và ảnh Ads Manager của Le Viva, Kronos, Helen Bridal | mta-01…04 | Ads lead | |
| 6 | Tệp bộ nhận diện 2 dự án (nhà hàng Nhật, chăm sóc xe) + ảnh ấn phẩm thật + phép đăng | brd-01…05 | Design lead | |
| 7 | Có app nào đã lên store không | app-01 | PM | |
| 8 | Danh sách bài PR đã đăng cho khách | cnt-02 | Content lead | |
| 9 | Dựng dashboard Looker trên tài khoản demo GA4; đăng nhập lại GA4 cho MCP (`invalid_grant`) | ga4-01, ga4-02 | Data | |
| 10 | Buổi chụp ảnh người + workshop (2 giờ) | hub-02, hub-03, spr-01 | Marketing | |
| 11 | Xác nhận các site trong GSC thứ hai (mqflavor, gtrworldwide, pasteurstreet, trungnguyentw, heritage) có phải dự án SOHO | dự án mới | SEO lead | |
| 12 | Endpoint nhận form (`NEXT_PUBLIC_FORM_ENDPOINT`) — chưa có, form đang mở email | toàn site | Dev | |

Mẫu tin nhắn xin phép:

> Chào anh/chị, SOHO đang làm lại trang dịch vụ và muốn dùng dự án SEO của khách studio làm ví dụ: ảnh chụp trang
> website khách, tên thương hiệu và lượt nhấp từ Google của các trang SOHO viết (02/08–22/10/2026). SOHO sẽ gửi bản xem
> trước để anh/chị duyệt, và gỡ bất cứ lúc nào anh/chị yêu cầu. Anh/chị chọn giúp: (1) đăng đủ tên và số, (2) ẩn tên, giữ số,
> (3) chỉ nói việc đã làm, không số.

**Bảo mật:** sheet Drive "List Dự Án + Thông Tin" đang chứa mật khẩu quản trị website khách dạng chữ thường và dữ liệu lương.
Không chép bất kỳ phần nào của sheet đó vào repo hay brief. Nên chuyển mật khẩu sang trình quản lý mật khẩu và đổi mật khẩu.

---

## 8. Ảnh minh họa (loại C) cho AI tạo ảnh

Chỉ dùng cho nền và khung. **Không** dùng cho bất cứ thứ gì ở mục 3 L2. Không để AI viết chữ trong ảnh (chữ tiếng Việt có dấu
hay sai); chữ đặt bằng code.

**Khối phong cách chung** (dán trước mỗi lệnh):

```
Editorial, calm, real-world photographic or flat-graphic style. Palette strictly: Midnight #141218, Soft Canvas #FAF9FD,
Brand Orange #F26522 as a small accent (under 10% of the image), Violet #6D28D9 used sparingly. No peach or #FFF4E9 tones.
No text, no letters, no numbers, no logos, no UI, no charts, no people's faces. Plenty of negative space on the left half
for headline overlay. Soft natural light, no neon, no glow, no 3D glossy blobs, no stock-photo handshake.
```

| ID | Dùng ở | Tỉ lệ / kích thước | Lệnh |
|---|---|---|---|
| ai-01 | Nền khối CTA tối cuối trang | 16:9, 2400×1350 | "Dark Midnight paper texture with a single thin orange line drawn like a hand-ruled margin, subtle grain, top-down." |
| ai-02 | Ảnh OG chung cho 12 trang dịch vụ (chữ thêm bằng code) | 1200×630 | "Top-down view of a clean desk on Soft Canvas background: closed notebook, pencil, a ruler, one small orange sticky note with no writing. Right third filled, left two thirds empty." |
| ai-03 | Nền khung thiết bị (khi không dùng `DeviceFrame` CSS) | 16:10, 2400×1500 | "Plain laptop and phone lying on a light grey linen surface, both screens pure flat #00FF00 green for compositing, straight-on angle, no reflections." — ảnh chụp thật ghép vào màn hình xanh; chú thích ghi "Ảnh chụp màn hình thật đặt trong khung minh họa". |
| ai-04 | Kết cấu nền khối Soft Canvas (lặp) | 1024×1024 vuông, ghép liền | "Seamless very subtle paper fibre texture, near-white #FAF9FD, low contrast, tileable." |
| ai-05 | Trang Mobile app khi chưa có app công bố | 4:5, 1200×1500 | "Hand sketches of empty phone screen outlines on squared paper, pencil only, no content inside the screens, shot from above." — gắn nhãn "Ảnh minh họa". |

Mặc định ưu tiên `DeviceFrame` CSS thay cho ai-03. Mỗi ảnh AI lưu ở `public/proof/illustration/<id>.webp` với `type: 'C'` trong `proofAssets.js`.

---

## 9. Tiêu chí xong

- Mỗi trang trong 12 trang có ít nhất 1 tài sản loại A hiển thị, hoặc ghi rõ "chưa có dự án công bố" cùng tài sản của chính SOHO.
- Mọi tài sản loại A có dòng nguồn đủ: công cụ, tài khoản/tên miền (hoặc "đã ẩn"), khoảng ngày, ngày chụp.
- Không ảnh nào trong `public/proof/` thuộc dự án chưa có phép. Không ảnh AI nào nằm ngoài vai trò nền/khung.
- Các kiểm tra ở bước 6 đều qua.
