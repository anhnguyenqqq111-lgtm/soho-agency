'use client';
import {useEffect, useState} from 'react';
import styles from './ArticleBody.module.css';

export default function Toc({items}){
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      {rootMargin: '-15% 0px -70% 0px'}
    );
    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol className={styles.tocList}>
      {items.map(item => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={active === item.id ? styles.tocActive : undefined}
            aria-current={active === item.id ? 'location' : undefined}
          >
            <span className={styles.tocIndex}>{item.index}</span>
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <nav className={styles.tocDesktop} aria-label="Mục lục">
        <p className={styles.tocLabel}>Mục lục</p>
        {list}
      </nav>
      <details className={styles.tocMobile}>
        <summary>Mục lục</summary>
        {list}
      </details>
    </>
  );
}
