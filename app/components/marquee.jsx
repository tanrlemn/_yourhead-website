import marqueeStyles from './componentStyles/marquee.module.css';

export default function Marquee({ delay = 0 }) {
  const delayStyle = {
    animationDelay: `${delay}s`,
  };
  const marquee = () => {
    const marqueeSpan = [];
    for (let i = 0; i < 9; i++) {
      marqueeSpan.push(
        <span className={marqueeStyles.marqueeSpan} key={i}>
          YOURHEADISOURHEAD
        </span>
      );
    }
    return marqueeSpan;
  };

  return (
    <div className={marqueeStyles.yourMarquee} style={delayStyle}>
      {marquee()}
    </div>
  );
}
