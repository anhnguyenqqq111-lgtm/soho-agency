# Phân tích tham khảo thiết kế cho trang dịch vụ

Tài liệu này rút nguyên tắc từ 6 trang tham khảo để dùng cho đợt thiết kế lại trang dịch vụ SOHO. Chỉ lấy nguyên tắc. Không dùng logo, hình ảnh, câu chữ hay tài nguyên của các trang này.

## Cách làm

- Ngày chụp và đo: 23/10/2026.
- Công cụ: Chrome headless 155 qua DevTools protocol. Khung nhìn 1440×900 (desktop), 834×844 (tablet, chỉ đo số), 390×844 (mobile). Mỗi trang được cuộn hết một lượt để nạp ảnh lười trước khi đo.
- Đã chụp: ảnh toàn trang ở 1440 và 390 cho cả 6 trang (giới hạn 12.000px chiều cao). Ảnh chụp, số đo JSON và bảng tổng hợp nằm ngoài repo, trong `/private/tmp/claude-501/-Users-t-anh-Downloads-webfx-vn-nextjs/3e6b21ce-178c-4665-977b-7653ca922a52/scratchpad/refs/` (bảng tổng hợp: `reference-board.jpg`).
- Đã đo bằng `getComputedStyle`: phông, cỡ chữ, line-height, letter-spacing, độ đậm của H1, H2, H3, đoạn văn; max-width của khung; padding của từng section; khoảng trắng thật giữa các khối nội dung (gộp hộp chữ và ảnh theo trục dọc, lấy khoảng hở); tỷ lệ hình/chữ theo từng màn hình; phần tử sticky/fixed.
- Định nghĩa "tỷ lệ hình/chữ": với mỗi màn hình cuộn, % diện tích khung nhìn có ảnh, video, canvas, SVG lớn (≥ 12.000px²) so với % diện tích các hộp chữ. Số trong bài là trung bình mọi màn hình của trang.
- "Khoảng hở giữa section": khoảng trắng nhìn thấy từ đáy nội dung section trước tới đỉnh nội dung section sau, không phải giá trị padding.

Những gì không trơn tru:

- Clay ở 1440: lần chụp toàn trang đầu tiên bị treo hơn 10 phút (lớp chuyển trang fixed). Chụp lại bằng chế độ khung nhìn cao thì được. Số đo không bị ảnh hưởng.
- Instrument không có thẻ `<h1>`. Câu hero là thẻ `<p>`, thẻ `<h2>` dùng làm nhãn nhỏ. Stripe dùng `<h1>` cho cả nhãn menu và tiêu đề section. Vì vậy số cỡ chữ ghi theo **vai trò nhìn thấy** (tiêu đề trang, tiêu đề section…), không theo tên thẻ.
- Ramotion có một phần tử ẩn nằm ngoài trang làm sai vài khoảng hở. Các số đó đã bỏ.
- Ramotion (13.369px) và Stripe (18.813px) dài hơn giới hạn ảnh chụp, nên phần cuối không có trong ảnh. Số đo vẫn tính cả trang.
- Banner cookie còn hiện trong ảnh. Ở Refokus, chữ đổi từ xám sang trắng khi cuộn tới, nên một số đoạn trong ảnh chụp có màu xám.
- Không trang nào chặn Chrome headless, không cần dùng WebFetch.

---

## 1. Refokus — /branding

1. **Bố cục.** Lưới 12 cột tràn gần hết màn hình (lề 19–21px ở 1440). Bố cục lệch. Nhãn nhỏ và ảnh dọc nhỏ nằm ở cột 1–3, chữ chính bắt đầu từ cột 5. Tiêu đề lớn lùi vào một cột rồi kẻ một đường mảnh ngay bên dưới.
2. **Thứ bậc thông tin.** Hero là một câu tuyên bố, kế đó là đoạn nêu vấn đề, câu hỏi khung (01–04 dạng accordion), phần làm gì (4 hạng mục), lời khách, danh sách dự án, FAQ. Mỗi phần mở bằng một câu H2 dạng tuyên bố chứ không dùng nhãn kiểu "Our services".
3. **Nhịp khoảng cách.** Padding section 96/96px (desktop), 60px (tablet), 32px (mobile). Khoảng hở thật giữa section: 146–249px, trung vị 184px (desktop); 116–236px (tablet); 64–183px, phần lớn 64–80px (mobile). Khoảng giữa các mục FAQ: 48px.
4. **Hình/chữ.** Desktop: hình 37%, chữ 22%, trung bình 2,4 hình mỗi màn. Mobile: hình 37%, chữ 33%. Hero phủ kín bằng video. Mỗi section còn lại chỉ có một ảnh dọc nhỏ làm điểm nhấn.
5. **Bố cục ảnh.** Ảnh 3D trừu tượng, tỷ lệ dọc khoảng 2:3, rộng 3 cột, đặt lệch so với khối chữ. Ảnh không minh họa nội dung mà tạo không khí. Danh sách dự án: dòng đang mở hiện 3 ảnh chụp màn hình trên nền màu thương hiệu của khách.
6. **Thang chữ** (Featuredeck serif cho tiêu đề, General Sans cho thân).
   - H1: 88/88px (1440), 64/64 (834), 35,2/35,2 (390).
   - H2 tuyên bố: 72/72px → 41,7 → 24/28,8.
   - H3: 36,8/40,5px (câu hỏi accordion, giữ nguyên trên mobile); tiêu đề hạng mục 28/37,8 và 24/33,6 (500).
   - Thân: 18/27px → 17,6/26,4. Nhãn: 12/14,4px, 500, ls 0,36px, chữ hoa.
7. **Chuyển section.** Đổi khối tối (#0F1215) và trắng. Đường kẻ mảnh dưới mỗi H2. Hero là `position: sticky` (top −850px) để phần sau trượt đè lên. Footer cố định nằm dưới, lộ ra khi cuộn tới cuối.
8. **Responsive.** Về một cột. Ảnh xuống dưới chữ. H2 giảm mạnh (72 → 24, tỷ lệ 3:1) trong khi thân gần như giữ nguyên (18 → 17,6). Padding giảm 3 lần (96 → 32).

**Áp dụng cho SOHO**
- Mở mỗi lớp nội dung bằng một câu H2 tuyên bố có đường kẻ mảnh ngay dưới, không dùng tiêu đề kiểu nhãn.
- Câu hỏi khung đánh số 01–04 dạng hàng có đường kẻ, hợp với lớp "vì sao".
- Danh sách dự án dạng hàng (tên / mô tả / dịch vụ) thay cho lưới thẻ.

**Không sao chép**
- Phông serif hiển thị và ảnh 3D phát sáng. SOHO giữ Bricolage Grotesque và dùng ảnh hoặc sơ đồ thật.
- H2 mobile chỉ 24px là quá nhỏ cho tiếng Việt có dấu.

## 2. Instrument — /services/marketing

1. **Bố cục.** Lề 40px (1440). Hero câu tuyên bố căn giữa với một nút, kế đó là băng video chạy ngang. Phần chính là "diptych 5/7": cột trái 11 năng lực dạng accordion, cột phải các thẻ dự án so le hai cột. Tiếp theo là lời khách căn giữa, 4 bài đọc liên quan, CTA căn trái.
2. **Thứ bậc thông tin.** Trang ngắn (4.395px desktop): một lời hứa, danh sách năng lực, bằng chứng (dự án và lời khách), bài đọc, liên hệ. Năng lực và bằng chứng nằm cạnh nhau trên cùng một màn hình.
3. **Nhịp khoảng cách.** Section không có padding; khoảng cách do margin giữa các module. Khoảng hở 89–268px, trung vị 124px (desktop), trung vị 153px (mobile). Mobile thoáng hơn vì các khối xếp chồng.
4. **Hình/chữ.** Desktop: hình 36%, chữ 19%, trung bình 9,2 hình mỗi màn (băng video hero có 31 mục). Mobile: hình 49%, chữ 23%.
5. **Bố cục ảnh.** Thẻ dự án nhiều kích thước (vuông lớn, ngang nhỏ, vuông nhỏ) xếp so le. Bo góc khoảng 16px. Chú thích 2 dòng ngay dưới ảnh. Có video tự chạy với nút dừng.
6. **Thang chữ** (Instrument Serif cho hero, Instrument Sans cho phần còn lại).
   - Hero (thẻ p): 64/72px, ls −1,28px → 35/40 (390).
   - Câu CTA: 52/56px, ls −1,3px → 31/35. Lời khách: 36/40px → 31/35.
   - Tên thẻ dự án: 23/28px → 20/25.
   - Thân: 15/24px, ls 0,45px → 13/20. Nhãn: 12/16px, ls 1,32px, chữ hoa; 14/20, ls 1,12px.
7. **Chuyển section.** Đường kẻ mảnh trên nhãn chữ hoa ("MARKETING CAPABILITIES"). Header sticky 50px. Màu nền body đổi theo vị trí cuộn: hai lần đo ở 1440 cho ra trắng và tím đậm rgb(39,6,59).
8. **Responsive.** Diptych xếp chồng: danh sách năng lực trước, thẻ dự án sau, mỗi thẻ có thêm nút "View Case Study". Lề còn 15px. Thân chữ xuống 13px (quá nhỏ).

**Áp dụng cho SOHO**
- Hub `/dich-vu/` có thể dùng diptych 5/7: danh sách dịch vụ theo hành trình ở bên trái, bằng chứng hoặc minh họa ở bên phải.
- Trang dịch vụ đặt bằng chứng ngay cạnh danh sách việc làm, không để cuối trang.
- Phần cuối trang chỉ có một câu mời và một nút.

**Không sao chép**
- Băng video tự chạy ở hero, vì nặng và lấn sơ đồ live của SOHO.
- Thân chữ 13px trên mobile.

## 3. Clay — /services

1. **Bố cục.** Lề khoảng 45px (khung nội dung 1.320px). Hero chỉ có chữ, căn trái. Sáu dịch vụ xếp zig-zag 50/50 (chữ trái, ảnh phải, rồi đổi bên). Cuối trang là bảng "Industries" trên nền tối.
2. **Thứ bậc thông tin.** Mỗi dịch vụ có 3 lớp: tên (H2), một đoạn 4–5 dòng, danh sách 6 hạng mục con in đậm 16px. Không có CTA giữa các khối.
3. **Nhịp khoảng cách.** Padding hero 200/160px (desktop), 170/160 (tablet), 130/176 (mobile). Section tối 120/80 → 96/64 → 60/40. Giữa các khối dịch vụ có 173–228px khoảng trắng. Hàng bảng ngành cao đều, cách nhau 91px (desktop) và 90px (mobile).
4. **Hình/chữ.** Desktop: hình 16% trung bình, mỗi màn chỉ một ảnh (khoảng 27% màn ở phần dịch vụ), chữ 13%. Mobile: hình 34%, chữ 21%.
5. **Bố cục ảnh.** Mỗi dịch vụ một ảnh dọc khoảng 530×690 (gần 3:4), là ảnh thật của sản phẩm đã làm (biển quảng cáo, ứng dụng, đồ vật). Ảnh không có khung hay bóng.
6. **Thang chữ** (Universal Sans).
   - H1: 74/81,4px, 740, ls −2,96px → 52/57,2 → 40/44, ls −1,2.
   - H2: 52/57,2px, ls −1,56px → 40/44 → 30/36.
   - H3 (hàng ngành): 22/29,7px → 20/25.
   - Đoạn dẫn: 22/29,7px → 16/23,2 (tablet) → 16/21,6 (mobile). Thân danh sách: 16px.
7. **Chuyển section.** Chỉ dùng khoảng trắng giữa các dịch vụ, rồi chuyển một lần sang nền tối rgb(23,25,33) cho bảng ngành. Header fixed 110px (desktop), 64px (mobile).
8. **Responsive.** Một cột. Ảnh luôn đứng trước chữ, kể cả khối mà trên desktop chữ nằm bên trái. Bảng ngành chuyển thành tên ở trên, khách hàng ở dưới.

**Áp dụng cho SOHO**
- Phần giải thích sơ đồ dùng zig-zag: mỗi hàng là một nút hoặc một tầng của sơ đồ (ảnh cắt từ chính sơ đồ) cạnh đoạn giải thích, đổi bên ở mỗi hàng.
- Bảng hai cột "tên / nội dung" có đường kẻ, cho các danh sách dài (lĩnh vực, điểm chạm).
- Trên mobile, hình đặt trước chữ.

**Không sao chép**
- Padding hero 200px, vì SOHO đã có sơ đồ ở hero và không cần thêm khoảng trống.

## 4. Ramotion — /web-design/

1. **Bố cục.** Khung 1.312px (lề 64px ở 1440). Hero là thẻ gradient bo góc, H1 căn giữa. Sau đó là hàng 4 số liệu, tường logo, lưới case so le 2 cột, lời khách, tab Services/Process/Industries. Nửa sau trang gồm nhiều khối "tiêu đề trái 50% / nội dung phải 50%" (Problems we solve, Who we serve, The right fit, Why choose us), rồi lưới 3×2 lợi ích, FAQ.
2. **Thứ bậc thông tin.** Đi đúng theo câu hỏi người mua: làm cho ai, giải quyết vấn đề gì, hợp với ai và không hợp với ai, vì sao chọn, quy trình. Có khối "không hợp nếu bạn chỉ cần…".
3. **Nhịp khoảng cách.** Một số khối có padding 56/56px. Khoảng hở giữa các khối chữ đều 72–80px (desktop), 60–66px (mobile). Nhóm lớn cách nhau 136–185px (desktop), 112–177px (mobile). Bên trong lưới 3×2: 24–48px.
4. **Hình/chữ.** Desktop: hình 15%, chữ 19%. 8 màn cuối không có hình nào. Mobile: hình 9%, chữ 36%. Hình dồn hết lên nửa đầu (case study).
5. **Bố cục ảnh.** Case study là ảnh chụp sản phẩm (thiết bị, màn hình), kích thước khác nhau, so le 2 cột, tên dự án 24px đậm ngay dưới. Logo khách đặt trong lưới 5×3, kích thước đều.
6. **Thang chữ** (Graphik).
   - H1: 92/101,2px, 600, ls −3,2px → 48/52,8 (834 và 390).
   - H2: 48/57,6px, 600 → 32/38,4.
   - H3: 32/38,4px, 500 → 24/28,8. H4 lợi ích: 24/28,8px.
   - Thân: 16/24px và 18/27px, giữ nguyên trên mobile. Số liệu: 60px → 42px.
7. **Chuyển section.** Chỉ dùng khoảng trắng và đường kẻ mảnh. Cả trang một nền #FAFAFA. Header fixed 82px → 71px.
8. **Responsive.** Số liệu 4 cột thành 2×2. Khối 50/50 thành tiêu đề ở trên, danh sách ở dưới. Lưới case thành một cột, mô tả kết quả hiện dưới tên.

**Áp dụng cho SOHO**
- Lớp "vấn đề" và "SOHO làm gì" dùng khối tiêu đề trái / nội dung phải. Chữ gọn, dễ quét.
- Thêm khối "phù hợp / chưa phù hợp" khi thật sự cần, vì tạo được lòng tin.
- Hàng số liệu có nhãn ở trên, số lớn ở dưới, kẻ mảnh bên dưới, cho lớp đo lường.

**Không sao chép**
- Nửa trang chỉ có chữ, không có hình nào. SOHO phải nhắc lại sơ đồ ở mỗi lớp.
- Hero gradient tím-hồng phủ kín thẻ.

## 5. Stripe — /payments

1. **Bố cục.** Khung 1.080px với 4 cột có đường kẻ dọc mảnh hiện trên nền. Hero chia đôi: chữ bên trái rộng 492px, giao diện sản phẩm bên phải tràn ra lề. Section mở bằng nhãn màu, tiêu đề, một đoạn (tối đa 682px) và một số liệu nhỏ bên cạnh có vạch dọc.
2. **Thứ bậc thông tin.** Mỗi section là một lợi ích, kèm hình giao diện chứng minh lợi ích đó, kèm một con số và một câu chuyện khách. Subnav sticky (Overview, Features, Payment methods…) để nhảy giữa các phần.
3. **Nhịp khoảng cách.** Section không có padding; nhịp do margin. Khoảng hở giữa các section 238–390px, phổ biến nhất là 256px (desktop); 202–325px, phổ biến 214px (tablet); 146–244px, phổ biến 146px (mobile).
4. **Hình/chữ.** Desktop: hình 22%, chữ 20%, 2,7 hình và khoảng 20 khối chữ mỗi màn. Mobile: hình 23%, chữ 48%.
5. **Bố cục ảnh.** Hình chủ yếu là giao diện sản phẩm vẽ lại (form, biểu đồ, bảng điều khiển) trên thẻ trắng có bóng. Câu chuyện khách là thẻ tối có ảnh mờ và số liệu thật. Logo khách đặt trên dải nền nhạt.
6. **Thang chữ** (söhne).
   - Tiêu đề trang: 56/68px, 500, ls −1,12px → 48/56 (834 và 390).
   - Tiêu đề section: 38/48px, ls −0,2px → 34/44.
   - Nhãn trên tiêu đề: 18/28px, 500, màu tím. Tiêu đề thẻ: 18px, 500.
   - Thân: 18/28px, 300, ls 0,2px, giữ nguyên trên mobile; phụ 15/24px. Số lớn: 90/117px.
7. **Chuyển section.** Dải màu chéo (gradient lệch góc) ở hero và giữa trang. Xen kẽ nền trắng và #F6F9FC. Đường kẻ dọc chạy suốt trang nối các section. Subnav sticky (cao 161px desktop, 114px mobile, gồm cả header).
8. **Responsive.** Thân chữ giữ 18px. Cột về một. Thẻ tính năng thành băng cuộn ngang có mép thẻ sau lộ ra. Hình giao diện thu nhỏ nguyên khối.

**Áp dụng cho SOHO**
- Sơ đồ live của SOHO đóng vai trò như "giao diện sản phẩm" của Stripe: chữ hero hẹp bên trái, sơ đồ chiếm phần rộng hơn.
- Mẫu section: nhãn Deep Orange, tiêu đề, một đoạn ≤ 680px, ghi chú số liệu có vạch dọc.
- `ServiceSubnav` sticky là đúng hướng. Giữ nó gọn hơn Stripe trên mobile (một hàng, cuộn ngang).

**Không sao chép**
- Dải gradient chéo và đường lưới dọc là dấu hiệu nhận diện của Stripe.
- Thân chữ weight 300. Plus Jakarta Sans ở 300 quá mảnh với dấu tiếng Việt.

## 6. Refokus — /projects/arqitel (case study)

1. **Bố cục.** Tên dự án rất lớn, đường kẻ mảnh, rồi 3 cột: dịch vụ, địa điểm, tóm tắt (nửa phải, có gạch đầu dòng). Sau đó là video tràn khung, hàng 5 màn hình mobile, màn hình desktop đặt trong khung trên dải màu thương hiệu, các cặp ảnh và chữ lệch nhau. Kết thúc bằng lời khách chồng lên thẻ logo, đoạn kết quả, bảng giải thưởng, rồi các case khác.
2. **Thứ bậc thông tin.** Bối cảnh (meta và mục tiêu), sản phẩm (hình), cách làm (đoạn ngắn xen hình), kết quả (đoạn dẫn 28px và bảng giải thưởng), lời khách.
3. **Nhịp khoảng cách.** Padding section 96/96px, hero 240px trên (desktop); mobile 32px, hero 80px. Khoảng hở 120–256px, trung vị 176px (desktop); 53–88px, trung vị 64px (mobile).
4. **Hình/chữ.** Desktop: hình 36%, chữ chỉ 7%. Màn 2 đến 4 không có chữ. Mobile: hình 32%, chữ 22%.
5. **Bố cục ảnh.** Toàn trang lấy màu thương hiệu của khách làm nền (navy rgb(32,39,93)). Màn hình đặt trên dải màu nhấn sáng hơn. Ảnh và chữ lệch cột (ảnh cột 1–6, chữ cột 8–12, rồi đảo lại).
6. **Thang chữ.**
   - H1: 128/115,2px (line-height 0,9) → 48/43,2.
   - H2: 88/88px → 35,2/35,2.
   - Đoạn kết quả: 28/37,8px, giữ nguyên trên mobile.
   - Thân: 18/27px → 17,6/26,4.
7. **Chuyển section.** Nền giữ một màu suốt trang. Chỉ một section trắng và một dải xanh sáng để nhấn. Nhãn "• OUTCOME /" mở phần kết quả.
8. **Responsive.** Tóm tắt lên trước, meta xuống sau. Hàng màn hình mobile thành băng cuộn ngang. Bảng giải thưởng giữ 3 cột, chữ nhỏ lại.

**Áp dụng cho SOHO**
- Case study trong trang dịch vụ: khối meta (dịch vụ, lĩnh vực, thời gian) cạnh đoạn tóm tắt, rồi "Kết quả" gồm đoạn dẫn và bảng có đường kẻ, ghi rõ nguồn.
- `BrandIdentityGallery`: đặt bộ nhận diện trên một nền đồng nhất (Midnight hoặc Soft Canvas), xen một ảnh rộng với nhiều ảnh dọc.

**Không sao chép**
- Lấy màu của khách phủ cả trang dịch vụ. Trang dịch vụ phải giữ màu SOHO; màu khách chỉ dùng trong khung ảnh.
- Line-height 0,9 cho H1, vì sẽ làm dấu tiếng Việt chạm nhau.

---

## Bảng ánh xạ cho trang SOHO

| Phần trên trang SOHO | Tham khảo | Nguyên tắc | Cách áp dụng |
| --- | --- | --- | --- |
| Hero + sơ đồ hiện có | Stripe (hero chia đôi), Refokus (đường kẻ dưới tiêu đề) | Chữ hẹp, hình rộng; hình là bằng chứng chứ không trang trí | Giữ `ServiceOverview` và sơ đồ live. H1 theo token mới; đoạn dẫn tối đa 520px ở 5 cột trái; sơ đồ 7 cột. Một nút chính và một liên kết chữ. |
| Nêu vấn đề | Refokus (đoạn dẫn lớn), Ramotion (tiêu đề trái / danh sách phải) | Câu tuyên bố trước, biểu hiện sau | `ProblemStatement`: H2 tuyên bố ở cột 1–5, đoạn dẫn 20px và 2–3 biểu hiện ở cột 7–12, có nhãn "Ví dụ minh họa". Không dùng thẻ. |
| Phân tích / nguyên nhân | Refokus (câu hỏi 01–04), Stripe (nhãn, tiêu đề, đoạn, số liệu cạnh) | Mỗi nguyên nhân là một hàng đánh số khớp với nút trên sơ đồ | Bảng hoặc hàng kẻ mảnh, số thứ tự khớp nút sơ đồ. Ghi chú nguồn đặt bên phải với vạch dọc. |
| Giải thích sơ đồ hiện có | Clay (zig-zag 50/50), Stripe (cặp chữ và hình giao diện) | Mỗi hàng giải thích một phần của sơ đồ, hình đứng cạnh chữ | Hàng xen kẽ: ảnh cắt hoặc phóng từ chính sơ đồ (đúng nút đang nói) và đoạn ≤ 680px. Đổi bên mỗi hàng; mobile thì hình trước, chữ sau. |
| Phương pháp | Refokus (lưới 2×2 có đường kẻ), Ramotion (lưới 3×2) | Bước ngắn, đều nhau, phân tách bằng đường kẻ thay vì thẻ | 6 bước thành lưới 3×2 (tablet 2×3, mobile 1 cột): số bước, H3, 2 dòng mô tả, kẻ trên. Phần chi tiết vẫn trong `MethodSection` thu gọn. |
| Đo lường / chỉ số | Ramotion (hàng số liệu), Stripe (số liệu cạnh vạch dọc) | Nhãn trên, số dưới, kẻ mảnh; số phải có nguồn | `MeasurementLadder` 4 cột (mobile 2×2). Chỉ dùng cỡ số lớn khi có số thật; nếu không thì ghi "Bậc 1–4" và mô tả. |
| Case study / bằng chứng | Arqitel (meta, tóm tắt, kết quả, bảng), Refokus (danh sách dự án dạng hàng) | Bối cảnh, việc đã làm, kết quả có nguồn, lời khách | Khối meta 3 cột cạnh tóm tắt; "Kết quả" là đoạn dẫn 20px và bảng kẻ mảnh; lời khách trong một thẻ. Giữ chú thích về phạm vi kết quả của King Decor. |
| Thư viện nhận diện thương hiệu | Arqitel (nền đồng nhất, hàng màn hình), Clay (ảnh dọc 3:4) | Một nền, một nhịp ảnh, chú thích ngắn | `BrandIdentityGallery` trên Midnight hoặc Soft Canvas: 1 ảnh rộng 16:10 và 3 ảnh dọc 4:5. Chú thích 13px. Mobile cuộn ngang có snap và lộ mép ảnh sau. |
| Trang hub dịch vụ | Instrument (diptych 5/7), Clay (bảng ngành), Refokus (danh sách dạng hàng) | Danh sách quét nhanh bên trái, bằng chứng bên phải | Hub `/dich-vu/`: cột 5 là danh sách dịch vụ theo giai đoạn hành trình, mỗi hàng cao khoảng 72px có đường kẻ; cột 7 là minh họa hoặc sơ đồ của dịch vụ đang chọn. Mobile: danh sách trước, minh họa trong từng hàng. |
| CTA / chuyển đổi | Instrument (một câu và một nút), Ramotion (nút giữa trang sau dịch vụ) | Ít CTA, mỗi CTA đúng ngữ cảnh | `ContextualServiceCTA` cuối trang: H2 thường và một nút. Một liên kết chữ giữa trang sau phần phương pháp. Tối đa 2 điểm kêu gọi mỗi trang. |
| Chuyển section | Ramotion (chỉ khoảng trắng), Refokus (tối/sáng và kẻ dưới H2), Stripe (dải nền nhạt) | Ưu tiên khoảng trắng và đường kẻ, đổi nền rất ít | Mặc định: khoảng trắng theo token và đường kẻ. Soft Canvas cho khối bằng chứng. Tối đa 2 khối Midnight (luật sẵn có). Gradient Orange → Coral → Violet chỉ một lần, làm dải mảnh, không chéo. |
| Mobile | Stripe (giữ thân 18px), Clay (hình trước chữ), Arqitel (tóm tắt trước meta), Refokus (padding nhỏ) | Giữ cỡ thân, giảm tiêu đề và padding, sắp lại thứ tự | Thân 16px, đoạn dẫn 17px. Padding section 48px. Thứ tự: tiêu đề → hình hoặc sơ đồ → giải thích. Bảng thành hàng xếp chồng. Subnav một hàng cuộn ngang, vùng bấm 44px. |

---

## Đề xuất thông số cho SOHO

Thông số lấy từ số đo ở trên, rồi chỉnh cho tiếng Việt có dấu (line-height cao hơn, không dùng letter-spacing âm mạnh) và cho trang có sơ đồ ở hero (H1 không cần to như trang chỉ có chữ). Giữ Bricolage Grotesque (tiêu đề) và Plus Jakarta Sans (thân). Màu giữ hệ SOHO: Orange #F26522 (nền, nút; chữ trên đó dùng Midnight), Deep Orange #C2410C (chữ cam nhỏ trên nền sáng), Violet #6D28D9, Coral #EC4899 (chỉ trong gradient), Midnight #141218, White, Soft Canvas #FAF9FD, Muted #62616C. Không dùng #FFF4E9.

Các clamp dưới đây nội suy tuyến tính từ 390px đến 1440px.

### Thang chữ

| Vai trò | Phông | Giá trị | 390 / 834 / 1440 | Line-height, ls, độ đậm | Cơ sở đo |
| --- | --- | --- | --- | --- | --- |
| H1 trang dịch vụ | Bricolage Grotesque | `clamp(40px, 28px + 3.05vw, 72px)` | 40 / 53 / 72 | 1.08, −0.02em, 700 | Mobile đo được 35–48; desktop 56 (Stripe) đến 92 (Ramotion); có sơ đồ cạnh bên nên lấy mức giữa |
| H2 tuyên bố (mở mỗi lớp) | Bricolage Grotesque | `clamp(30px, 22px + 2.1vw, 52px)` | 30 / 39,5 / 52 | 1.12, −0.015em, 700 | Clay 52 → 40 → 30; Ramotion 48 → 32. Token hiện tại 3.6vw kẹt ở 30px tới 833px nên tablet bị nhỏ |
| H2 thường (CTA, khối phụ) | Bricolage Grotesque | `clamp(26px, 21.5px + 1.15vw, 38px)` | 26 / 31 / 38 | 1.18, −0.01em, 700 | Stripe 38 → 34 |
| H3 | Bricolage Grotesque | `clamp(20px, 18.5px + 0.38vw, 24px)` | 20 / 21,7 / 24 | 1.3, 0, 600 | Clay 22 → 20; Ramotion 24 → 18–24; Refokus 24–28 |
| Đoạn dẫn | Plus Jakarta Sans | `clamp(17px, 15.9px + 0.29vw, 20px)` | 17 / 18,3 / 20 | 1.55, 0, 400 | Refokus 20,8; Clay 22 → 16; Stripe 18 |
| Thân | Plus Jakarta Sans | `clamp(16px, 15.6px + 0.1vw, 17px)` | 16 / 16,4 / 17 | 1.65, 0, 400 | 15–18 desktop, 16–18 mobile; Stripe và Ramotion giữ nguyên cỡ thân trên mobile |
| Nhãn | Plus Jakarta Sans | `13px` | 13 / 13 / 13 | 1.4, 0.04em, 600; Deep Orange hoặc Muted | Refokus 12 (ls 0,36px), Instrument 12 (ls 1,32px); để 13px và ls nhẹ cho chữ hoa có dấu |
| Số liệu | Bricolage Grotesque | `clamp(40px, 32.6px + 1.9vw, 60px)` | 40 / 48,4 / 60 | 1.0, −0.02em, 800 | Ramotion 60 → 42 |

### Độ rộng và lưới

- **Khung nội dung:** `--container: 1200px` (hiện 1160). Khung rộng cho thư viện ảnh và case: 1320px. Đo được: 1.080 (Stripe), 1.312 (Ramotion), 1.320 (Clay), 1.360 (Instrument).
- **Lề hai bên:** `clamp(16px, 7px + 2.3vw, 40px)`, tức 16 / 26 / 40px. Đo được: 15–16px trên mobile ở mọi trang; 40–64px trên desktop.
- **Độ rộng đọc:** thân tối đa 680px (khoảng 72 ký tự tiếng Việt); đoạn dẫn tối đa 760px; H2 tuyên bố tối đa 18em (khoảng 900px ở 52px). Đo được: cột đoạn văn 432–682px, đoạn dẫn tối đa 858px.
- **Lưới:** desktop 12 cột, gap 24px; tablet (≥ 768px) 8 cột, gap 24px; mobile 4 cột, gap 16px. Các cách chia dùng lại:
  - 5/7: hero chữ / sơ đồ; hub danh sách / minh họa (Instrument).
  - 5/7 hoặc 6/6: tiêu đề trái / nội dung phải (Ramotion, Refokus).
  - 6/6: hàng zig-zag (Clay).
  - 4+4+4: lưới bước và lợi ích (Ramotion).
  - 3+3+3+3: hàng số liệu (Ramotion, Stripe).

### Khoảng cách dọc

| Token | Giá trị | 390 / 834 / 1440 | Khoảng hở nhìn thấy | Cơ sở đo |
| --- | --- | --- | --- | --- |
| `--section-pad` (padding trên và dưới của section) | `clamp(48px, 30px + 4.6vw, 96px)` | 48 / 68 / 96 | 96 / 136 / 192 giữa hai section cùng nền | Trung vị khoảng hở desktop: Refokus 184, Arqitel 176, Clay 173–228; Refokus padding 96 → 60 → 32 |
| `--chapter-gap` (đổi nền, hết sơ đồ hero, trước CTA) | `clamp(72px, 51px + 5.33vw, 128px)` | 72 / 95 / 128 | — | Stripe 256 desktop, 146 mobile; hero Clay 160–200 |
| `--block-gap` (giữa các khối trong một section) | `clamp(40px, 34px + 1.53vw, 56px)` | 40 / 47 / 56 | — | Ramotion 72–80 desktop, 60 mobile; FAQ Refokus 48 |
| Khoảng tiêu đề tới nội dung | `clamp(24px, 18px + 1.52vw, 40px)` | 24 / 30,7 / 40 | — | Đường kẻ dưới H2 ở Refokus, nhãn tới tiêu đề ở Stripe |
| Chiều cao hàng danh sách hoặc bảng | tối thiểu 64px (desktop 72px) | — | — | Bảng ngành Clay 90–91px; hàng accordion Instrument khoảng 57px |

Tablet là chỗ trang SOHO hiện yếu nhất: token cũ giữ H2 ở 30px và khoảng cách nhỏ cho tới gần 834px. Các clamp mới tăng dần đều qua tablet.

### Tỷ lệ hình/chữ mục tiêu

Đo được: trang dịch vụ 15–37% diện tích là hình (desktop), case study 36%. SOHO đặt mục tiêu: mỗi màn hình desktop có ít nhất một hình (sơ đồ, ảnh cắt từ sơ đồ, ảnh thật hoặc bảng có cấu trúc), khoảng 25–35% diện tích. Không để quá 2 màn liền chỉ có chữ, vì nửa sau trang Ramotion có 8 màn không hình và đó là điểm yếu.
