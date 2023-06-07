'use client';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';

export default function Dashboard() {
  const { authState, setAuthState } = useContext(AuthContext);
  return <div>You did it!</div>;
}
