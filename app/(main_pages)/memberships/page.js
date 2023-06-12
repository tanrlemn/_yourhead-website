'use client';

// styles
import styles from './memberships.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// apis
import { getBenefitsText } from '../../api/db/getBenefitsText';
import { memberships } from '../../api/db/getMembershipInfo';

// context
import { LoadingContext } from '../../context/loadingContext';

// hooks
import { useEffect, useState, useContext } from 'react';

// components
import PricingCard from '../../components/pricingCard';
import Loading from '../../loading';

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
              <div
                className={textStyles.labelTag}
                style={lightText}>
                YOURHEAD Memberships
              </div>
            </div>

            <h1 className={textStyles.headingLg}>Gimme the loot.</h1>
            <div className={spacingStyles.topMarginMd}>
              <p className={textStyles.paragraphSm}>
                Access behind-the-scenes content, unreleased files, free monthly
                prints and more.
              </p>
            </div>
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
