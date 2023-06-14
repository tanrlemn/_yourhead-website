'use client';

// styles
import styles from './paintingRealPeople.module.css';
import textStyles from '../../styles/text.module.css';
import spacingStyles from '../../styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';
import textBurst from '@/public/icons/textBurst.svg';
import flexiblePayments from '@/public/images/flexiblePayments.webp';
import visualUpdates from '@/public/images/visualUpdates.webp';
import masterfulTechnique from '@/public/images/masterfulTechnique.webp';
import truckDelivery from '@/public/images/truckDelivery.webp';
import consultation from '@/public/images/consultation.webp';

// components
import Image from 'next/image';
import FlexCard from '../../components/flexCard';
import FlexWrap from '../../components/flexWrap';
import CheckboxCard from '../../components/checkboxCard';
import Marquee from '../../components/marquee';
import WaitingCta from '../../components/(cta)/waitingCta';
import GreenCta from '../../components/(cta)/greenCta';

export default function PaintingRealPeople() {
  const orangeBurst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: '0 0.3em 0.1em 0',
    color: '#ff8d86',
  };
  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.flexTag}>
            <div className={textStyles.bulletTag}></div>
            <div className={textStyles.titleTag}>Painting Real People</div>
          </div>
          <div className={spacingStyles.bottomMarginLg}>
            <h1 className={textStyles.headingXl}>
              A world of humans, longing to be{' '}
              <span
                className={textStyles.textBurst}
                style={orangeBurst}>
                seen
              </span>
            </h1>
          </div>
          <div className={spacingStyles.bottomMarginMd}>
            <p className={textStyles.paragraphMain}>
              YOURHEAD specializes in unique portrait representations done with
              oil paint. Through a series of in-person painting sessions, the
              artist explores what it means to get to know people, and how to
              capture their essence in a painting.
            </p>
          </div>
          <div className={styles.heroButtonsWrap}>
            <a className={textStyles.linkBlockGreen}>
              <div className={textStyles.buttonLabel}>
                Request to be painted
              </div>

              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className={spacingStyles.topMarginXl}>
        <h2 className={textStyles.headingLg}>People are real.</h2>
      </div>
      <div className={styles.flexCardWrap}>
        <FlexCard
          title={'All the people deserve to be seen and known'}
          description={
            'Art is both a financial and emotional investment. YOURHEAD offers flexible payment options to make their artwork accessible, whether you prefer to pay upfront or in installments.'
          }
          image={flexiblePayments}
        />
        <FlexCard
          title={'In-person painting sessions – a unique experience'}
          description={
            "To ensure complete transparency and involvement in the creation process, visual updates are provided at different stages of the artwork's progress."
          }
          image={visualUpdates}
        />
        <FlexCard
          title={'Memberships for exclusive content'}
          description={
            'With years of experience in painting, YOURHEAD has developed a myriad of masterful techniques, fusing traditional and modern styles to create a unique and timeless feeling.'
          }
          image={masterfulTechnique}
        />
      </div>

      <div className={spacingStyles.fullDividerGreen}></div>
      <Marquee delay={-20} />
      <div className={spacingStyles.fullDividerGreen}></div>

      <div className={styles.timelineWrap}>
        <div className={styles.flexTitle}>
          <div className={spacingStyles.blockDividerOrange}></div>
          <h2 className={textStyles.headingMd}>
            Timeline and Process for Commissioned Artwork
          </h2>
          <div className={spacingStyles.bottomTopMarginMd}>
            <h3 className={textStyles.headingXxs}>
              Timelines may vary based on request details
            </h3>
          </div>
          <div className={spacingStyles.bottomMarginMd}>
            <ol className={textStyles.orderedList}>
              <li className={textStyles.headingXs}>Request a painting</li>
              <li className={textStyles.headingXs}>
                Configure your commission
              </li>
              <li className={textStyles.headingXs}>Sign a contract</li>
              <li className={textStyles.headingXs}>*magic</li>
            </ol>
          </div>
          <p className={textStyles.paragraphSm}>
            The average time to completion for a standard 24&quot; x 36&quot;
            portrait painting is 3-4 months. This time estimate is likely to
            change based on the details of your commission request. Expedited
            options are available.
          </p>
          <div className={spacingStyles.topMarginLg}>
            <a
              className={textStyles.linkBlockBlack}
              data-tf-slider='diYCs0i7'
              data-tf-position='right'
              data-tf-opacity='100'
              data-tf-iframe-props='title=YOURHEAD Commission Request'
              data-tf-transitive-search-params
              data-tf-medium='snippet'>
              <div className={textStyles.buttonLabel}>Start a commission</div>

              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className={styles.checkboxCardWrap}>
          <CheckboxCard
            subtitle={true}
            subtitleText='– Initial process'
            title={'Decide.'}
            description={
              'Work together to agree upon the details of your commission contract. This includes the size, medium, and price of the artwork.'
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
          <CheckboxCard
            subtitle={true}
            subtitleText='– Creation process'
            title={'Paint.'}
            description={
              'Receive progress updates as the painting gets completed. Your input is always welcome and encouraged.'
            }
            checks={[
              'Reference photos',
              'Color choices',
              'Composition approval',
              'Visual updates',
              'Input & feedback',
              'Painting delivery',
            ]}
            backgroundColor='#fff'
          />
        </div>
      </div>

      <div className={spacingStyles.fullDividerGreen}></div>
      <Marquee delay={0} />
      <div className={spacingStyles.fullDividerGreen}></div>

      <div className={spacingStyles.allPaddingLg}>
        <h2 className={textStyles.headingXl}>Mixing Pigments, Curating Care</h2>
      </div>
      <FlexWrap
        title={'Personalized Consultation'}
        description={
          'Each commissioned piece begins with a personalized consultation. This process allows YOURHEAD to understand your vision, preferences, and the emotions you wish to evoke. YOURHEAD has creative ways to transform these thoughts into a tangible piece of art that inspire contemplation and conversation.'
        }
        image={consultation}
      />

      <FlexWrap
        title={'Professional Packaging and Delivery'}
        description={
          "Every artwork is meticulously packaged to ensure it reaches you in perfect condition. We also offer professional delivery services, which guarantees your piece of art is handled with the utmost care from YOURHEAD's studio to your doorstep."
        }
        image={truckDelivery}
      />
      <GreenCta />
    </main>
  );
}
