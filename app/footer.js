'use client';

import navStyles from './styles/nav.module.css';
import textStyles from './styles/text.module.css';
import spacingStyles from './styles/spacing.module.css';
import ctaStyles from './styles/(component_styles)/cta.module.css';

// images
import { BsArrowRight } from 'react-icons/bs';

// context
import { LoadingContext } from './context/loadingContext';

// hooks
import { useContext } from 'react';

// components
import Marquee from './components/marquee';
import Link from 'next/link';

export default function Footer({ showContactBar, setShowContactBar }) {
  const { loading } = useContext(LoadingContext);

  // styles
  const inputStyles = {
    background: '#eee',
  };
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
              <form
                className={ctaStyles.form}
                style={inputStyles}>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className={ctaStyles.input}
                  autoComplete='email'
                />
                <button
                  type='submit'
                  className={ctaStyles.arrowButton}>
                  <BsArrowRight />
                </button>
              </form>
            </div>
            <div className={navStyles.footerRight}>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>The Artist</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/about'>About</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/memberships'>Memberships</Link>
                  </li>
                </ul>
              </div>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>Shop</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/shop?category=prints'>Prints</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/shop?category=originals'>Originals</Link>
                  </li>
                </ul>
              </div>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>Works</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <Link href='/recents'>Recents</Link>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/music'>Music</Link>
                  </li>
                </ul>
              </div>
              <div className={navStyles.footerColumn}>
                <div className={textStyles.footerHeading}>Support</div>
                <ul className={navStyles.footerList}>
                  <li className={navStyles.footerLink}>
                    <div
                      onClick={() => {
                        setShowContactBar(true);
                      }}>
                      Contact
                    </div>
                  </li>
                  <li className={navStyles.footerLink}>
                    <Link href='/support/faqs'>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={spacingStyles.fullDividerGreen}></div>
          <Marquee delay={-20} />
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
