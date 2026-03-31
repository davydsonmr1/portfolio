import { motion } from 'framer-motion';
import SocialFeed from '../SocialFeed/SocialFeed';
import { SOCIAL_LINKS } from '../../utils/constants';
import styles from './SocialPage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialIcons = {
  github: '⚙',
  linkedin: '💼',
  twitter: '🐦',
};

export default function SocialPage() {
  return (
    <motion.div
      className={styles.social}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      id="page-social"
    >
      {/* Header */}
      <motion.div className={styles.header} variants={fadeUp}>
        <span className={styles.sectionLabel}>Redes Sociais</span>
        <h2 className={styles.sectionTitle}>Conecte-se Comigo</h2>
        <p className={styles.sectionSubtitle}>
          Posts em tempo real do LinkedIn via LinkedBridge API
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div className={styles.socialLinks} variants={fadeUp}>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon}>
              {socialIcons[link.icon] || '🔗'}
            </span>
            {link.name}
          </a>
        ))}
      </motion.div>

      {/* LinkedIn Feed */}
      <motion.div className={styles.feedSection} variants={fadeUp}>
        <span className={styles.feedLabel}>
          <span className={styles.liveDot} />
          LinkedIn Feed — Tempo Real
        </span>
        <SocialFeed />
      </motion.div>
    </motion.div>
  );
}
