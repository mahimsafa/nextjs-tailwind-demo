import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
