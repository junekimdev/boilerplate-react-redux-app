module.exports = {
  // @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  // This sets environment variable for SSR
  env: {
    NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL,
    // NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // @see https://github.com/zeit/next.js/wiki/Deployment
  // When process.env.BUILD_ID is undefined, fall back to the default
  generateBuildId: async () => (process.env.BUILD_ID ? process.env.BUILD_ID : null),
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
};
