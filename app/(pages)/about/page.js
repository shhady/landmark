'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Team from '@/components/sections/Team'

export default function About() {
  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-50 text-primary-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">אודות המשרד</h1>
            <div className="text-lg leading-relaxed text-gray-700 space-y-6 text-right dir-rtl">
              <p>
                לאנדמאפ – שירותי הנדסה ומדידות בע"מ הוקמה על ידי שני מודדים מוסמכים, בוגרי הטכניון, בעלי ניסיון מצטבר רב בליווי וניהול פרויקטים הנדסיים מהגדולים והמורכבים בישראל. מייסדי המשרד, ג׳ואד סרחאן ועיסאם חכרוש, השתתפו לאורך השנים לא רק בליווי פרויקטי ביצוע רחבי היקף, אלא גם בניהול מחלקות קדסטר ותכנון, הובלת צוותים מקצועיים, קבלת החלטות הנדסיות וניהול ממשקי עבודה מול רשויות, יזמים וגופים סטטוטוריים.
              </p>
              <p>
                המשרד משלב ידע הנדסי עמוק, שליטה מלאה בעבודות קדסטר ותכנון סטטוטורי ללקוחותיה, ניסיון מוכח בניהול ובקרה, ושימוש בטכנולוגיות מדידה מתקדמות. גישה זו מאפשרת לחברה להעניק ללקוחותיה פתרונות מדויקים, אמינים ומקיפים – החל משלב התכנון והרישוי, דרך ניהול מדידות וליווי ביצוע, ועד למסירת פרויקטים ברמה הגבוהה ביותר
              </p>
            </div>
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
                  לאנדמאפ שירותי הנדסה ומדידות בע"ם שואפת להוביל את תחום ההנדסה והמדידות באמצעות שילוב של מקצועיות בלתי מתפשרת, ידע הנדסי מעמיק וטכנולוגיות מתקדמות. אנו מאמינים בדיוק, באחריות ובשקיפות מלאה כלפי לקוחותינו, ופועלים ללוות כל פרויקט – משלב הרישוי והתכנון, דרך ניהול מדידות וליווי ביצוע, ועד למסירה – במטרה להשאיר חותם מקצועי המבוסס על איכות, אמינות וראייה הנדסית ארוכת טווח.
                </p>
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
               <Image src="/hazon-pic-1.jpeg" alt="Office" width={1000} height={1000} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white font-bold text-lg">טכנולוגיה ודיוק ללא פשרות</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
          
    
    </div>
  )
}
