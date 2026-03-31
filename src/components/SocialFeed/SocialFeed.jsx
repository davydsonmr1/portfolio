import { useLinkedBridge } from '../../hooks/useLinkedBridge';
import { SkeletonCards } from '../UI/Loader';
import ErrorState from '../UI/ErrorState';
import PostCard from './PostCard';
import styles from './PostCard.module.css';

export default function SocialFeed() {
  const { posts, loading, error, retry, forceSyncPosts, isSyncing } = useLinkedBridge();

  if (loading) {
    return <SkeletonCards count={3} />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  return (
    <div className={styles.feedWrapper}>
      {/* Sync Button */}
      <button
        className={`${styles.syncButton} ${isSyncing ? styles.syncButtonSyncing : ''}`}
        onClick={forceSyncPosts}
        disabled={isSyncing}
        id="sync-linkedin-feed"
      >
        <span className={`${styles.syncIcon} ${isSyncing ? styles.syncIconSpinning : ''}`}>
          🔄
        </span>
        {isSyncing ? 'Sincronizando...' : 'Atualizar Feed do LinkedIn'}
      </button>

      {/* Posts */}
      {!Array.isArray(posts) || posts.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>📭</span>
          <p className={styles.emptyText}>Nenhum post encontrado no momento.</p>
        </div>
      ) : (
        <div className={styles.feedContainer}>
          {posts.map((post, index) => (
            <PostCard
              key={post.id || post._id || index}
              post={post}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
