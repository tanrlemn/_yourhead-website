'use client';

// chakra-ui
import { Box } from '@chakra-ui/react';

export default function GooeyBalls() {
  return (
    <Box p={'0.5rem'}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='spinner-gF00'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='1.5'
              result='y'
            />
            <feColorMatrix
              in='y'
              mode='matrix'
              values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7'
              result='z'
            />
            <feBlend
              in='SourceGraphic'
              in2='z'
            />
          </filter>
        </defs>
        <g filter='url(#spinner-gF00)'>
          <circle
            fill='var(--midOrangeAlt)'
            className='spinner_mHwL'
            cx='4'
            cy='12'
            r='3'
          />
          <circle
            fill='var(--lightOrange)'
            className='spinner_ote2'
            cx='15'
            cy='12'
            r='8'
          />
        </g>
      </svg>
    </Box>
  );
}
