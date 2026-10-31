'use client';
import {useEffect, useRef, useState} from 'react';
import base from './ContactForm.module.css';
import styles from './QuickForm.module.css';
import {company} from './data/company';
import {sitePath} from './paths';
import Icon from './ui/Icon';
import {track} from './analytics';

/*
  Form ngắn ở cột phải bài blog: họ tên, số điện thoại/Zalo, website (không bắt buộc), đồng ý chính sách.
  Gửi giống ContactForm: tới NEXT_PUBLIC_FORM_ENDPOINT nếu có, chưa có thì mở ứng dụng email điền sẵn.
  Website gửi kèm trong trường message để khớp danh sách dữ liệu đã nêu ở Chính sách bảo mật (mục 3).
*/
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';
const SERVICE = 'Chưa rõ, cần tư vấn nên làm gì trước';
const isPhone = v => /^(\+?84|0)\d{8,10}$/.test(v.replace(/[\s.()-]/g, ''));

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Nhập họ và tên của bạn.';
  if (!isPhone(v.phone.trim())) e.phone = 'Số điện thoại chưa đúng. Ví dụ: 0901 234 567.';
  if (!v.consent) e.consent = 'Cần bạn đồng ý để SOHO gọi lại.';
  return e;
}

const EMPTY = {name: '', phone: '', website: '', consent: false, website_url: ''};

export default function QuickForm({idPrefix = 'qf', source = ''}) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | mailto
  const startedAt = useRef(0);
  const formRef = useRef(null);
  const id = name => `${idPrefix}-${name}`;
  const tel = company.phone ? company.phone.replace(/\s/g, '') : null;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const set = (name, value) => {
    const next = {...values, [name]: value};
    setValues(next);
    if (tried) setErrors(validate(next));
  };
  const message = () => [values.website && `Website: ${values.website.trim()}`, source && `Gửi từ bài: ${source}`].filter(Boolean).join('\n');

  const onSubmit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    setTried(true);
    const errs = validate(values);
    setErrors(errs);
    const firstBad = Object.keys(errs)[0];
    if (firstBad) {
      formRef.current?.querySelector(`#${id(firstBad)}`)?.focus();
      return;
    }
    if (values.website_url || Date.now() - startedAt.current < 3000) {
      setStatus('success');
      return;
    }
    if (!ENDPOINT) {
      const body = [`Họ và tên: ${values.name}`, `Điện thoại/Zalo: ${values.phone}`, message()].filter(Boolean).join('\n');
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Yêu cầu tư vấn từ blog')}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({
          name: values.name.trim(),
          contact: values.phone.trim(),
          service: SERVICE,
          message: message(),
          consent: true,
          page: window.location.pathname,
          sentAt: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setValues(EMPTY);
      track('generate_lead', {form: 'blog-sidebar'});
    } catch {
      setStatus('error');
    }
  };

  const err = name => tried && errors[name];

  return (
    <div className={styles.box}>
      <p className={styles.kicker}>SOHO Agency</p>
      <p className={styles.title}>Nhận tư vấn miễn phí</p>
      <p className={styles.sub}>Để lại số điện thoại, SOHO gọi lại trong giờ làm việc.</p>

      {status === 'success' || status === 'mailto' ? (
        <p className={styles.done} role="status">
          <Icon name="circle-check" size={20} />
          {status === 'success' ? 'Đã nhận thông tin. SOHO sẽ gọi lại cho bạn.' : 'Bấm gửi trong ứng dụng email là xong.'}
        </p>
      ) : (
        <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
          <div className={base.field}>
            <label htmlFor={id('name')}>
              Họ và tên <span className={styles.req}>*</span>
            </label>
            <input id={id('name')} name="name" autoComplete="name" placeholder="Nguyễn Văn A" value={values.name} onChange={e => set('name', e.target.value)} aria-invalid={err('name') || undefined} />
            {err('name') && <p className={base.error}>{errors.name}</p>}
          </div>
          <div className={base.field}>
            <label htmlFor={id('phone')}>
              Số điện thoại / Zalo <span className={styles.req}>*</span>
            </label>
            <input id={id('phone')} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="09xx xxx xxx" value={values.phone} onChange={e => set('phone', e.target.value)} aria-invalid={err('phone') || undefined} />
            {err('phone') && <p className={base.error}>{errors.phone}</p>}
          </div>
          <div className={base.field}>
            <label htmlFor={id('website')}>Website</label>
            <input id={id('website')} name="website" inputMode="url" placeholder="tenmien.vn" value={values.website} onChange={e => set('website', e.target.value)} />
          </div>
          <div className={base.trap} aria-hidden="true">
            <label htmlFor={id('website_url')}>Để trống ô này</label>
            <input id={id('website_url')} name="website_url" tabIndex={-1} autoComplete="off" value={values.website_url} onChange={e => set('website_url', e.target.value)} />
          </div>
          <div className={`${base.check} ${styles.check}`}>
            <input id={id('consent')} type="checkbox" checked={values.consent} onChange={e => set('consent', e.target.checked)} aria-invalid={err('consent') || undefined} />
            <label htmlFor={id('consent')}>
              Đồng ý để SOHO liên hệ, theo <a href={sitePath('/chinh-sach-bao-mat')}>Chính sách bảo mật</a>.
            </label>
          </div>
          {err('consent') && <p className={base.error}>{errors.consent}</p>}
          {status === 'error' && (
            <p className={base.error} role="alert">
              Chưa gửi được. Thử lại hoặc gọi {company.phone}.
            </p>
          )}
          <button type="submit" className={styles.submit} disabled={status === 'sending'} aria-busy={status === 'sending'}>
            {status === 'sending' ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
          </button>
          <p className={styles.note}>SOHO chỉ dùng số này để gọi lại cho bạn.</p>
        </form>
      )}

      {tel && (
        <a className={styles.call} href={`tel:${tel}`}>
          <Icon name="phone" size={16} />
          Gọi {company.phone}
        </a>
      )}
    </div>
  );
}
