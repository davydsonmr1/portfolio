import styles from './GlassCard.module.css';

export default function GlassCard({ children, className = '', hoverable = false, style = {}, onClick }) {
  return (
    <div
      className={`${styles.card} ${hoverable ? styles.cardHoverable : ''} ${className}`}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
