'use client';
import {useState} from 'react';
import styles from './ProcessAccordion.module.css';
import Icon from '../ui/Icon';

/*
  Quy trình hợp tác dạng accordion (học Positivus). Mở nhiều mục cùng lúc được; mục đầu mở sẵn.
  Nút có aria-expanded/aria-controls, dùng được bằng bàn phím; chiều cao chuyển mượt bằng grid-template-rows,
  không làm nhảy bố cục. items: [{title, text, points?}]
*/
export default function ProcessAccordion({items}) {
  const [open, setOpen] = useState(() => new Set([0]));
  const toggle = i =>
    setOpen(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  return (
    <ol className={styles.list}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <li key={it.title} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <h3 className={styles.heading}>
              <button type="button" className={styles.btn} aria-expanded={isOpen} aria-controls={`step-${i}`} id={`step-btn-${i}`} onClick={() => toggle(i)}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.title}>{it.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={isOpen ? 'minus' : 'plus'} size={20} />
                </span>
              </button>
            </h3>
            <div id={`step-${i}`} role="region" aria-labelledby={`step-btn-${i}`} className={styles.panel} inert={!isOpen}>
              <div className={styles.inner}>
                <p>{it.text}</p>
                {it.points && (
                  <ul>
                    {it.points.map(p => (
                      <li key={p}>
                        <Icon name="check" size={16} />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
