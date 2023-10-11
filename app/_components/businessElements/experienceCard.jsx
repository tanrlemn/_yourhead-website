// styles
import styles from '../styles/(component_styles)/experienceCard.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// images
import checkIcon from '@/public/icons/checkIcon.svg';

// components
import Image from 'next/image';
import Link from 'next/link';

export default function ExperienceCard({
  title,
  subtitle = false,
  subtitleText = '',
  items = [],
  backgroundColor = '#fff',
}) {
  const background = {
    backgroundColor: backgroundColor,
  };

  const bottomBorder = {
    borderBottom: 'var(--blue-light-border)',
    paddingBottom: '1em',
    marginBottom: '2em',
  };

  return (
    <div
      className={styles.experienceCard}
      style={background}>
      {subtitle && (
        <div className={spacingStyles.bottomMarginMd}>
          <div className={textStyles.outlineTextGrey}>
            <div className={textStyles.labelTag}>{subtitleText}</div>
          </div>
        </div>
      )}
      <div className={spacingStyles.bottomMarginLg}>
        <h2 className={textStyles.headingLg}>{title}</h2>
      </div>

      {items.length > 0 &&
        items.map((item, index) => (
          <div
            key={index}
            className={styles.itemWrap}
            style={index === items.length - 1 ? {} : bottomBorder}>
            <div className={spacingStyles.bottomMarginMd}>
              <div className={spacingStyles.bottomMarginXs}>
                <h3 className={textStyles.headingXxxs}>{item.dates}</h3>
              </div>
              <h4 className={textStyles.headingXs}>{item.title}</h4>

              <div className={spacingStyles.bottomMarginXs}>
                <p className={textStyles.paragraphXs}>{item.company}</p>
              </div>
              <p className={textStyles.headingXxxs}>{item.location}</p>
            </div>
            {item.checkItems.map((checkItem, i) => (
              <div
                className={styles.checkItem}
                key={i}>
                <div className={styles.checkIconWrap}>
                  <Image
                    src={checkIcon}
                    width={9}
                    height={9}
                    className={styles.checkIcon}
                    alt='check icon'
                  />
                </div>
                <p className={textStyles.paragraphXxs}>{checkItem}</p>
              </div>
            ))}
            {item.links && item.links.length > 0 && (
              <div className={spacingStyles.bottomMarginMd}>
                {item.links.map((link, i) => (
                  <div
                    key={i}
                    className={spacingStyles.bottomMarginSm}>
                    <Link
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={textStyles.normalLink}>
                      {link.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
