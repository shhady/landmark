'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const teamMembers = [
    {
      name: "ג'ואד סרחאן",
      role: 'מודד מוסמך',
      experience: '20+ שנות ניסיון',
      specialties: ['מדידות הנדסיות', 'תצ"ר', 'מדידות לרישום'],
      desc: 'בעל ניסיון רב שנים בתחום המדידות ההנדסיות ומדידות המקרקעין. מומחה בהכנת תצ"רים ותכניות לרישום בטאבו.',
      image: '/jawad.webp'
    },
    {
      name: 'עסאם חכרוש',
      role: 'מודד מוסמך',
      experience: '15+ שנות ניסיון',
      specialties: ['מיפוי פוטוגרמטרי', 'סריקות תלת-ממד', 'מדידות טופוגרפיות'],
      desc: 'מתמחה במדידות טופוגרפיות ומיפוי פוטוגרמטרי מתקדם. מוביל בתחום הטמעת טכנולוגיות חדשניות.',
      image: '/essam.webp'
    }
  ]

  const milestones = [
    { year: '2004', text: 'הקמת המשרד' },
    { year: '2008', text: 'קבלת רישיון מדידה מהמרכז למיפוי ישראל' },
    { year: '2012', text: 'הרחבת השירותים למדידות פוטוגרמטריות' },
    { year: '2015', text: 'רכישת ציוד מדידה מתקדם' },
    { year: '2018', text: 'פתיחת סניף נוסף' },
    { year: '2024', text: 'שדרוג למערכות סריקה תלת-ממדיות' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#2c3d50] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">אודות החברה</h1>
            <p className="text-xl leading-relaxed">
              חברת מדידות מובילה עם מוניטין רב שנים, המתמחה במתן פתרונות מדידה מתקדמים
              ומקצועיים לפרויקטים הנדסיים ומדידות מקרקעין
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">החזון שלנו</h2>
              <p className="text-gray-600 leading-relaxed">
                אנו שואפים להיות החברה המובילה בתחום המדידות בישראל, תוך שימוש בטכנולוגיות
                המתקדמות ביותר ומתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">מקצועיות</h3>
                  <p className="text-sm text-gray-600">צוות מיומן ומוסמך</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">חדשנות</h3>
                  <p className="text-sm text-gray-600">טכנולוגיה מתקדמת</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">אמינות</h3>
                  <p className="text-sm text-gray-600">דיוק ועמידה בזמנים</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">שירות</h3>
                  <p className="text-sm text-gray-600">ליווי אישי ומקצועי</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/office.webp"
                alt="משרד המדידות"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">הצוות המקצועי</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.experience}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ציוני דרך</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-500 transform -translate-x-1/2" />
              
              {/* Timeline items */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <span className="text-blue-500 font-bold">{milestone.year}</span>
                      <p className="text-gray-600">{milestone.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2c3d50] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-4xl font-bold mb-2">+1000</div>
              <div className="text-gray-300">פרויקטים</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">20</div>
              <div className="text-gray-300">שנות ניסיון</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">+500</div>
              <div className="text-gray-300">לקוחות מרוצים</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-gray-300">סניפים</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 