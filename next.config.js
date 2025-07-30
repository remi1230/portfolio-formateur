/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Sans cette ligne, .next/standalone n'est pas généré
  output: isProd ? 'standalone' : undefined,
  basePath: isProd ? '/formateur' : '',
  assetPrefix: isProd ? '/formateur/' : '',
  images: {
    loader: 'default',
    path: isProd ? '/formateur/_next/image' : '/_next/image',
  },
  publicRuntimeConfig: {
    // pour l’app router, on peut aussi exposer via env
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/formateur' : '',
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  },
};

module.exports = nextConfig;