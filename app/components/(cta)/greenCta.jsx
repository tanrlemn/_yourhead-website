// styles
import styles from '../../styles/(component_styles)/cta.module.css';
import textStyles from '../../styles/text.module.css';
import spacingStyles from '../../styles/spacing.module.css';

// images
import checkIcon from '@/public/icons/checkIcon.svg';
import { BsArrowRight } from 'react-icons/bs';

// components
import Image from 'next/image';

export default function GreenCta({ waitingPeriod }) {
  const lightText = {
    color: '#d8eecd',
    opacity: '1',
  };
  return (
    <div className={styles.greenCtaWrap}>
      <div className={styles.columnWrap}>
        <div className={styles.greenTag}>
          <div
            className={textStyles.labelTag}
            style={lightText}>
            Get started with YOURHEAD
          </div>
        </div>
        <h2 className={textStyles.headingMd}>
          Fill out a commission request form to begin
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
              No credit card required
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
              Quick response time
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
            data-tf-slider='diYCs0i7'
            data-tf-position='right'
            data-tf-opacity='100'
            data-tf-iframe-props='title=YOURHEAD Commission Request'
            data-tf-transitive-search-params
            data-tf-medium='snippet'>
            <div className={textStyles.buttonLabel}>Get started</div>

            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
