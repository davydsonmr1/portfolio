import { useState, useCallback } from 'react';
import { PAGES } from '../utils/constants';

/**
 * Custom hook for managing book navigation state.
 * Tracks current page index and navigation direction for flip animations.
 */
export function useBookNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goToPage = useCallback((index) => {
    if (index === currentIndex || index < 0 || index >= PAGES.length) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextPage = useCallback(() => {
    if (currentIndex < PAGES.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const prevPage = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  return {
    currentIndex,
    currentPage: PAGES[currentIndex],
    direction,
    goToPage,
    nextPage,
    prevPage,
    totalPages: PAGES.length,
    isFirst: currentIndex === 0,
    isLast: currentIndex === PAGES.length - 1,
  };
}
