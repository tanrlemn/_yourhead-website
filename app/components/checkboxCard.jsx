import Image from 'next/image';
import styles from './componentStyles/checkboxCard.module.css';
import textStyles from '../text.module.css';
import checkIcon from '../../public/checkIcon.svg';
import spacingStyles from '../spacing.module.css';

export default function CheckboxCard({
  title,
  description,
  subtitle = false,
  subtitleText = '',
  checks = [],
  unchecks = [],
  backgroundColor = 'white',
}) {
  const background = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.checkboxCard} style={background}>
      {subtitle && (
        <div className={spacingStyles.bottomMarginMd}>
          <div className={textStyles.outlineTextGrey}>
            <div className={textStyles.labelTag}>{subtitleText}</div>
          </div>
        </div>
      )}
      <div className={spacingStyles.bottomMarginSm}>
        <h2 className={textStyles.headingLg}>{title}</h2>
      </div>

      <div className={spacingStyles.bottomMarginMd}>
        <p className={textStyles.paragraphXxs}>{description}</p>
      </div>
      {checks.length > 0 &&
        checks.map((check, i) => (
          <div className={styles.checkItem} key={i}>
            <div className={styles.checkIconWrap}>
              <Image
                src={checkIcon}
                width={9}
                height={9}
                className={styles.checkIcon}
                alt='check icon'
              />
            </div>
            <p className={textStyles.paragraphXs}>{check}</p>
          </div>
        ))}
    </div>
  );
}
