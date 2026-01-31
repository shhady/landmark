'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Team from '@/components/sections/Team'

export default function About() {
  const milestones = [
    { year: '2019', text: 'סיום לימודי הנדסת מיפוי בטכניון וייסוד השותפות המקצועית' },
    { year: '2021', text: 'קבלת הסמכת מודדים מוסמכים והרחבת הפעילות לתשתיות לאומיות' },
    { year: '2022', text: 'הובלת פרויקטי ביצוע מורכבים (רק"ל ירושלים, כביש 20)' },
    { year: '2023', text: 'הצטרפות לסגל ההוראה בטכניון והעמקת ההתמחות בקדסטר' },
    { year: '2024', text: 'שדרוג טכנולוגי: הטמעת רחפנים מתקדמים וסורקי לייזר' },
    { year: '2025', text: 'הרחבת הפעילות בפריסה ארצית עם דגש על פרויקטים הנדסיים מורכבים' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">אודות המשרד</h1>
            <p className="text-xl leading-relaxed text-gray-200">
              משרד הנדסה ומדידות בראשות בוגרי הטכניון, המשלב מצוינות אקדמית עם ניסיון מעשי בפרויקטים הגדולים בישראל.
              אנו מביאים סטנדרט חדש של דיוק, אמינות וטכנולוגיה לעולם המדידות.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section (Reusing Component) */}
      <Team />

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary-dark">החזון שלנו</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  אנו מאמינים שמדידה היא הבסיס לכל פרויקט הנדסי מוצלח. החזון שלנו הוא להוביל את תחום המדידות בישראל באמצעות שילוב של ידע אקדמי מתקדם (טכניון) עם טכנולוגיות השטח החדישות ביותר. אנו מחויבים למתן שירות אישי, מדויק ומהיר, תוך שמירה על הסטנדרטים האתיים והמקצועיים הגבוהים ביותר.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-neutral-50 rounded-xl border border-gray-100">
                  <div className="text-3xl mb-2">🎓</div>
                  <h3 className="font-bold mb-1">מצוינות אקדמית</h3>
                  <p className="text-sm text-gray-600">צוות בוגרי הטכניון וסגל הוראה</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-gray-100">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-bold mb-1">חדשנות טכנולוגית</h3>
                  <p className="text-sm text-gray-600">רחפנים, לייזר ומידול תלת-ממדי</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Replace with real office image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                 <span className="text-6xl">🏢</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white font-bold text-lg">טכנולוגיה ודיוק ללא פשרות</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-primary-dark">ציוני דרך</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-200 transform -translate-x-1/2 hidden md:block" />
              
              {/* Timeline items */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row justify-between items-center mb-12 md:mb-8 w-full ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12"></div>
                  
                  <div className="absolute left-1/2 top-0 md:top-1/2 w-8 h-8 bg-white border-4 border-secondary rounded-full transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  <div className={`w-full md:w-5/12 text-center md:text-right pt-12 md:pt-0`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative z-0">
                      <span className="text-secondary-dark font-bold text-xl block mb-2">{milestone.year}</span>
                      <p className="text-gray-700">{milestone.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">∞</div>
              <div className="text-gray-300">דיוק ואמינות</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">100%</div>
              <div className="text-gray-300">הסמכה אקדמית</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">3+</div>
              <div className="text-gray-300">שפות (עברית, ערבית, אנגלית)</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">2</div>
              <div className="text-gray-300">מהנדסים מומחים</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
