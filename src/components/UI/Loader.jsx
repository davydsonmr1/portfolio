import styles from './Loader.module.css';

export function Spinner({ text = 'Carregando...' }) {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner} />
      <span className={styles.loaderText}>{text}</span>
    </div>
  );
}

export function SkeletonCards({ count = 3 }) {
  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
          {i % 2 === 0 && <div className={styles.skeletonImage} />}
        </div>
      ))}
    </div>
  );
}
