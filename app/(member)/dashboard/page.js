'use client';

// context
import { AuthContext } from '../auth/AuthContext';

// hooks
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

// functions
import { continueOauth } from '@/app/api/auth/continueOauth';

export default function Dashboard() {
  const { authState, setAuthState } = useContext(AuthContext);
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const continueOauthLogin = async () => {
      if (code) {
        //save the generated token in the local storage as a cookie

        const res = await continueOauth(code);
        localStorage.setItem('auth', JSON.stringify(res));
        console.log('res', await res);
        setAuthState(await res);
      } else {
        let token = localStorage.getItem('auth');
        console.log('token', token);

        if (token) {
          token = JSON.parse(token);
          if (token) {
            setAuthState(token);
          }
        }

        if (!token && pathname.indexOf('login') !== -1) {
          router.push(login_path);
        }
      }
    };

    if (code) {
      continueOauthLogin();
    }
  }, []);

  return <div>You did it!</div>;
}
