// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure proper static export configuration
  reactStrictMode: false,
};

module.exports = nextConfig;
