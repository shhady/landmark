'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Team() {
  const team = [
    {
      name: "ג'ואד סרחאן",
      role: "מודד מוסמך (ר.מ. 1605) ומהנדס מיפוי וגיאו־אינפורמציה ",
      bio: "ג׳ואד סרחאן הוא מהנדס מיפוי וגיאו־אינפורמציה ומודד מוסמך, חבר סגל הוראה בטכניון בתחום הקדסטר והרישום המקרקעין. ג׳ואד מתמחה בעבודות קדסטר והסדר מקרקעין, לרבות הכנת תוכניות לצורכי רישום, תשריטי תיעוד גבולות, תשריטי חלוקה, תמ״רים, מדידות לצורכי תכנון ותב״עות. לאורך פעילותו ליווה פרויקטי ביצוע רחבי היקף, תוך עבודה מדויקת מול גופים סטטוטוריים, שליטה מלאה בדרישות הרגולטוריות ויכולת ניתוח מעמיקה של סוגיות תכנוניות וקנייניות מורכבות.",
      education: [
        "B.Sc הנדסת מיפוי וגיאו-אינפורמציה, הטכניון",
        "לימודי שמאות מקרקעין, הטכניון",
        "קורס רישום מקרקעין והסדר, לשכת המודדים"
      ],
      skills: ["תצ״ר ורישום מקרקעין", "ליווי פרויקטי תשתיות", "סריקות לייזר", "חוות דעת מומחה", "מדידות לביצוע"],
      contact: {
        phone: "054-6220167",
        email: "Jawad@Landmap-Ltd.com"
      },
      image: "/jawad.webp" 
    },
    {
      name: "עיסאם חכרוש",
      role: "מודד מוסמך (ר.מ. 1655) ומהנדס מיפוי וגיאו־אינפורמציה",
      bio: "עיסאם חכרוש הוא מהנדס מיפוי וגיאו־אינפורמציה ומודד מוסמך, חבר סגל הוראה בטכניון בתחום הקדסטר. עיסאם מתמחה בטכנולוגיות מדידה מתקדמות, בדגש על סריקות לייזר תלת־ממדיות, עיבוד ענני נקודות, פוטוגרמטריה והטסת רחפנים. בעל ניסיון רחב בליווי פרויקטי ביצוע מורכבים, מידול תלת־ממדי, חישובי כמויות, מדידות שטח וסימונים, תוך שילוב טכנולוגיות מתקדמות ויישום פתרונות מדויקים לצורכי תכנון, ביצוע ובקרה.",
      education: [
        "B.Sc הנדסת מיפוי וגיאו-אינפורמציה, הטכניון",
        "סגל הוראה בקורס קדסטר, הטכניון"
      ],
      skills: ["ניהול ביצוע פרויקטים", "מיפוי פוטוגרמטרי", "רחפנים ומידול 3D", "בקרת איכות", "מדידות לכבישים ותשתיות"],
      contact: {
        phone: "052-8139769",
        email: "Esam@Landmap-Ltd.com"
      },
      image: "/essam.webp"
    }
  ]

  return (
    <section className="py-24 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          {/* <span className="text-secondary-dark font-semibold tracking-wider uppercase text-sm">המומחים שלנו</span> */}
          <h2 className="text-4xl font-bold text-primary-dark mt-2 mb-6">הנהלת המשרד</h2>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col h-full"
            >
              {/* Content Section */}
              <div className="flex flex-col h-full bg-white rounded-2xl">
                <h3 className="text-3xl font-bold text-primary-dark mb-2">{member.name}</h3>
                <p className="text-xl text-secondary-dark font-medium mb-6">{member.role}</p>
                
                <div className="w-20 h-1 bg-secondary mb-6 rounded-full"></div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>

              

            
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 mt-auto border-t border-gray-100 pt-8">
                  <a href={`tel:${member.contact.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <span className="text-lg">📞</span>
                    </div>
                    <span className="font-medium dir-ltr">{member.contact.phone}</span>
                  </a>
                  <a href={`mailto:${member.contact.email}`} className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <span className="text-lg">✉️</span>
                    </div>
                    <span className="font-medium">{member.contact.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
