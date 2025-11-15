/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
};

export default nextConfig;

