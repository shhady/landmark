'use client'

import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    { 
      title: "1. ייעוץ ראשוני", 
      desc: "הבנת צורכי הפרויקט, היקף העבודה והדרישות התכנוניות והרגולטוריות.",
      icon: "💬"
    },
    { 
      title: "2. מדידה בשטח", 
      desc: "לאחר היתכנות ובדיקה משרדית, צוותי המדידה מגיעים לשטח למדידה באמצעות הציוד המתאים.",
      icon: "🛰️"
    },
    { 
      title: "3. עיבוד נתונים במשרד", 
      desc: "עיבוד, ניתוח והפקת תוצרים בהתאם לבקשת המזמין.",
      icon: "💻"
    },
    { 
      title: "4. בקרת איכות", 
      desc: "בדיקה קפדנית ואימות הנתונים על ידי מודד מוסמך, וחתימה על התוכניות.",
      icon: "✅"
    },
    { 
      title: "5. מסירת תוצרים", 
      desc: "מסירת תיק מדידה מלא, מוכן להגשה ולשימוש.",
      icon: "📦"
    },
  ]

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">תהליך העבודה שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            תהליך מסודר ושקוף המבטיח דיוק ועמידה בלוחות זמנים, מהשיחה הראשונה ועד קבלת התוכניות.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto border-4 border-white shadow-sm group-hover:bg-blue-100 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
