'use client';

// images
import textBurst from '@/public/icons/textBurst.svg';
import whalerider from '@/public/images/paintingRealPeople/whalerider.webp';
import donut from '@/public/images/paintingRealPeople/donut.webp';

import profileImg from '@/public/images/profile-img.png';

// components
import Image from 'next/image';

// hooks
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

export default function About() {
  const mobile = useIsMobile();
  const [imgMax, setImgMax] = useState(!mobile ? '45vw' : '15em');
  const [imgMin, setImgMin] = useState(!mobile ? '45vw' : '10em');

  useEffect(() => {
    setImgMax(mobile ? '45vw' : '15em');
    setImgMin(mobile ? '45vw' : '10em');
  }, [mobile]);

  const orangeBurst = {
    backgroundImage: `url(${textBurst.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    padding: mobile ? '0 0.5em 0.3em 0' : '0 0.3em 0.1em 0',
    color: '#ff8d86',
  };

  const squareImage = {
    maxWidth: imgMax,
    maxHeight: imgMax,
    borderRadius: '10px',
    margin: '5px',
    objectFit: 'cover',
    objectPosition: '50% 20%',
  };

  const mobilePadding = {
    padding: '1em',
  };
  return (
    <main>
      <div>
        <div>
          <Image
            src={profileImg}
            alt='profile image'
            width={400}
            height={400}
          />
          <div>
            <div>
              <div></div>
              <div>About The Artist</div>
            </div>

            <h1>
              Searching <br />
              for real <span style={orangeBurst}>people</span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Artist statement</h2>
          </div>
          <p>
            Our assumptions about other people leave no room for the truth. Is
            it not true that deep within each of us lie secrets and stories that
            long to be shared? There’s always more.
          </p>
          <br />
          <br />
          <p>
            Filled with pain caused by the generations before us, we move
            through life seeking answers on how to heal the pain – or attempting
            to make it disappear. YOURHEAD believes that we need each other to
            heal. We need to know what’s hidden deep down inside of someone else
            to learn new perspectives for healing what’s inside of us. We need
            to teach each other to heal.
          </p>
          <br />
          <br />
          <p>
            YOURHEAD explores the relationship between the deeply rooted pain we
            all experience and what we actually share and physically see. The
            artist attempts to reveal the true identity of their subjects,
            sometimes with elaborate embellishments related to their
            personality, other times with simple phrases or natural elements.
            People are inspiring, experiencing pain, and beautiful. YOURHEAD
            uses painting as an experience to be shared and understood –
            something to help heal the pain.
          </p>
        </div>
      </div>

      <div>
        <div>
          <div></div>
          <h2>Experience & Awards</h2>
          <div>
            <h3>9+ years of professional experience</h3>
          </div>
        </div>
      </div>

      <div style={mobile ? mobilePadding : null}>
        <h2>Current working project</h2>
      </div>
      <div>
        <div>
          <div>
            <div>
              <Image
                src={donut}
                height={imgMax}
                width={imgMax}
                style={squareImage}
                alt='Donut painting'
              />
            </div>
            <div>
              <Image
                src={whalerider}
                height={imgMax}
                width={imgMax}
                style={squareImage}
                alt='Donut painting'
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Painting Real People</h3>
          </div>
          <p>
            Unique portrait representations done with oil paint. Through
            in-person painting sessions, the artist explores what it means to
            get to know people and how to capture their essence.
          </p>
        </div>
      </div>
    </main>
  );
}
