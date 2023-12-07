'use client';

// chakra-ui
import { Box } from '@chakra-ui/react';

export default function GooeyBallsAlt() {
  return (
    <Box p={'0.5rem'}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='spinner-gF01'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='1'
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
        <g
          className='spinner_LvYV'
          filter='url(#spinner-gF01)'>
          <circle
            className='spinner_8XMC'
            cx='5'
            cy='12'
            r='4'
          />
          <circle
            className='spinner_WWWR'
            cx='19'
            cy='12'
            r='4'
          />
        </g>
      </svg>
    </Box>
  );
}
