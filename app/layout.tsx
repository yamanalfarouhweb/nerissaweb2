import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* ===== FONTS =====
   Inter: Clean sans-serif for body text
   Playfair Display: Elegant serif for headings (film poster aesthetic)
*/
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Nerissa Gladstone | Screenwriter',
  description: 'Portfolio of Nerissa Gladstone - A screenwriter and film student based in Newcastle upon Tyne, crafting cinematic narratives.',
  generator: 'v0.app',
  keywords: ['screenwriter', 'film student', 'filmmaker', 'screenplay', 'portfolio'],
  authors: [{ name: 'Nerissa Gladstone' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Nerissa Gladstone | Screenwriter',
    description: 'Portfolio of Nerissa Gladstone - Screenwriter and film student.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0e6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-film-cream`}>
      <body className="font-sans antialiased bg-film-cream text-film-dark">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
