/*
  Hình hình học cho 6 thẻ dịch vụ (Brand Identity 3.0): cùng bảng màu cam, san hô, tím trên nền Midnight,
  mỗi dịch vụ một ý riêng. SVG vẽ tay, không phải ảnh render 3D; ánh sáng giả lập bằng gradient.
  SEO: đường bậc thang dẫn tới thấu kính. Google Ads: sóng tín hiệu kích hoạt một khối.
  Facebook Ads: ba nhóm khách nối nhau. Website: các lớp giao diện chồng lên nhau.
  Nhận diện: hình vuông biến dần thành hình tròn. Mobile App: khối máy với các mô-đun.
*/
function Defs({id}) {
  return (
    <defs>
      <linearGradient id={`${id}-warm`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF9A5C" />
        <stop offset=".45" stopColor="#F26522" />
        <stop offset="1" stopColor="#B83A10" />
      </linearGradient>
      <linearGradient id={`${id}-sig`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#F26522" />
        <stop offset=".48" stopColor="#EC4899" />
        <stop offset="1" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id={`${id}-violet`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#9B6BFF" />
        <stop offset=".5" stopColor="#6D28D9" />
        <stop offset="1" stopColor="#2E1166" />
      </linearGradient>
      <linearGradient id={`${id}-coral`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF8CC6" />
        <stop offset=".5" stopColor="#EC4899" />
        <stop offset="1" stopColor="#8E1D57" />
      </linearGradient>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFFFF" stopOpacity=".22" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity=".02" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx=".5" cy=".5" r=".5">
        <stop offset="0" stopColor="#F26522" stopOpacity=".55" />
        <stop offset="1" stopColor="#F26522" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

const ART = {
  'seo-tong-the': id => (
    <>
      <ellipse cx="220" cy="70" rx="90" ry="70" fill={`url(#${id}-glow)`} />
      <path d="M30 180h60v-36h60v-36h60v-36h40v108H30z" fill={`url(#${id}-violet)`} opacity=".85" />
      <path d="M30 180h60v-36h60v-36h60v-36" fill="none" stroke={`url(#${id}-sig)`} strokeWidth="5" strokeLinejoin="round" />
      <circle cx="232" cy="62" r="30" fill="none" stroke={`url(#${id}-warm)`} strokeWidth="14" />
      <path d="M252 84l26 26" stroke={`url(#${id}-warm)`} strokeWidth="14" strokeLinecap="round" />
      <circle cx="232" cy="62" r="16" fill={`url(#${id}-glass)`} />
    </>
  ),
  'google-ads-shopping': id => (
    <>
      <ellipse cx="160" cy="110" rx="120" ry="80" fill={`url(#${id}-glow)`} />
      {[96, 72, 48].map((r, i) => (
        <path
          key={r}
          d={`M${160 - r} 150a${r} ${r} 0 0 1 ${2 * r} 0`}
          fill="none"
          stroke={`url(#${id}-sig)`}
          strokeWidth="6"
          opacity={0.35 + i * 0.25}
          strokeLinecap="round"
        />
      ))}
      <rect x="128" y="112" width="64" height="64" rx="10" fill={`url(#${id}-warm)`} />
      <rect x="128" y="112" width="64" height="22" rx="10" fill={`url(#${id}-glass)`} />
      <circle cx="160" cy="150" r="9" fill="#FFFFFF" />
    </>
  ),
  'meta-tiktok-ads': id => (
    <>
      <ellipse cx="160" cy="100" rx="130" ry="70" fill={`url(#${id}-glow)`} />
      <path d="M78 118C120 40 200 40 242 118" fill="none" stroke={`url(#${id}-sig)`} strokeWidth="10" strokeLinecap="round" opacity=".8" />
      <path d="M78 118C130 176 190 176 242 118" fill="none" stroke={`url(#${id}-violet)`} strokeWidth="6" strokeLinecap="round" opacity=".7" />
      <circle cx="78" cy="118" r="30" fill={`url(#${id}-warm)`} />
      <circle cx="160" cy="62" r="24" fill={`url(#${id}-coral)`} />
      <circle cx="242" cy="118" r="34" fill={`url(#${id}-violet)`} />
      <circle cx="70" cy="108" r="10" fill={`url(#${id}-glass)`} />
    </>
  ),
  'thiet-ke-website': id => (
    <>
      <ellipse cx="190" cy="90" rx="120" ry="70" fill={`url(#${id}-glow)`} />
      <rect x="120" y="30" width="160" height="110" rx="12" fill={`url(#${id}-violet)`} opacity=".9" />
      <rect x="84" y="56" width="160" height="110" rx="12" fill={`url(#${id}-coral)`} opacity=".9" />
      <rect x="48" y="82" width="160" height="96" rx="12" fill={`url(#${id}-warm)`} />
      <rect x="48" y="82" width="160" height="20" rx="10" fill="#141218" opacity=".35" />
      <rect x="62" y="116" width="74" height="10" rx="5" fill="#FFFFFF" opacity=".9" />
      <rect x="62" y="136" width="120" height="8" rx="4" fill="#FFFFFF" opacity=".5" />
    </>
  ),
  'nhan-dien-thuong-hieu': id => (
    <>
      <ellipse cx="160" cy="100" rx="140" ry="70" fill={`url(#${id}-glow)`} />
      <rect x="28" y="66" width="68" height="68" rx="4" fill={`url(#${id}-violet)`} />
      <path d="M124 66h34a34 34 0 0 1 34 34v34h-68z" fill={`url(#${id}-coral)`} />
      <circle cx="258" cy="100" r="36" fill={`url(#${id}-warm)`} />
      <circle cx="248" cy="88" r="12" fill={`url(#${id}-glass)`} />
      <path d="M100 100h18M196 100h18" stroke="#FFFFFF" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  'thiet-ke-mobile-app': id => (
    <>
      <ellipse cx="160" cy="100" rx="120" ry="80" fill={`url(#${id}-glow)`} />
      <rect x="118" y="20" width="86" height="164" rx="18" fill={`url(#${id}-violet)`} />
      <rect x="126" y="34" width="70" height="136" rx="10" fill="#141218" opacity=".55" />
      <rect x="134" y="44" width="26" height="26" rx="6" fill={`url(#${id}-warm)`} />
      <rect x="164" y="44" width="24" height="26" rx="6" fill={`url(#${id}-coral)`} />
      <rect x="134" y="76" width="54" height="34" rx="6" fill={`url(#${id}-sig)`} />
      <rect x="226" y="62" width="44" height="44" rx="10" fill={`url(#${id}-warm)`} opacity=".9" />
      <rect x="52" y="104" width="44" height="44" rx="10" fill={`url(#${id}-coral)`} opacity=".85" />
    </>
  )
};

export default function ServiceArt({slug, className}) {
  const draw = ART[slug];
  if (!draw) return null;
  const id = `sa-${slug}`;
  return (
    <svg className={className} viewBox="0 0 320 200" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
      <Defs id={id} />
      {draw(id)}
    </svg>
  );
}
