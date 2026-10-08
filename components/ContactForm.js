'use client';
import {useState} from 'react';
import styles from './ContactForm.module.css';

const GOALS = [
  'Tăng trưởng SEO và AI Search',
  'Tối ưu quảng cáo Google, Meta, TikTok',
  'Tăng lead hoặc doanh thu từ website',
  'Sửa tracking, GA4 và báo cáo',
  'Chưa rõ, cần tư vấn thứ tự ưu tiên'
];

export default function ContactForm(){
  const [sent, setSent] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    // TODO: nối API gửi form (CRM, email hoặc Google Sheet).
    setSent(true);
  };

  if (sent){
    return (
      <div className={styles.done} role="status">
        <p className={styles.doneTitle}>Đã nhận thông tin.</p>
        <p>
          SOHO sẽ phản hồi qua email trong 1 ngày làm việc{' '}
          <span className="placeholder">[CẦN XÁC NHẬN]</span>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label htmlFor="cf-website">Website doanh nghiệp</label>
        <input id="cf-website" name="website" type="url" placeholder="https://tenmien.vn" required />
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-name">Họ và tên</label>
          <input id="cf-name" name="name" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-phone">Số điện thoại <span className={styles.optional}>không bắt buộc</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-email">Email công việc</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="ten@congty.vn" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-goal">Bạn cần giải quyết việc gì</label>
        <select id="cf-goal" name="goal" defaultValue="" required>
          <option value="" disabled>Chọn một mục</option>
          {GOALS.map(goal => <option key={goal}>{goal}</option>)}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-note">Ghi chú <span className={styles.optional}>không bắt buộc</span></label>
        <textarea id="cf-note" name="note" rows={3} placeholder="Ngân sách hiện tại, kênh đang chạy, mục tiêu quý tới..." />
      </div>
      <button type="submit" className={styles.submit}>Gửi thông tin</button>
    </form>
  );
}
