'use client';
import { useState, useEffect, useRef } from 'react';

export default function RainbowLetters({ string, initialColor }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [returnText, setReturnText] = useState('');
  const color = useRef(() => {
    if (initialColor === 'dark') {
      return '#161616';
    } else {
      return '#fff';
    }
  });

  useEffect(() => {
    const letters = string.split('');
    const rainbow = [
      'var(--chartreuse)',
      'var(--yellow-mid)',
      'var(--orange-mid)',
      'var(--red-mid)',
      'var(--pink-mid)',
      'var(--blue-mid)',
      'var(--purple-mid)',
      'var(--teal-mid)',
    ];

    const rainbowLetters = letters.map((letter, index) => {
      const key = index;
      index > rainbow.length - 1 ? (index = index % rainbow.length) : index;

      const newColor = rainbow[index];

      console.log(letter);

      return (
        <span
          key={key}
          style={{
            color: mouseOver ? newColor : color,
          }}>
          {letter}
        </span>
      );
    });
    setReturnText(rainbowLetters);
  }, [mouseOver, string]);

  return (
    <div
      onMouseEnter={() => {
        setMouseOver(!mouseOver);
      }}>
      {returnText}
    </div>
  );
}
