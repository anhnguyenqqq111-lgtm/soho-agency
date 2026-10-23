import styles from './BrandService.module.css';
import ed from '../editorial/editorial.module.css';
import Icon from '../../ui/Icon';
import BrandIdentityGallery from './BrandIdentityGallery';
import {MethodSection} from './PilotParts';
import {ProblemStatement, Responsibility, MeasurementLadder} from '../insight/Insight';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {testimonials} from '../../data/proof';

/*
  Phần dưới sơ đồ của trang Nhận diện thương hiệu. Nội dung theo Redesign 3.1, bố cục theo V4.0 "triển lãm thương hiệu":
  câu khẳng định lớn → gốc của sự lệch và bốn điểm chạm đúng như sơ đồ hero → phòng trưng bày trải rộng →
  nhận xét khách dạng trích dẫn lớn và hộp bàn giao → hai bên làm gì, mốc duyệt → thang đo → nối vào kinh doanh.
  Chưa có dự án nhận diện nào được công bố, nên phần trưng bày dùng chính hệ nhận diện SOHO và ghi rõ như vậy.
*/

// Bốn điểm chạm đúng như trên sơ đồ ở hero
const DRIFT = [
  {
    point: 'Website',
    why: 'Máy không có phông chính thức nên tự thay phông khác; màu nút và màu chữ trên nền được chọn tùy trang.',
    rule: 'Phông dùng cho web, mã màu cho màn hình, quy định màu nút và độ tương phản chữ.'
  },
  {
    point: 'Mạng xã hội',
    why: 'Mỗi người làm một bài, mỗi bài một phông; logo đặt lên ảnh nhiều chi tiết nên mất nét.',
    rule: 'Mẫu bài đăng, vị trí và vùng an toàn của logo, cách dùng ảnh.'
  },
  {
    point: 'Bao bì',
    why: 'Màu in khác màu trên màn hình; logo in quá nhỏ hoặc in một màu thì nhòe.',
    rule: 'Mã màu cho in, bản logo một màu, cỡ nhỏ nhất được phép in.'
  },
  {
    point: 'Cửa hàng',
    why: 'Biển hiệu làm lại từ ảnh chụp hoặc file nén, sai tỉ lệ và màu.',
    rule: 'File gốc dạng vector, tỉ lệ và khoảng trống quanh logo, chất liệu gợi ý.'
  }
];

// Việc khách duyệt ở mỗi bước, theo đúng thứ tự service.process (dải các bước ở đầu trang)
const REVIEWS = [
  'Phạm vi, mốc thời gian và báo giá',
  'Bản tóm tắt giá trị cốt lõi và tính cách thương hiệu',
  'Chân dung khách hàng và bảng so sánh đối thủ',
  'Các hướng màu, chữ, phong cách để chọn một',
  'Logo đặt trên ứng dụng thật: danh thiếp, bao bì, bài đăng',
  'File gốc, file in và bộ hướng dẫn trước khi nhận'
];

// Hai nhận xét khách nói về nhận diện, lấy nguyên văn từ components/data/proof.js
const BRAND_QUOTES = testimonials.filter(t => /nhận diện/i.test(t.quote));

export default function BrandService({service, article, names}) {
  return (
    <>
      <section id="van-de" className={`${ed.band} ${ed.canvas}`} aria-labelledby="van-de-title">
        <div className="container">
          <p className={ed.label}>
            <b>01</b> Vấn đề
          </p>
          <h2 id="van-de-title" className={`${ed.statement} ${styles.statement}`}>
            Khách không nhớ logo. <span className="hl">Khách nhớ những lần gặp giống nhau.</span>
          </h2>
          <ProblemStatement
            lead="Sơ đồ ở đầu trang quy định logo, màu và chữ một lần rồi dùng ở bốn điểm chạm. Vấn đề thường không nằm ở bản thân logo, mà ở chỗ mỗi lần gặp lại, thương hiệu trông một khác."
            cases={[
              {
                label: 'Mỗi bên làm một kiểu',
                text: 'Nhân viên làm bài đăng, nhà in làm bao bì, thợ làm biển hiệu. Mỗi bên tự chọn màu và phông “gần giống”, và sau vài tháng có bốn phiên bản thương hiệu.'
              },
              {
                label: 'Đặt cạnh đối thủ thì khó phân biệt',
                text: 'Màu và kiểu chữ được chọn theo thói quen của ngành, nên trên kệ hàng hay trong bảng tin, khách không nhận ra đâu là bạn.'
              },
              {
                label: 'Chỉ đẹp trên màn hình',
                text: 'Logo nhiều chi tiết, màu chỉ thử trên máy tính. Khi in nhỏ, in một màu hay đặt lên ảnh thì mất nét.'
              }
            ]}
          />
        </div>
      </section>

      <section id="nguyen-nhan" className={ed.band} aria-labelledby="nguyen-nhan-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>02</b> Vì sao xảy ra
            </p>
            <h2 id="nguyen-nhan-title" className={ed.h2}>
              Hệ nhận diện lệch ở từng điểm chạm
            </h2>
          </div>
          <div className={ed.main}>
            <p className={styles.rootText}>
              Khi định vị chưa rõ (bạn bán cho ai, khác đối thủ ở điểm nào), không ai có tiêu chí để chọn màu, chữ hay hình. Thiết kế khi đó đi theo sở thích
              của người duyệt, và mỗi người duyệt thích một kiểu.
            </p>
            <p className={`${ed.body} ${styles.rootNote}`}>
              Vì vậy bước 2 và 3 trên dải các bước là tìm hiểu doanh nghiệp, khách hàng và đối thủ, trước khi vẽ.
            </p>
          </div>
          <ol className={`${ed.full} ${styles.drift}`} aria-label="Chỗ hay lệch ở bốn điểm chạm trên sơ đồ">
            {DRIFT.map((d, i) => (
              <li key={d.point}>
                <span className={styles.driftNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.driftPoint}>{d.point}</h3>
                <p className={styles.driftWhy}>
                  <span>Hay lệch vì</span>
                  {d.why}
                </p>
                <p className={styles.driftRule}>
                  <span>Quy định cần có</span>
                  {d.rule}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="giai-phap" className={`${ed.band} ${ed.canvas}`} aria-labelledby="giai-phap-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>03</b> SOHO làm gì
            </p>
            <h2 id="giai-phap-title" className={ed.h2}>
              Một hệ quy định một lần, dùng được ở mọi nơi
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.galleryIntro}`}>
            Năm phần của một bộ nhận diện hoàn chỉnh, mỗi phần trả lời một chỗ hay lệch ở trên. Ví dụ dưới đây là chính bộ nhận diện của SOHO.
          </p>
          <div className={ed.full}>
            <BrandIdentityGallery />
          </div>
        </div>
      </section>

      {BRAND_QUOTES.length > 0 && (
        <section id="ban-giao" className={ed.band} aria-labelledby="ban-giao-title">
          <div className={`container ${ed.grid}`}>
            <h2 id="ban-giao-title" className="visually-hidden">
              Nhận xét khách hàng và hộp bàn giao
            </h2>
            <p className={`${ed.full} ${ed.label}`}>Khách hàng nói</p>
            {BRAND_QUOTES.map(q => (
              <figure key={q.name} className={`${ed.half} ${styles.quote}`}>
                <blockquote>
                  <p>“{q.quote}”</p>
                </blockquote>
                <figcaption>
                  <strong>{q.name}</strong>
                  {q.role}
                </figcaption>
              </figure>
            ))}
            <h3 className={`${ed.side} ${ed.h3} ${styles.boxHead}`}>Hộp bàn giao</h3>
            <ul className={`${ed.main} ${styles.box}`}>
              {service.deliverables.map(d => (
                <li key={d}>
                  <Icon name="check" size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="hai-ben" className={`${ed.band} ${ed.canvas}`} aria-labelledby="hai-ben-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>Làm cùng nhau</p>
            <h2 id="hai-ben-title" className={ed.h2}>
              Mỗi bước, bạn duyệt một thứ
            </h2>
          </div>
          <ol className={`${ed.main} ${ed.rows} ${styles.milestones}`} aria-label="Các mốc bạn duyệt theo dải các bước">
            {REVIEWS.map((r, i) => (
              <li key={r}>
                <span>Bước {i + 1}</span>
                {r}
              </li>
            ))}
          </ol>
          <div className={ed.full}>
            <Responsibility
              ours={[
                'Nghiên cứu ngành, khách hàng mục tiêu và đối thủ',
                'Đề xuất hướng màu, chữ, phong cách đồ họa để bạn chọn',
                'Thiết kế logo và các ứng dụng trên điểm chạm thật',
                'Bộ hướng dẫn thương hiệu và file gốc cho web, in ấn'
              ]}
              yoursTitle="Bạn cung cấp và duyệt"
              yours={[
                'Thông tin doanh nghiệp: giá trị, tầm nhìn, khách hàng, đối thủ bạn quan tâm',
                'Danh sách điểm chạm cần áp dụng: biển hiệu, bao bì, đồng phục, mạng xã hội...',
                'Logo và tài liệu cũ nếu có',
                'Một người quyết định duyệt ở mỗi mốc'
              ]}
            />
          </div>
        </div>
      </section>

      <section id="do-luong" className={ed.band} aria-labelledby="do-luong-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>04</b> Đo thế nào
            </p>
            <h2 id="do-luong-title" className={ed.h2}>
              Nhận diện tác động chậm, nên phải ghi mốc trước
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.galleryIntro}`}>
            Không có con số chung cho “nhận diện tốt”. Cách đo hợp lý là ghi lại hiện trạng trước khi đổi, rồi so sánh sau vài tháng ở cả bốn bậc.
          </p>
          <div className={ed.full}>
            <MeasurementLadder
              metrics={{
                activity: ['Số điểm chạm đã chuyển sang hệ mới', 'Bộ hướng dẫn đã gửi cho đội nhà và đối tác'],
                interim: ['Rà soát định kỳ: điểm chạm nào còn sai màu, chữ, logo so với hướng dẫn'],
                behavior: [
                  'Số lượt tìm đúng tên thương hiệu trên Google (Search Console)',
                  'Lượt truy cập trực tiếp vào website',
                  'Khách nhắc lại thương hiệu khi liên hệ'
                ],
                business: ['Tỉ lệ chốt và mức giá giữ được, so với trước khi đổi']
              }}
              limits={[
                'Tác động của nhận diện thường lộ ra sau nhiều tháng và lẫn với quảng cáo, mùa vụ, sản phẩm mới.',
                'Khó tách riêng phần đóng góp của nhận diện vào doanh thu; nên đọc bậc 4 cùng với các thay đổi khác trong cùng thời gian.',
                'Lượt tìm tên thương hiệu chỉ có ý nghĩa khi so với chính bạn trước đó, không so với đối thủ.'
              ]}
            />
          </div>
        </div>
      </section>

      <section id="diem-cham" className={`${ed.band} ${ed.canvas}`} aria-labelledby="diem-cham-title">
        <div className="container">
          <p className={ed.label}>
            <b>05</b> Nối vào kinh doanh
          </p>
          <h2 id="diem-cham-title" className={`${ed.statement} ${styles.chain}`}>
            Nhận ra <span aria-hidden="true">→</span> tin <span aria-hidden="true">→</span> cân nhắc <span aria-hidden="true">→</span>{' '}
            <span className="hl">chọn mua</span>
          </h2>
          <p className={`${ed.lead} ${styles.chainLead}`}>
            Nhận diện là lần đầu khách gặp bạn, trước khi đọc một chữ nào. Website và quảng cáo là nơi hệ nhận diện được dùng nhiều nhất ngay sau đó.
          </p>
          <ServiceTouchpointContext slug={service.slug} names={names} />
        </div>
      </section>

      <MethodSection article={article} name={service.menuTitle} editorial tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Kể SOHO bạn đang ở đâu: mới ra mắt, đổi định vị hay hình ảnh đang mỗi nơi một kiểu. SOHO đề xuất phạm vi vừa đủ, không bắt làm trọn bộ."
      />
    </>
  );
}
