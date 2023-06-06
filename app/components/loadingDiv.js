'use client';

import styles from './componentStyles/loading.module.css';
import { useContext } from 'react';
import { AnimationsContext } from '../animationsContext';

export default function LoadingDiv() {
  const { showAnimations } = useContext(AnimationsContext);

  return (
    <>
      {showAnimations && (
        <div className={styles.loadingDivWrapper}>
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
