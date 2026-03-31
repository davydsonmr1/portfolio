import { useState, useEffect, useCallback } from 'react';
import { API_BASE_URL, API_KEY } from '../utils/constants';

/**
 * Custom hook for fetching LinkedIn posts from LinkedBridge API.
 * Handles loading, error, and retry states.
 */
export function useLinkedBridge() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'GET',
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? 'Chave de API inválida'
            : response.status === 429
            ? 'Muitas requisições. Tente novamente em breve.'
            : `Erro ao buscar posts (${response.status})`
        );
      }

      const json = await response.json();
      console.log("🔗 API Response:", json);
      // Filtro de Segurança: Extrai a lista verificando 'data' ou 'posts'
      const extractedData = json?.data || json?.posts || json;
      const validPosts = Array.isArray(extractedData) ? extractedData : [];
      setPosts(validPosts);
    } catch (err) {
      setError(err.message || 'Erro de conexão. Verifique sua internet.');
    } finally {
      setLoading(false);
    }
  }, []);

  const forceSyncPosts = useCallback(async () => {
    setIsSyncing(true);
    try {
      const response = await fetch(`${API_BASE_URL}/posts/sync`, {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json' // 👈 A Linha Mágica que faltava!
        },
        body: JSON.stringify({}) // 👈 Satisfaz o Fastify com um corpo JSON vazio
      });

      if (!response.ok) {
        throw new Error(`Erro ao sincronizar (${response.status})`);
      }

      // Sync succeeded — refetch fresh posts
      await fetchPosts();
    } catch (err) {
      setError(err.message || 'Erro ao sincronizar com o LinkedIn.');
    } finally {
      setIsSyncing(false);
    }
  }, [fetchPosts]);


  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, retry: fetchPosts, forceSyncPosts, isSyncing };
}
