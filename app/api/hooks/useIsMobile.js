'use client';

// hooks
import { useWindowSize } from './useWindowSize';

export function useIsMobile() {
  const windowSize = useWindowSize();

  return windowSize < 1090 ? true : false;
}
