'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileText, ChevronLeft, Search, FolderOpen } from 'lucide-react'

// Project data structure based on the actual files found
const projects = [
  {
    category: 'מדידות לצרכי רישום',
    items: [
      {
        title: 'תוכניות לצרכי רישום - תצ״ר',
        description: 'הכנת תכניות לצרכי רישום לחלוקה, איחוד ורישום זכויות במקרקעין, בהתאם לתוכניות מאושרות ולדרישות המרכז למיפוי ישראל והטאבו.',
        files: [
          { name: 'דוגמא 1 - תוכנית לצרכי רישום', path: '/projects/תוכניות לצרכי רישום - תצר/1994-2023_6075-S1.pdf' },
          { name: 'דוגמא 2 - מודל', path: '/projects/תוכניות לצרכי רישום - תצר/503-2023-Model.pdf' },
          { name: 'דוגמא 3 - תוכנית חתומה', path: '/projects/תוכניות לצרכי רישום - תצר/792-2023-SIGNED.pdf' }
        ]
      },
      {
        title: 'תשריטים לתיעוד גבולות - תת״ג',
        description: 'הכנת תשריט אשר מתעד באופן מדויק את גבולותיה של חלקה או נכס. הוא משמש להגדרת זכויות קניין, פתרון סכסוכי גבולות, בסיס להכנת תכניות סטטוטוריות.',
        files: [
          { name: 'דוגמא 1 - מודל גבולות', path: '/projects/תשריטים לתיעוד גבולות- תתג/1410-2022-Model.pdf' }
        ]
      },
      {
        title: 'הסדר מקרקעין',
        description: 'מדידות לצורך הסדר זכויות במקרקעין, קביעת גבולות משפטיים ותיעוד מצב קיים בהתאם לדרישות פקיד ההסדר והמרכז למיפוי ישראל.',
        files: [
          { name: 'דוגמא 1 - הסדר מקרקעין', path: '/projects/הסדר מקרקעין/12900-MOKDEMET-FINAL-Gil-1.pdf' },
          { name: 'דוגמא 2 - הסדר מקרקעין', path: '/projects/הסדר מקרקעין/12900-MOKDEMET-FINAL-Gil-2.pdf' },
          { name: 'דוגמא 3 - הסדר מקרקעין', path: '/projects/הסדר מקרקעין/12901-MOKDEMET-FINAL-Gil-1.pdf' }
        ]
      },
      {
        title: 'תרשימי עזר - חישוב גבולות אנליטיים',
        description: 'תרשימי עזר לחישוב וקביעת גבולות אנליטיים, המשמשים בסיס לתכניות המשתרעות מחלקה בודדת ועד גושים רבים, תוך ביצוע חישוב מדויק ומבוקר.',
        files: [
          { name: 'דוגמא 1 - אור עקיבא', path: '/projects/תרשימי עזר - חישוב גבולות אנליטיים/TARSHEM-EZER-ALL-אור עקיבא.pdf' },
          { name: 'דוגמא 2 - ניין', path: '/projects/תרשימי עזר - חישוב גבולות אנליטיים/tarshim-azer-ניין.pdf' },
          { name: 'דוגמא 3 - גלגוליה', path: '/projects/תרשימי עזר - חישוב גבולות אנליטיים/TarshimEZER-FINAL-גלגוליה.pdf' }
        ]
      }
    ]
  },
  {
    category: 'מדידות לתכנון ורישוי',
    items: [
      {
        title: 'מדידות להיתרי בניה (נוהל רישוי זמין)',
        description: 'מדידות לצורך הגשת בקשות להיתרי בנייה, כולל מצב קיים, סימון גבולות, קווי בניין והתאמה לנוהל רישוי זמין ולדרישות הוועדות.',
        files: [
          { name: 'דוגמא 1 - כעביה', path: '/projects/מדידות להיתרי בניה בנוהל רישוי זמין/76-2022 - כעביה.pdf' },
          { name: 'דוגמא 2 - עכו', path: '/projects/מדידות להיתרי בניה בנוהל רישוי זמין/M-AKKO-24-06-2025_V3-Model.pdf' },
          { name: 'דוגמא 3 - רז', path: '/projects/מדידות להיתרי בניה בנוהל רישוי זמין/M-RZ-10-12-25_87-2025.pdf' }
        ]
      },
      {
        title: 'מדידה לצורך תכנון',
        description: 'מדידות טופוגרפיות מפורטות המשמשות בסיס לתכנון אדריכלי והנדסי, כולל תשתיות, גבהים, גבולות ומצב קיים.',
        files: [
          { name: 'דוגמא 1 - מדידת ניין', path: '/projects/מדידה לצורך תכנון/V2-38-2024-מדידת ניין-Model.pdf' },
          { name: 'דוגמא 2 - נספח', path: '/projects/מדידה לצורך תכנון/V2-38-2024-מדידת ניין-NESPAH.pdf' }
        ]
      },
      {
        title: 'מדידות פנים',
        description: 'מדידות מדויקות של שטחים וחללים פנימיים, פתחים, גבהים ומחיצות, תשתיות, לצורכי תכנון, רישוי, שיפוץ וארנונה.',
        files: [
          { name: 'דוגמא 1 - הרצליה', path: '/projects/מדידות פנים/MP-107-2026-HERTZILIYA.pdf' },
          { name: 'דוגמא 2 - As Made', path: '/projects/מדידות פנים/MP-AsMade-7-2023-Signed.pdf' },
          { name: 'דוגמא 3 - בית רב קומות', path: '/projects/מדידות פנים/מדידת בית רב קומות לעיצוב אדריכלי וקונסטרוקטיבי.pdf' }
        ]
      }
    ]
  },
  {
    category: 'ביצוע ובקרה',
    items: [
      {
        title: 'מדידות לטופס 4 - אישור איכלוס',
        description: 'מדידות בקרה בסיום פרויקט, לאימות התאמה בין הביצוע להיתרים ולתכניות המאושרות, כחלק מהליך קבלת טופס 4.',
        files: [
          { name: 'דוגמא 1 - יפיע', path: '/projects/מדידות לטופס 4 - אישור איכלוס/MK-2025-28-04-Yaffa-TOFES-4-FINAL-Model.pdf' }
        ]
      },
      {
        title: 'חישובי כמויות',
        description: 'חישוב מדויק של כמויות עפר, חפירה, מילוי ואלמנטים הנדסיים, לצורכי תמחור, בקרה וליווי פרויקטים בביצוע.',
        files: [
          { name: 'דוגמא 1 - חישוב כמויות', path: '/projects/חישובי כמויות/H-60-2025-K242_2025.pdf' },
          { name: 'דוגמא 2 - ערימת עפר', path: '/projects/חישובי כמויות/חישוב כמויות עפר - ערימה מקרקע קיימת-Gil-2.pdf' }
        ]
      },
      {
        title: 'מדידה לצורך ניטור דפורמציות',
        description: 'מדידות תקופתיות למעקב אחר שקיעות, תזוזות ושינויים גאומטריים במבנים, אלמנטים הנדסיים, קרקע ותשתיות, לצורך בקרה הנדסית.',
        files: [
          { name: 'דוח ניטור - מעגן מיכאל', path: '/projects/מדידה לצורך ניטור דפורמציות/דוח ניטור תזוזות ושקיעות לקיר תומך - מעגן מיכאל.pdf' }
        ]
      }
    ]
  },
  {
    category: 'טכנולוגיות מתקדמות',
    items: [
      {
        title: 'מדידות באמצעות רחפן',
        description: 'מדידות אוויריות לצורכי מיפוי, חישובי כמויות, תיעוד שטחים גדולים מעקב התקדמות בפרויקטים מורכבים, בדיוק גבוה ובזמן קצר.',
        files: [
          { name: 'דוגמא 1 - חיפה אורתופוטו', path: '/projects/מדידות באמצעות רחפן/M-HAIFA-HISDER-ORTHO.pdf' },
          { name: 'דוגמא 2 - מודל כבשני', path: '/projects/מדידות באמצעות רחפן/M-KABSHANI-F-Model.pdf' },
          { name: 'דוגמא 3 - צילום רחפן', path: '/projects/מדידות באמצעות רחפן/TH -18970 - 63 _FINAL-DRONE.pdf' }
        ]
      },
      {
        title: 'מדידות באמצעות סורק לייזר',
        description: 'סריקות תלת־ממד מתקדמות להפקת ענני נקודות, מודלים מדויקים ותיעוד מפורט של מבנים, תשתיות וסביבות מורכבות.',
        files: [
          { name: 'חתך 1.20 - ראשל"צ', path: '/projects/מדידות באמצעות סורק לייזר/M-PS-47-2024-SEC 1.20-RSHLZ-Gil3.pdf' },
          { name: 'חתך 2.50 - ראשל"צ', path: '/projects/מדידות באמצעות סורק לייזר/M-PS-47-2024-SEC 2.50-RSHLZ-Gil2.pdf' },
          { name: 'מבט על - ראשל"צ', path: '/projects/מדידות באמצעות סורק לייזר/M-PS-47-2024-TOP_VIEW-RSHLZ-Gil1.pdf' }
        ]
      }
    ]
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('הכל')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['הכל', ...projects.map(p => p.category)]

  const filteredProjects = projects.flatMap(category => 
    category.items.map(item => ({ ...item, categoryName: category.category }))
  ).filter(item => {
    const matchesCategory = activeCategory === 'הכל' || item.categoryName === activeCategory
    const matchesSearch = item.title.includes(searchQuery) || item.description.includes(searchQuery)
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            תיק עבודות ופרויקטים
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            מגוון פרויקטים נבחרים המדגימים את היכולות המקצועיות שלנו במדידות הנדסיות, קדסטר וטכנולוגיות מתקדמות
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Categories Scroll */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex gap-2 min-w-max px-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="חיפוש פרויקט..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 container mx-auto px-4">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Header with Icon */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 relative">
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                    <FolderOpen className="w-5 h-5" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">
                    {project.categoryName}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Files List */}
                  <div className="mt-auto pt-4 border-t border-gray-50 space-y-2">
                    {project.files && project.files.length > 0 ? (
                      project.files.map((file, fIndex) => (
                        <a 
                          key={fIndex}
                          href={file.path}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between w-full p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 group/file transition-all duration-200"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover/file:text-blue-500 shadow-sm shrink-0">
                              <FileText className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover/file:text-blue-700 truncate">
                              {file.name}
                            </span>
                          </div>
                          <ChevronLeft className="w-4 h-4 text-gray-300 group-hover/file:text-blue-400 shrink-0" />
                        </a>
                      ))
                    ) : (
                      <div className="text-center text-gray-400 text-sm py-2">
                        אין קבצים להצגה
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">לא נמצאו פרויקטים התואמים את החיפוש.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('הכל')}}
              className="mt-4 text-primary font-bold hover:underline"
            >
              ניקוי סינון
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
