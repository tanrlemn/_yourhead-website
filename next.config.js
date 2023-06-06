/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    XANO_API_URL: process.env.XANO_API_URL,
  },
};

module.exports = nextConfig;
