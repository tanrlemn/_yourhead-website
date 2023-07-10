'use client';

// styles
import styles from '../works.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
import { VscClose } from 'react-icons/vsc';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// constants
import { works } from '@/app/constants/works';

// hooks
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/app/api/hooks/useIsMobile';
import { useState } from 'react';

// components
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default function Product({ params }) {
  const router = useRouter();
  const isMobile = useIsMobile();

  const slug = params.slug;
  const currentWork = works.find((work) => work.slug === slug);

  const [openLightbox, setOpenLightbox] = useState(false);

  const closeStyles = {
    margin: '1em',
  };

  const squareImage = {
    objectFit: 'contain',
    height: '100%',
    maxHeight: openLightbox ? '98vh' : '80vh',
    width: '100%',
    cursor: 'pointer',
  };

  const lightbox = {
    objectFit: 'contain',
    height: '100%',
    maxHeight: openLightbox ? '100vh' : '80vh',
    cursor: 'pointer',
    transition: 'all 0.2s ease-out',
    top: '0',
    left: '0',
    zIndex: '104',
    position: openLightbox ? 'fixed' : 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: openLightbox ? '100%' : 'auto',
    backdropFilter: 'blur(4px)',
    marginRight: openLightbox ? '0' : '3em',
    padding: openLightbox ? (isMobile ? '1em' : '0') : '0',
  };

  return (
    <div className={styles.main}>
      <div className={styles.heroContent}>
        <div className={spacingStyles.absolutelyLeft}>
          <div className={spacingStyles.allPaddingLg}>
            <div
              onClick={() => router.push('/selected-works')}
              className={textStyles.linkBlockBlack}>
              <div className={textStyles.buttonLabel}>
                <BsArrowLeft />
              </div>
              <p className={textStyles.paragraphXxs}>Back to selected works</p>
            </div>
          </div>
        </div>
        <div
          className={styles.imageWrap}
          style={lightbox}
          onClick={() => setOpenLightbox(!openLightbox)}>
          <Image
            src={currentWork.image}
            key={currentWork.slug}
            width={300}
            height={450}
            style={squareImage}
            alt={`image for ${currentWork.title}`}
          />
          {openLightbox && (
            <div className={spacingStyles.absolutelyRight}>
              <VscClose
                style={closeStyles}
                className={spacingStyles.icon}
              />
            </div>
          )}
        </div>
        <div>
          <div className={spacingStyles.bottomMarginMd}>
            <div className={spacingStyles.bottomMarginXs}>
              <div className={textStyles.aBitBolder}>
                <p className={textStyles.paragraphXs}>{currentWork.title}</p>
                <p className={textStyles.paragraphXxs}>{currentWork.year}</p>
              </div>
            </div>
            <p className={textStyles.paragraphXxs}>{currentWork.medium}</p>
            <p className={textStyles.paragraphXxs}>{currentWork.size}</p>
          </div>
          <div className={styles.linkButtonsWrap}>
            {currentWork.links !== null &&
              currentWork.links.map((link, index) => {
                return (
                  <Link
                    key={currentWork.slug}
                    href={link.url}
                    target='_blank'
                    className={textStyles.linkBlockBlack}>
                    <div className={textStyles.buttonLabel}>
                      <div className={textStyles.paragraphXxs}>{link.text}</div>
                    </div>
                    <BsArrowRight />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
