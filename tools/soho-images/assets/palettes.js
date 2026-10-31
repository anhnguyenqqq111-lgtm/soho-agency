/*
  Bảng màu cho ảnh SOHO. Dùng chung bởi cover.html và diagram.html qua trường `palette` trong file dữ liệu.
  Màu của ảnh đi theo NGỮ CẢNH BÀI (nền tảng, chủ đề, cảm xúc), không theo giao diện website SOHO.
  `palette` nhận ba dạng:
    1. tên bảng có sẵn bên dưới: 'meta', 'google', 'seo', 'retail'...
    2. một màu nhấn bất kỳ lấy từ ngữ cảnh bài: {accent: '#7C3AED', mode: 'light' | 'dark'} → tự suy ra nền, chữ, đường kẻ, dải màu
    3. bảng đầy đủ: {logo: 'dark' | 'light', vars: {...}}
  Font, bố cục, logo SOHO giữ nguyên ở mọi bảng. Cách chọn: mục "Màu theo ngữ cảnh bài" trong SKILL.md.
*/
window.SOHO_PALETTES = {
  denim: {
    label: 'SOHO bản 12: nền xanh nhạt, chữ navy, denim + nhấn cam (60-30-10 của website)', logo: 'dark',
    vars: {paper: '#EEF3FA', 'paper-2': '#E1E9F5', white: '#FFFFFF', line: '#CFDAEA', ink: '#13213A', 'ink-2': '#3A4A66', 'ink-3': '#5E6D88',
      red: '#1E4E8C', accent: '#1E4E8C', orange: '#F26522', gold: '#F9A26C', 'grad-brand': 'linear-gradient(90deg,#1E4E8C 0%,#2F63A6 60%,#F26522 100%)'}
  },
  'denim-dark': {
    label: 'SOHO bản 12 nền tối: navy, chữ trắng, nhấn cam', logo: 'light',
    vars: {paper: '#0F2340', 'paper-2': '#1E4E8C', white: '#16305A', line: 'rgba(255,255,255,.18)', ink: '#FFFFFF', 'ink-2': 'rgba(255,255,255,.84)', 'ink-3': 'rgba(255,255,255,.64)',
      red: '#F26522', accent: '#F9A26C', orange: '#F26522', gold: '#F9A26C', 'grad-brand': 'linear-gradient(90deg,#2F63A6 0%,#F26522 100%)'}
  },
  soho: {
    label: 'SOHO mặc định: kem, nâu đen, đỏ gạch', logo: 'dark',
    vars: {paper: '#F7F3EC', 'paper-2': '#EFE9DE', white: '#FFFFFF', line: '#E1DBD0', ink: '#1B1611', 'ink-2': '#4F473E', 'ink-3': '#766D62',
      red: '#A82E10', accent: '#C9391A', orange: '#F26716', gold: '#E8A800', 'grad-brand': 'linear-gradient(90deg,#E8A800 0%,#F26716 50%,#C9391A 100%)'}
  },
  night: {
    label: 'SOHO nền tối: nâu đen, chữ kem, nhấn vàng', logo: 'light',
    vars: {paper: '#1B1611', 'paper-2': '#2E241C', white: '#2A211A', line: 'rgba(247,243,236,.18)', ink: '#F7F3EC', 'ink-2': 'rgba(247,243,236,.82)', 'ink-3': 'rgba(247,243,236,.62)',
      red: '#C9391A', accent: '#E8A800', orange: '#F26716', gold: '#E8A800', 'grad-brand': 'linear-gradient(90deg,#E8A800 0%,#F26716 50%,#C9391A 100%)'}
  },
  meta: {
    label: 'Meta Ads, Facebook, Instagram: xanh dương Meta', logo: 'dark',
    vars: {paper: '#EEF3FF', 'paper-2': '#DCE7FF', white: '#FFFFFF', line: '#C9D8F5', ink: '#0B1A3B', 'ink-2': '#35456B', 'ink-3': '#5F6E93',
      red: '#0866FF', accent: '#0866FF', orange: '#3F8CFF', gold: '#7FB0FF', 'grad-brand': 'linear-gradient(90deg,#0866FF 0%,#4A94FF 50%,#8FC1FF 100%)'}
  },
  google: {
    label: 'Google Ads, Search Console, Google Business Profile: bốn màu Google', logo: 'dark',
    vars: {paper: '#F8F9FA', 'paper-2': '#E8EAED', white: '#FFFFFF', line: '#DADCE0', ink: '#202124', 'ink-2': '#3C4043', 'ink-3': '#5F6368',
      red: '#1A73E8', accent: '#1A73E8', orange: '#EA4335', gold: '#FBBC04',
      'grad-brand': 'linear-gradient(90deg,#4285F4 0%,#4285F4 25%,#EA4335 25%,#EA4335 50%,#FBBC04 50%,#FBBC04 75%,#34A853 75%,#34A853 100%)'}
  },
  tiktok: {
    label: 'TikTok Ads, video ngắn: nền đen, hồng và xanh ngọc', logo: 'light',
    vars: {paper: '#0F0F0F', 'paper-2': '#1F1F1F', white: '#1A1A1A', line: 'rgba(255,255,255,.18)', ink: '#FFFFFF', 'ink-2': 'rgba(255,255,255,.82)', 'ink-3': 'rgba(255,255,255,.62)',
      red: '#FE2C55', accent: '#FE2C55', orange: '#FE2C55', gold: '#25F4EE', 'grad-brand': 'linear-gradient(90deg,#25F4EE 0%,#FE2C55 100%)'}
  },
  seo: {
    label: 'SEO, AI Search, organic: xanh lá', logo: 'dark',
    vars: {paper: '#EEF6EF', 'paper-2': '#DCEBDE', white: '#FFFFFF', line: '#C6DCC9', ink: '#0F2A18', 'ink-2': '#35503E', 'ink-3': '#5F7A67',
      red: '#1E8E3E', accent: '#1E8E3E', orange: '#34A853', gold: '#81C995', 'grad-brand': 'linear-gradient(90deg,#0F6B2E 0%,#1E8E3E 50%,#81C995 100%)'}
  },
  data: {
    label: 'Đo lường, GA4, tracking, CRO: xanh lam ngả ngọc', logo: 'dark',
    vars: {paper: '#EAF3F6', 'paper-2': '#D6E7EC', white: '#FFFFFF', line: '#BFD6DE', ink: '#0C2430', 'ink-2': '#35505B', 'ink-3': '#5E7882',
      red: '#0B7285', accent: '#0B7285', orange: '#1098AD', gold: '#66D9E8', 'grad-brand': 'linear-gradient(90deg,#0B7285 0%,#1098AD 50%,#66D9E8 100%)'}
  },
  content: {
    label: 'Content, thương hiệu, PR: vàng ấm', logo: 'dark',
    vars: {paper: '#FBF3DF', 'paper-2': '#F5E6BF', white: '#FFFFFF', line: '#E8D6A8', ink: '#2E2206', 'ink-2': '#5A4A1E', 'ink-3': '#85713F',
      red: '#9A6B00', accent: '#9A6B00', orange: '#E8A800', gold: '#E8A800', 'grad-brand': 'linear-gradient(90deg,#9A6B00 0%,#E8A800 50%,#F5DFA6 100%)'}
  },
  // Các bảng dưới đây suy từ một màu nhấn (xem derivePalette), đặt tên theo ngữ cảnh hay gặp.
  zalo:    {label: 'Zalo, chat, chăm sóc khách: xanh dương Zalo', accent: '#0068FF', mode: 'light'},
  tech:    {label: 'AI, CDP, tự động hóa, martech: tím', accent: '#7C3AED', mode: 'light'},
  techDark:{label: 'AI, dữ liệu trên nền tối: tím đậm', accent: '#A78BFA', mode: 'dark'},
  retail:  {label: 'Bán lẻ, cửa hàng, thương mại điện tử: cam ấm', accent: '#E8590C', mode: 'light'},
  growth:  {label: 'Tăng trưởng, doanh thu, mở rộng: xanh lục bảo', accent: '#0CA678', mode: 'light'},
  finance: {label: 'Chi phí, ngân sách, lợi nhuận: xanh navy', accent: '#1E3A8A', mode: 'light'},
  alert:   {label: 'Rủi ro, áp lực, sai lầm cần tránh: đỏ hồng', accent: '#E03131', mode: 'light'},
  pink:    {label: 'Thương hiệu, trải nghiệm khách hàng, cảm xúc: hồng', accent: '#D6336C', mode: 'light'},
  navyDark:{label: 'Chiến lược, báo cáo lớn trên nền tối: navy', accent: '#74C0FC', mode: 'dark'}
};

// ---- Suy bảng màu từ một màu nhấn ----
function hexToHsl(hex){
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex).trim());
  if (!m) return null;
  const n = parseInt(m[1], 16), r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  if (max === min) return {h: 0, s: 0, l};
  const d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return {h: h * 60, s, l};
}
const hsl = (h, s, l) => `hsl(${Math.round(((h % 360) + 360) % 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;

// Trả về {label, logo, vars}. mode 'light': nền sáng nhuốm màu nhấn, chữ gần đen; 'dark': nền tối nhuốm màu, chữ sáng.
window.derivePalette = function(accentHex, mode){
  const c = hexToHsl(accentHex);
  if (!c) return null;
  const h = c.h, s = Math.max(c.s, 0.35);
  if (mode === 'dark'){
    const acc = hsl(h, s, Math.max(c.l, 0.6));
    return {label: `Suy từ ${accentHex}, nền tối`, logo: 'light', vars: {
      paper: hsl(h, 0.3, 0.09), 'paper-2': hsl(h, 0.26, 0.15), white: hsl(h, 0.22, 0.13), line: 'rgba(255,255,255,.18)',
      ink: hsl(h, 0.3, 0.96), 'ink-2': 'rgba(255,255,255,.82)', 'ink-3': 'rgba(255,255,255,.62)',
      red: acc, accent: acc, orange: hsl(h + 25, s, 0.62), gold: hsl(h - 25, s, 0.66),
      'grad-brand': `linear-gradient(90deg,${hsl(h - 25, s, 0.66)} 0%,${acc} 50%,${hsl(h + 25, s, 0.62)} 100%)`
    }};
  }
  const acc = hsl(h, s, Math.min(c.l, 0.46));   // đủ đậm để làm chữ nhấn trên nền sáng
  return {label: `Suy từ ${accentHex}, nền sáng`, logo: 'dark', vars: {
    paper: hsl(h, 0.6, 0.96), 'paper-2': hsl(h, 0.5, 0.91), white: '#FFFFFF', line: hsl(h, 0.35, 0.84),
    ink: hsl(h, 0.45, 0.12), 'ink-2': hsl(h, 0.25, 0.3), 'ink-3': hsl(h, 0.15, 0.46),
    red: acc, accent: acc, orange: hsl(h + 25, s, 0.55), gold: hsl(h - 25, s, 0.6),
    'grad-brand': `linear-gradient(90deg,${acc} 0%,${hsl(h + 25, s, 0.55)} 50%,${hsl(h - 25, s, 0.6)} 100%)`
  }};
};

// Chuẩn hóa `palette` (tên, {accent, mode} hoặc {logo, vars}) thành {label, logo, vars}; không hợp lệ → null.
window.resolvePalette = function(spec){
  if (!spec) return window.SOHO_PALETTES.soho;
  if (typeof spec === 'string'){
    const named = window.SOHO_PALETTES[spec];
    if (!named) return null;
    return named.vars ? named : Object.assign({}, window.derivePalette(named.accent, named.mode), {label: named.label});
  }
  if (spec.vars) return {label: spec.label || 'Bảng tùy chỉnh', logo: spec.logo || 'dark', vars: spec.vars};
  if (spec.accent) return window.derivePalette(spec.accent, spec.mode || 'light');
  return null;
};

// Áp bảng màu lên :root. Trả về bảng đã áp, hoặc null nếu không hợp lệ (template in cảnh báo và dùng soho).
window.applyPalette = function(spec){
  const palette = window.resolvePalette(spec);
  const chosen = palette || window.SOHO_PALETTES.soho;
  for (const [key, value] of Object.entries(chosen.vars)) document.documentElement.style.setProperty('--' + key, value);
  return palette;
};
