/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 7200,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
}

export default nextConfig
