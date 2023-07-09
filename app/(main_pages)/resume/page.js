'use client';

// styles
import styles from './resume.module.css';
import textStyles from '../../styles/text.module.css';
import spacingStyles from '../../styles/spacing.module.css';

// components
import ExperienceCard from '../../components/experienceCard';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.experienceWrap}>
        <div className={styles.flexTitle}>
          <div className={spacingStyles.blockDividerBlue}></div>
          <h2 className={textStyles.headingMd}>Experience & Awards</h2>
          <div className={spacingStyles.topMarginMd}>
            <h3 className={textStyles.headingXxs}>
              Born in 1992 in Canton, Ohio <br />
            </h3>
          </div>
          <div className={spacingStyles.bottomTopMarginSm}>
            <h3 className={textStyles.headingXxs}>
              Resides and works in Anderson, Indiana
            </h3>
          </div>
        </div>
        <div className={styles.checkboxCardWrap}>
          <ExperienceCard
            title={'Experience.'}
            items={[
              {
                dates: 'March 2014 - Present',
                company: 'YOURHEAD',
                title: 'Owner & Artist',
                location: 'United States & Anderson, IN',
              },
              {
                dates: 'October 2019 - Present',
                company: 'Thought Co',
                title: 'Designer & Developer',
                location: 'Anderson, IN',
              },
              {
                dates: 'June 2018 - June 2019',
                company: 'Oakpark Preschool',
                title: 'Art Teacher',
                location: 'Massillon, OH',
              },
            ]}
          />
          <ExperienceCard
            title={'Awards.'}
            items={[
              {
                dates: 'January 2022 - January 2023',
                company: 'Indiana Arts Commission',
                title: 'On-Ramp Fellowship',
                location: 'Bloomington, IN',

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
              {
                dates: '2014 - 2016 & 2019',
                company: 'A Town Center',
                title: 'Artist in Residence',
                location: 'Anderson, IN',
              },
            ]}
          />
          <ExperienceCard
            title={'Community Engagement.'}
            items={[
              {
                dates: '2019 - 2022',
                company: 'Local Homeschool Group',
                title: 'Art Teacher',
                location: 'Anderson, IN',
              },
              {
                dates: '2014 - 2019',
                company: 'Various Organizations',
                title: 'Live Paintings',
                location: 'United States',
              },
              {
                dates: '2015-2016',
                company: 'Ohio Church of God Youth & Discipleship',
                title: 'Artist in Residence',
                location: 'Columbus, OH',
              },
            ]}
          />
        </div>
        <div style={{ paddingLeft: '2em', paddingTop: '3em' }}>
          <div className={spacingStyles.bottomMarginLg}>
            <h2 className={textStyles.headingSm}>Contact.</h2>
          </div>
          <div className={textStyles.lightWeight}>
            <p className={textStyles.paragraphXs}>YOURHEAD | Tanner Lemon</p>
            <p className={textStyles.paragraphXxs}>Anderson, IN</p>
            <br />
            <p className={textStyles.paragraphXxs}>yourheadisourhead.com</p>
            <p className={textStyles.paragraphXxs}>
              tanner@yourheadisourhead.com
            </p>
            <p className={textStyles.paragraphXxs}>+1 (765) 313-6929</p>
          </div>
        </div>
      </div>
    </main>
  );
}
