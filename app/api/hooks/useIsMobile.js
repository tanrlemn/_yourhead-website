'use client';

// hooks
import { useWindowSize } from './useWindowSize';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    useMediaQuery('only screen and (max-width: 1090px)')
  );

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile]);

  return isMobile;
}
