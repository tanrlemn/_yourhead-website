'use client';

// hooks
import { useRouter } from 'next/navigation';

// chakra-ui
import { Box, Button } from '@chakra-ui/react';

export default function Dashboard() {
  const router = useRouter();

  const handleManageBilling = async () => {
    const response = await fetch('/api/accounts/stripeBillingSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId: 'cus_P8rlXIo6AROimp',
      }),
    });

    const { url } = await response.json();

    router.push(url);
  };
  return (
    <Box>
      <Button onClick={handleManageBilling}>Manage subscription billing</Button>
    </Box>
  );
}
