'use client';

import { useContext } from 'react';
import styles from './components/componentStyles/loading.module.css';
import { AnimationsContext } from './animationsContext';

export default function Loading() {
  const { showAnimations } = useContext(AnimationsContext);

  return (
    <>
      {showAnimations && (
        <div className={styles.loadingWrapper}>
          <div className={styles.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}
