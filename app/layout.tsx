import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OptimalSpeedSeo',
  description: 'OptimalSpeedSeo',
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter: image": "/images/og.png",
    "twitter: card": "summary_large_image",
    "twitter: creator": "@lpreetsh",
    "og:url": "https://optimalspeedseo.vercel.app/",
    "og:title": "OptimalSpeedSeo",
    "og:description": "Website for optimal loading speed and SEO",
    "og:type": "website",
    "og:image": "/images/og.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
