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
          <h2 className={textStyles.headingMd}>
            Leave a message after the beep...
          </h2>
          <div className={spacingStyles.blockDividerBlue}></div>
          <div className={spacingStyles.bottomMarginMd}>
            <p>Beep.</p>
          </div>
          <div className={spacingStyles.marqueeDividerGreen}></div>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label
              htmlFor='name'
              className={textStyles.labelMd}>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className={textStyles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label
              htmlFor='email'
              className={textStyles.labelMd}>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={textStyles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label
              htmlFor='message'
              className={textStyles.labelMd}>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className={textStyles.textArea}
            />
          </div>
          <button
            type='submit'
            className={textStyles.linkBlockChartreuse}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
