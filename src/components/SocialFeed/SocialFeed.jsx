import { useLinkedBridge } from '../../hooks/useLinkedBridge';
import { SkeletonCards } from '../UI/Loader';
import ErrorState from '../UI/ErrorState';
import PostCard from './PostCard';
import styles from './PostCard.module.css';

export default function SocialFeed() {
  const { posts, loading, error, retry } = useLinkedBridge();

  if (loading) {
    return <SkeletonCards count={3} />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyIcon}>📭</span>
        <p className={styles.emptyText}>Nenhum post encontrado no momento.</p>
      </div>
    );
  }

  return (
    <div className={styles.feedContainer}>
      {posts.map((post, index) => (
        <PostCard
          key={post.id || post._id || index}
          post={post}
          index={index}
        />
      ))}
    </div>
  );
}
