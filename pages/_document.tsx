import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <meta charSet="utf-8"/>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href="%PUBLIC_URL%/index.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <meta
              name="description"
              content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
