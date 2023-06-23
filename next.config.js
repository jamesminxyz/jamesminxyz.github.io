/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  // assetPrefix: './'
  // basePath: '/jamesminxyz.github.io',
}

module.exports = nextConfig
