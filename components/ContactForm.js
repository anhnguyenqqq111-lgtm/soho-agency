'use client';
import {useEffect, useRef, useState} from 'react';
import styles from './ContactForm.module.css';
import {company} from './data/company';
import {sitePath} from './paths';
import Icon from './ui/Icon';
import {track} from './analytics';

/*
  Form nhận tư vấn.
  - Gửi tới NEXT_PUBLIC_FORM_ENDPOINT (POST JSON). Chỉ báo "Đã gửi" khi máy chủ trả mã 2xx.
    Endpoint gợi ý: Formspree, Getform, Google Apps Script, hoặc API riêng nối CRM. Xem README mục "Form liên hệ".
  - Chưa cấu hình endpoint: nút gửi mở ứng dụng email với nội dung đã điền sẵn (gửi tới company.email),
    không giả vờ đã gửi.
  - Chống spam: ô ẩn làm bẫy (bot điền vào thì bỏ qua) và chặn gửi quá nhanh sau khi trang tải.
  - Sau khi gửi thành công: gửi sự kiện generate_lead nếu site đã cài GA4 hoặc Google Tag Manager (components/analytics.js).
*/
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

const SERVICES = [
  'SEO website',
  'Google Ads',
  'Facebook Ads, TikTok Ads',
  'Thiết kế website',
  'Nhận diện thương hiệu',
  'Thiết kế Mobile App',
  'Nội dung, đo lường hoặc dịch vụ khác',
  'Chưa rõ, cần tư vấn nên làm gì trước'
];

const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const isPhone = v => /^(\+?84|0)\d{8,10}$/.test(v.replace(/[\s.()-]/g, ''));

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Nhập họ và tên của bạn.';
  if (!v.contact.trim()) e.contact = 'Nhập email hoặc số điện thoại để SOHO liên hệ lại.';
  else if (!isEmail(v.contact.trim()) && !isPhone(v.contact.trim())) e.contact = 'Email hoặc số điện thoại chưa đúng. Ví dụ: ten@congty.vn hoặc 0901 234 567.';
  if (!v.service) e.service = 'Chọn dịch vụ bạn quan tâm.';
  if (!v.consent) e.consent = 'Cần bạn đồng ý để SOHO được dùng thông tin này liên hệ lại.';
  return e;
}

const EMPTY = {name: '', contact: '', service: '', message: '', consent: false, website_url: ''};

// defaultService: chọn sẵn dịch vụ khi form nằm trên một trang dịch vụ (phải là một giá trị trong SERVICES)
export default function ContactForm({compact = false, idPrefix = 'cf', defaultService = ''}) {
  const initial = {...EMPTY, service: SERVICES.includes(defaultService) ? defaultService : ''};
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | mailto
  const startedAt = useRef(0);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const id = name => `${idPrefix}-${name}`;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  useEffect(() => {
    if (status !== 'idle' && status !== 'sending') statusRef.current?.focus();
  }, [status]);

  const set = (name, value) => {
    const next = {...values, [name]: value};
    setValues(next);
    if (tried) setErrors(validate(next));
  };

  const mailtoHref = () => {
    const body = [
      `Họ và tên: ${values.name}`,
      `Liên hệ: ${values.contact}`,
      `Dịch vụ quan tâm: ${values.service}`,
      `Nhu cầu: ${values.message || '(chưa ghi)'}`
    ].join('\n');
    return `mailto:${company.email}?subject=${encodeURIComponent(`Yêu cầu tư vấn: ${values.service}`)}&body=${encodeURIComponent(body)}`;
  };

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
    // Bẫy bot: ô ẩn có giá trị, hoặc gửi trong chưa tới 3 giây
    if (values.website_url || Date.now() - startedAt.current < 3000) {
      setStatus('success');
      return;
    }
    if (!ENDPOINT) {
      window.location.href = mailtoHref();
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
          contact: values.contact.trim(),
          service: values.service,
          message: values.message.trim(),
          consent: true,
          page: window.location.pathname,
          sentAt: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setValues(initial);
      track('generate_lead', {form: 'nhan-tu-van', service: values.service});
    } catch (err) {
      setStatus('error');
    }
  };

  const tel = company.phone ? company.phone.replace(/\s/g, '') : null;

  if (status === 'success') {
    return (
      <div className={styles.result} role="status" tabIndex={-1} ref={statusRef}>
        <Icon name="circle-check" size={28} className={styles.okIcon} />
        <p className={styles.resultTitle}>Đã gửi yêu cầu.</p>
        <p>
          SOHO sẽ liên hệ lại trong giờ làm việc ({company.hours}). Cần gấp, gọi <a href={`tel:${tel}`}>{company.phone}</a>.
        </p>
      </div>
    );
  }

  if (status === 'mailto') {
    return (
      <div className={styles.result} role="status" tabIndex={-1} ref={statusRef}>
        <Icon name="mail" size={28} className={styles.okIcon} />
        <p className={styles.resultTitle}>Ứng dụng email đã mở với nội dung bạn vừa điền.</p>
        <p>
          Bấm gửi trong ứng dụng email là xong. Nếu ứng dụng không mở, gửi tới <a href={mailtoHref()}>{company.email}</a> hoặc gọi{' '}
          <a href={`tel:${tel}`}>{company.phone}</a>.
        </p>
        <button type="button" className={styles.linkBtn} onClick={() => setStatus('idle')}>
          Quay lại form
        </button>
      </div>
    );
  }

  const err = name => errors[name] && tried;
  const describedBy = name => (err(name) ? id(`${name}-err`) : undefined);

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-describedby={id('note')}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={id('name')}>Họ và tên</label>
          <input
            id={id('name')}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={e => set('name', e.target.value)}
            aria-invalid={err('name') || undefined}
            aria-describedby={describedBy('name')}
            required
          />
          {err('name') && (
            <p className={styles.error} id={id('name-err')}>
              <Icon name="circle-alert" size={15} />
              {errors.name}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor={id('contact')}>Email hoặc số điện thoại</label>
          <input
            id={id('contact')}
            name="contact"
            autoComplete="email"
            inputMode="email"
            placeholder="ten@congty.vn hoặc 0901 234 567"
            value={values.contact}
            onChange={e => set('contact', e.target.value)}
            aria-invalid={err('contact') || undefined}
            aria-describedby={describedBy('contact')}
            required
          />
          {err('contact') && (
            <p className={styles.error} id={id('contact-err')}>
              <Icon name="circle-alert" size={15} />
              {errors.contact}
            </p>
          )}
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor={id('service')}>Dịch vụ quan tâm</label>
        <select
          id={id('service')}
          name="service"
          value={values.service}
          onChange={e => set('service', e.target.value)}
          aria-invalid={err('service') || undefined}
          aria-describedby={describedBy('service')}
          required
        >
          <option value="" disabled>
            Chọn một dịch vụ
          </option>
          {SERVICES.map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
        {err('service') && (
          <p className={styles.error} id={id('service-err')}>
            <Icon name="circle-alert" size={15} />
            {errors.service}
          </p>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor={id('message')}>
          Mô tả nhu cầu <span className={styles.optional}>không bắt buộc</span>
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Website hiện tại, kênh đang chạy, mục tiêu quý tới..."
          value={values.message}
          onChange={e => set('message', e.target.value)}
        />
      </div>
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={id('website_url')}>Để trống ô này</label>
        <input
          id={id('website_url')}
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={values.website_url}
          onChange={e => set('website_url', e.target.value)}
        />
      </div>
      <div className={styles.check}>
        <input
          id={id('consent')}
          type="checkbox"
          checked={values.consent}
          onChange={e => set('consent', e.target.checked)}
          aria-invalid={err('consent') || undefined}
          aria-describedby={describedBy('consent')}
        />
        <label htmlFor={id('consent')}>
          Tôi đồng ý để SOHO dùng thông tin này để liên hệ tư vấn, theo <a href={sitePath('/chinh-sach-bao-mat')}>Chính sách bảo mật</a>.
        </label>
      </div>
      {err('consent') && (
        <p className={styles.error} id={id('consent-err')}>
          <Icon name="circle-alert" size={15} />
          {errors.consent}
        </p>
      )}

      {status === 'error' && (
        <div className={styles.fail} role="alert" tabIndex={-1} ref={statusRef}>
          <Icon name="circle-alert" size={18} />
          <p>
            Chưa gửi được, thông tin bạn điền vẫn còn. Thử gửi lại, hoặc gọi <a href={`tel:${tel}`}>{company.phone}</a>.
          </p>
        </div>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={status === 'sending'} aria-busy={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Icon name="loader-circle" size={18} className={styles.spin} />
              <span>Đang gửi...</span>
            </>
          ) : (
            <>
              <span>{status === 'error' ? 'Gửi lại' : 'Nhận tư vấn'}</span>
              <Icon name="arrow-right" size={18} />
            </>
          )}
        </button>
        <p className={styles.note} id={id('note')}>
          {ENDPOINT ? 'SOHO trả lời trong giờ làm việc. Không gửi thông tin cho bên thứ ba.' : 'Bấm gửi sẽ mở ứng dụng email của bạn với nội dung đã điền sẵn.'}
        </p>
      </div>
    </form>
  );
}
