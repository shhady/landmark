import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#2c3d50] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">הדף לא נמצא</h2>
        <p className="text-gray-600 mb-8">
          מצטערים, הדף שחיפשת אינו קיים או הוסר.
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