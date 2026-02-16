'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('#sidebar') && !event.target.closest('#hamburger')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/about', label: 'אודות' },
    { href: '/services', label: 'שירותים' },
    { href: '/contact', label: 'צור קשר' },
  ]

  return (
    <nav className={`sticky top-0 z-[2000] transition-all duration-300 bg-white py-3 shadow-sm `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12 md:h-12">
          {/* Hamburger Button (Mobile) - Right aligned for RTL */}
          <button
            id="hamburger"
            className="md:hidden p-2 rounded-lg text-primary hover:bg-neutral-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="תפריט"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center font-medium text-[13px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`relative group transition-colors ${
                    isActive ? 'text-secondary font-bold' : 'text-primary hover:text-secondary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-[-4px] right-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            })}
          </div>

           {/* Logo - Left aligned */}
           <Link href="/" className="flex items-center gap-3 group">
             <div className="relative h-16 lg:h-20 w-auto aspect-[3/1]">
                <Image 
                  src="/logo-transparent-landmap.png" 
                  alt="Landmark Logo" 
                  fill
                  className="object-cover"
                  priority
                />
             </div>
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <div 
          id="sidebar"
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-[2001]`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <span className="font-bold text-lg text-primary">תפריט</span>
              <button
                className="p-2 hover:bg-neutral-100 rounded-full text-gray-500 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="סגור תפריט"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-2 font-medium flex-grow">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-secondary/10 text-secondary font-bold' 
                        : 'text-primary hover:text-secondary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="mt-auto text-center text-xs text-gray-400 border-t pt-4">
              © סרחאן וחכרוש מדידות והנדסה
            </div>
          </div>
        </div>
        
        {/* Mobile Overlay */}
        {isOpen && (
           <div 
             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000] md:hidden transition-opacity"
             onClick={() => setIsOpen(false)}
           ></div>
        )}
      </div>
    </nav>
  )
}
