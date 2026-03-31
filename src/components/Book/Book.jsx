import { AnimatePresence, motion } from 'framer-motion';
import styles from './Book.module.css';

// 3D page flip variants
const pageVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
  }),
};

// Simpler variants for mobile (no 3D)
const mobileVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const pageTransition = {
  type: 'spring',
  stiffness: 60,
  damping: 18,
  mass: 1,
};

const mobileTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

function useIsMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

export default function Book({
  children,
  currentIndex,
  direction,
  onPrev,
  onNext,
  isFirst,
  isLast,
}) {
  const isMobile = useIsMobile();
  const variants = isMobile ? mobileVariants : pageVariants;
  const transition = isMobile ? mobileTransition : pageTransition;

  return (
    <div className={styles.bookScene}>
      {/* Nav arrows */}
      <button
        className={`${styles.navArrow} ${styles.navPrev}`}
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Página anterior"
        id="nav-prev"
      >
        ‹
      </button>

      <div className={styles.book}>
        <div className={styles.cornerTL} />
        <div className={styles.cornerBR} />

        <div className={styles.pageContainer}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className={styles.page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              style={{ transformOrigin: 'left center' }}
              role="tabpanel"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        <span className={styles.pageNumber}>
          {String(currentIndex + 1).padStart(2, '0')} / 04
        </span>
      </div>

      <button
        className={`${styles.navArrow} ${styles.navNext}`}
        onClick={onNext}
        disabled={isLast}
        aria-label="Próxima página"
        id="nav-next"
      >
        ›
      </button>
    </div>
  );
}
