'use client';

// styles
import navStyles from './styles/nav.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';

// context
import { LoadingContext } from './context/loadingContext';

// hooks
import { useContext } from 'react';

// components
import Link from 'next/link';

export default function Footer({ setShowContactBar }) {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {!loading && (
        <footer className={navStyles.footerWrap}>
          <div className={navStyles.footerInner}>
            <div className={navStyles.footerLeft}>
              <div className={textStyles.footerTitle}>YOURHEAD</div>
              <div className={spacingStyles.bottomTopMarginMd}>
                <div className={textStyles.paragraphSm}>
                  YOURHEAD is a painter, musician, and innovator, offering a
                  unique style and approach to all aspects of life.
                </div>
              </div>
            </div>
            <div className={navStyles.footerRight}>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>The Artist</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/selected-works'>Selected works</Link>
                  </li>{' '}
                  <li className={navStyles.footerLink}>
                    <Link href='/resume'>Resume</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <div
                      onClick={() => {
                        setShowContactBar(true);
                      }}>
                      Contact
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={spacingStyles.fullDividerGreen}></div>
          <div className={navStyles.footerLower}>
            <div className={textStyles.footerLowerText}>
              © 2023 YOURHEAD, All Rights reserved
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
