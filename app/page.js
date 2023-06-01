import Image from "next/image";
import styles from "./page.module.css";
import textStyles from "./text.module.css";
import { BsArrowRight } from "react-icons/bs";
import donut from "../public/donut.jpg";
import bliss from "../public/bliss.jpg";
import noThyself from "../public/no-thyself.jpg";
import owner from "../public/owner.jpg";
import whalerider from "../public/whalerider.jpg";
import textBurst from "../public/textBurst.svg";

export default function Home() {
  const squareImage = {
    maxWidth: "30em",
    maxHeight: "30em",
    minWidth: "20em",
    minHeight: "100%",
    borderRadius: "10px",
    margin: "5px",
    objectFit: "cover",
  };

  const burst = {
    backgroundImage: textBurst,
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={textStyles.headingXl}>
            Request a{" "}
            <span className={textStyles.textBurst} style={burst}>
              painting
            </span>
            today
          </h1>
          <p className={textStyles.paragraphMain}>
            A full package with multiple possibilities that will fit you
            perfectly. Start your Webflow website right now!
          </p>
          <div className={styles.heroButtonsWrap}>
            <a href="/" className={styles.linkBlockChartreuse}>
              <div className={styles.buttonLabel}>Get started</div>
              <BsArrowRight />
            </a>
            <a href="/" className={styles.linkBlockWhite}>
              <div className={styles.buttonLabel}>Read more</div>
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className={styles.heroImageGrid}>
          <div className={styles.heroRail}>
            <div className={styles.imageFrameSquare}>
              <Image
                src={donut}
                height={300}
                width={300}
                style={squareImage}
                alt="Donut painting"
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={bliss}
                height={300}
                width={300}
                style={squareImage}
                alt="Donut painting"
              />
            </div>
          </div>
          <div className={styles.heroRail}>
            <div className={styles.imageFrameSquare}>
              <Image
                src={owner}
                height={300}
                width={300}
                style={squareImage}
                alt="Donut painting"
              />
            </div>
            <div className={styles.imageFrameSquare}>
              <Image
                src={whalerider}
                height={300}
                width={300}
                style={squareImage}
                alt="Donut painting"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
