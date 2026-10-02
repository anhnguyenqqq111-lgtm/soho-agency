'use client';

import {ArrowRight} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage(){
  return (
    <main>
      <Header activeNav="contact" />
      <section className="contact contactPage">
        <div>
          <p className="eyebrow gold">LIÊN HỆ</p>
          <h1>Bạn muốn marketing tạo ra kết quả rõ ràng hơn?</h1>
          <p>Gửi thông tin website và mục tiêu hiện tại. SOHO sẽ xem xét bối cảnh và đề xuất hướng tiếp cận phù hợp để bắt đầu.</p>
        </div>
        <form onSubmit={e=>e.preventDefault()}>
          <label>Website doanh nghiệp<input placeholder="https://tenmien.vn"/></label>
          <label>Họ và tên<input placeholder="Nguyễn Văn A"/></label>
          <label>Email công việc<input type="email" placeholder="email@congty.vn"/></label>
          <label>Mục tiêu bạn đang quan tâm
            <select defaultValue="">
              <option value="" disabled>Chọn mục tiêu</option>
              <option>Tăng trưởng SEO & AI Search</option>
              <option>Tối ưu quảng cáo Google & Meta</option>
              <option>Tăng lead / doanh thu B2B, B2C</option>
              <option>Xây chiến lược Digital Marketing tổng thể</option>
            </select>
          </label>
          <button className="btn primary btnGlow">Gửi yêu cầu tư vấn <ArrowRight/></button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
