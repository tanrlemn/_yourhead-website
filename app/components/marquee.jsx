'use client';

// styles
import marqueeStyles from '../styles/(component_styles)/marquee.module.css';

// context
import { LoadingContext } from '../context/loadingContext';

// hooks
import { useContext } from 'react';

export default function Marquee({ delay = 0 }) {
  const { loading } = useContext(LoadingContext);

  const delayStyle = {
    animationDelay: `${delay}s`,
  };
  const marquee = () => {
    const marqueeSpan = [];
    for (let i = 0; i < 9; i++) {
      marqueeSpan.push(
        <span
          className={marqueeStyles.marqueeSpan}
          key={i}>
          YOURHEADISOURHEAD
        </span>
      );
    }
    return marqueeSpan;
  };

  return (
    <>
      {!loading && (
        <div
          className={marqueeStyles.yourMarquee}
          style={delayStyle}>
          {marquee()}
        </div>
      )}
    </>
  );
}
