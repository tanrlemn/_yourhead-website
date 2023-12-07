'use client';

// hooks
import { createContext, useState } from 'react';

import Loading from '@/app/loading';

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
}
