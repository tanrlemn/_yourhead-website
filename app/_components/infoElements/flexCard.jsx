import Image from 'next/image';
import styles from '../styles/(component_styles)/flex.module.css';
import textStyles from '../styles/text.module.css';
import spacingStyles from '../styles/spacing.module.css';

export default function FlexCard({ title, description, image }) {
  return (
    <div className={styles.flexCard}>
      <Image
        src={image}
        width={330}
        height={200}
        className={styles.flexCardImage}
        alt={`image for ${title}`}
      />
      <div className={styles.flexCardText}>
        <div className={spacingStyles.bottomMarginSm}>
          <h2 className={textStyles.headingXs}>{title}</h2>
        </div>
        <p className={textStyles.paragraphXs}>{description}</p>
      </div>
    </div>
  );
}
