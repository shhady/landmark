'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Background } from '@/components/Background'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/hero-image.webp')] bg-cover bg-center relative py-20">
        {/* Add an overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">שירותי מדידה מקצועיים</h1>
            <p className="text-xl mb-8 text-white">פתרונות מדידה מתקדמים לכל צורך</p>
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
              צור קשר
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 relative bg-white">
        <Background />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">השירותים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'מדידות קרקע',
                desc: 'מדידות טופוגרפיות מדויקות, מיפוי תשתיות, חישובי כמויות ונפחי עפר, ומדידות לפיתוח שטח',
                icon: '🗺️'
              },
              { 
                title: 'מדידות לתכנון',
                desc: 'מדידות מצב קיים לצורך תכנון אדריכלי, תכניות בניין עיר (תב"ע), והיתרי בנייה עם דיוק מרבי',
                icon: '📐'
              },
              { 
                title: 'מדידות לרישום',
                desc: 'הכנת תצ"ר (תכניות לצורכי רישום), חלוקת מגרשים, איחוד וחלוקה, ורישום בתים משותפים',
                icon: '📋'
              },
              { 
                title: 'מדידות הנדסיות',
                desc: 'מדידות As-Made, סימון צירים ונקודות גובה, בקרת איכות ומדידות לתשתיות תת-קרקעיות',
                icon: '🏗️'
              },
              { 
                title: 'מיפוי פוטוגרמטרי',
                desc: 'צילום ומיפוי באמצעות רחפנים, עיבוד תלת-ממדי, והפקת אורתופוטו בדיוק גבוה',
                icon: '📸'
              },
              { 
                title: 'ייעוץ מקצועי',
                desc: 'ייעוץ בנושאי מקרקעין, חוות דעת מקצועיות, וליווי תהליכי רישום ותכנון',
                icon: '💡'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative bg-white">
        <Background />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">למה לבחור בנו?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'ניסיון רב', 
                desc: '20 שנות ניסיון בתחום המדידות, עם אלפי פרויקטים מוצלחים ולקוחות מרוצים',
                icon: '⏳'
              },
              { 
                title: 'צוות מקצועי', 
                desc: 'צוות מודדים מוסמכים בעלי תעודות והסמכות מהמרכז למיפוי ישראל, עם התמחות במגוון תחומי מדידה',
                icon: '👥'
              },
              { 
                title: 'ציוד מתקדם', 
                desc: 'שימוש בטכנולוגיה חדישה כולל מכשירי GPS מתקדמים, סורקי לייזר תלת-ממדיים ותוכנות מדידה מהמתקדמות בשוק',
                icon: '🛠️'
              },
              { 
                title: 'שירות אמין', 
                desc: 'דיוק ואמינות ללא פשרות, עמידה בלוחות זמנים, ומחויבות מלאה לשביעות רצון הלקוח',
                icon: '✅'
              },
              { 
                title: 'כיסוי ארצי', 
                desc: 'מתן שירות בכל רחבי הארץ, עם זמינות גבוהה ויכולת הגעה מהירה לכל אתר',
                icon: '🗺️'
              },
              { 
                title: 'מחירים הוגנים', 
                desc: 'תמחור שקוף והוגן, עם יחס מעולה בין איכות למחיר ואפשרות להצעות מחיר מותאמות אישית',
                icon: '💰'
              },
              { 
                title: 'ליווי מקצועי', 
                desc: 'ליווי צמוד לאורך כל הפרויקט, כולל ייעוץ מקצועי והסברים מפורטים על כל שלב בתהליך',
                icon: '🤝'
              },
              { 
                title: 'אחריות מלאה', 
                desc: 'אחריות מלאה על כל עבודה, כולל גיבוי מלא ושמירת נתונים לטווח ארוך',
                icon: '🛡️'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative bg-white">
        <Background />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">הסוות המקצועי שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "ג'ואד סרחאן",
                role: 'מודד מוסמך',
                desc: 'בעל ניסיון רב שנים בתחום המדידות ההנדסיות ומדידות המקרקעין'
              },
              {
                name: 'עסאם חכרוש',
                role: 'מודד מוסמך',
                desc: 'מתמחה במדידות טופוגרפיות ומיפוי פוטוגרמטרי מתקדם'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 relative bg-white">
        <Background />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">תחומי התמחות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">מדידות מקרקעין</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>תצ"ר (תכנית לצורכי רישום)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>חלוקה ורישום בתים משותפים</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>מדידות לצורך רישום זכויות</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">מדידות הנדסיות</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>מדידות טופוגרפיות מפורטות</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>חישובי כמויות ונפחים</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>מדידות As-Made לפרויקטים הנדסיים</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-[#2c3d50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">צריכים שירותי מדידה?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            אנחנו כאן לשירותכם עם צוות מקצועי ומנוסה, ציוד מתקדם ושירות אמין ומדויק
          </p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            צרו קשר עכשיו
          </Link>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 relative bg-white">
        <Background />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">הסמכות ורישיונות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">רישיון מודד מוסמך</h3>
              <p className="text-gray-600">מטעם המרכז למיפוי ישראל</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">חברים באיגוד המודדים</h3>
              <p className="text-gray-600">חברים פעילים באיגוד המודדים המוסמכים</p>
            </div>
           
          </div>
        </div>
      </section>
    </main>
  )
} 