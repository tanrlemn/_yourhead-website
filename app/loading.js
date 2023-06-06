import styles from './components/componentStyles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
