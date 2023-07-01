const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  },
  experimental: {
    scrollRestoration: false
  },
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
