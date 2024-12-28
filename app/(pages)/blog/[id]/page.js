'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Using the same articles data
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

      כיצד זה עובד?
      סורק הלייזר משדר אלפי קרני לייזר בשנייה, המוחזרות מהעצמים בשטח.
      באמצעות חישוב המרחק והזווית של כל נקודה, נוצר ענן נקודות תלת-ממדי מדויק.
      התוצאה היא מודל דיגיטלי מפורט שניתן לעבד ולנתח בתוכנות ייעודיות.

      יישומים בשטח:
      1. מדידות מבנים מורכבים
      2. תיעוד אתרים היסטוריים
      3. בקרת איכות בבנייה
      4. חישובי נפח מדויקים
      5. תכנון תשתיות

      העתיד כבר כאן
      השילוב של טכנולוגיית סריקת הלייזר עם תוכנות עיבוד מתקדמות
      פותח אפשרויות חדשות בתחום המדידות והתכנון ההנדסי.
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

      מהי תצ"ר?
      תצ"ר היא תכנית הנדסית-משפטית המשמשת לרישום זכויות במקרקעין.
      התכנית מבוססת על מדידות מדויקות ומהווה בסיס לרישום הנכס בטאבו.

      למה תצ"ר חשובה?
      • הבטחת זכויות הקניין של בעלי הנכסים
      • מניעת סכסוכי גבולות עתידיים
      • תנאי הכרחי לקבלת היתרי בנייה
      • בסיס לעסקאות נדל"ן

      השלבים בהכנת תצ"ר:
      1. מדידות מקדימות ואיסוף מידע
      2. הכנת תכנית ראשונית
      3. תיאום עם בעלי הזכויות הגובלים
      4. הגשה למרכז למיפוי ישראל
      5. תיקונים לפי דרישות המרכז למיפוי
      6. אישור סופי ורישום

      טיפים להאצת התהליך:
      • הכנה מדוקדקת של כל המסמכים הנדרשים
      • תיאום מוקדם עם כל הגורמים המעורבים
      • ליווי מקצועי לאורך כל התהליך
      • מעקב שוטף אחר התקדמות התהליך

      טעויות נפוצות שכדאי להימנע מהן:
      • חוסר בתיאום עם בעלי זכויות גובלים
      • אי דיוק במדידות הראשוניות
      • התעלמות מתכניות בניין עיר רלוונטיות
      • חוסר במסמכים נדרשים

      סיכום:
      הכנת תצ"ר היא תהליך מורכב הדורש מקצועיות ודיוק.
      באמצעות תכנון נכון וליווי מקצועי, ניתן להבטיח תהליך יעיל ומוצלח.
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

      היתרונות המרכזיים:
      • כיסוי שטח נרחב במהירות
      • גישה לאזורים קשים להגעה
      • יצירת מודלים תלת-ממדיים מדויקים
      • חיסכון משמעותי בעלויות
      • דיוק גבוה במיוחד

      טכנולוגיות מתקדמות:
      הרחפנים המודרניים מצוידים במגוון חיישנים מתקדמים:
      1. מצלמות ברזולוציה גבוהה
      2. חיישני LiDAR
      3. מערכות GPS מדויקות
      4. חיישני תרמוגרפיה

      תחומי יישום:
      השימוש ברחפנים למדידות מתאים למגוון רחב של פרויקטים:
      • מיפוי שטחים חקלאיים
      • תכנון פרויקטי תשתית
      • מעקב אחר התקדמות בנייה
      • סקרי נזקי טבע
      • תיעוד אתרי מורשת

      תהליך העבודה:
      1. תכנון מסלול הטיסה
      2. ביצוע הצילום האווירי
      3. עיבוד הנתונים ויצירת מודל תלת-ממדי
      4. הפקת תוצרים מדויקים

      יתרונות כלכליים:
      • חיסכון בזמן עבודה
      • הפחתת עלויות כוח אדם
      • קבלת תוצאות מהירות
      • אפשרות למדידות חוזרות בעלות נמוכה

      מבט לעתיד:
      התפתחות הטכנולוגיה תאפשר:
      • דיוק גבוה עוד יותר
      • אוטומציה מלאה של תהליכי המדידה
      • שילוב עם טכנולוגיות בינה מלאכותית
      • הרחבת תחומי היישום
    `
  }
]

export default function BlogPost() {
  const params = useParams()
  const article = articles.find(a => a.id === parseInt(params.id))

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-[#2c3d50] text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6"
          >
            <span>←</span>
            <span className="mr-2">חזרה לבלוג</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <motion.article 
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">שתף את המאמר</h3>
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  שתף בפייסבוק
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  שתף בטוויטר
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  שתף בווטסאפ
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
} 