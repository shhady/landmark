'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-900 rounded-2xl animate-pulse flex items-center justify-center text-white/20">
      Loading Map...
    </div>
  )
})

export default function WhyChooseUs() {
  // const reasons = [
  //   { 
  //     title: 'מודדים מוסמכים + מהנדסי מיפוי', 
  //     desc: 'המשרד מנוהל על ידי מודדים מוסמכים ומהנדסי מיפוי, בעלי ניסיון רב בליווי תכנון וביצוע של פרויקטים הנדסיים מורכבים.',
  //     icon: '📜'
  //   },
  //   { 
  //     title: 'אחריות מקצועית ודיוק', 
  //     desc: 'אחריות מקצועית מלאה, דיוק קפדני ועמידה בסטנדרטים מחמירים לכל אורך הפרויקט.',
  //     icon: '🛡️'
  //   },
  //   { 
  //     title: 'טכנולוגיה מתקדמת', 
  //     desc: 'שימוש בטכנולוגיות מדידה מתקדמות למניעת טעויות והבטחת תהליך עבודה יעיל, בטוח ומבוקר.',
  //     icon: '🛰️'
  //   },
  //   { 
  //     title: 'שקט נפשי', 
  //     desc: 'תוצאה הנדסית נכונה שמחזיקה לאורך זמן ומאפשרת ללקוח לקבל החלטות בראש שקט.',
  //     icon: '🧘'
  //   }
  // ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">למה לבחור ב-Landmap?</h2>
              
              <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4">
                <p>
                  כי במדידות אין מקום לטעויות.
                  ב-Landmap אנו פועלים מתוך מטרה אחת ברורה: להבטיח תוצר סופי איכותי, אמין וברמה הגבוהה ביותר, כזה שמאפשר ללקוחות שלנו להתקדם בביטחון מלא ועם שקט נפשי לאורך כל הפרויקט.
                </p>
                <p>
                  אנו משלבים ידע הנדסי עמוק, הבנה תכנונית רחבה וטכנולוגיות מדידה מתקדמות, כדי לספק נתונים מדויקים, למנוע טעויות מראש ולהבטיח תהליך עבודה יעיל, בטוח ומבוקר – משלב הרישוי והתכנון ועד למסירת הפרויקט.
                </p>
                <p className="font-medium text-primary-dark">
                  ב-Landmap הדיוק אינו מטרה בפני עצמה, אלא אמצעי ליצירת תוצאה הנדסית נכונה, שמחזיקה לאורך זמן ומאפשרת ללקוח לקבל החלטות בראש שקט
                </p>
              </div>

              <div className="mt-8">
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
                >
                  <span>לכל השירותים</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
              
              
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] lg:h-auto">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-full w-full">
               <Map zoom={9} />
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
