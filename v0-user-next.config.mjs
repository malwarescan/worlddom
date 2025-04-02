/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'neuralcommandllc.com',
          },
        ],
        destination: 'https://dominatethe.world',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'neuralcommandllc.com',
          },
        ],
        destination: 'https://dominatethe.world/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['placeholder.com'],
  },
}

export default nextConfig

