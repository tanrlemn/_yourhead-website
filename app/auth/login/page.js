'use client';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useSearchParams, usePathname } from 'next/navigation';
import textStyles from '../../text.module.css';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { initOauth } from '@/app/utils/initOauth';
import { continueOauth } from '@/app/utils/continueOauth';

export default function Login() {
  const { authState, setAuthState } = useContext(AuthContext);
  const [loggingIn, setLoggingIn] = useState(false);
  const [authUrl, setAuthUrl] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const localStorage = useLocalStorage();
  const router = useRouter();
  const login_path = '/auth/login';

  useEffect(() => {
    const handleLogin = async () => {
      const res = await initOauth();
      if (res) {
        setAuthUrl(res.authUrl);
      }
      router.push(authUrl);
    };

    if (loggingIn) {
      handleLogin();
    }
  }, [authUrl, loggingIn]);

  //on page load, parse the code variable to be able to login/signup
  useEffect(() => {
    const code = searchParams.get('code');
    const continueOauthLogin = async () => {
      if (code) {
        //save the generated token in the local storage as a cookie

        const res = continueOauth(code);
        localStorage.setItem('auth', JSON.stringify(res));
        setAuthState(res);
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

  return (
    <div>
      <button
        onClick={() => {
          setLoggingIn(true);
        }}>
        Google sign in
      </button>
    </div>
  );
}
