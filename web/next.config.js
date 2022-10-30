/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'scontent.cdninstagram.com',
      'video.cdninstagram.com'
    ],
  },
}

module.exports = nextConfig
