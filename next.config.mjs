/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 7200,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
}

export default nextConfig
