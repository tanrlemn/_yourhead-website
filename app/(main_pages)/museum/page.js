'use client';

// styles
import styles from './museum.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';
import artGallery from '@/public/images/artGallery-1.webp';
import livingRoomGallery from '@/public/images/livingRoomGallery.webp';
import textBurst from '@/public/icons/textBurst.svg';
import browse from '@/public/images/browse.webp';
import bid from '@/public/images/bid.webp';
import pay from '@/public/images/pay.webp';
import delivery from '@/public/images/delivery.webp';
import enjoy from '@/public/images/enjoy.webp';

// context
import { LoadingContext } from '@/app/context/loadingContext';

// hooks
import { useEffect, useState, useContext, useRef } from 'react';
import { useIsMobile } from '@/app/api/hooks/useIsMobile';

// components
import Image from 'next/image';
import LoadingDiv from '@/app/components/loadingDiv';
import Link from 'next/link';
import Step from '@/app/components/step';

export default function Home() {
  const { loading } = useContext(LoadingContext);
  const worksRef = useRef(null);

  const mobile = useIsMobile();
  const [imgMax, setImgMax] = useState(mobile ? '90%' : '30em');
  const [imgMin, setImgMin] = useState(mobile ? '90%' : '30em');

  useEffect(() => {
    setImgMax(mobile ? '90%' : '30em');
    setImgMin(mobile ? '90%' : '30em');
  }, [mobile]);

  const squareImage = {
    maxWidth: imgMax,
    maxHeight: imgMax,
    minWidth: imgMin,
    minHeight: '100%',
    borderRadius: '9px',
    margin: '0',
    objectFit: 'cover',
    objectPosition: '50% 20%',
  };

  const burstPadding = mobile ? '0 0.4em 0.4em 0' : '0 0.3em 0.1em 0';

  const burst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: burstPadding,
    color: 'var(--green-mid)',
  };

  const textColor = {
    color: 'var(--green-teal-mid-dark)',
  };

  const buttonStyle = {
    minWidth: mobile ? '100%' : '50%',
    maxWidth: mobile ? '100%' : '70%',
    marginRight: mobile ? '0' : '1.5em',
    marginBottom: mobile ? '1em' : '0',
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageGrid}>
          <div className={styles.heroRail}>
            <div className={styles.imageFrameSquare}>
              <Image
                src={artGallery}
                height={300}
                width={300}
                style={squareImage}
                alt='Art gallery'
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={livingRoomGallery}
                height={300}
                width={300}
                style={squareImage}
                alt='Living room gallery'
              />
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={spacingStyles.bottomMarginSm}>
            <div className={styles.flexTag}>
              <div className={textStyles.bulletTag}></div>
              <div className={textStyles.titleTag}>
                Share a Piece of History
              </div>
            </div>
          </div>
          <h1
            className={textStyles.headingXl}
            style={textColor}>
            The People&apos;s{' '}
            <span
              className={textStyles.textBurst}
              style={burst}>
              Museum
            </span>{' '}
          </h1>
          <div className={spacingStyles.bottomTopMarginLg}>
            <p className={textStyles.paragraphSm}>
              By renting an original artwork, you are helping to preserve a
              piece of YOURHEAD history – at a fraction of the cost – and
              supporting the artist without stripping them of future ownership
              and royalties.
            </p>
          </div>
          <div className={styles.heroButtonsWrap}>
            <Link
              href='/museum/available'
              className={textStyles.linkBlockChartreuse}
              style={buttonStyle}>
              <div className={textStyles.buttonLabel}>View available works</div>
              <BsArrowRight />
            </Link>
            <div
              onClick={() => {
                worksRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
              className={textStyles.linkBlockBlack}>
              <div className={textStyles.buttonLabel}>How it works</div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <section
        ref={worksRef}
        className={styles.howWrap}>
        <div className={styles.howHeader}>
          <div className={spacingStyles.bottomMarginSm}>
            <h2 className={textStyles.headingLg}>How it works</h2>
          </div>
          <p className={textStyles.paragraphXs}>
            Care for an artwork in your home and pay monthly until you&apos;re
            ready to send it back
          </p>
        </div>
        <div className={styles.stepsWrap}>
          <Step
            number={1}
            title={'Browse'}
            description={
              "Browse YOURHEAD's collection of available artworks and choose the one you'd like to rent."
            }
            image={browse}
          />
          <Step
            number={2}
            title={'Bid'}
            description={
              "Bid on the artwork you'd like to rent. The highest bidder at the end of the auction wins the artwork.  If you're outbid, you'll be notified and can bid again."
            }
            image={bid}
            numberColor='var(--purple-light)'
          />
          <Step
            number={3}
            title={'Sign & Pay'}
            description={
              "When you win the auction, you'll be sent a contract to sign and a link to pay your first month's rent."
            }
            image={pay}
            numberColor='var(--blue-light)'
          />
          <Step
            number={4}
            title={'Speedy Delivery'}
            description={
              "After you sign and pay, your artwork will be delivered to your door within 7 days. Shipping is free. If you're in the Indianapolis area, we'll even hang it for you."
            }
            image={delivery}
            numberColor='var(--orange-light)'
          />
          <Step
            number={5}
            title={'Enjoy'}
            description={
              "Enjoy your artwork for as long as you'd like. When you're ready to send it back, we'll send you a box and a shipping label. Just pack it up and send it back."
            }
            image={enjoy}
            numberColor='var(--green-light)'
          />
        </div>
      </section>
    </main>
  );
}
