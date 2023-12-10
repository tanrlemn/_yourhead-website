'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import { Box } from '@chakra-ui/react';

export default function Commissions() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, []);
  return <Box></Box>;
}
