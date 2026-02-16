import './globals.css'
import { Heebo, Rubik } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
})

const rubik = Rubik({ 
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
})

import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://www.landmap-ltd.com'),
  title: 'LandMap | שירותי הנדסה ומדידות',
  description: 'חברת מדידות מקצועית המספקת שירותי מדידה מתקדמים בצפון. התמחות בתצ"ר, היתרי בנייה ומיפוי פוטוגרמטרי.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Landmap | שירותי הנדסה ומדידות',
    description: 'חברת מדידות מקצועית המספקת שירותי מדידה מתקדמים בצפון. התמחות בתצ"ר, היתרי בנייה ו מדידות פוטוגרמטרי.',
    locale: "he_IL",
    type: "website",
    siteName: 'LandMap',
    images: [
      {
        url: '/logo1200x600.png',
        width: 1200,
        height: 600,
        alt: 'Landmap Logo',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </head>
      <body className={`overflow-x-hidden font-sans ${heebo.className} text-neutral-800 bg-white`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}