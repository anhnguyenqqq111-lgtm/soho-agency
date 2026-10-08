'use client';
import {useState} from 'react';
import styles from './Accordion.module.css';

/*
  Danh sách bước đánh số, mở một mục tại một thời điểm (theo "Ba bước" của GOHA).
  items: [{title, text}]
*/
export default function Accordion({items, defaultOpen = 0}){
  const [open, setOpen] = useState(defaultOpen);
  return (
    <ol className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.title} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button type="button" className={styles.head} aria-expanded={isOpen} aria-controls={`acc-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className={styles.num}>{i + 1}</span>
              <span className={styles.title}>{item.title}</span>
            </button>
            <div id={`acc-${i}`} className={styles.panel} hidden={!isOpen}>
              <p>{item.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
