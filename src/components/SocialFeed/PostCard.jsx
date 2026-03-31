import { useState } from 'react';
import { motion } from 'framer-motion';
import { formatRelativeDate } from '../../utils/formatDate';
import { PERSONAL_INFO } from '../../utils/constants';
import styles from './PostCard.module.css';

export default function PostCard({ post, index }) {
  const [expanded, setExpanded] = useState(false);
  const text = post.text || post.content || '';
  const imageUrl = post.imageUrl || post.image_url || post.image || null;
  const date = post.publishedAt || post.published_at || post.date || post.createdAt || post.created_at;
  const isLong = text.length > 250;

  return (
    <motion.article
      className={styles.postCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      {/* Header */}
      <div className={styles.postHeader}>
        <div className={styles.linkedinIcon}>in</div>
        <div className={styles.postMeta}>
          <span className={styles.postAuthor}>{PERSONAL_INFO.name}</span>
          {date && (
            <span className={styles.postDate}>{formatRelativeDate(date)}</span>
          )}
        </div>
      </div>

      {/* Text */}
      {text && (
        <p className={`${styles.postText} ${isLong && !expanded ? styles.postTextTruncated : ''}`}>
          {text}
        </p>
      )}
      {isLong && (
        <button
          className={styles.readMore}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '← Mostrar menos' : 'Ler mais →'}
        </button>
      )}

      {/* Image */}
      {imageUrl && (
        <img
          className={styles.postImage}
          src={imageUrl}
          alt="Post do LinkedIn"
          loading="lazy"
        />
      )}
    </motion.article>
  );
}
