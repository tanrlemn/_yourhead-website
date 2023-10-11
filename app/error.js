'use client';

// hooks
import { useEffect } from 'react';

// components
import LoadingDiv from '@/app/_components/loadingDiv';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div>
        <LoadingDiv />

        <h2>Oops... </h2>
        <p>Something went wrong</p>

        <div>
          <div onClick={() => reset()}>Try again</div>
        </div>
      </div>
    </div>
  );
}
