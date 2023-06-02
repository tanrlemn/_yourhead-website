import styles from './pricing.module.css';
import textStyles from '../text.module.css';
import spacingStyles from '../spacing.module.css';
import PricingCard from '../components/pricingCard';

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
                YOURHEAD Pricing
              </div>
            </div>

            <h1 className={textStyles.headingLg}>Gimme the loot.</h1>
          </div>
          <div className={styles.cardWrap}>
            <PricingCard
              mainTitle={'Art + Music'}
              subtitle={true}
              subtitleText='– Free –'
              title={'$0'}
              description={
                'First dibs on exclusive art and listen to unreleased music. No strings attached. (Except for the ones that hold your email address to this list.)'
              }
              checks={[
                'Finalize pricing',
                'Payment structure',
                'Rights & confidentiality',
                'Artwork details',
                'Milestones & deadlines',
                'Additional suggestions',
              ]}
              backgroundColor='#f5fcf2'
            />
            <PricingCard
              mainTitle={'Commission Painting'}
              subtitle={true}
              subtitleText='– Starting at –'
              title={'$999'}
              description={
                'First dibs on exclusive art and listen to unreleased music. No strings attached. (Except for the ones that hold your email address to this list.)'
              }
              checks={[
                'Finalize pricing',
                'Payment structure',
                'Rights & confidentiality',
                'Artwork details',
                'Milestones & deadlines',
                'Additional suggestions',
              ]}
              backgroundColor='#0085d850'
              type='commission'
            />
            <PricingCard
              mainTitle={'Prints & Such'}
              subtitle={true}
              subtitleText='– Starting at –'
              title={'$19'}
              description={
                'First dibs on exclusive art and listen to unreleased music. No strings attached. (Except for the ones that hold your email address to this list.)'
              }
              checks={[
                'Finalize pricing',
                'Payment structure',
                'Rights & confidentiality',
                'Artwork details',
                'Milestones & deadlines',
                'Additional suggestions',
              ]}
              backgroundColor='#f1c4be50'
              type='shop'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
