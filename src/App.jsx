import { useBookNavigation } from './hooks/useBookNavigation';
import Book from './components/Book/Book';
import TabNav from './components/Navigation/TabNav';
import AboutPage from './components/Pages/AboutPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import SocialPage from './components/Pages/SocialPage';
import ContactPage from './components/Pages/ContactPage';
import styles from './App.module.css';

const pages = [
  <AboutPage key="about" />,
  <ProjectsPage key="projects" />,
  <SocialPage key="social" />,
  <ContactPage key="contact" />,
];

export default function App() {
  const {
    currentIndex,
    direction,
    goToPage,
    nextPage,
    prevPage,
    isFirst,
    isLast,
  } = useBookNavigation();

  return (
    <div className={styles.app}>
      {/* Noise texture overlay */}
      <div className={styles.noiseOverlay} />

      {/* Brand */}
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        Portfolio
      </div>

      {/* Tab Navigation */}
      <TabNav currentIndex={currentIndex} onNavigate={goToPage} />

      {/* 3D Book */}
      <Book
        currentIndex={currentIndex}
        direction={direction}
        onPrev={prevPage}
        onNext={nextPage}
        isFirst={isFirst}
        isLast={isLast}
      >
        {pages[currentIndex]}
      </Book>

      {/* Mobile swipe hint */}
      <span className={styles.swipeHint}>← Deslize para navegar →</span>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>© 2025 Davyd</span>
        <span className={styles.footerDivider} />
        <span>Feito com React & Framer Motion</span>
      </footer>
    </div>
  );
}
