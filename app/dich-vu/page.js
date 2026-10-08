import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Track from '../../components/diagrams/Track';
import CtaBand from '../../components/ui/CtaBand';
import {getServicesByGroup} from '../../components/servicePagesData';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: 'Dịch vụ',
  description: 'Chín dịch vụ SEO, AI Search, Google Ads, Meta và TikTok Ads, CRO, content, GA4 và tư vấn chiến lược của SOHO Agency, chia theo điểm nghẽn tăng trưởng.'
};

const STAGES = [
  {title: 'Được tìm thấy', text: 'Khách hàng tìm trên Google, Maps và AI Search.'},
  {title: 'Được chọn', text: 'Quảng cáo và landing page biến lượt xem thành lead.'},
  {title: 'Được tin và đo đúng', text: 'Nội dung tạo niềm tin, dữ liệu cho biết kênh nào mang về doanh thu.'}
];

// Cột đã có tiêu đề "Dành cho", bỏ cụm này ở đầu câu.
const forWhom = intro => {
  const text = intro.replace(/^Dành cho\s+/, '');
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export default function ServicesIndexPage(){
  const groups = getServicesByGroup();

  return (
    <>
      <Header activeNav="services"/>
      <main>
        <PageHeader
          crumbs={[{label: 'Dịch vụ'}]}
          title="Chọn dịch vụ theo điểm nghẽn, không theo gói"
          lead="Mỗi doanh nghiệp tắc ở một chỗ khác nhau: không ai tìm thấy, có người tìm thấy nhưng không mua, hoặc có mua nhưng không biết kênh nào mang lại. Bắt đầu từ chỗ tắc đó."
        />

        <section className={`container ${styles.map}`} aria-label="Ba nhóm dịch vụ trên hành trình khách hàng">
          <Track
            headingLabel
            label="Ba nhóm dịch vụ, ba chặng trên hành trình khách hàng"
            items={groups.map(({group, items}, i) => ({
              meta: group,
              title: STAGES[i].title,
              text: STAGES[i].text,
              acc: i === 2,
              links: items.map(s => ({label: s.menuTitle, href: `/dich-vu/${s.slug}`}))
            }))}
          />
        </section>

        <div className="container">
          {groups.map(({group, items}, gi) => (
            <section className={styles.group} key={group} aria-labelledby={`g-${gi}`}>
              <div className={styles.groupHead}>
                <p className={styles.groupIndex}>{String(gi + 1).padStart(2, '0')}</p>
                <h2 id={`g-${gi}`} className={styles.groupTitle}>{group}</h2>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Dịch vụ</th>
                    <th scope="col">Dành cho</th>
                    <th scope="col">Kết quả đo</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(service => (
                    <tr key={service.slug}>
                      <th scope="row">
                        <a href={sitePath(`/dich-vu/${service.slug}`)}>{service.menuTitle}</a>
                      </th>
                      <td data-label="Dành cho">{forWhom(service.intro)}</td>
                      <td data-label="Kết quả đo">{service.outcomes[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>

        <CtaBand
          title="Chưa biết nên bắt đầu từ đâu?"
          text="Gửi website và kênh đang chạy. SOHO chỉ ra điểm nghẽn lớn nhất và việc nên làm trước."
        />
      </main>
      <Footer/>
    </>
  );
}
