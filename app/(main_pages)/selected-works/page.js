'use client';

// styles
import styles from './selectedWorks.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
const images = require.context('@/public/images/selectedWorks');

// components
import { Masonry } from '@mui/lab';
import Image from 'next/image';

export default function Recents() {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const imageList = shuffle(images.keys()).map((image) => images(image));

  const squareImage = {
    objectFit: 'contain',
    height: '100%',
  };

  const backgrounds = [
    'var(--light-gray)',
    'var(--light-gray-2)',
    'var(--light-gray-3)',
    'var(--light-gray-4)',
    'var(--light-gray-5)',
    'var(--light-gray-6)',
  ];

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={spacingStyles.bottomTopMarginMd}>
            <h1 className={textStyles.headingLg}>Selected works.</h1>
            <div className={spacingStyles.topMarginMd}>
              <p className={textStyles.paragraphSm}>
                These works range in creation date from early 2014 to the
                present. They traverse a plethora of identities and styles but
                ultimately end with YOURHEAD.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectsWrap}>
        <div className={styles.imagesWrap}>
          <Masonry
            columns={3}
            spacing={0}
            style={{ alignContent: 'center' }}>
            {imageList.map((image, index) => {
              return (
                <div
                  key={index}
                  className={styles.imageWrap}
                  style={{ background: backgrounds[index % 4] }}>
                  <Image
                    src={image}
                    alt='painting'
                    width={300}
                    height={450}
                    style={squareImage}
                  />
                </div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </main>
  );
}
