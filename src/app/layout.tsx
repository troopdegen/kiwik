import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'
import OnchainProvider from '@/providers/onchainProvider'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'kiwik | jardín infinito de regeneración',
  description: 'talento colectivo que cultiva ideas y genera impacto',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <OnchainProvider>
          {children}
          <Toaster richColors />
        </OnchainProvider>
      </body>
    </html>
  )
}
