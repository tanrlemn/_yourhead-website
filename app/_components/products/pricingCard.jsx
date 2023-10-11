'use client';

// styles
import styles from '../styles/(component_styles)/pricingCard.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// images
import checkIcon from '@/public/icons/checkIcon.svg';

// hooks
import { useState, useRef } from 'react';

// helpers
import { parseMembership } from '../../lib/helpers/parseMembership';

// components
import Image from 'next/image';

export default function PricingCard({ membership, benefitsText }) {
  const [viewMore, setViewMore] = useState(false);
  const pricingCardRef = useRef(null);

  const {
    title,
    subtitle,
    monthlyPrice,
    yearlyPrice,
    backgroundColor,
    description,
    checks,
  } = parseMembership(membership, benefitsText);

  const background = {
    backgroundColor: `var(${backgroundColor})`,
  };

  const executeScroll = () => {
    pricingCardRef.current.scrollIntoView({ alignToTop: true });
    window.scrollBy(0, -100);
  };

  return (
    <div
      className={styles.pricingCard}
      style={background}
      ref={pricingCardRef}>
      <div>
        <h2 className={textStyles.headingLg}>{title}</h2>
        <div className={spacingStyles.bottomTopMarginMd}>
          <div className={textStyles.outlineTextGrey}>
            <div className={textStyles.labelTag}>
              ––{'  '}
              {subtitle}
              {'  '}––
            </div>
          </div>
        </div>
        <div className={spacingStyles.bottomMarginSm}>
          <h2 className={textStyles.headingSm}>${monthlyPrice}/month</h2>
        </div>

        <div className={spacingStyles.bottomTopMarginMd}>
          <p className={textStyles.paragraphXxs}>{description}</p>
        </div>
        {checks.length > 0 &&
          checks.map((check, i) => {
            return (
              <div key={i}>
                {i < 4 && (
                  <div
                    className={styles.checkItem}
                    key={i}>
                    <div className={styles.checkIconWrap}>
                      <Image
                        src={checkIcon}
                        width={9}
                        height={9}
                        className={styles.checkIcon}
                        alt='check icon'
                      />
                    </div>
                    <p className={textStyles.paragraphXs}>{check}</p>
                  </div>
                )}
                {viewMore && i >= 4 && (
                  <div
                    className={styles.checkItem}
                    key={i}>
                    <div className={styles.checkIconWrap}>
                      <Image
                        src={checkIcon}
                        width={9}
                        height={9}
                        className={styles.checkIcon}
                        alt='check icon'
                      />
                    </div>
                    <p className={textStyles.paragraphXs}>{check}</p>
                  </div>
                )}
              </div>
            );
          })}
        {checks.length > 4 && !viewMore && (
          <div
            className={textStyles.viewMoreLink}
            onClick={() => {
              setViewMore(!viewMore);
            }}>
            View all
          </div>
        )}
        {checks.length > 4 && viewMore && (
          <div
            className={textStyles.viewMoreLink}
            onClick={() => {
              setViewMore(!viewMore);
              executeScroll();
            }}>
            View less
          </div>
        )}
      </div>
      <div className={spacingStyles.topMarginMd}>
        <button className={textStyles.linkBlockBlue}>
          <div className={textStyles.buttonLabel}>Get started with {title}</div>
        </button>
      </div>
    </div>
  );
}
