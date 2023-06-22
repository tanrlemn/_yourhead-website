'use client';

// hooks
import { useEffect, useState, useCallback } from 'react';

export const usePreserveScroll = () => {
  const [currentScrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [onScroll]);

  return currentScrollY;
};
