'use client'; // Error components must be Client Components

// styles
import styles from '@/app/styles/sucess.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// components
import LoadingDiv from '@/app/components/loadingDiv';
import Link from 'next/link';

export default function OrderSuccess() {
  return (
    <div className={styles.successWrap}>
      <div className={spacingStyles.bottomTopMarginLg}>
        <LoadingDiv />
        <div className={spacingStyles.bottomMarginLg}>
          <h2 className={textStyles.headingLg}>Order Placed!</h2>
        </div>
        <p className={textStyles.paragraphXs}>
          You will receive an email confirmation shortly.
        </p>

        <div className={spacingStyles.topMarginLg}>
          <Link
            href='/shop'
            className={textStyles.linkBlockChartreuse}>
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
