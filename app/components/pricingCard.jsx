import Image from 'next/image';
import styles from './componentStyles/pricingCard.module.css';
import textStyles from '../text.module.css';
import checkIcon from '../../public/checkIcon.svg';
import spacingStyles from '../spacing.module.css';
import { BsArrowRight } from 'react-icons/bs';

export default function PricingCard({
  mainTitle,
  title,
  description,
  subtitle = false,
  subtitleText = '',
  checks = [],
  unchecks = [],
  backgroundColor = 'white',
  type = 'signup',
}) {
  const background = {
    backgroundColor: `var(${backgroundColor})`,
  };

  return (
    <div className={styles.pricingCard} style={background}>
      <h2 className={textStyles.headingLg}>{mainTitle}</h2>
      {subtitle && (
        <div className={spacingStyles.bottomTopMarginMd}>
          <div className={textStyles.outlineTextGrey}>
            <div className={textStyles.labelTag}>{subtitleText}</div>
          </div>
        </div>
      )}
      <div className={spacingStyles.bottomMarginSm}>
        <h2 className={textStyles.headingLg}>{title}</h2>
      </div>

      <div className={spacingStyles.bottomTopMarginMd}>
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
      <div className={spacingStyles.topMarginMd}>
        {type === 'signup' && (
          <button className={textStyles.linkBlockOrangeOutline}>
            <div className={textStyles.buttonLabel}>Sign up</div>
          </button>
        )}
        {type === 'commission' && (
          <button
            className={textStyles.linkBlockGreen}
            data-tf-slider='diYCs0i7'
            data-tf-position='right'
            data-tf-opacity='100'
            data-tf-iframe-props='title=YOURHEAD Commission Request'
            data-tf-transitive-search-params
            data-tf-medium='snippet'>
            <div className={textStyles.buttonLabel}>Request a painting</div>
            <BsArrowRight />
          </button>
        )}
        {type === 'shop' && (
          <button className={textStyles.linkBlockGray}>
            <div className={textStyles.buttonLabel}>Shop now</div>
          </button>
        )}
      </div>
    </div>
  );
}
