import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ["latin"]})

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <main className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Component className={inter.className} {...pageProps} />
        <Toaster richColors position="top-right" />
      </QueryClientProvider>
    </main>
  )
}
