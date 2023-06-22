'use client';

// styles
import styles from './styles/home.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';
// paintingRealPeople
import whalerider from '@/public/images/paintingRealPeople/whalerider.webp';
import donut from '@/public/images/paintingRealPeople/donut.webp';
// findingYourhead
import owner from '@/public/images/findingYourhead/owner.webp';
import bliss from '@/public/images/findingYourhead/bliss.webp';
import textBurst from '@/public/icons/textBurst.svg';

// context
import { LoadingContext } from './context/loadingContext';

// hooks
import { useEffect, useState, useContext } from 'react';
import { useIsMobile } from './api/hooks/useIsMobile';

// components
import Image from 'next/image';
import LoadingDiv from './components/loadingDiv';
import Link from 'next/link';

export default function Home() {
  const { loading } = useContext(LoadingContext);

  const mobile = useIsMobile();
  const [imgMax, setImgMax] = useState(!mobile ? '100%' : '35em');
  const [imgMin, setImgMin] = useState(!mobile ? '100%' : '25em');

  useEffect(() => {
    setImgMax(mobile ? '100%' : '35em');
    setImgMin(mobile ? '100%' : '25em');
  }, [mobile]);

  const squareImage = {
    maxWidth: imgMax,
    maxHeight: imgMax,
    minWidth: imgMin,
    minHeight: '100%',
    borderRadius: '10px',
    margin: '5px',
    objectFit: 'cover',
    objectPosition: '50% 20%',
  };

  const burstPadding = mobile ? '0 0.4em 0.4em 0' : '0 0.3em 0.3em 0';

  const burst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: burstPadding,
  };

  const buttonStyle = {
    minWidth: '50%',
    maxWidth: '50%',
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          {!loading && <LoadingDiv />}
          <h1 className={textStyles.headingXl}>
            <span
              className={textStyles.textBurst}
              style={burst}>
              Painting
              <br />
            </span>{' '}
            real <br />
            people.
          </h1>
          <div className={spacingStyles.bottomTopMarginLg}>
            <p className={textStyles.paragraphMain}>
              We could pretend that we don&apos;t know each other, that we
              aren&apos;t real. But maybe let&apos;s paint portraits just to
              make sure.
            </p>
          </div>
          <div className={styles.heroButtonsWrap}>
            <Link
              href='/shop'
              className={textStyles.linkBlockChartreuse}
              style={buttonStyle}>
              <div className={textStyles.buttonLabel}>View shop</div>
              <BsArrowRight />
            </Link>
            <Link
              href='/about'
              className={textStyles.linkBlockWhite}>
              <div className={textStyles.buttonLabel}>Learn more</div>
              <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className={styles.heroImageGrid}>
          <div className={styles.heroRail}>
            <div className={styles.imageFrameSquare}>
              <Image
                src={donut}
                height={300}
                width={300}
                style={squareImage}
                alt='Donut painting'
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={bliss}
                height={300}
                width={300}
                style={squareImage}
                alt='Bliss painting'
              />
            </div>
          </div>
          <div className={styles.heroRail}>
            <div className={styles.imageFrameSquare}>
              <Image
                src={owner}
                height={300}
                width={300}
                style={squareImage}
                alt='Owner painting'
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={whalerider}
                height={300}
                width={300}
                style={squareImage}
                alt='Whalerider painting'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
