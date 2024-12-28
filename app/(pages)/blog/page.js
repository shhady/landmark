'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'חידושים בתחום המדידות: טכנולוגיית סריקת לייזר תלת-ממדית',
      excerpt: 'כיצד טכנולוגיית סריקת הלייזר התלת-ממדית משנה את עולם המדידות ומאפשרת דיוק חסר תקדים בפרויקטים הנדסיים',
      date: '15.03.2024',
      readTime: '5 דקות קריאה',
      category: 'טכנולוגיה',
      image: '/tech.webp',
      content: `
        בשנים האחרונות, טכנולוגיית סריקת הלייזר התלת-ממדית הפכה לכלי מרכזי בעולם המדידות.
        הטכנולוגיה מאפשרת לנו לקבל תמונה מדויקת ומפורטת של המרחב בדיוק של מילימטרים בודדים.
        
        יתרונות הטכנולוגיה:
        • מהירות איסוף נתונים גבוהה
        • דיוק מרבי במדידות
        • יכולת לעבוד בתנאי שטח מאתגרים
        • חיסכון משמעותי בזמן ועלויות
      `
    },
    {
      id: 2,
      title: 'מדריך: כל מה שצריך לדעת על תצ"ר ורישום מקרקעין',
      excerpt: 'הסבר מקיף על תהליך הכנת תצ"ר (תכנית לצורכי רישום) והחשיבות שלו ברישום נכסים',
      date: '10.03.2024',
      readTime: '7 דקות קריאה',
      category: 'מדריכים',
      image: '/land.webp',
      content: `
        תכנית לצורכי רישום (תצ"ר) היא מסמך חיוני בתהליך רישום מקרקעין.
        במאמר זה נסביר את התהליך המלא, משלב המדידות ועד לרישום בטאבו.
        
        נושאים מרכזיים:
        • מהי תצ"ר ולמה היא חשובה
        • השלבים בהכנת תצ"ר
        • טיפים להאצת תהליך האישור
        • טעויות נפוצות שכדאי להימנע מהן
      `
    },
    {
      id: 3,
      title: 'השפעת הרחפנים על עולם המדידות והמיפוי',
      excerpt: 'כיצד טכנולוגיית הרחפנים מהפכת את תחום המדידות ומאפשרת פתרונות חדשניים למיפוי ומדידה',
      date: '05.03.2024',
      readTime: '6 דקות קריאה',
      category: 'חדשנות',
      image: '/drone.webp',
      content: `
        מיפוי באמצעות רחפנים מציע דרך חדשה ויעילה לביצוע מדידות בקנה מידה גדול.
        הטכנולוגיה מאפשרת לנו לקבל מידע מדויק על שטחים נרחבים בזמן קצר.
        
        יתרונות השימוש ברחפנים:
        • כיסוי שטח נרחב במהירות
        • גישה לאזורים קשים להגעה
        • יצירת מודלים תלת-ממדיים מדויקים
        • חיסכון משמעותי בעלויות
      `
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-[#2c3d50] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">בלוג</h1>
          <p className="text-xl">מאמרים מקצועיים וחדשות מעולם המדידות</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${article.id}`}
                    className="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center gap-2"
                  >
                    קרא עוד
                    <span>←</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 