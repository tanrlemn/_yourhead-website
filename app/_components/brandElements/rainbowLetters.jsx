'use client';

import { Box, Heading, Highlight, Text } from '@chakra-ui/react';
// hooks
import { useState, useEffect } from 'react';

export default function RainbowLetters({ string }) {
  const [returnText, setReturnText] = useState('');

  const colors = [
    [81, 100, 58],
    [55, 100, 58],
    [26, 100, 58],
    [0, 94, 64],
    [319, 100, 66],
    [203, 100, 42],
    [282, 75, 63],
    [176, 100, 58],
  ];

  const [rainbow, setRainbow] = useState(() => {
    const strLength = string.length;

    const rainbow = [];

    for (var i = 0; i < strLength; i++) {
      rainbow.push(colors[i % colors.length]);
    }

    return rainbow;
  });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const x = e.screenX;
      const y = e.screenY;
      // setMousePosition({ x: x, y: y });

      const letters = string.split('');

      const rainbowLetters = letters.map((letter, index) => {
        const key = index;

        const moveColor = () => {
          const currentColor = rainbow[index];

          const newColor = [];

          const xPercent = (x / window.innerWidth) * 100;
          const yPercent = (y / window.innerHeight) * 100;

          const hue =
            (xPercent / 3.6 + -yPercent / 3.6 + currentColor[0]) % 360;
          const saturation = currentColor[1];
          const lightness = currentColor[2];

          newColor[0] = hue;
          newColor[1] = saturation;
          newColor[2] = lightness;

          return `hsl(${newColor[0]}, ${newColor[1]}%, ${newColor[2]}%)`;
        };

        const newColor = moveColor();

        return (
          <Highlight
            query={letter}
            key={key}
            styles={{
              color: newColor,
            }}>
            {letter}
          </Highlight>
        );
      });
      setReturnText(rainbowLetters);
    });
  }, [rainbow, string]);

  return (
    <Heading
      fontSize={'1.3rem'}
      fontWeight={500}>
      {returnText}
    </Heading>
  );
}
