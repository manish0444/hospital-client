// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables eslint errors on build
    ignoreBuildErrors: true, // ✅ disables eslint errors on dev
  },
};

module.exports = nextConfig;
