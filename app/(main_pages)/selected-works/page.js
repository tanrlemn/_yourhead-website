'use client';

// styles
import styles from './selectedWorks.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
// const images = require.context('@/public/images/selectedWorks');

// constants
import { works } from '@/app/constants/works';

// hooks
import { useIsMobile } from '@/app/api/hooks/useIsMobile';

// components
import { Masonry } from '@mui/lab';
import Image from 'next/image';
import Link from 'next/link';

export default function Recents() {
  const isMobile = useIsMobile();

  // const imageList = shuffle(images.keys()).map((image) => images(image));

  const squareImage = {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
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
            columns={isMobile ? 1 : 3}
            spacing={0}
            style={{ alignContent: 'center' }}>
            {works.map((work, index) => {
              return (
                <Link
                  href={`/works/${work.slug}`}
                  key={index}
                  currentWork={work}
                  className={styles.imageWrap}
                  style={{ background: backgrounds[index % 4] }}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={300}
                    height={450}
                    style={squareImage}
                  />
                </Link>
              );
            })}
          </Masonry>
        </div>
      </div>
    </main>
  );
}

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
