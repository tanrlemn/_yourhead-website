'use client';

// styles
import styles from './styles/home.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';
import owner from '@/public/images/selectedWorks/owner.webp';
import bliss from '@/public/images/selectedWorks/bliss.webp';

// hooks
import { useEffect, useState, useContext } from 'react';
import { useIsMobile } from './api/hooks/useIsMobile';

// components
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const mobile = useIsMobile();
  const [imgMax, setImgMax] = useState(!mobile ? '100%' : 35);
  const [imgMin, setImgMin] = useState(!mobile ? '100%' : 25);

  useEffect(() => {
    setImgMax(mobile ? '100%' : 35);
    setImgMin(mobile ? '100%' : 25);
  }, [mobile]);

  const squareImage = {
    objectFit: 'cover',
    borderRadius: '9px',
    height: mobile ? imgMax : 'auto',
    width: mobile ? imgMin : 'auto',
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={textStyles.headingXl}>artist.</h1>
          <div className={spacingStyles.bottomTopMarginLg}>
            <p className={textStyles.paragraphMain}>YOURHEAD</p>
          </div>
          <div className={styles.heroButtonsWrap}>
            <div className={spacingStyles.bottomMarginSm}>
              <Link
                href='/selected-works'
                className={textStyles.linkBlockBlack}>
                <div className={textStyles.buttonLabel}>View works</div>
                <BsArrowRight />
              </Link>
            </div>
            <Link
              href='/resume'
              className={textStyles.linkBlockBlack}>
              <div className={textStyles.buttonLabel}>
                Learn about the artist
              </div>
              <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className={styles.heroImageGrid}>
          <div className={styles.heroRail}>
            <div className={styles.imageFrameSquare}>
              <Image
                src={owner}
                height={450}
                width={300}
                style={squareImage}
                alt='Owner painting'
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={bliss}
                height={450}
                width={300}
                style={squareImage}
                alt='Bliss painting'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
