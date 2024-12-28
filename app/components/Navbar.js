'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <nav className="bg-[#2c3d50] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Hamburger Button - Moved to right */}
          <button
            id="hamburger"
            className="md:hidden p-2 rounded-lg hover:bg-[#3d5266] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo - Always on left */}
          <Link href="/" className="font-bold text-xl cursor-pointer">
            לוגו החברה
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">דף הבית</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">אודות</Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">שירותים</Link>
            <Link href="/portfolio" className="hover:text-gray-300 transition-colors">תיק עבודות</Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">בלוג</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">צור קשר</Link>
          </div>
        </div>

        {/* Sliding Sidebar */}
        <div 
          id="sidebar"
          className={`fixed top-0 right-0 h-full w-64 bg-[#2c3d50] transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-6">
            <button
              className="mb-8 p-2 hover:bg-[#3d5266] rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="block hover:bg-[#3d5266] py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                דף הבית
              </Link>
              <Link 
                href="/about" 
                className="block hover:bg-[#3d5266] py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                אודות
              </Link>
              <Link 
                href="/services" 
                className="block hover:bg-[#3d5266] py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                שירותים
              </Link>
              <Link 
                href="/portfolio" 
                className="block hover:bg-[#3d5266] py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                תיק עבודות
              </Link>
              <Link 
                href="/blog" 
                className="block hover:bg-[#3d5266] py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                בלוג
              </Link>
              <Link 
                href="/contact" 
                className="block hover:bg-[#3d5266] py-2 px-4 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                צור קשר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 