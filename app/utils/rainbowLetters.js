'use client';
import { useState, useEffect } from 'react';

export default function RainbowLetters({ string, initialColor }) {
  if (initialColor === 'dark') {
    initialColor = '#161616';
  } else {
    initialColor = '#fff';
  }

  const [mouseOver, setMouseOver] = useState(false);
  const [returnText, setReturnText] = useState(string);
  useEffect(() => {
    setReturnText(rainbowLetters);
  }, [mouseOver]);

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

    const color = rainbow[index];

    console.log(letter);

    return (
      <span
        key={key}
        style={{
          color: mouseOver ? color : initialColor,
        }}>
        {letter}
      </span>
    );
  });
  return (
    <div
      onMouseEnter={() => {
        setMouseOver(!mouseOver);
      }}>
      {returnText}
    </div>
  );
}
