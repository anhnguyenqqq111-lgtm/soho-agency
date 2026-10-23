import styles from './BrandService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import BrandIdentityGallery from './BrandIdentityGallery';
import {MethodSection} from './PilotParts';
import {ProblemStatement, Responsibility, MeasurementLadder} from '../insight/Insight';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {testimonials} from '../../data/proof';

/*
  Phần dưới sơ đồ của trang Nhận diện thương hiệu (Redesign 3.1, phong cách "câu chuyện nhận diện"). Sơ đồ mở đầu:
  bảng màu, logo, kiểu chữ quy định một lần rồi dùng ở 4 điểm chạm (website, mạng xã hội, bao bì, cửa hàng).
  Phần dưới phát triển đúng ý đó: vấn đề (logo đẹp mà khách không nhớ) → vì sao (định vị chưa rõ, và hệ bị lệch ở
  từng điểm chạm trên sơ đồ) → SOHO dựng gì (phòng trưng bày), hai bên làm gì, bàn giao, nhận xét khách → đo 4 bậc
  và giới hạn → nối vào hành trình.
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
      <Section
        id="van-de"
        tone="gray"
        surface="flat"
        kicker="Vấn đề"
        title={
          <>
            Vì sao logo đẹp <span className="hl">mà khách vẫn không nhớ?</span>
          </>
        }
      >
        <ProblemStatement
          lead="Sơ đồ ở đầu trang quy định logo, màu và chữ một lần rồi dùng ở bốn điểm chạm. Khách nhớ một thương hiệu qua nhiều lần gặp giống nhau. Vấn đề thường không nằm ở bản thân logo, mà ở chỗ mỗi lần gặp lại trông một khác."
          cases={[
            {
              label: 'Mỗi bên làm một kiểu',
              text: 'Nhân viên làm bài đăng, nhà in làm bao bì, thợ làm biển hiệu. Mỗi bên tự chọn màu và phông "gần giống", và sau vài tháng có bốn phiên bản thương hiệu.'
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
      </Section>

      <Section
        id="nguyen-nhan"
        kicker="Vì sao xảy ra"
        title={
          <>
            Hệ nhận diện lệch ở <span className="hl">từng điểm chạm</span>
          </>
        }
      >
        <div className={styles.root}>
          <p className={styles.rootLabel}>Gốc của sự lệch</p>
          <p className={styles.rootText}>
            Khi định vị chưa rõ (bạn bán cho ai, khác đối thủ ở điểm nào), không ai có tiêu chí để chọn màu, chữ hay hình. Thiết kế khi đó đi theo sở thích của
            người duyệt, và mỗi người duyệt thích một kiểu. Vì vậy bước 2 và 3 trên dải các bước là tìm hiểu doanh nghiệp, khách hàng và đối thủ, trước khi vẽ.
          </p>
        </div>

        <ol className={styles.drift} aria-label="Chỗ hay lệch ở bốn điểm chạm trên sơ đồ">
          {DRIFT.map(d => (
            <li key={d.point}>
              <h3 className={styles.driftPoint}>{d.point}</h3>
              <p>
                <span className={styles.driftLabel}>Hay lệch vì</span>
                {d.why}
              </p>
              <p>
                <span className={styles.driftLabel}>Quy định cần có</span>
                {d.rule}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="giai-phap"
        tone="gray"
        surface="flat"
        kicker="SOHO làm gì"
        title={
          <>
            Một hệ quy định một lần, <span className="hl">dùng được ở mọi nơi</span>
          </>
        }
        intro="Năm phần của một bộ nhận diện hoàn chỉnh, mỗi phần trả lời một chỗ hay lệch ở trên. Ví dụ dưới đây là chính bộ nhận diện của SOHO."
      >
        <BrandIdentityGallery />

        <div className={styles.split}>
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
              'Một người quyết định duyệt ở mỗi mốc bên dưới'
            ]}
          />
          <div className={styles.milestones}>
            <h3 className={styles.milestonesHead}>Các mốc bạn duyệt, theo dải các bước ở trên</h3>
            <ol>
              {REVIEWS.map((r, i) => (
                <li key={r}>
                  <span>Bước {i + 1}</span>
                  {r}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={styles.handover}>
          <div className={styles.box}>
            <h3 className={styles.boxHead}>Hộp bàn giao</h3>
            <ul>
              {service.deliverables.map(d => (
                <li key={d}>
                  <Icon name="check" size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          {BRAND_QUOTES.length > 0 && (
            <ul className={styles.quotes}>
              {BRAND_QUOTES.map(q => (
                <li key={q.name}>
                  <blockquote>
                    <p>“{q.quote}”</p>
                  </blockquote>
                  <p className={styles.quoteBy}>
                    <strong>{q.name}</strong>
                    {q.role}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section
        id="do-luong"
        kicker="Đo thế nào"
        title={
          <>
            Nhận diện tác động chậm, <span className="hl">nên phải ghi mốc trước</span>
          </>
        }
        intro="Không có con số chung cho “nhận diện tốt”. Cách đo hợp lý là ghi lại hiện trạng trước khi đổi, rồi so sánh sau vài tháng ở cả bốn bậc."
      >
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
      </Section>

      <Section
        id="diem-cham"
        tone="gray"
        surface="flat"
        kicker="Nối vào kinh doanh"
        title={
          <>
            Nhận ra → tin → cân nhắc → <span className="hl">chọn mua</span>
          </>
        }
        intro="Nhận diện là lần đầu khách gặp bạn, trước khi đọc một chữ nào. Website và quảng cáo là nơi hệ nhận diện được dùng nhiều nhất ngay sau đó."
      >
        <ServiceTouchpointContext slug={service.slug} names={names} />
      </Section>

      <MethodSection article={article} name={service.menuTitle} tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Kể SOHO bạn đang ở đâu: mới ra mắt, đổi định vị hay hình ảnh đang mỗi nơi một kiểu. SOHO đề xuất phạm vi vừa đủ, không bắt làm trọn bộ."
      />
    </>
  );
}
