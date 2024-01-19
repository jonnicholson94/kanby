import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"]})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={inter.className}>
      <Component className={inter.className} {...pageProps} />
      <Toaster richColors position="top-right" />
    </main>
  )
}
