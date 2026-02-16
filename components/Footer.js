'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const footerSections = [
    {
      title: 'שירותים',
      links: [
        { text: 'קדסטר ורישום מקרקעין', href: '/services#registration' },
        { text: 'תכנון סטטוטורי ורישוי', href: '/services#planning' },
        { text: 'ביצוע פרויקטי תשתיות', href: '/services#engineering' },
        { text: 'מדידות מתקדמות ובקרה', href: '/services#advanced' }
      ]
    },
    {
      title: 'מידע',
      links: [
        { text: 'אודות', href: '/about' },
        // { text: 'בלוג', href: '/blog' },
        { text: 'צור קשר', href: '/contact' }
      ]
    },
    {
      title: 'צור קשר',
      contact: true,
      info: {
        address: 'רחוב אכסאל 9, נצרת',
        mobile: '054-6220167',
        phone: '052-8139769',
        email: 'Office@landmap-ltd.com',
        hours: 'א׳-ה׳: 8:00-17:00 | ו׳: 8:00-13:00'
      }
    }
  ]

  return (
    <footer className="bg-primary text-white border-t border-primary-light/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Centered and Larger Logo */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <Link href="/" className="block">
              <div className="relative">
                <div className="relative h-24 lg:h-24 w-auto aspect-[3/1]">
                  <Image 
                    src="/logo-transparent-landmap.png" 
                    alt="Landmark Logo" 
                    fill
                    className="object-cover brightness-0 invert"
                    priority
                  />
                </div>
                <div className="text-sm text-gray-400 mt-2 font-medium tracking-wide">שירותי הנדסה ומדידות בע״מ</div>
              </div>
            </Link>
            
            {/* Social Links */}
            <div className="flex gap-6 pt-2 justify-center">
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-green-400 transition-colors transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.7c-1.16 0-2.1-.94-2.1-2.1 0-1.16.94-2.1 2.1-2.1 1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1zm14.63 12.4h-3.62v-5.67c0-1.35-.02-3.1-1.88-3.1-1.88 0-2.17 1.47-2.17 3v5.77h-3.62V9.24h3.48v1.6h.05c.48-.92 1.67-1.88 3.43-1.88 3.67 0 4.34 2.42 4.34 5.57v5.57z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              {section.contact ? (
                <div className="space-y-3 text-gray-300 text-sm">
                  <p className="flex items-center gap-2">
                    <span>📍</span> {section.info.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span> {section.info.mobile}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span> {section.info.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span> {section.info.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🕒</span> {section.info.hours}
                  </p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm block"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20 bg-primary-dark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} כל הזכויות שמורות ללאנדמאפ שירותי הנדסה ומדידות בע״מ
            </p>
            {/* <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                תנאי שימוש
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
