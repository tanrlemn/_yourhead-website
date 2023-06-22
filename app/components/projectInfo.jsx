'use client';

// styles
import styles from '../styles/(component_styles)/project.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';
import 'react-slideshow-image/dist/styles.css';

// images
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import textBurst from '@/public/icons/textBurst.svg';

// hooks
import { useState, useEffect } from 'react';
import { useIsMobile } from '../api/hooks/useIsMobile';
import { useWindowSize } from '../api/hooks/useWindowSize';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// components
import Link from 'next/link';
import Image from 'next/image';
import { Masonry } from '@mui/lab';

export default function ProjectInfo({ project }) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [scrollTo, setScrollTo] = useState(null);

  const [mobileLayout, setMobileLayout] = useState(false);

  const hasAdditionalImages = project.images.length > 1;

  const additionalImages = hasAdditionalImages ? project.images : null;

  const hasLinks = project.links && project.links.length > 0;

  const windowSize = useWindowSize();
  const imageWidth = isMobile ? windowSize - 40 : windowSize / 3.7;
  const imageHeight = imageWidth * 1.25;

  useEffect(() => {
    if (isMobile) {
      setMobileLayout(true);
    } else {
      setMobileLayout(false);
    }
    if (searchParams.has('scrollTo')) {
      setScrollTo(searchParams.get('scrollTo'));
      router.replace(pathname);
    }
  }, [isMobile, mobileLayout, searchParams, pathname, router]);

  const sliderImages = () => {
    const images = [];
    if (additionalImages === null) {
      images.push({ url: project.images[0] });
      return images;
    }
    for (let i = 0; i < additionalImages.length; i++) {
      images.push({ url: additionalImages[i] });
    }
    return images;
  };

  const marginRightStyle = {
    marginRight: isMobile ? '0' : '2em',
  };

  const orangeBurst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: isMobile ? '0 0.5em 0.3em 0' : '0 0.3em 0.1em 0',
    color: '#ff8d86',
  };

  const marginAuto = {
    position: 'relative',
    margin: '0 auto',
  };

  return (
    <div className={styles.projectWrap}>
      <div className={styles.main}>
        <div className={styles.heroWrap}>
          <div
            className={spacingStyles.absolutelyLeft}
            style={isMobile ? marginAuto : null}>
            <div className={spacingStyles.allPaddingLg}>
              <div
                onClick={() => router.push(`/recents?scrollTo=${scrollTo}`)}
                className={textStyles.linkBlockBlack}>
                <div className={textStyles.buttonLabel}>
                  <BsArrowLeft />
                </div>
                Back to all projects
              </div>
            </div>
          </div>
          <div className={styles.heroContent}>
            <div className={textStyles.flexTag}>
              <div className={textStyles.bulletTag}></div>
              <div className={textStyles.titleTag}>{project.title}</div>
            </div>
            <div className={spacingStyles.bottomMarginLg}>
              <h1 className={textStyles.headingXl}>
                {project.subtitle.split(' ').map((word, index) => {
                  if (index === project.subtitle.split(' ').length - 1) {
                    return (
                      <span
                        key={index}
                        className={textStyles.textBurst}
                        style={orangeBurst}>
                        {word}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </h1>
            </div>
            <div className={spacingStyles.bottomMarginMd}>
              <p className={textStyles.paragraphMain}>{project.description}</p>
            </div>
            {hasLinks && (
              <div className={styles.linkButtonsWrap}>
                {project.links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={link.url}
                      target='_blank'
                      style={
                        index !== project.links.length - 1
                          ? marginRightStyle
                          : null
                      }
                      className={textStyles.linkBlockBlack}>
                      <div className={textStyles.buttonLabel}>{link.text}</div>
                      <BsArrowRight />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className={styles.imagesWrap}>
          <Masonry
            columns={isMobile && windowSize > 770 ? 2 : isMobile ? 1 : 2}
            spacing={1}
            style={{ alignContent: 'center' }}>
            {sliderImages().map((slideImage, index) => (
              <Image
                sx={{ slideImage }}
                src={slideImage.url}
                key={index}
                width={imageWidth}
                height={imageHeight}
                alt={`image for ${project.title}`}
                style={{
                  objectFit: 'contain',
                  height: 'auto',
                }}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}
