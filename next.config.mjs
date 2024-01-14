/** @type {import('next').NextConfig} */

import { ARTICLES } from './src/app/(styled)/article/config.js';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  env: {
    AUTHOR: 'KARPOLAN',
    // npm_package_name: process.env.npm_package_name,
    // npm_package_version: process.env.npm_package_version,
  },

  reactStrictMode: true,
  // reactStrictMode: false,

  async redirects() {
    const articleRedirects = ARTICLES.map((article) => {
      const slug = article.replace(/ /g, '-');
      return {
        source: `/articles/${slug}`,
        destination: `/article/${slug}`,
        permanent: true,
      };
    });

    return [...articleRedirects];
  },
};

export default nextConfig;
