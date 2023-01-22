/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dodopizza.azureedge.net", "cdn.dodostatic.net", "vk.com"],
  },
};

module.exports = nextConfig;
