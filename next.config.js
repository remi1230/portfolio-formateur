/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: isProd ? 'standalone' : undefined,
  basePath: isProd ? '/formateur' : '',
  assetPrefix: isProd ? '/formateur/' : '',
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  },
};

module.exports = nextConfig;