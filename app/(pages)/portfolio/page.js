'use client'

import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#2c3d50] mb-4">בקרוב...</h1>
        <p className="text-gray-600 mb-8">
          דף זה נמצא בבנייה. נשמח לשתף איתכם את הפרויקטים שלנו בקרוב.
        </p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  )
} 