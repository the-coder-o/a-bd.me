import './globals.css'

import Script from 'next/script'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'

import Head from 'next/head'
import { Inter } from 'next/font/google'

import { Toaster } from 'sonner'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Header } from '@/components/ui/Header'
import { ThemeProvider } from '@/components/provider/theme-provider'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Abdul Basit',
  description: 'Generated by abdul basit interesting blogs,projects,smile and others... 2023',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/public/logo.png?v=4'],
    shortcut: ['/public/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://us.umami.is/script.js" data-website-id={process.env.UMAMI_API_WEB_KEY} />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MEK7ECJKW3" />
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', process.env.GOOGLE__ANALYTICS_KEY);
          `}
      </Script>
      <body className={cn(font.className, 'bg-[#FCFCFC] dark:bg-[#111111]')}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey={'my-blog'}>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
