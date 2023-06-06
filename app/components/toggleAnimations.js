'use client';

import { useContext } from 'react';
import { AnimationsContext } from '../animationsContext';

export default function ToggleAnimations() {
  const { showAnimations, setShowAnimations } = useContext(AnimationsContext);
}
