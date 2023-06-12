'use client';

// styles
import styles from '../styles/(component_styles)/loading.module.css';

export default function LoadingDiv() {
  return (
    <>
      <div className={styles.loadingDivWrapper}>
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
