import Header from './Header';
import Footer from './Footer';
import PageHeader from './ui/PageHeader';
import Fill from './ui/Fill';

// Khung chung cho trang pháp lý. sections: [{id, title, body: ReactNode}]
export default function LegalPage({title, lead, updated, sections}){
  return (
    <>
      <Header/>
      <main>
        <PageHeader compact crumbs={[{label: title}]} title={title} lead={lead}>
          <p style={{fontSize: 13, color: 'var(--on-dark-2)'}}>Cập nhật lần cuối: <Fill value={updated} need="CẦN NGÀY HIỆU LỰC"/></p>
        </PageHeader>
        <div className="container" style={{paddingBlock: 'var(--space-md) var(--space-lg)'}}>
          <div style={{maxWidth: 860, marginInline: 'auto', background: 'var(--white)', borderRadius: 'var(--r-card)', padding: 'clamp(24px,4vw,56px)', boxShadow: 'var(--shadow-card)'}}>
            <p className="placeholder" style={{marginBottom: 32, maxWidth: '68ch'}}>
              [BẢN NHÁP: nội dung dưới đây là khung tham khảo, cần bộ phận pháp chế hoặc luật sư rà soát và đối chiếu quy định hiện hành về bảo vệ dữ liệu cá nhân trước khi xuất bản]
            </p>
            <div className="prose" style={{maxWidth: 'none'}}>
              {sections.map((s, i) => (
                <section key={s.id} id={s.id}>
                  <h2>{i + 1}. {s.title}</h2>
                  {s.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
