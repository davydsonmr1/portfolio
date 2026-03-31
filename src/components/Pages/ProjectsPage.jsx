import { motion } from 'framer-motion';
import { PROJECTS } from '../../utils/constants';
import styles from './ProjectsPage.module.css';

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

function getSizeClass(size) {
  switch (size) {
    case 'large': return styles.sizeLarge;
    case 'medium': return styles.sizeMedium;
    default: return styles.sizeSmall;
  }
}

export default function ProjectsPage() {
  return (
    <div className={styles.projects} id="page-projects">
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Portfólio</span>
        <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
      </div>

      <motion.div
        className={styles.bentoGrid}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {PROJECTS.map((project) => (
          <motion.a
            key={project.id}
            className={`${styles.projectCard} ${getSizeClass(project.size)}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariant}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={styles.cardAccent}
              style={{ background: project.color }}
            />

            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
            </div>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <span className={styles.cardArrow}>↗</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
