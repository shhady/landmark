'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Team() {
  const team = [
    {
      name: "ג'ואד סרחאן",
      role: "מודד מוסמך (ר.מ. 1605) ומהנדס מיפוי",
      bio: "בוגר הטכניון בהנדסת מיפוי וגיאו-אינפורמציה ולימודי שמאות מקרקעין. מתרגל בקורס קדסטר בטכניון. בעל ניסיון עשיר בניהול מחלקות קדסטר, ליווי פרויקטי ענק (כביש 20, הקו הירוק) ומתן פתרונות מדידה מורכבים בפריסה ארצית. מומחה לרישום מקרקעין והסדר קרקעות.",
      education: [
        "B.Sc הנדסת מיפוי וגיאו-אינפורמציה, הטכניון",
        "לימודי שמאות מקרקעין, הטכניון",
        "קורס רישום מקרקעין והסדר, לשכת המודדים"
      ],
      skills: ["תצ״ר ורישום מקרקעין", "ליווי פרויקטי תשתיות", "סריקות לייזר", "חוות דעת מומחה", "מדידות לביצוע"],
      contact: {
        phone: "054-6220167",
        email: "jawad@landmark-srv.com"
      },
      image: "/jawad.webp" 
    },
    {
      name: "עיסאם חכרוש",
      role: "מודד מוסמך (ר.מ. 1655) ומהנדס מיפוי",
      bio: "בוגר הטכניון בהנדסת מיפוי. חבר סגל הוראה בטכניון (קדסטר). מנהל ביצוע בפרויקטי ענק כמו רק\"ל ירושלים (הקו האדום והירוק) ומחלף נתב\"ג. מומחה בטכנולוגיות מדידה מתקדמות, פוטוגרמטריה, רחפנים ומידול תלת-ממדי מדויק.",
      education: [
        "B.Sc הנדסת מיפוי וגיאו-אינפורמציה, הטכניון",
        "סגל הוראה בקורס קדסטר, הטכניון"
      ],
      skills: ["ניהול ביצוע פרויקטים", "מיפוי פוטוגרמטרי", "רחפנים ומידול 3D", "בקרת איכות", "מדידות לכבישים ותשתיות"],
      contact: {
        phone: "052-8139769",
        email: "esam@landmark-srv.com"
      },
      image: "/essam.webp"
    }
  ]

  return (
    <section className="py-24 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-secondary-dark font-semibold tracking-wider uppercase text-sm">המומחים שלנו</span>
          <h2 className="text-4xl font-bold text-primary-dark mt-2 mb-6">הנהלת המשרד</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            שילוב של ניסיון אקדמי מהטכניון, ידע רגולטורי מעמיק וניסיון מעשי בפרויקטים הגדולים בישראל.
          </p>
        </div>

        <div className="flex flex-col gap-24 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className={`absolute bottom-8 ${index % 2 === 0 ? 'right-8' : 'left-8'} bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white/20`}>
                   <p className="text-primary-dark font-bold text-lg">{member.role}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-primary-dark mb-4">{member.name}</h3>
                
                <div className="w-20 h-1 bg-secondary mb-8 rounded-full"></div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {member.bio}
                </p>

                {/* Education */}
                <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="text-xl">🎓</span> השכלה והסמכות
                  </h4>
                  <ul className="space-y-2">
                    {member.education.map((edu, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-secondary mt-1.5">•</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-secondary/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>

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
