'use client';

// context
import { LoadingContext } from '../context/LoadingProvider';

// hooks
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useRouteListener() {
  const { setLoading } = useContext(LoadingContext);

  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    setChanges((prev) => prev + 1);
    setLoading(true);
  }, [pathname]);

  return pathname;
}
