import Document, { Head, Html, Main, NextScript } from 'next/document';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-MXDVTH6';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="no-js">
        <Head />
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
