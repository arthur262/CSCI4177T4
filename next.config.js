/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "placehold.it",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig
