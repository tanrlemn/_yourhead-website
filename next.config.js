/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    XANO_URL: process.env.XANO_URL,

    XANO_API_KEY: process.env.XANO_API_KEY,
    XANO_API_URL: process.env.XANO_API_URL,

    XANO_OAUTH_KEY: process.env.XANO_OAUTH_KEY,
    XANO_OAUTH_INIT_ENDPOINT: process.env.XANO_OAUTH_INIT_ENDPOINT,
    XANO_OAUTH_CONTINUE_ENDPOINT: process.env.XANO_OAUTH_CONTINUE_ENDPOINT,
  },
};

module.exports = nextConfig;
