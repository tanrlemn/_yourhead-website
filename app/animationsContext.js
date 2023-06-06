'use client';

import { createContext } from 'react';

export const AnimationsContext = createContext({
  showAnimations: true,
  setShowAnimations: () => {},
});
