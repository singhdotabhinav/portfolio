/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slash for GitHub Pages compatibility
  trailingSlash: false,
  // If deploying to a subdirectory, uncomment and set your repo name:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;

