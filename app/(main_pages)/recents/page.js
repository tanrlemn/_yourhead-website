'use client';

// styles
import styles from './recents.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
import textBurst from '@/public/icons/textBurst.svg';
import whalerider from '@/public/images/paintingRealPeople/whalerider.webp';
import donut from '@/public/images/paintingRealPeople/donut.webp';
import noThyself from '@/public/images/findingYourhead/noThyself.webp';
import owner from '@/public/images/findingYourhead/owner.webp';
import betweenFerns from '@/public/images/deadLemon/ferns.webp';
import fernsProcess34 from '@/public/images/deadLemon/fernsProcess-34.webp';
import gpaSays1 from '@/public/images/grandpaSays/gpaSays-1.webp';
import gpaSays2 from '@/public/images/grandpaSays/gpaSays-2.webp';
import mostlyCrazy1 from '@/public/images/mostlyCrazy/mostlyCrazy-1.webp';
import mostlyCrazy2 from '@/public/images/mostlyCrazy/mostlyCrazy-2.webp';
import movingThrough1 from '@/public/images/movingThrough/movingThrough-1.webp';
import movingThrough2 from '@/public/images/movingThrough/movingThrough-2.webp';
import theForceIsStrong1 from '@/public/images/theForceIsStrong/strongForce-1.webp';
import theForceIsStrong2 from '@/public/images/theForceIsStrong/strongForce-2.webp';
import whoseFace1 from '@/public/images/whoseFace/whoseFace-1.webp';
import whoseFace2 from '@/public/images/whoseFace/whoseFace-2.webp';
import withoutFace1 from '@/public/images/withoutFace/withoutFace-1.webp';
import withoutFace2 from '@/public/images/withoutFace/withoutFace-2.webp';
import abstractTimes1 from '@/public/images/abstractTimes/abstractTimes-1.webp';
import abstractTimes2 from '@/public/images/abstractTimes/abstractTimes-2.webp';
import whaleriderCover from '@/public/images/whalerider/whalerider-cover.webp';
import whalerider4 from '@/public/images/whalerider/whalerider-4.webp';

// context
import { LoadingContext } from '@/app/context/loadingContext';

// hooks
import { useEffect, useState, useContext } from 'react';
import { useIsMobile } from '../../api/hooks/useIsMobile';

// components
import ProjectCard from '@/app/components/projectCard';
import Loading from '@/app/loading';

export default function Recents() {
  const mobile = useIsMobile();

  const { loading, setLoading } = useContext(LoadingContext);

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
        <ProjectCard
          backgroundColor='--purple-light'
          project={{
            title: 'Painting Real People',
            subtitle: 'Portrait Paintings in Oil',
            description:
              'Unique portrait representations done with oil paint. Through in-person painting sessions, the artist explores what it means to get to know people and how to capture their essence.',
            slug: '/painting-real-people',
            images: [donut, whalerider],
            isCurrent: true,
          }}
        />
        <ProjectCard
          backgroundColor='--green-light'
          project={{
            title: 'Finding YOURHEAD',
            subtitle: 'Drawing on Paintings',
            description:
              'YOURHEAD steps into their new persona for what seems to be the first time. The artist explores the relationship between realistic portrait painting and the intentional destruction of something beautiful.',
            slug: '/projects/finding-yourhead',
            images: [noThyself, owner],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--blue-light'
          project={{
            title: 'Whalerider',
            subtitle: '2022 On-Ramp Grant',
            description:
              'YOURHEAD receives a grant to create a new body of work. The artist feels that they have finally found their voice and are ready to share it with the world.',
            slug: '/projects/whalerider',
            images: [whalerider4, whaleriderCover],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--yellow-light'
          project={{
            title: 'Dead Lemon',
            subtitle: 'The Artist Dies',
            description:
              'The original creator of YOURHEAD, is dead. The artist unalives their alter ego in a dire attempt to be something different.',
            slug: '/projects/dead-lemon',
            images: [fernsProcess34, betweenFerns],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--orange-light'
          project={{
            title: 'Grandpa Says',
            subtitle: "YOURHEAD's Grandpa",
            description:
              'If grandpa says, YOURHEAD does. The artist feels cornered by their grandpa and is forced to do things they do not want to do.',
            slug: '/projects/grandpa-says',
            images: [gpaSays1, gpaSays2],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--green-light'
          project={{
            title: 'Mostly Crazy',
            subtitle: 'Losing Control of YOURHEAD',
            description:
              'Losing control is apart of life. YOURHEAD is no exception. The artist explores the loss of control and the loss of self.',
            slug: '/projects/mostly-crazy',
            images: [mostlyCrazy1, mostlyCrazy2],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--pink-light'
          project={{
            title: 'The Force is Strong',
            subtitle: 'Gaining Strength',
            description:
              'YOURHEAD is a Jedi. The artist explores the relationship between the force and the self.',
            slug: '/projects/strong-force',
            images: [theForceIsStrong1, theForceIsStrong2],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--teal-light'
          project={{
            title: 'Abstract Times',
            subtitle: 'When are we?',
            description:
              'YOURHEAD is lost in time. The artist explores the relationship between the self and time.',
            slug: '/projects/abstract-times',
            images: [abstractTimes1, abstractTimes2],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--chartreuse-light'
          project={{
            title: 'Whose Face is it Anyway?',
            subtitle: 'Everyone is YOURHEAD',
            description:
              'Does a face belong to the person it is attached to? YOURHEAD explores the relationship between the self and the other.',
            slug: '/projects/whose-face',
            images: [whoseFace1, whoseFace2],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--green-teal-light'
          project={{
            title: 'Without Face',
            subtitle: 'YOURHEAD is Faceless',
            description:
              'If we were to live without a face, would we even know the difference? YOURHEAD explores the relationship between the self and the face.',
            slug: '/projects/without-face',
            images: [withoutFace1, withoutFace2],
            isCurrent: false,
          }}
        />
        <ProjectCard
          backgroundColor='--blue-light'
          project={{
            title: 'Moving Through',
            subtitle: 'Keeping it Moving',
            description:
              'YOURHEAD is always moving. The artist explores the relationship between the self and movement.',
            slug: '/projects/moving-through',
            images: [movingThrough1, movingThrough2],
            isCurrent: false,
          }}
        />
      </div>
    </main>
  );
}
