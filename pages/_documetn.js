// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Préchargement manuel d'une image */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/icon-node-js.svg"
          fetchpriority="high"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}