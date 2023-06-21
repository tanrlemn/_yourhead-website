'use client';

// styles
import styles from '../../styles/(component_styles)/cta.module.css';
import textStyles from '../../styles/text.module.css';

// images
import checkIcon from '@/public/icons/checkIcon.svg';
import textBurst from '@/public/icons/textBurst.svg';
import { BsArrowRight } from 'react-icons/bs';

// context
import { ContactContext } from '@/app/context/contactContext';

// hooks
import { useIsMobile } from '@/app/api/hooks/useIsMobile';
import { useContext } from 'react';

// components
import Image from 'next/image';

export default function GreenCta() {
  const isMobile = useIsMobile();
  const { setShowContactBar } = useContext(ContactContext);

  const lightText = {
    color: '#d8eecd',
    opacity: '1',
  };
  const orangeBurst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: isMobile ? '0 0.8em 0.7em 0' : '0 0.6em 0.5em 0',
    color: '#ff8d86',
  };

  const mobileLineHeight = {
    lineHeight: '1.3em',
  };

  return (
    <div className={styles.greenCtaWrap}>
      <div className={styles.columnWrap}>
        <div className={styles.greenTag}>
          <div
            className={textStyles.labelTag}
            style={lightText}>
            Fill out a contact request
          </div>
        </div>
        <h2
          className={textStyles.headingMd}
          style={isMobile ? mobileLineHeight : null}>
          Collaborate with{' '}
          <span
            className={textStyles.textBurst}
            style={orangeBurst}>
            YOURHEAD
          </span>
        </h2>
        <div className={styles.ctaChecksWrap}>
          <div className={styles.checkItem}>
            <div className={styles.checkIconWrap}>
              <Image
                src={checkIcon}
                width={9}
                height={9}
                className={styles.checkIcon}
                alt='check icon'
              />
            </div>
            <p
              className={textStyles.paragraphXs}
              style={lightText}>
              Determined & persistent
            </p>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIconWrap}>
              <Image
                src={checkIcon}
                width={9}
                height={9}
                className={styles.checkIcon}
                alt='check icon'
              />
            </div>
            <p
              className={textStyles.paragraphXs}
              style={lightText}>
              Easy to work with
            </p>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIconWrap}>
              <Image
                src={checkIcon}
                width={9}
                height={9}
                className={styles.checkIcon}
                alt='check icon'
              />
            </div>
            <p
              className={textStyles.paragraphXs}
              style={lightText}>
              Unlimited possibilities
            </p>
          </div>
        </div>
        <div className={styles.heroButtonsWrap}>
          <button
            className={textStyles.linkBlockChartreuse}
            onClick={() => setShowContactBar(true)}>
            <div className={textStyles.buttonLabel}>Get started</div>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
