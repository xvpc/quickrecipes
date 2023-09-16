import type { AppProps } from 'next/app'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import '@/styles/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
