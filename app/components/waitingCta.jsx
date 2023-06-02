import { BsArrowRight } from "react-icons/bs";
import styles from "./componentStyles/cta.module.css";
import textStyles from "../text.module.css";
import spacingStyles from "../spacing.module.css";

export default function WaitingCta({ waitingPeriod }) {
  return (
    <div className={styles.ctaWrap}>
      <div className={styles.ctaContentWrap}>
        <div className={styles.ctaContent}>
          <div className={styles.tag}>
            <div className={textStyles.labelTag}>
              Current waiting list status
            </div>
          </div>
          <h2 className={textStyles.headingMd}>Waiting period:</h2>
          <h3 className={textStyles.headingSm}>
            <span className={textStyles.outlineText}>{waitingPeriod}</span>
          </h3>
        </div>
        <div className={styles.ctaFormWrap}>
          <div className={styles.ctaForm}>
            <div className={spacingStyles.bottomMarginMd}>
              <p className={textStyles.paragraphSm}>
                Sign up to receive waiting time updates and special offers.
              </p>
            </div>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                autoComplete="email"
              />
              <button type="submit" className={styles.arrowButton}>
                <BsArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
