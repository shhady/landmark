'use client'

import Link from 'next/link'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#2c3d50] mb-4">שגיאה בטעינת השירותים</h1>
        <p className="text-gray-600 mb-8">{error.message}</p>
        <div className="space-x-4 space-x-reverse">
          <button onClick={reset} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            נסה שוב
          </button>
          <Link href="/" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 inline-block">
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  )
} 