import { GA_TRACKING_ID } from '../lib/gtag'

import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render () {
    return (
      <Html>
        <Head >
          <meta name="description" content="yeek mytool麦兔，程序员工具集" />
          <meta name="keywords" content="mytool,麦兔,yeek,uuid,base64" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument