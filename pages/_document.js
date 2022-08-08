/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="systemjs-importmap"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "imports": {
                  "react": "https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js",
                  "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js",
                  "@topbar": "https://run.mocky.io/v3/13c6d07a-3f35-4614-9f6a-a97a8af24a98"
                }
              }
            `,
            }}
          />
          {process.env.NODE_ENV === 'development' && (
            <script
              type="systemjs-importmap"
              dangerouslySetInnerHTML={{
                __html: `
                {
                  "imports": {
                    "@topbar": "http://localhost:9010/lightspeed-hospitality-top-bar.js"
                  }
                }
              `,
              }}
            />
          )}
          <script src="https://cdn.jsdelivr.net/npm/systemjs@6/dist/system.min.js" />
          <script src="https://cdn.jsdelivr.net/npm/systemjs@6/dist/extras/amd.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              System.import('@topbar').then(app => {
                console.log('✅ @topbar app imported', app)
                app.mount({ domSelector: "#topbar-root" })
              });
            `,
            }}
          />
        </body>
      </Html>
    )
  }
}
