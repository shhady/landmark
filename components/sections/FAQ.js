'use client'

import { motion } from 'framer-motion'

export default function FAQ() {
  const questions = [
    {
      q: "כמה זמן לוקח להכין תצ״ר (תוכנית לצורכי רישום)?",
      a: "זמן הכנת תצ״ר משתנה בהתאם למורכבות המגרש והדרישות, אך בדרך כלל התהליך המשרדי והמדידה לוקחים בין 2-4 שבועות. לאחר מכן ישנו שלב אישור מפ״י (המרכז למיפוי ישראל) שעשוי לקחת מספר חודשים."
    },
    {
      q: "האם אתם מבצעים מדידות בכל הארץ?",
      a: "אנו מתמקדים בעיקר באזור הצפון (חיפה, קריות, גליל, עמקים, רמת הגולן) כדי להבטיח זמינות גבוהה ושירות מהיר, אך מבצעים פרויקטים הנדסיים מורכבים בפריסה ארצית."
    },
    {
      q: "מה ההבדל בין מפת מדידה לתוכנית לצרכי רישום?",
      a: "מפת מדידה (טופוגרפית) משקפת את המצב הקיים בשטח (גבהים, מבנים, עצים) ומשמשת לתכנון והיתרים. תצ״ר היא תוכנית משפטית שנועדה לשנות את גבולות החלקות בטאבו (חלוקה או איחוד)."
    },
    {
      q: "האם אתם עובדים עם לקוחות פרטיים או רק עסקיים?",
      a: "אנו עובדים עם כל המגזרים: לקוחות פרטיים הבונים את ביתם, אדריכלים, יזמים, קבלני תשתיות ורשויות מקומיות."
    }
  ]

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">שאלות ותשובות נפוצות</h2>
          <p className="text-gray-600">כל מה שחשוב לדעת לפני שמזמינים מודד</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mb-2 flex items-start gap-3">
                  <span className="text-secondary shrink-0">?</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 pr-6 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
