// styles
import styles from '@/app/styles/(component_styles)/contactSidebar.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// images
import { VscClose } from 'react-icons/vsc';

export default function ContactBar({ showContactBar, setShowContactBar }) {
  const clickOutStyles = {
    display: 'block',
    backdropFilter: 'blur(2px)',
    zIndex: '102',
  };

  const sidebarStyles = {
    left: showContactBar ? '0' : '-100vw',
  };

  const closeStyles = {
    margin: '1em',
  };
  return (
    <div className={styles.sidebarWrap}>
      {showContactBar && (
        <div
          className={spacingStyles.clickOut}
          style={clickOutStyles}
          onClick={() => setShowContactBar(false)}></div>
      )}
      <div
        className={styles.sidebar}
        style={sidebarStyles}>
        <div className={spacingStyles.absolutelyRight}>
          <VscClose
            style={closeStyles}
            className={spacingStyles.icon}
            onClick={() => setShowContactBar(false)}
          />
        </div>
        <div className={spacingStyles.bottomTopMarginLg}>
          <h2 className={textStyles.headingSm}>Contact.</h2>
        </div>
        <div className={textStyles.lightWeight}>
          <p className={textStyles.paragraphXs}>YOURHEAD | Tanner Lemon</p>
          <p className={textStyles.paragraphXxs}>Anderson, IN</p>
          <br />
          <p className={textStyles.paragraphXxs}>yourheadisourhead.com</p>
          <p className={textStyles.paragraphXxs}>
            tanner@yourheadisourhead.com
          </p>
          <p className={textStyles.paragraphXxs}>+1 (765) 313-6929</p>
        </div>
      </div>
    </div>
  );
}
