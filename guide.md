# Guide: Framework Marketing từ Segment đến TA và Customer Journey

## 0. Mục đích của guide

Tài liệu này dùng để research và xây dựng kế hoạch SEO/Marketing cho website B2B, đặc biệt là các dự án cần làm báo giá SEO, technical audit và content plan.

Luồng bắt buộc:

```text
Business goal
    -> Market segment
    -> Target audience (TA)
    -> Buying committee
    -> Customer journey (CJ)
    -> Search intent
    -> Keyword map
    -> Content architecture
    -> SEO / Marketing execution
    -> Measurement and iteration
```

### Nguyên tắc làm việc

1. Không bắt đầu bằng danh sách từ khóa.
2. Không viết content trước khi biết người đọc là ai và họ cần quyết định gì.
3. Không dùng traffic làm KPI duy nhất cho B2B.
4. Mọi giả định quan trọng phải có nguồn hoặc được đánh dấu là cần xác minh.
5. Mỗi insight phải dẫn tới một quyết định: tạo trang, sửa trang, xây nội dung, tối ưu chuyển đổi hoặc không làm.

---

## 1. Chuẩn bị workspace và phạm vi research

### 1.1. Tạo thư mục dự án

Đề xuất cấu trúc:

```text
project/
├── brief.md
├── research/
│   ├── business.md
│   ├── segment.md
│   ├── audience.md
│   ├── buying-committee.md
│   ├── customer-journey.md
│   ├── competitor.md
│   ├── search-intent.md
│   └── sources.md
├── keywords/
│   ├── seed-keywords.csv
│   ├── keyword-map.csv
│   └── cannibalization-map.csv
├── content/
│   ├── content-inventory.csv
│   ├── topic-clusters.md
│   └── briefs/
├── seo/
│   ├── technical-audit.md
│   ├── internal-links.csv
│   └── schema-checklist.md
└── plan.md
```

### 1.2. Tạo brief ban đầu

Ghi tối thiểu:

| Trường | Nội dung cần có |
|---|---|
| Doanh nghiệp | Sản phẩm, dịch vụ, thị trường, khu vực |
| Mục tiêu | Lead, cuộc hẹn, báo giá, doanh thu hoặc nhận diện |
| Sản phẩm ưu tiên | Sản phẩm có biên lợi nhuận hoặc tiềm năng cao nhất |
| Khách hàng hiện tại | Ngành, quy mô, vị trí địa lý, tình huống mua |
| Kênh hiện tại | Organic, Ads, referral, sales outbound, marketplace |
| Ràng buộc | Ngân sách, nhân sự, dữ liệu, thời gian, legal |
| Mốc đánh giá | 30, 60, 90 ngày hoặc theo chu kỳ bán hàng |

### Cổng nghiệm thu 1

Chỉ chuyển sang bước Segment khi đã trả lời được:

- Website đang phục vụ thị trường nào?
- Doanh nghiệp muốn tạo ra hành động kinh doanh nào?
- Sản phẩm/dịch vụ nào cần ưu tiên?
- Ai là người phê duyệt phạm vi và kết quả dự án?

---

## 2. Research thị trường và phân khúc

### 2.1. Phân biệt thị trường, segment và niche

- **Thị trường:** toàn bộ nhu cầu có liên quan đến sản phẩm.
- **Segment:** nhóm khách hàng có đặc điểm và nhu cầu tương đồng.
- **Niche:** một nhóm hẹp có vấn đề cụ thể, dễ xây thông điệp và offer.

Không chọn segment chỉ theo ngành. Cần kết hợp:

```text
Industry + Company size + Use case + Buying trigger + Geography + Maturity
```

Ví dụ:

```text
Nhà máy vừa và lớn
+ cần tìm nguồn vải ổn định
+ đang mở rộng đơn hàng xuất khẩu
+ có bộ phận thu mua riêng
+ hoạt động tại Việt Nam
```

### 2.2. Nguồn research segment

Ưu tiên dữ liệu theo thứ tự:

1. CRM, báo giá, hợp đồng, lịch sử sales.
2. Phỏng vấn founder, sales, account và người triển khai.
3. Phỏng vấn 3–8 khách hàng hiện tại hoặc đã từng hỏi mua.
4. Search Console, GA4, call tracking và form submissions.
5. Website đối thủ, marketplace, directory và hiệp hội ngành.
6. Google Search, autocomplete, People Also Ask và forum ngành.

### 2.3. Mẫu Segment Card

```markdown
## Segment: [Tên segment]

- Mô tả ngắn:
- Ngành:
- Quy mô doanh nghiệp:
- Thị trường/khu vực:
- Sản phẩm hoặc dịch vụ họ mua:
- Nhu cầu phát sinh trong tình huống nào:
- Vấn đề hiện tại:
- Hậu quả nếu không giải quyết:
- Tiêu chí lựa chọn nhà cung cấp:
- Người ảnh hưởng đến quyết định:
- Rào cản mua:
- Từ ngữ khách hàng thường dùng:
- Bằng chứng nguồn:
- Mức độ ưu tiên: High / Medium / Low
```

### 2.4. Chấm điểm segment

Chấm mỗi tiêu chí từ 1 đến 5:

| Tiêu chí | Câu hỏi |
|---|---|
| Market size | Có đủ số lượng doanh nghiệp và nhu cầu không? |
| Pain intensity | Vấn đề có đủ cấp bách không? |
| Buying power | Họ có ngân sách và quyền mua không? |
| Reachability | Có thể tiếp cận qua search, sales hoặc media không? |
| Fit | Doanh nghiệp có năng lực phục vụ tốt không? |
| Proof | Đã có case, chuyên môn hoặc tài sản chứng minh chưa? |
| Margin | Giá trị hợp đồng có phù hợp chi phí acquisition không? |

Segment ưu tiên = tổng điểm cao + khả năng tiếp cận thực tế + có bằng chứng phục vụ.

### Cổng nghiệm thu 2

Mỗi segment được chọn phải có:

- Một vấn đề kinh doanh cụ thể.
- Một tình huống khiến nhu cầu xuất hiện.
- Một người chịu trách nhiệm xử lý vấn đề.
- Một tiêu chí để họ so sánh nhà cung cấp.
- Một lý do thực tế để chọn doanh nghiệp.

---

## 3. Xác định Target Audience (TA)

TA không chỉ là “nam/nữ, độ tuổi”. Với B2B, TA phải mô tả vai trò, trách nhiệm, áp lực và quyền quyết định.

### 3.1. Tách 4 lớp TA

| Lớp | Vai trò | Câu hỏi cần trả lời |
|---|---|---|
| Economic buyer | Người duyệt ngân sách | Khoản đầu tư có tạo ra giá trị không? |
| Decision maker | Người chọn giải pháp | Nhà cung cấp nào phù hợp nhất? |
| Technical/user buyer | Người dùng hoặc kiểm tra chuyên môn | Giải pháp có triển khai được không? |
| Influencer/blocker | Người ảnh hưởng hoặc cản trở | Có rủi ro, chi phí ẩn hoặc vấn đề nội bộ không? |

### 3.2. Mẫu TA Profile

```markdown
## TA: [Tên vai trò]

- Chức danh:
- Bối cảnh công việc:
- KPI cá nhân:
- KPI của phòng ban:
- Vấn đề họ đang chịu trách nhiệm:
- Điều khiến họ bị đánh giá kém:
- Trigger khiến họ bắt đầu tìm giải pháp:
- Câu hỏi họ tìm trên Google:
- Nguồn thông tin họ tin:
- Người họ cần thuyết phục:
- Tiêu chí chọn nhà cung cấp:
- Rủi ro họ lo sợ:
- Hành động mong muốn trên website:
- Trích dẫn thực tế từ nguồn research:
```

### 3.3. Research bằng JTBD

Viết mỗi nhu cầu theo công thức:

```text
Khi [bối cảnh], tôi muốn [việc cần làm], để [kết quả mong muốn], nhưng [rào cản].
```

Ví dụ:

```text
Khi website có nhiều lượt truy cập nhưng ít yêu cầu báo giá,
tôi muốn biết điểm nghẽn nằm ở SEO hay chuyển đổi,
để quyết định có tiếp tục đầu tư hay không,
nhưng tôi không có dữ liệu đủ rõ để phân biệt hai vấn đề này.
```

### Cổng nghiệm thu 3

Không chấp nhận persona chỉ có tuổi, giới tính và sở thích. TA đạt yêu cầu khi có đủ:

- KPI.
- Pain.
- Trigger.
- Search behavior.
- Buying role.
- Objection.
- Desired next action.

---

## 4. Phân tích Buying Committee

Trong B2B, người tìm kiếm thông tin không nhất thiết là người ký hợp đồng.

### Mẫu Buying Committee Map

| Vai trò | Mối quan tâm | Nội dung cần cung cấp | CTA phù hợp |
|---|---|---|---|
| CEO/Owner | Doanh thu, rủi ro, payback | Business case, ROI, case study | Đặt lịch tư vấn |
| CMO/Marketing | Kênh, KPI, phối hợp đội nhóm | Framework, dashboard, plan | Nhận audit |
| Sales | Chất lượng lead, tốc độ xử lý | Lead definition, SLA, CRM flow | Xem quy trình |
| Technical | Khả năng triển khai | Technical scope, requirements | Tải checklist |
| Procurement | Giá, phạm vi, điều khoản | Pricing, deliverables, contract | Nhận proposal |

### Câu hỏi cần research

- Ai khởi xướng nhu cầu?
- Ai chịu trách nhiệm nếu dự án thất bại?
- Ai có quyền phủ quyết?
- Quyết định dựa trên giá, năng lực, tốc độ hay bằng chứng?
- Mỗi vai trò cần loại nội dung nào để đồng thuận?

---

## 5. Xây Customer Journey (CJ)

Customer Journey phải mô tả quá trình từ lúc nhận ra vấn đề đến khi mua và tiếp tục sử dụng.

### 5.1. 7 giai đoạn CJ

| Giai đoạn | Tâm lý | Câu hỏi | Nội dung phù hợp | KPI |
|---|---|---|---|---|
| Unaware | Chưa thấy vấn đề | Có điều gì đang bị bỏ lỡ? | Data, benchmark, dấu hiệu cảnh báo | Reach, view |
| Problem aware | Biết có vấn đề | Vì sao kết quả kém? | Diagnostic guide, checklist | Engaged session |
| Solution aware | Biết có hướng giải quyết | Có những cách nào? | Comparison, framework, webinar | Email, download |
| Product aware | Biết nhà cung cấp | Ai phù hợp nhất? | Service page, case study | CTA click |
| Evaluation | Đang so sánh | Có đáng tin không? | Proposal, pricing, proof | Form, meeting |
| Purchase | Sẵn sàng mua | Bước tiếp theo là gì? | Scope, contract, onboarding | Opportunity |
| Retention/Expansion | Đã sử dụng | Làm sao tăng kết quả? | Report, education, upsell | Renewal, expansion |

### 5.2. Mẫu CJ Map

```markdown
## Giai đoạn: [Tên giai đoạn]

- Trigger:
- Goal của khách hàng:
- Câu hỏi:
- Hành vi tìm kiếm:
- Kênh:
- Nội dung khách hàng cần:
- Rào cản:
- Bằng chứng cần hiển thị:
- CTA:
- Sự kiện cần đo:
- Trang tiếp theo:
```

### 5.3. Xác định Micro-conversion

Không chờ đến form submit mới đo. Ghi nhận các hành động nhỏ:

- Xem bảng giá.
- Xem case study.
- Click gọi điện.
- Tải checklist.
- Xem quá 75% trang.
- Mở FAQ.
- Bắt đầu điền form.
- Đặt lịch.

### Cổng nghiệm thu 4

Mỗi giai đoạn phải có ít nhất:

- Một câu hỏi của khách hàng.
- Một loại nội dung trả lời.
- Một CTA.
- Một sự kiện đo lường.

---

## 6. Chuyển CJ thành Search Intent

### 6.1. 5 nhóm search intent

| Intent | Ví dụ truy vấn | Mục tiêu nội dung |
|---|---|---|
| Informational | SEO tổng thể là gì | Giải thích, giáo dục, xây trust |
| Problem-aware | Website có traffic nhưng không ra lead | Chẩn đoán, checklist |
| Commercial investigation | Agency SEO nào phù hợp B2B | So sánh, proof, framework |
| Transactional | Dịch vụ SEO tổng thể | Chuyển đổi, scope, CTA |
| Navigational | Tên thương hiệu, case study | Điều hướng và xác thực thương hiệu |

### 6.2. Intent Brief

Trước khi tạo nội dung, ghi:

```markdown
- Query chính:
- Search intent:
- Segment:
- TA:
- CJ stage:
- Job to be done:
- Người đọc cần quyết định gì sau khi đọc:
- Nội dung tối thiểu cần có:
- Bằng chứng cần dùng:
- CTA:
- Trang liên kết đến:
```

---

## 7. Research keyword và lập Keyword Map

### 7.1. Nguồn keyword

- Search Console hiện tại.
- Google autocomplete và related searches.
- People Also Ask.
- Keyword Planner hoặc công cụ SEO đang dùng.
- Query từ sales và khách hàng.
- Tiêu đề, heading và nội dung đối thủ.
- Từ ngữ trong proposal, email, call transcript.

### 7.2. Trường dữ liệu bắt buộc

| Trường | Ý nghĩa |
|---|---|
| Keyword | Truy vấn gốc |
| Cluster | Nhóm chủ đề |
| Intent | Ý định tìm kiếm |
| Segment | Segment liên quan |
| TA role | Vai trò người tìm |
| CJ stage | Giai đoạn hành trình |
| Business value | Giá trị kinh doanh |
| SERP type | Blog, service, category, video, local |
| Target URL | Trang cần làm |
| Priority | P1, P2, P3 |
| Source | Nguồn dữ liệu |

### 7.3. Quy tắc gom nhóm

Gom các từ khóa vào cùng một trang khi:

- Cùng search intent.
- Cùng đối tượng.
- Cùng câu trả lời chính.
- SERP có các kết quả tương tự.

Tạo trang mới khi:

- Intent khác nhau.
- Người tìm đang ở giai đoạn CJ khác.
- Cần CTA khác.
- Nội dung có khả năng tự đứng độc lập.

---

## 8. Content Architecture

### 8.1. Cấu trúc website theo vai trò

```text
Homepage
├── Service pages: nhu cầu giao dịch
├── Solution pages: theo segment hoặc use case
├── Case studies: bằng chứng
├── Guides: nhu cầu thông tin
├── Comparison pages: giai đoạn đánh giá
└── Contact / Audit / Proposal: chuyển đổi
```

### 8.2. Mẫu Topic Cluster

```markdown
## Pillar: [Chủ đề kinh doanh]

- Trang chính:
- Search intent:
- Segment:
- TA:
- CJ stage:
- Offer:
- Supporting topics:
- Case study liên quan:
- Internal links vào:
- Internal links ra:
- KPI:
```

### 8.3. Mẫu Content Brief

```markdown
# [Tên nội dung]

## Business objective
- Mục tiêu:
- Segment:
- TA:
- CJ stage:
- CTA:

## Search objective
- Primary keyword:
- Secondary keywords:
- Search intent:
- SERP format:

## Reader problem
- Người đọc đang gặp gì?
- Họ cần quyết định gì?

## Outline
1. Trả lời trực tiếp vấn đề
2. Giải thích nguyên nhân
3. Framework hoặc quy trình
4. Ví dụ/case/bằng chứng
5. Checklist hoặc bước tiếp theo
6. CTA

## Trust requirements
- Nguồn dữ liệu:
- Người chịu trách nhiệm nội dung:
- Kinh nghiệm thực tế:
- Claim cần kiểm chứng:

## SEO and UX
- Title:
- Meta description:
- H1:
- Internal links:
- Image/infographic:
- Schema:
```

---

## 9. Sau CJ: các bước SEO/Marketing execution

Chỉ thực hiện sau khi đã chốt Segment, TA, Buying Committee và CJ.

### Bước 1: Audit nội dung hiện tại

Phân loại từng URL:

- Keep: đúng intent và còn giá trị.
- Improve: đúng chủ đề nhưng thiếu chiều sâu hoặc CTA.
- Consolidate: nhiều URL cạnh tranh cùng intent.
- Redirect: nội dung cũ, trùng hoặc không còn mục tiêu.
- Create: chưa có trang phục vụ nhu cầu quan trọng.

### Bước 2: Technical SEO

Kiểm tra theo mức ảnh hưởng:

1. Crawl và index.
2. Canonical, redirect, status code.
3. Internal links và orphan pages.
4. Title, H1, heading, meta.
5. Sitemap và robots.
6. Mobile UX và Core Web Vitals.
7. Structured data.
8. Analytics, Search Console và conversion tracking.

Technical audit phải liên hệ với CJ. Ví dụ: lỗi form, tốc độ trang dịch vụ hoặc thiếu tracking là vấn đề kinh doanh, không chỉ là lỗi kỹ thuật.

### Bước 3: On-page và content production

Mỗi trang phải có:

- Một intent chính.
- Một hành động chính.
- Bằng chứng phù hợp với TA.
- Nội dung trả lời đủ câu hỏi trước CTA.
- Internal link theo hành trình, không chèn link ngẫu nhiên.

### Bước 4: CRO

Tối ưu theo thứ tự:

- Thông điệp Hero.
- Trust và proof.
- Scope/deliverables.
- Objection handling.
- Form và CTA.
- Tốc độ phản hồi sau khi có lead.

### Bước 5: Distribution và demand generation

- Sales enablement: gửi case, checklist, proposal template.
- LinkedIn/email: phân phối nội dung theo vai trò TA.
- Remarketing: dùng cho nhóm đã xem service/case.
- Digital PR: xây trust từ nguồn ngành.
- Webinar hoặc workshop: dành cho solution-aware/evaluation.

### Bước 6: Đo lường

Thiết lập funnel:

```text
Impression
    -> Click
    -> Engaged session
    -> Micro-conversion
    -> Lead
    -> Qualified lead
    -> Opportunity
    -> Customer
    -> Revenue / retention
```

Không kết luận SEO thành công chỉ vì keyword tăng hạng. Cần đối chiếu organic traffic với qualified lead, opportunity và doanh thu hỗ trợ.

---

## 10. Bộ file đầu ra bắt buộc

Kết thúc research, dự án phải có:

1. `brief.md`: mục tiêu và phạm vi.
2. `segment.md`: các segment và điểm ưu tiên.
3. `audience.md`: TA profile.
4. `buying-committee.md`: vai trò và objection.
5. `customer-journey.md`: journey map.
6. `search-intent.md`: intent theo CJ.
7. `keyword-map.csv`: keyword-to-page map.
8. `content-inventory.csv`: audit URL hiện tại.
9. `competitor.md`: benchmark và khoảng trống.
10. `technical-audit.md`: vấn đề kỹ thuật theo impact.
11. `content-plan.md`: topic cluster và lịch sản xuất.
12. `measurement-plan.md`: event, KPI và dashboard.

---

## 11. Checklist nghiệm thu cuối

### Segment

- [ ] Có segment ưu tiên và lý do lựa chọn.
- [ ] Có pain, trigger, buying power và proof.
- [ ] Không mô tả segment chỉ bằng ngành.

### TA

- [ ] Có vai trò và KPI.
- [ ] Có người ảnh hưởng và người phê duyệt.
- [ ] Có từ ngữ thật từ khách hàng/sales.

### Customer Journey

- [ ] Có trigger từ nhận biết đến mua.
- [ ] Mỗi giai đoạn có câu hỏi và CTA.
- [ ] Có micro-conversion cần đo.

### SEO/Content

- [ ] Keyword được gắn với intent, TA và CJ.
- [ ] Mỗi URL có một mục tiêu chính.
- [ ] Có content gap và cannibalization check.
- [ ] Có internal link theo journey.
- [ ] Có nguồn cho các claim quan trọng.

### Marketing/Business

- [ ] Có định nghĩa lead và qualified lead.
- [ ] Có quy trình bàn giao lead cho sales.
- [ ] Có KPI từ traffic đến revenue.
- [ ] Có owner và deadline cho từng hạng mục.

---

## 12. Lịch triển khai mẫu trong 10 ngày

| Ngày | Đầu việc | Đầu ra |
|---|---|---|
| 1 | Brief, mục tiêu, sản phẩm ưu tiên | `brief.md` |
| 2 | Research thị trường và segment | `segment.md` |
| 3 | Phỏng vấn TA, sales, khách hàng | `audience.md` |
| 4 | Buying committee và objection | `buying-committee.md` |
| 5 | Customer Journey | `customer-journey.md` |
| 6 | Search intent và keyword seed | `search-intent.md`, `seed-keywords.csv` |
| 7 | Competitor, content gap, cannibalization | `competitor.md`, `keyword-map.csv` |
| 8 | Content architecture và content brief | `content-plan.md` |
| 9 | Technical audit, tracking và CRO | `technical-audit.md`, `measurement-plan.md` |
| 10 | Ưu tiên backlog và kế hoạch triển khai | `plan.md` |

## Kết luận

Framework này cần được sử dụng theo đúng thứ tự:

```text
Segment -> TA -> Buying Committee -> CJ -> Intent -> Keyword -> Content -> SEO/CRO -> Measurement
```

Nếu chưa xác định được **ai mua, họ đang cố giải quyết điều gì và bước tiếp theo họ cần thực hiện**, chưa nên bắt đầu bằng việc viết bài hoặc tối ưu từ khóa.
