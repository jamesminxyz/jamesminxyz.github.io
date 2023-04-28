/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   appDir: false,
  // },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // distDir: 'dist',
  // assetPrefix: './'
  basePath: '/jamesminxyz',
}

module.exports = nextConfig
