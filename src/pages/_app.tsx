import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Public_Sans } from '@next/font/google'

const public_sans = Public_Sans({
  variable: "--font-public_sans"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${public_sans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
