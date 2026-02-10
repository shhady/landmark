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

export const metadata = {
  title: 'Landmap | שירותי הנדסה ומדידות',
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
    description: 'חברת מדידות מקצועית המספקת שירותי מדידה מתקדמים בצפון. התמחות בתצ"ר, היתרי בנייה ומיפוי פוטוגרמטרי.',
    locale: "he_IL",
    type: "website",
    siteName: 'Landmap',
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
      <body className={`overflow-x-hidden font-sans ${heebo.className} text-neutral-800 bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}