const withStyles = require('@webdeb/next-styles');

module.exports = withStyles({
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  // @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  // This sets environment variable for SSR
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    // CMS_URL: process.env.CMS_URL,
    // GTAG_ID: process.env.GTAG_ID,
    API_URL: process.env.API_URL,
  },
  // @see https://github.com/zeit/next.js/wiki/Deployment
  // When process.env.BUILD_ID is undefined, fall back to the default
  generateBuildId: async () => (process.env.BUILD_ID ? process.env.BUILD_ID : null),
  poweredByHeader: false,
});
