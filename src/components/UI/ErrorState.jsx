import { motion } from 'framer-motion';
import styles from './ErrorState.module.css';

export default function ErrorState({ message, onRetry }) {
  return (
    <motion.div
      className={styles.errorWrapper}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className={styles.errorIcon}>⚠</span>
      <h3 className={styles.errorTitle}>Algo deu errado</h3>
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          ↻ Tentar novamente
        </button>
      )}
    </motion.div>
  );
}
