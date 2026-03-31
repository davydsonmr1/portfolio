import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import styles from './AboutPage.module.css';

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <motion.div
      className={styles.about}
      variants={stagger}
      initial="hidden"
      animate="show"
      id="page-about"
    >
      {/* Profile Header */}
      <motion.div className={styles.profileHeader} variants={fadeUp}>
        <div className={styles.avatarRing}>
          <div className={styles.avatar}>
            {PERSONAL_INFO.name.charAt(0)}
          </div>
        </div>
        <div className={styles.nameGroup}>
          <h1 className={styles.name}>{PERSONAL_INFO.name}</h1>
          <span className={styles.title}>{PERSONAL_INFO.title}</span>
          <span className={styles.subtitle}>{PERSONAL_INFO.subtitle}</span>
        </div>
      </motion.div>

      {/* Location */}
      <motion.div className={styles.location} variants={fadeUp}>
        <span className={styles.locationDot} />
        {PERSONAL_INFO.location}
      </motion.div>

      {/* Bio */}
      <motion.p className={styles.bio} variants={fadeUp}>
        {PERSONAL_INFO.bio}
      </motion.p>

      {/* Stats */}
      <motion.div className={styles.stats} variants={fadeUp}>
        <div className={styles.stat}>
          <span className={styles.statValue}>3+</span>
          <span className={styles.statLabel}>Anos de Exp.</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>15+</span>
          <span className={styles.statLabel}>Projetos</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>5+</span>
          <span className={styles.statLabel}>Tecnologias</span>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div className={styles.skillsSection} variants={fadeUp}>
        <h3 className={styles.skillsTitle}>Tecnologias & Stack</h3>
        <div className={styles.skills}>
          {PERSONAL_INFO.skills.map((skill, index) => (
            <motion.span
              key={skill}
              className={styles.skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.04 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
