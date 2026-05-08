import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Seonsem.com | Jasa Pembuatan Website & SEO Profesional',
  description: 'Seonsem.com membantu bisnis Anda membuat website profesional dan mengoptimasi SEO agar muncul di Google. Tingkatkan traffic dan konversi bisnis Anda.',
  keywords: ['jasa pembuatan website', 'jasa SEO', 'web development', 'optimasi SEO', 'digital marketing'],
  authors: [{ name: 'Seonsem.com' }],
  icons: {
    icon: 'https://ik.imagekit.io/1yqrowr2y/seonsem.png?updatedAt=1777898562554',
  },
  openGraph: {
    title: 'Seonsem.com | Jasa Pembuatan Website & SEO Profesional',
    description: 'Seonsem.com membantu bisnis Anda membuat website profesional dan mengoptimasi SEO agar muncul di Google.',
    type: 'website',
    images: ['https://ik.imagekit.io/1yqrowr2y/seonsem.png?updatedAt=1777898562554'],
  },
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PromoFlyer } from "@/components/promo-flyer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <PromoFlyer />
          <WhatsAppButton />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
