// styles
import styles from '../styles/(component_styles)/experienceCard.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

// components
import Link from 'next/link';

export default function ExperienceCard({ title, items = [] }) {
  const bottomBorder = {
    borderBottom: 'var(--blue-light-border)',
    marginBottom: '1em',
  };

  return (
    <div className={styles.experienceCard}>
      <div className={spacingStyles.bottomMarginLg}>
        <h2 className={textStyles.headingSm}>{title}</h2>
      </div>

      {items.length > 0 &&
        items.map((item, index) => (
          <div
            key={index}
            className={styles.itemWrap}
            style={index === items.length - 1 ? {} : bottomBorder}>
            <div className={spacingStyles.bottomMarginSm}>
              <p className={textStyles.paragraphXxs}>
                <span className={textStyles.lightWeight}>{item.dates} </span>
              </p>
              <div className={spacingStyles.bottomMarginXs}>
                <p className={textStyles.paragraphXs}>
                  <span className={textStyles.aBitBolder}>
                    {item.title} at {item.company},
                  </span>
                  <span className={textStyles.lightWeight}>
                    {' '}
                    {item.location}
                  </span>
                </p>
              </div>
            </div>
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
