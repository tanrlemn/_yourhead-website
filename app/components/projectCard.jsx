'use client';

// styles
import styles from '../styles/(component_styles)/projectCard.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';

// hooks
import { useState, useRef } from 'react';

// components
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project, backgroundColor }) {
  const [viewMore, setViewMore] = useState(false);
  const projectCardRef = useRef(null);

  const background = {
    backgroundColor: `var(${backgroundColor})`,
  };

  const executeScroll = () => {
    projectCardRef.current.scrollIntoView({ alignToTop: true });
    window.scrollBy(0, -100);
  };

  return (
    <div
      className={styles.projectCard}
      style={background}
      ref={projectCardRef}>
      <div className={styles.imageRail}>
        {project.images.map((image, index) => {
          return (
            <div
              className={styles.imageFrameSquare}
              key={index}>
              <Image
                src={image.src}
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
          <div className={textStyles.greenTag}>Current project</div>
        )}
        <div className={spacingStyles.bottomTopMarginMd}>
          <div className={textStyles.outlineTextGrey}>
            <div className={textStyles.labelTag}>
              ––{'  '}
              {project.subtitle}
              {'  '}––
            </div>
          </div>
        </div>

        <div className={spacingStyles.bottomMarginXs}>
          <h2 className={textStyles.headingLg}>{project.title}</h2>
        </div>

        <div className={spacingStyles.bottomMarginLg}>
          <p className={textStyles.paragraphXs}>{project.description}</p>
        </div>
        <div className={spacingStyles.topMarginMd}>
          <Link
            href={project.slug}
            className={textStyles.linkBlockBlack}>
            <div className={textStyles.buttonLabel}>View project</div>
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
