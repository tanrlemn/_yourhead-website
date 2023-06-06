'use client';

import { useContext } from 'react';
import styles from './memberships.module.css';
import textStyles from '../text.module.css';
import spacingStyles from '../spacing.module.css';
import PricingCard from '../components/pricingCard';
import { getBenefitsText } from '../utils/getBenefitsText';
import { memberships } from '../utils/membershipInfo';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import { LoadingContext } from '../loadingContext';

export default function Pricing() {
  const { loading, setLoading } = useContext(LoadingContext);

  const lightText = {
    color: '#d8eecd',
    opacity: '1',
  };

  const [currentMemberships, setCurrentMemberships] = useState(null);

  useEffect(() => {
    const getMemberships = async () => {
      const membershipsData = await memberships();
      setCurrentMemberships(membershipsData);
    };

    if (currentMemberships === null) {
      setLoading(true);
      getMemberships();
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [currentMemberships, setLoading]);

  const [benefitsText, setBenefitsText] = useState(null);

  useEffect(() => {
    const getText = async () => {
      const data = await getBenefitsText();
      setBenefitsText(data);
    };

    if (benefitsText === null) {
      getText();
    }
  }, [benefitsText]);

  return (
    <main className={styles.main}>
      {loading && <Loading />}
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
        {currentMemberships !== null &&
          benefitsText !== null &&
          currentMemberships.map((membership, i) => {
            return (
              <PricingCard
                key={i}
                membership={membership}
                index={i}
                benefitsText={benefitsText}
              />
            );
          })}
      </div>
    </main>
  );
}
