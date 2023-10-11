// style
import styles from '@/app/styles/(component_styles)/step.module.css';
import textStyles from '@/app/styles/text.module.css';

// components
import Image from 'next/image';

export default function Step({
  number,
  title,
  description,
  image,
  numberColor = 'var(--green-light)',
}) {
  const howImage = {
    maxWidth: '15em',
    maxHeight: '10em',
    borderRadius: '9px',
    marginTop: '1em',
    objectFit: 'cover',
    objectPosition: '50% 20%',
  };

  const backgroundColor = {
    background: numberColor,
  };
  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div
          className={styles.stepNumber}
          style={backgroundColor}>
          {number}
        </div>
        <h3 className={textStyles.headingSm}>{title}</h3>
      </div>
      <div className={styles.stepContent}>
        <p className={textStyles.paragraphXs}>{description}</p>
        <Image
          src={image}
          height={300}
          width={300}
          style={howImage}
          quality={100}
          alt={`image for ${title}`}
        />
      </div>
    </div>
  );
}
