'use client'

import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const reasons = [
    { 
      title: 'מודדים מוסמכים + מהנדסי מיפוי', 
      desc: 'ג׳ואד סרחאן (מ.מ. 1605) ועיסאם חכרוש (מ.מ. 1655) — בוגרי הטכניון ומודדים מוסמכים לעבודות מדידה ורישום.',
      icon: '📜'
    },
    { 
      title: 'התמחות בקדסטר ותצ״ר', 
      desc: 'הכנה וביקורת תוכניות לצורכי רישום, תשריטי בתים משותפים וליווי תהליכים מול גורמים רלוונטיים — עם דיוק ושפה מקצועית.',
      icon: '🗺️'
    },
    { 
      title: 'ניסיון בפרויקטי תשתית מורכבים', 
      desc: 'ליווי ביצוע ומדידות לפרויקטים הנדסיים גדולים (כבישים, מחלפים ורכבת קלה), כולל בקרת איכות, סימונים וחישובי כמויות.',
      icon: '🏗️'
    },
    { 
      title: 'טכנולוגיה מתקדמת בשטח', 
      desc: 'GPS RTK, תחנות כוללות, רחפנים ומיפוי פוטוגרמטרי, סריקות לייזר ומידול תלת־ממדי — לתוצרים מדויקים וקלים לעבודה.',
      icon: '🛰️'
    },
    { 
      title: 'שירות אישי ומהיר', 
      desc: 'זמינות גבוהה, עמידה קפדנית בלוחות זמנים, וליווי אישי עד לקבלת האישור הסופי.',
      icon: '🤝'
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">למה לבחור בנו?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                בעולם המדידות, אין מקום לטעויות. סטייה קטנה יכולה לעלות ביוקר ולעכב פרויקט.
                אנחנו עובדים במתודולוגיה מסודרת, עם אחריות מקצועית ותיעוד ברור — כדי שתתקדמו מהר, בביטחון.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                      <p className="text-sm text-gray-600 leading-snug">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               {/* Ideally use Next/Image here with a real image */}
               <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-400">
                 {/* Placeholder for "Surveyor in action" image */}
                 <span className="text-6xl">📸</span>
                 <p className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg font-bold text-primary shadow-sm">
                   מודדים בשטח - כפר כנא
                 </p>
               </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
