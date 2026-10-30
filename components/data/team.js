// Người thật của SOHO. Ảnh do SOHO gửi ngày 31/10/2026; nền được tách bằng Apple Vision (không vẽ lại, không đổi mặt, dáng, trang phục).
// Bản gốc ở docs/private/team/ (không commit). name: chưa có, SOHO cần bổ sung; khi chưa có thì chỉ hiện vai trò.
// consentRef: cần lưu lời đồng ý của từng người cho dùng ảnh trên website (tin nhắn hoặc email).
export const team = [
  {
    key: 'pm',
    name: null,
    role: 'Phụ trách quản lý dự án và quan hệ khách hàng',
    short: 'Người phụ trách dự án',
    does: 'Gặp bạn buổi đầu, lên kế hoạch, theo sát từng việc và báo cáo cho bạn.',
    photo: '/media/team/pm-lead.webp',
    width: 498,
    height: 741,
    consentRef: null
  },
  {
    key: 'mkt',
    name: null,
    role: 'Phụ trách marketing và thực thi website',
    short: 'Người làm marketing và website',
    does: 'Trực tiếp làm SEO, quảng cáo và website, đo số và sửa theo từng vòng 2 tuần.',
    photo: '/media/team/mkt-lead.webp',
    width: 294,
    height: 752,
    consentRef: null
  }
];

export function getPerson(key) {
  return team.find(p => p.key === key);
}
