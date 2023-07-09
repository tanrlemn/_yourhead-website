'use client';

// styles
import styles from '../projects.module.css';

// images
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// hooks
import { useRouter } from 'next/router';
import { useIsMobile } from '@/app/api/hooks/useIsMobile';

// components
import Image from 'next/image';
import Link from 'next/link';

export default function Product({ currentProject }) {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <div className={styles.projectWrap}>
      {/* <div className={styles.main}>
        <div className={styles.heroWrap}>
          <div
            className={spacingStyles.absolutelyLeft}
            style={isMobile ? marginAuto : null}>
            <div className={spacingStyles.allPaddingLg}>
              <div
                onClick={() => router.push('/selected-works')}
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
              <div className={textStyles.titleTag}>{currentProject.title}</div>
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
        </div>
      </div> */}
    </div>
  );
}
