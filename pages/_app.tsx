import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from 'react-query'

import CreateTaskModal from '@/components/ui/createTaskModal'

const inter = Inter({ subsets: ["latin"]})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Component className={inter.className} {...pageProps} />
        <Toaster richColors position="top-right" />
        <CreateTaskModal />
      </QueryClientProvider>
    </main>
  )
}
