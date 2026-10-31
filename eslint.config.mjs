import {FlatCompat} from '@eslint/eslintrc';

// ESLint 9 flat config với bộ quy tắc Next.js Core Web Vitals (eslint-config-next 15 còn ở dạng cấu hình cũ, nên dùng FlatCompat).
const compat = new FlatCompat({baseDirectory: import.meta.dirname});

const config = [
  ...compat.extends('next/core-web-vitals'),
  // docs/ và tools/ chứa script Figma, template ảnh chạy trong trình duyệt (window.*), không phải mã của site
  {ignores: ['out/**', '.next/**', 'node_modules/**', 'docs/**', 'tools/**', 'public/**']},
  {
    rules: {
      // Site xuất tĩnh với images.unoptimized: next/image không tối ưu được gì, dùng <img> có width/height là đủ
      '@next/next/no-img-element': 'off'
    }
  }
];

export default config;
