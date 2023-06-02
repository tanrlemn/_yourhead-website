import Image from 'next/image';
import styles from './componentStyles/flex.module.css';
import textStyles from '../text.module.css';
import spacingStyles from '../spacing.module.css';

export default function FlexCard({
  title,
  description,
  image,
  reverse = false,
  subtitle = false,
  subtitleText = '',
}) {
  return (
    <div className={styles.flexWrap}>
      {!reverse && (
        <Image
          src={image}
          width={415}
          height={300}
          className={styles.flexImage}
          alt={`image for ${title}`}
        />
      )}
      <div className={styles.flexText}>
        {subtitle && (
          <div className={styles.tag}>
            <div className={textStyles.labelTag}>{subtitleText}</div>
          </div>
        )}
        <div className={spacingStyles.bottomMarginLg}>
          <h3 className={textStyles.headingMd}>{title}</h3>
        </div>
        <p className={textStyles.paragraphXs}>{description}</p>
      </div>
      {reverse && (
        <Image
          src={image}
          width={415}
          height={300}
          className={styles.flexImage}
          alt={`image for ${title}`}
        />
      )}
    </div>
  );
}
