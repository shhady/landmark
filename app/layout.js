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
  title: 'שירותי מדידה מקצועיים | סרחאן וחכרוש',
  description: 'חברת מדידות מקצועית המספקת שירותי מדידה מתקדמים בצפון. התמחות בתצ"ר, היתרי בנייה ומיפוי פוטוגרמטרי.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
       <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
          <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
      <body className={`overflow-x-hidden font-sans ${heebo.className} text-neutral-800 bg-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}