'use client';

// styles
import styles from './about.module.css';
import textStyles from '../../styles/text.module.css';
import spacingStyles from '../../styles/spacing.module.css';
import homeStyles from '../../styles/home.module.css';

// images
import textBurst from '@/public/icons/textBurst.svg';
import whalerider from '@/public/images/whalerider.jpg';
import donut from '@/public/images/donut.jpg';
import profileImg from '@/public/images/profile-img.png';

// components
import Image from 'next/image';
import FlexWrap from '../../components/flexWrap';
import ExperienceCard from '../../components/experienceCard';
import Marquee from '../../components/marquee';
import GreenCta from '../../components/(cta)/greenCta';

// hooks
import { useEffect, useState } from 'react';
import { useIsMobile } from '../../api/hooks/useIsMobile';

export default function About() {
  const mobile = useIsMobile();
  const [imgMax, setImgMax] = useState(!mobile ? '100%' : '35em');
  const [imgMin, setImgMin] = useState(!mobile ? '100%' : '25em');

  useEffect(() => {
    setImgMax(mobile ? '100%' : '35em');
    setImgMin(mobile ? '100%' : '25em');
  }, [mobile]);

  const orangeBurst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: mobile ? '0 0.5em 0.3em 0' : '0 0.3em 0.1em 0',
    color: '#ff8d86',
  };

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

  const mobilePadding = {
    padding: '1em',
  };
  return (
    <main className={styles.main}>
      <div className={spacingStyles.marqueeDividerGreen}></div>
      <div className={spacingStyles.bottomTopMarginLg}>
        <Marquee delay={0} />
      </div>
      <div className={spacingStyles.marqueeDividerGreen}></div>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <Image
            className={styles.profileImg}
            src={profileImg}
            alt='profile image'
            width={400}
            height={400}
          />
          <div className={styles.heroTitle}>
            <div className={styles.flexTag}>
              <div className={textStyles.bulletTag}></div>
              <div className={textStyles.titleTag}>About The Artist</div>
            </div>

            <h1 className={textStyles.headingXl}>
              Searching for <br />
              real{' '}
              <span
                className={textStyles.textBurst}
                style={orangeBurst}>
                people
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.statementWrap}>
        <div className={styles.statementTextWrap}>
          <div className={spacingStyles.bottomMarginLg}>
            <h2 className={textStyles.headingMd}>Artist statement</h2>
          </div>
          <p className={textStyles.paragraphSm}>
            Our assumptions about other people leave no room for the truth. Is
            it not true that deep within each of us lie secrets and stories that
            long to be shared? There’s always more.
          </p>
          <br />
          <br />
          <p className={textStyles.paragraphSm}>
            Filled with pain caused by the generations before us, we move
            through life seeking answers on how to heal the pain – or attempting
            to make it disappear. YOURHEAD believes that we need each other to
            heal. We need to know what’s hidden deep down inside of someone else
            to learn new perspectives for healing what’s inside of us. We need
            to teach each other to heal.
          </p>
          <br />
          <br />
          <p className={textStyles.paragraphSm}>
            YOURHEAD explores the relationship between the deeply rooted pain we
            all experience and what we actually share and physically see. The
            artist attempts to reveal the true identity of their subjects,
            sometimes with elaborate embellishments related to their
            personality, other times with simple phrases or natural elements.
            People are inspiring, experiencing pain, and beautiful. YOURHEAD
            uses painting as an experience to be shared and understood –
            something to help heal the pain.
          </p>
        </div>
      </div>

      <div className={styles.experienceWrap}>
        <div className={styles.flexTitle}>
          <div className={spacingStyles.blockDividerBlue}></div>
          <h2 className={textStyles.headingMd}>Experience & Awards</h2>
          <div className={spacingStyles.bottomTopMarginMd}>
            <h3 className={textStyles.headingXxs}>
              9+ years of professional experience
            </h3>
          </div>
        </div>
        <div className={styles.checkboxCardWrap}>
          <ExperienceCard
            subtitle={true}
            subtitleText='– Business Owner & Entrepreneur'
            title={'Experience.'}
            items={[
              {
                dates: 'March 2014 - Present',
                company: 'YOURHEAD',
                title: 'Owner & Artist',
                location: 'United States & Anderson, IN',
                checkItems: [
                  'Acrylic and oil paintings, hand-lettered murals & signs, live paintings for events, and custom art commissions',
                  'Music production, songwriting, and live performances',
                  'Manage all aspects of the business including marketing, sales, and customer service',
                  'Create and maintain a website and online store',
                  '~90% of artworks made between the start and present have been sold',
                  'Primarily self-taught + 4-month apprenticeship',
                ],
              },
              {
                dates: 'October 2019 - Present',
                company: 'Thought Co',
                title: 'Owner & Designer',
                location: 'Anderson, IN',
                checkItems: [
                  'UX, marketing, and web development',
                  'Design and execute ',
                  'Freelance using sites like Upwork ',
                  '3-5 long-term clients ',
                ],
              },
            ]}
            backgroundColor='#f5fcf2'
          />
          <ExperienceCard
            subtitle={true}
            subtitleText='– Seeking Support & Guidance'
            title={'Awards.'}
            items={[
              {
                dates: 'January 2022 - January 2023',
                company: 'Indiana Arts Commission',
                title: 'On-Ramp Fellowship',
                location: 'Bloomington, IN',
                checkItems: [
                  'Created and released  a 4-song EP accompanied by a music video',
                  'Performed at 10+ venues in Indiana',
                  'Received a $2,000 grant to fund the project',
                  'Received mentorship from a professional musician',
                ],
                links: [
                  {
                    text: 'Listen to the EP',
                    url: 'https://open.spotify.com/album/2Lpo8E5FQWmI4Qipw0sTMy?si=Pe5OojfqTQi4BDZXVtmO7g',
                  },
                  {
                    text: 'Watch the music video',
                    url: 'https://www.youtube.com/watch?v=A2lM1jw5f8M',
                  },
                ],
              },
            ]}
            backgroundColor='#fff'
          />
        </div>
      </div>

      <div
        className={spacingStyles.allPaddingLg}
        style={mobile ? mobilePadding : null}>
        <h2 className={textStyles.headingXl}>Most recent project</h2>
      </div>
      <div className={styles.projectWrap}>
        <div className={styles.projectImageWrap}>
          <div className={homeStyles.heroRail}>
            <div className={homeStyles.imageFrameSquare}>
              <Image
                src={donut}
                height={300}
                width={300}
                style={squareImage}
                alt='Donut painting'
              />
            </div>
            <div className={homeStyles.imageFrameSquare}>
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
        <div className={styles.projectText}>
          <div className={spacingStyles.bottomTopMarginMd}>
            <h3 className={textStyles.headingMd}>Painting Real People</h3>
          </div>
          <p className={textStyles.paragraphSm}>
            Unique portrait representations done with oil paint. Through
            in-person painting sessions, the artist explores what it means to
            get to know people and how to capture their essence.
          </p>
        </div>
      </div>
      <GreenCta />
    </main>
  );
}
