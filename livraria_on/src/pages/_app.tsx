import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function App({ Component, pageProps }: AppProps) {
  

  return <Component {...pageProps} />
}
