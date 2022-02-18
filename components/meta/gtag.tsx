import Script from 'next/script';

const GTAG_ID = process.env.GTAG_ID || 'GTM-MXDVTH6';
const gtag = () => (
  <Script
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTAG_ID}');`,
    }}
    async
  ></Script>
);

export default gtag;
