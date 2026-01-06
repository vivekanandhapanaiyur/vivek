import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VIVEKANANDHA NURSERY & PRIMARY SCHOOL | PANAIYUR',
  description: 'Providing quality education and holistic development for future leaders. Located in Panaiyur, Tenkasi District.',
  keywords: 'nursery school, primary school, education, Panaiyur, Tenkasi, Sankarankovil, Vivekanandha School',
  authors: [{ name: 'VIVEKANANDHA NURSERY & PRIMARY SCHOOL' }],
  openGraph: {
    title: 'VIVEKANANDHA NURSERY & PRIMARY SCHOOL | Excellence in Education',
    description: 'Nurturing young minds through innovation and tradition in Panaiyur.',
    url: 'https://vivekanandhaschool.com',
    siteName: 'VIVEKANANDHA NURSERY & PRIMARY SCHOOL',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={`${inter.className} antialiased bg-neutral-50`}>
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}