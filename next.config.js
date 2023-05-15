module.exports = {
  // @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  // This sets environment variable for SSR
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    // NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
};
