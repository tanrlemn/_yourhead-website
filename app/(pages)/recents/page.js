'use client';

// styles
import styles from './recents.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
import textBurst from '@/public/icons/textBurst.svg';

// context
import { LoadingContext } from '@/app/context/loadingContext';

// api
import { supabase } from '@/app/api/db/getSupabase';

// hooks
import { useEffect, useState, useContext } from 'react';
import { useIsMobile } from '../../libs/hooks/useIsMobile';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// components
import ProjectCard from '@/app/_components/products/projectCard';
import Loading from '@/app/loading';

export default function Recents() {
  const mobile = useIsMobile();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { loading, setLoading } = useContext(LoadingContext);

  const [projects, setProjects] = useState(null);

  const [scrollTo, setScrollTo] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const projectsData = await supabase('projects');
      setProjects(projectsData);
    };

    if (projects === null) {
      setLoading(true);
      getProjects();
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    if (searchParams.has('scrollTo')) {
      setScrollTo(Number(searchParams.get('scrollTo')));
      router.replace(pathname);
    }

    if (scrollTo) {
      window.scrollTo({
        top: scrollTo,
        left: 0,
      });
    }
  }, [projects, setLoading, router, searchParams, pathname, scrollTo]);

  const lightText = {
    color: '#d8eecd',
    opacity: '1',
  };

  const orangeBurst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: mobile ? '0 0.6em 0.4em 0' : '0 0.4em 0.3em 0',
    color: '#ff8d86',
  };

  return (
    <main className={styles.main}>
      {loading && <Loading />}
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={spacingStyles.bottomTopMarginMd}>
            <div className={styles.greenTag}>
              <div
                className={textStyles.labelTag}
                style={lightText}>
                Recent Works
              </div>
            </div>

            <h1 className={textStyles.headingLg}>
              <span
                className={textStyles.textBurst}
                style={orangeBurst}>
                YOURHEAD
              </span>
              <br /> made these.
            </h1>
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
        {projects &&
          projects
            .sort((a, b) => {
              return b.year - a.year;
            })
            .map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  backgroundColor={project.backgroundColor}
                  project={{
                    id: project.id,
                    title: project.title,
                    subtitle: project.subtitle,
                    description: project.description,
                    slug: `projects/${project.slug}`,
                    images: project.images,
                    isCurrent: project.isCurrent,
                    year: project.year,
                  }}
                />
              );
            })}
      </div>
    </main>
  );
}
