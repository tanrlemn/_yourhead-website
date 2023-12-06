'use client';

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
      style={background}
      ref={projectCardRef}>
      <div>
        {project.images.map((image, index) => {
          if (index < 2)
            return (
              <div key={index}>
                <Image
                  src={image}
                  height={300}
                  width={300}
                  alt={`${project.title} image`}
                />
              </div>
            );
        })}
      </div>
      <div>
        {project.isCurrent && (
          <div>
            <div>Current project</div>
          </div>
        )}
        <div>
          <div>
            <div style={centerText}>
              ––{'  '}
              {project.subtitle}
              {'  '}––
            </div>
          </div>
        </div>

        <div>
          <h2>{project.title}</h2>
        </div>

        <div>
          <p>{project.description}</p>
          <div>
            <p>{project.year}</p>
            <p>– {project.images.length} images</p>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              router.push(`${project.slug}?scrollTo=${scrollTo}`);
            }}>
            <div>View project</div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
