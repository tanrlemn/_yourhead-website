'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

import styles from './page.module.css';
import textStyles from './text.module.css';
import spacingStyles from './spacing.module.css';
import { BsArrowRight } from 'react-icons/bs';
import donut from '../public/donut.jpg';
import bliss from '../public/bliss.jpg';
import owner from '../public/owner.jpg';
import whalerider from '../public/whalerider.jpg';
import textBurst from '../public/textBurst.svg';

export default function Home() {
  const windowSize = useRef(
    typeof window !== 'undefined' ? window.innerWidth : null
  );

  const [imgMax, setImgMax] = useState(
    windowSize?.current < 769 ? '10em' : '35em'
  );
  const [imgMin, setImgMin] = useState(
    windowSize?.current < 769 ? '7em' : '25em'
  );

  useEffect(() => {
    setImgMax(windowSize.current < 769 ? '10em' : '35em');
    setImgMin(windowSize.current < 769 ? '7em' : '25em');
  }, []);

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

  const burstPadding =
    windowSize.current < 769 ? '0 0.4em 0.4em 0' : '0 0.3em 0.3em 0';

  const burst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: burstPadding,
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={textStyles.headingXl}>
            <span className={textStyles.textBurst} style={burst}>
              Painting
            </span>{' '}
            real people.
          </h1>
          <div className={spacingStyles.bottomTopMarginLg}>
            <p className={textStyles.paragraphMain}>
              We could pretend that we don&apos;t know each other, that we
              aren&apos;t real. But maybe let&apos;s paint each other just to
              make sure.
            </p>
          </div>
          <div className={styles.heroButtonsWrap}>
            <button
              className={textStyles.linkBlockChartreuse}
              data-tf-slider='diYCs0i7'
              data-tf-position='right'
              data-tf-opacity='100'
              data-tf-iframe-props='title=YOURHEAD Commission Request'
              data-tf-transitive-search-params
              data-tf-medium='snippet'>
              <div className={styles.buttonLabel}>Get started</div>
              <BsArrowRight />
            </button>
            <a href='/commissions' className={styles.linkBlockWhite}>
              <div className={styles.buttonLabel}>Read more</div>
              <BsArrowRight />
            </a>
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
                alt='Donut painting'
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
                alt='Donut painting'
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={whalerider}
                height={300}
                width={300}
                style={squareImage}
                alt='Donut painting'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
