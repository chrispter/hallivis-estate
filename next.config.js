/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'a0.muscache.com'
    ]
  }
}

module.exports = nextConfig;
