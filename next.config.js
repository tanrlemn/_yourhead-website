/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utjfdbdjzeqijvvxwiqo.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

    SUPABASE_URL: process.env.SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_API_KEY: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
    SUPABASE_SECRET: process.env.SUPABASE_SECRET,

    XANO_URL: process.env.XANO_URL,
    XANO_API_KEY: process.env.XANO_API_KEY,
    XANO_API_URL: process.env.XANO_API_URL,
    XANO_OAUTH_KEY: process.env.XANO_OAUTH_KEY,
    XANO_OAUTH_INIT_ENDPOINT: process.env.XANO_OAUTH_INIT_ENDPOINT,
    XANO_OAUTH_CONTINUE_ENDPOINT: process.env.XANO_OAUTH_CONTINUE_ENDPOINT,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
