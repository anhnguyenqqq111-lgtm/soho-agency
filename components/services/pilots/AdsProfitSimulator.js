'use client';

import {useState} from 'react';
import styles from './AdsProfitSimulator.module.css';

/*
  Mô phỏng ngân sách và kinh tế đơn vị cho trang Google Ads. Mọi công thức hiện ngay cạnh kết quả.
  Số mặc định chỉ là ví dụ để bắt đầu, không phải số trung bình ngành và không phải dự báo cho doanh nghiệp nào.
*/

const FIELDS = [
  {key: 'budget', label: 'Ngân sách quảng cáo mỗi tháng', unit: 'đ', min: 1000000, max: 500000000, step: 1000000, def: 30000000},
  {key: 'cpc', label: 'Chi phí mỗi lượt bấm (CPC)', unit: 'đ', min: 500, max: 100000, step: 500, def: 8000},
  {key: 'cr', label: 'Tỉ lệ lượt bấm thành khách để lại thông tin', unit: '%', min: 0.1, max: 30, step: 0.1, def: 3},
  {key: 'close', label: 'Tỉ lệ khách để lại thông tin thành khách mua', unit: '%', min: 1, max: 100, step: 1, def: 20},
  {key: 'revenue', label: 'Doanh thu trung bình mỗi khách mua', unit: 'đ', min: 100000, max: 200000000, step: 100000, def: 6000000},
  {key: 'variable', label: 'Chi phí biến đổi (giá vốn, vận chuyển, hoa hồng) trên doanh thu', unit: '%', min: 0, max: 95, step: 1, def: 55}
];

const DEFAULTS = Object.fromEntries(FIELDS.map(f => [f.key, f.def]));
const money = n => (Number.isFinite(n) ? `${Math.round(n).toLocaleString('vi-VN')} đ` : 'Không xác định');
const count = n => (Number.isFinite(n) ? (n < 10 ? n.toLocaleString('vi-VN', {maximumFractionDigits: 1}) : Math.round(n).toLocaleString('vi-VN')) : '0');
const ratio = n => (Number.isFinite(n) ? `${n.toLocaleString('vi-VN', {maximumFractionDigits: 2})}×` : 'Không xác định');

function simulate(v) {
  const clicks = v.cpc > 0 ? v.budget / v.cpc : 0;
  const leads = clicks * (v.cr / 100);
  const customers = leads * (v.close / 100);
  const revenue = customers * v.revenue;
  const variableCost = revenue * (v.variable / 100);
  const profit = revenue - variableCost - v.budget;
  const margin = 1 - v.variable / 100;
  return {
    clicks,
    leads,
    customers,
    revenue,
    variableCost,
    profit,
    cpl: leads > 0 ? v.budget / leads : NaN,
    cac: customers > 0 ? v.budget / customers : NaN,
    roas: v.budget > 0 ? revenue / v.budget : NaN,
    breakEvenCac: v.revenue * margin,
    breakEvenRoas: margin > 0 ? 1 / margin : NaN
  };
}

export default function AdsProfitSimulator() {
  const [v, setV] = useState(DEFAULTS);
  const r = simulate(v);
  const set = (key, raw, f) => {
    const n = Number(raw);
    if (!Number.isFinite(n)) return;
    setV(prev => ({...prev, [key]: Math.min(f.max, Math.max(0, n))}));
  };
  const profitable = r.profit > 0;

  return (
    <div className={styles.sim}>
      <form className={styles.inputs} onSubmit={e => e.preventDefault()} aria-label="Giả định đầu vào">
        {FIELDS.map(f => (
          <div key={f.key} className={styles.field}>
            <label htmlFor={`sim-${f.key}`} id={`sim-${f.key}-label`}>
              {f.label}
            </label>
            <div className={styles.numberRow}>
              <input
                id={`sim-${f.key}`}
                type="number"
                inputMode="decimal"
                min={0}
                max={f.max}
                step={f.step}
                value={v[f.key]}
                onChange={e => set(f.key, e.target.value, f)}
              />
              <span className={styles.unit}>{f.unit}</span>
            </div>
            {f.unit === 'đ' && <span className={styles.echo}>{money(v[f.key])}</span>}
            <input
              type="range"
              className={styles.range}
              aria-labelledby={`sim-${f.key}-label`}
              min={f.min}
              max={f.max}
              step={f.step}
              value={Math.max(f.min, v[f.key])}
              onChange={e => set(f.key, e.target.value, f)}
            />
          </div>
        ))}
        <button type="button" className={styles.reset} onClick={() => setV(DEFAULTS)}>
          Về số ví dụ ban đầu
        </button>
      </form>

      <div className={styles.outputs} aria-live="polite">
        <ol className={styles.funnel} aria-label="Phễu từ ngân sách tới khách mua">
          <li>
            <span className={styles.fLabel}>Lượt bấm</span>
            <span className={styles.fValue}>{count(r.clicks)}</span>
            <code>ngân sách ÷ CPC</code>
          </li>
          <li>
            <span className={styles.fLabel}>Khách để lại thông tin</span>
            <span className={styles.fValue}>{count(r.leads)}</span>
            <code>lượt bấm × tỉ lệ chuyển đổi</code>
          </li>
          <li>
            <span className={styles.fLabel}>Khách mua</span>
            <span className={styles.fValue}>{count(r.customers)}</span>
            <code>khách để lại thông tin × tỉ lệ chốt</code>
          </li>
        </ol>

        <dl className={styles.ledger}>
          <div>
            <dt>Doanh thu</dt>
            <dd>{money(r.revenue)}</dd>
            <dd className={styles.formula}>khách mua × doanh thu mỗi khách</dd>
          </div>
          <div>
            <dt>Chi phí biến đổi</dt>
            <dd>− {money(r.variableCost)}</dd>
            <dd className={styles.formula}>doanh thu × % chi phí biến đổi</dd>
          </div>
          <div>
            <dt>Chi phí quảng cáo</dt>
            <dd>− {money(v.budget)}</dd>
            <dd className={styles.formula}>ngân sách</dd>
          </div>
          <div className={styles.total} data-state={profitable ? 'gain' : 'loss'}>
            <dt>Lợi nhuận sau quảng cáo</dt>
            <dd>{money(r.profit)}</dd>
            <dd className={styles.formula}>doanh thu − chi phí biến đổi − chi phí quảng cáo</dd>
          </div>
        </dl>

        <dl className={styles.units}>
          <div>
            <dt>Chi phí mỗi khách để lại thông tin</dt>
            <dd>{money(r.cpl)}</dd>
            <dd className={styles.formula}>ngân sách ÷ khách để lại thông tin</dd>
          </div>
          <div>
            <dt>Chi phí có một khách mua</dt>
            <dd>{money(r.cac)}</dd>
            <dd className={styles.formula}>ngân sách ÷ khách mua</dd>
          </div>
          <div>
            <dt>Mức tối đa để hòa vốn</dt>
            <dd>{money(r.breakEvenCac)}</dd>
            <dd className={styles.formula}>doanh thu mỗi khách × (1 − % chi phí biến đổi)</dd>
          </div>
          <div>
            <dt>Doanh thu trên chi phí (ROAS)</dt>
            <dd>{ratio(r.roas)}</dd>
            <dd className={styles.formula}>doanh thu ÷ ngân sách; hòa vốn ở {ratio(r.breakEvenRoas)}</dd>
          </div>
        </dl>

        <p className={styles.verdict} data-state={profitable ? 'gain' : 'loss'}>
          {profitable
            ? 'Với giả định này, mỗi khách mua đang tốn ít hơn mức hòa vốn. Việc tiếp theo là kiểm tra các tỉ lệ trên có đúng với dữ liệu thật không.'
            : 'Với giả định này, mỗi khách mua đang tốn nhiều hơn mức hòa vốn. Tăng ngân sách sẽ lỗ nhiều hơn; cần sửa tỉ lệ chuyển đổi, tỉ lệ chốt hoặc chọn nhóm hàng biên lợi nhuận cao hơn trước.'}
        </p>
        <p className={styles.note}>
          Mô phỏng giả định, không phải dự báo hay cam kết kết quả. Số mặc định chỉ là ví dụ, không phải số trung bình ngành. Chưa tính khách mua lại, chi phí
          cố định và thuế.
        </p>
      </div>
    </div>
  );
}
