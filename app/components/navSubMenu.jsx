// styles
import styles from '../styles/(component_styles)/subMenu.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';
import navStyles from '../styles/nav.module.css';

// components
import Link from 'next/link';

export default function NavSubMenu() {
  return (
    <div className={styles.subMenuWrap}>
      <div className={styles.subMenu}>
        <div className={spacingStyles.blueUnderscoreWrap}>
          <p className={styles.navTitle}>
            <span className={spacingStyles.blueUnderscoreSm}></span>Categories:
          </p>
        </div>
        <Link
          href='/shop?category=prints'
          className={styles.navLink}>
          Prints
        </Link>
        <Link
          href='/shop?category=originals'
          className={styles.navLink}>
          Originals
        </Link>
        <Link
          href='/shop?category=apparel'
          className={styles.navLink}>
          Apparel
        </Link>
        <Link
          href='/shop?category=music'
          className={styles.navLink}>
          Music
        </Link>
        <Link
          href='/shop?category=sale'
          className={styles.navLink}>
          Sale
        </Link>
        <Link
          href='/shop?category=all'
          className={styles.navLink}>
          Shop all
        </Link>
      </div>
    </div>
  );
}
