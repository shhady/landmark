'use client'

import { motion } from 'framer-motion'

export default function FAQ() {
  const questions = [
    {
      q: "למה חשוב לבחור מודד מוסמך לפרויקט?",
      a: "מודד מוסמך אחראי על הדיוק שעליו נשען כל הפרויקט – תכנון, רישוי וביצוע. מדידה שגויה עלולה לגרום לעיכובים, עלויות מיותרות ובעיות מול הרשויות. בחירה במודד מוסמך מבטיחה עמידה בתקנים, אחריות מקצועית ותוצר אמין."
    },
    {
      q: "באיזה שלב של הפרויקט צריך להזמין מודד?",
      a: "כבר בשלב ההיתכנות והתכנון המוקדם, לפני הכנת תוכניות והגשת היתרים. מדידה מוקדמת מאפשרת תכנון נכון, חישובי כמויות מדויקים ומונעת טעויות יקרות בשלבים מתקדמים של הפרויקט."
    },
    {
      q: "האם אתם עובדים בפריסה ארצית?",
      a: "כן, אנו מספקים שירותי מדידה בפריסה ארצית בהתאם לאופי והיקף הפרויקט. צוותי המדידה ערוכים לתת מענה לפרויקטים פרטיים, מסחריים והנדסיים תוך עמידה בלוחות זמנים וסטנדרט מקצועי גבוה."
    },
    {
      q: "איזה תוצרים הלקוח מקבל בסיום העבודה?",
      a: "הלקוח מקבל תוצר סופי מלא בהתאם לדרישות הפרויקט והרשויות. התוצרים כוללים תשריטים, קבצים דיגיטליים, חישובים ודוחות מדידה, לאחר בקרת איכות ועם אחריות מקצועית מלאה."
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
