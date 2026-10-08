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
          <p className="meta">
            Cập nhật lần cuối: <Fill value={updated} need="CẦN NGÀY HIỆU LỰC"/>
          </p>
        </PageHeader>
        <div className="container" style={{paddingBottom: 'var(--space-lg)'}}>
          <p className="placeholder" style={{marginBottom: 40, maxWidth: '68ch'}}>
            [BẢN NHÁP: nội dung dưới đây là khung tham khảo, cần bộ phận pháp chế hoặc luật sư rà soát và đối chiếu quy định hiện hành về bảo vệ dữ liệu cá nhân trước khi xuất bản]
          </p>
          <div className="prose">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id}>
                <h2>{i + 1}. {s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
