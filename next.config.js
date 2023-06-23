/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'docs',
  // assetPrefix: './'
  // basePath: '/jamesminxyz.github.io',
}

module.exports = nextConfig
