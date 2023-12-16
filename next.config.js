/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TEST: 'test',
    npm_package_name: process.env.npm_package_name,
    npm_package_version: process.env.npm_package_version,
  },
  reactStrictMode: true,
  // reactStrictMode: false,
};

module.exports = nextConfig;
