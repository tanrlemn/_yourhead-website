// hooks
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';
// components
import { Link } from '@chakra-ui/react';

export default function NavSubMenu() {
  const isMobile = useIsMobile();
  const mobileLinkStyles = {
    padding: '0.5em 0',
  };
  return (
    <div className={styles.subMenuWrap}>
      <div className={styles.subMenu}>
        <div className={styles.navTitleWrap}>
          <div className={spacingStyles.blueUnderscoreWrap}>
            <p className={styles.navTitle}>
              <span className={spacingStyles.blueUnderscoreSm}></span>
              Categories:
            </p>
          </div>
        </div>
        <Link
          href='/shop?category=prints'
          className={styles.navLink}
          style={isMobile ? mobileLinkStyles : null}>
          Prints
        </Link>
        <Link
          href='/shop?category=originals'
          className={styles.navLink}
          style={isMobile ? mobileLinkStyles : null}>
          Originals
        </Link>
        <Link
          href='/shop?category=apparel'
          className={styles.navLink}
          style={isMobile ? mobileLinkStyles : null}>
          Apparel
        </Link>
        <Link
          href='/shop?category=music'
          className={styles.navLink}
          style={isMobile ? mobileLinkStyles : null}>
          Music
        </Link>
        <Link
          href='/shop?category=sale'
          className={styles.navLink}
          style={isMobile ? mobileLinkStyles : null}>
          Sale
        </Link>
        <Link
          href='/shop?category=all'
          className={styles.navLink}
          style={isMobile ? mobileLinkStyles : null}>
          Shop all
        </Link>
      </div>
    </div>
  );
}
