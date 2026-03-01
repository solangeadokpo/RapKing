import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AdBanner from '@/components/ads/AdBanner'
import QueryProvider from '@/components/providers/QueryProvider'
import { ThemeProvider, ThemeInitScript } from '@/components/providers/ThemeProvider'

const articulatExtraBold = localFont({
  src: '../../fonts/ArticulatCF-ExtraBold.otf',
  variable: '--font-articulat-eb',
  display: 'swap',
})

const locales = ['fr', 'en']

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!locales.includes(lang)) notFound()
  setRequestLocale(lang)

  const messages = await getMessages()

  return (
    <html lang={lang} suppressHydrationWarning className={articulatExtraBold.variable}>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <ThemeProvider>
              <AdBanner />
              <Header lang={lang} />
              <main>{children}</main>
              <Footer lang={lang} />
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
