/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "blog.karencode.com.br",
        },
      ],
    },
  };
  module.exports = nextConfig
  