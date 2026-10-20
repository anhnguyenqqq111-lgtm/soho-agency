/*
  Dùng được ở cả server và client component (không có state).
*/

// Logo Open Corner, cùng nét với public/assets/brand/approved/SOHO_01_Open_Corner_APPROVED.svg.
// Nét chữ lấy currentColor; accent là màu hai chữ O (mặc định cam). title có thì đọc được, không có thì ẩn với trình đọc màn hình.
export default function SohoMark({className, title, accent = '#F26522', style}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      style={style}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="17" strokeLinecap="square">
        <path d="M27 148 V27 H148" />
        <path d="M252 27 H373 V148" />
        <path d="M373 252 V373 H252" />
        <path d="M148 373 H27 V252" />
      </g>
      <g transform="translate(76 60) scale(1.06)">
        <path
          d="M 91 20 C 73 7 38 9 24 28 C 8 48 27 61 54 67 C 82 74 97 84 90 104 C 83 124 45 126 18 110"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M 262.75 62.15 H 277.25 Q 334.77 62.15 334.77 119.67 V 139.36 Q 334.77 196.88 277.25 196.88 H 262.75 Q 205.23 196.88 205.23 139.36 V 119.67 Q 205.23 62.15 262.75 62.15 Z M 262.75 85.99 H 277.25 Q 310.94 85.99 310.94 119.67 V 139.36 Q 310.94 173.05 277.25 173.05 H 274.09 V 189.25 H 251.99 V 173.05 H 262.75 Q 229.06 173.05 229.06 139.36 V 119.67 Q 229.06 85.99 262.75 85.99 Z"
        fill={accent}
        fillRule="evenodd"
      />
      <g transform="translate(75 222) scale(0.89)">
        <path d="M20 11 V120 M88 11 V120 M20 65 H88" stroke="currentColor" strokeWidth="23" strokeLinecap="square" strokeLinejoin="miter" />
      </g>
      <path
        d="M 262.75 212.15 H 277.25 Q 334.77 212.15 334.77 269.67 V 289.36 Q 334.77 346.88 277.25 346.88 H 262.75 Q 205.23 346.88 205.23 289.36 V 269.67 Q 205.23 212.15 262.75 212.15 Z M 262.75 235.99 H 275.73 V 219.78 H 297.84 V 235.99 H 277.25 Q 310.94 235.99 310.94 269.67 V 289.36 Q 310.94 323.05 277.25 323.05 H 262.75 Q 229.06 323.05 229.06 289.36 V 269.67 Q 229.06 235.99 262.75 235.99 Z"
        fill={accent}
        fillRule="evenodd"
      />
    </svg>
  );
}
