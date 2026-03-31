import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PAGES } from '../../utils/constants';
import styles from './TabNav.module.css';

export default function TabNav({ currentIndex, onNavigate }) {
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeTab = tabRefs.current[currentIndex];
    if (activeTab) {
      const parent = activeTab.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - parentRect.left,
        width: tabRect.width,
      });
    }
  }, [currentIndex]);

  return (
    <nav className={styles.nav} id="portfolio-navigation" role="tablist">
      <motion.div
        className={styles.activeIndicator}
        animate={indicatorStyle}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      />
      {PAGES.map((page, index) => (
        <button
          key={page.id}
          ref={(el) => (tabRefs.current[index] = el)}
          className={`${styles.tab} ${index === currentIndex ? styles.tabActive : ''}`}
          onClick={() => onNavigate(index)}
          role="tab"
          aria-selected={index === currentIndex}
          aria-controls={`page-${page.id}`}
          id={`tab-${page.id}`}
        >
          <span className={styles.tabIcon}>{page.icon}</span>
          {page.label}
        </button>
      ))}
    </nav>
  );
}
