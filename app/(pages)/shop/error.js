'use client'; // Error components must be Client Components

// styles
import styles from '@/app/styles/error.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// hooks
import { useEffect } from 'react';

// components
import LoadingDiv from '@/app/_components/loadingDiv';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorWrap}>
      <div className={spacingStyles.bottomTopMarginLg}>
        <LoadingDiv />

        <h2 className={textStyles.headingLg}>Oops... </h2>
        <p className={textStyles.paragraphXs}>Something went wrong</p>

        <div className={spacingStyles.topMarginLg}>
          <div
            onClick={() => reset()}
            className={textStyles.linkBlockChartreuse}>
            Try again
          </div>
        </div>
      </div>
    </div>
  );
}
