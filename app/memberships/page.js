'use client';
import styles from './pricing.module.css';
import textStyles from '../text.module.css';
import spacingStyles from '../spacing.module.css';
import PricingCard from '../components/pricingCard';
import { memberships } from '../constants/membershipInfo';
import { useState } from 'react';

export default function Pricing() {
  const lightText = {
    color: '#d8eecd',
    opacity: '1',
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={spacingStyles.bottomTopMarginMd}>
            <div className={styles.greenTag}>
              <div className={textStyles.labelTag} style={lightText}>
                YOURHEAD Memberships
              </div>
            </div>

            <h1 className={textStyles.headingLg}>Gimme the loot.</h1>
          </div>
        </div>
      </div>
      <div className={styles.cardWrap}>
        {memberships.map((membership, i) => {
          return (
            <PricingCard membership={membership} key={membership.mainTitle} />
          );
        })}
      </div>
    </main>
  );
}
