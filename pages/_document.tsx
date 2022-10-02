import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Sora&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/images/o.png" type="image/png" />

        <meta name="robots" content="follow, index" />

        <meta property="og:site_name" content="Terra O" />
        <meta property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://terra-o.vercel.app/images/terra-o.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://terra-o.vercel.app/images/terra-o.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
