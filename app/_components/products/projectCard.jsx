'use client';

// styles
import styles from '../styles/(component_styles)/projectCard.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';

// hooks
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { usePreserveScroll } from '../../lib/helpers/preserveScroll';

// components
import Image from 'next/image';

export default function ProjectCard({ project, backgroundColor }) {
  const projectCardRef = useRef(null);
  const router = useRouter();
  const scrollTo = usePreserveScroll(projectCardRef);

  const background = {
    backgroundColor: `var(${backgroundColor})`,
  };

  const centerText = {
    textAlign: 'center',
  };

  return (
    <div
      className={styles.projectCard}
      style={background}
      ref={projectCardRef}>
      <div className={styles.imageRail}>
        {project.images.map((image, index) => {
          if (index < 2)
            return (
              <div
                className={styles.imageFrameSquare}
                key={index}>
                <Image
                  src={image}
                  height={300}
                  width={300}
                  alt={`${project.title} image`}
                  className={styles.projectImage}
                />
              </div>
            );
        })}
      </div>
      <div>
        {project.isCurrent && (
          <div className={spacingStyles.bottomMarginSm}>
            <div className={textStyles.greenTag}>Current project</div>
          </div>
        )}
        <div className={spacingStyles.bottomMarginSm}>
          <div className={textStyles.outlineTextGrey}>
            <div
              className={textStyles.labelTag}
              style={centerText}>
              ––{'  '}
              {project.subtitle}
              {'  '}––
            </div>
          </div>
        </div>

        <div className={spacingStyles.bottomMarginSm}>
          <h2 className={textStyles.headingLg}>{project.title}</h2>
        </div>

        <div className={spacingStyles.bottomMarginLg}>
          <p className={textStyles.paragraphXs}>{project.description}</p>
          <div className={spacingStyles.bottomTopMarginMd}>
            <p className={textStyles.paragraphXxs}>{project.year}</p>
            <p className={textStyles.paragraphXxs}>
              – {project.images.length} images
            </p>
          </div>
        </div>
        <div className={spacingStyles.topMarginMd}>
          <div
            onClick={() => {
              router.push(`${project.slug}?scrollTo=${scrollTo}`);
            }}
            className={textStyles.linkBlockBlack}>
            <div className={textStyles.buttonLabel}>View project</div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
