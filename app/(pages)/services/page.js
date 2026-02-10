'use client'

import { Suspense, useEffect } from 'react'
import { Background } from '@/components/Background'
import { ErrorBoundary } from 'react-error-boundary'

// Move allServices outside the component
const allServices = {
  'registration': {
    title: 'קדסטר ורישום מקרקעין',
    description: `הסדרת זכויות במקרקעין דורשת דיוק, בקיאות משפטית והתנהלות מול גופי הרישום. 
    אנו מספקים מעטפת מלאה של שירותי קדסטר מתקדמים להסדרת גבולות ורישום זכויות בטאבו.`,
    icon: '📜',
    services: [
      { 
        title: 'הסדר מקרקעין', 
        desc: 'ליווי הליכי הסדר ורישום ראשוני של קרקעות, כולל בירור זכויות והכנת תשריטים לרישום.',
        icon: '⚖️' 
      },
      { 
        title: 'תכניות לצרכי רישום (תצ״ר)', 
        desc: 'הכנת תוכניות חלוקה ואיחוד (פרצלציה) המאושרות ע"י המרכז למיפוי ישראל ומשמשות לרישום בטאבו.',
        icon: '📄' 
      },
      { 
        title: 'תכנית לצרכי רישום תלת־ממדית (תמ״ר)', 
        desc: 'מיפוי ורישום של חלקות תלת-ממדיות (כגון מנהרות, גשרים וחניונים תת-קרקעיים) ברישום המקרקעין.',
        icon: '🧊' 
      },
      { 
        title: 'תשריט לתיעוד גבולות (תת״ג)', 
        desc: 'שחזור גבולות חלקה מדויק בהתאם לנתוני קדסטר היסטוריים ומדידות עדכניות.',
        icon: '📏' 
      },
      { 
        title: 'תרשימי עזר – חישוב גבולות אנליטיים', 
        desc: 'חישוב מתמטי מדויק של גבולות החלקה כבסיס לתכנון או לפתרון מחלוקות גבול.',
        icon: '🧮' 
      },
      { 
        title: 'חוות דעת משפטית', 
        desc: 'עריכת חוות דעת מומחה לבתי משפט בסכסוכי גבולות, פלישות ותביעות מקרקעין.',
        icon: '👨‍⚖️' 
      }
    ]
  },
  'planning': {
    title: 'תכנון סטטוטורי ורישוי',
    description: `מדידה היא הבסיס לכל הליך תכנוני. אנו מספקים מפות מדידה מדויקות להיתרי בנייה, 
    תב"עות וטופס 4, תוך עמידה בהנחיות מנהל התכנון והוועדות המקומיות.`,
    icon: '🏗️',
    services: [
      { 
        title: 'מדידות להיתרי בנייה', 
        desc: 'הכנת מפה טופוגרפית להיתר בנייה הכוללת את כל פרטי השטח, גבהים וגבולות המגרש.',
        icon: '📋' 
      },
      { 
        title: 'מדידות לטופס 4 (אישור אכלוס)', 
        desc: 'מדידה סופית לאישור אכלוס המבנה (As-Made) והשוואה להיתר הבנייה המקורי.',
        icon: '✅' 
      },
      { 
        title: 'מדידות לצורך תכנון הנדסי', 
        desc: 'מדידות רקע מפורטות לאדריכלים ומתכננים לצורך תכנון בתים, כבישים ותשתיות.',
        icon: '📐' 
      },
      { 
        title: 'מדידות רקע לתכניות סטטוטוריות', 
        desc: 'הכנת מפות רקע לתב"ע (תוכנית בניין עיר) בהתאם לנוהל מבא״ת (מבנה אחיד לתוכניות).',
        icon: '🗺️' 
      }
    ]
  },
  'engineering': {
    title: 'ביצוע פרויקטי תשתיות וליווי הנדסי',
    description: `ליווי שוטף של פרויקטים הנדסיים מורכבים, מכבישים וגשרים ועד למבני מגורים ומסחר. 
    אנו מספקים שירותי מדידה לביצוע, חישובי כמויות ובקרת איכות בזמן אמת.`,
    icon: '👷',
    services: [
      { 
        title: 'חישובי כמויות', 
        desc: 'חישוב מדויק של כמויות עפר (חפירה ומילוי) וחומרי בנייה לצורך התחשבנות ובקרה תקציבית.',
        icon: '🔢' 
      },
      { 
        title: 'מדידות לליווי פרויקטים', 
        desc: 'ליווי צמוד של אתרי בנייה, מתן מענה למודדים בשטח ופתרון סוגיות הנדסיות בזמן אמת.',
        icon: '🏗️' 
      },
      { 
        title: 'סימון והתוויה בשטח', 
        desc: 'סימון צירים, כלונסאות, גבולות חפירה ואלמנטים הנדסיים בשטח לקבלנים ולמבצעים.',
        icon: '📍' 
      },
      { 
        title: 'מפות עדות (As-Made)', 
        desc: 'מדידת המצב הסופי לאחר הביצוע והפקת תוכניות עדות לקבלן ולמזמין.',
        icon: '📝' 
      }
    ]
  },
  'advanced': {
    title: 'מדידות מתקדמות ובקרה',
    description: `שימוש בטכנולוגיות המדידה המתקדמות בעולם למיפוי מדויק, מהיר ומפורט. 
    פתרונות חכמים לפרויקטים הדורשים רמת דיוק קיצונית וניתוח נתונים מורכב.`,
    icon: '🛰️',
    services: [
      { 
        title: 'ניטור דפורמציות', 
        desc: 'מדידות מדויקות לזיהוי שקיעות, תזוזות ועיוותים במבנים, גשרים וסכרים לאורך זמן.',
        icon: '📉' 
      },
      { 
        title: 'מדידות באמצעות רחפנים', 
        desc: 'מיפוי אווירי פוטוגרמטרי ברזולוציה גבוהה, אורתופוטו והפקת מודלים תלת-ממדיים של השטח.',
        icon: '🚁' 
      },
      { 
        title: 'סריקות לייזר (LiDAR)', 
        desc: 'סריקת תלת-ממד של מבנים ומתחמים מורכבים ליצירת "ענן נקודות" ומודלים ממוחשבים (BIM).',
        icon: '📡' 
      }
    ]
  }
}

function ServicesContent() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#2c3d50] text-white py-16">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">שירותי מדידה מקצועיים</h1>
            <p className="text-xl">
              מגוון שירותי מדידה מתקדמים ומקצועיים
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {Object.entries(allServices).map(([key, categoryData], index) => (
        <section 
          key={key}
          id={key}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#2c3d50]">
                {categoryData.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {categoryData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.services.map((service, index) => (
                <div
                  key={`${key}-${index}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl bg-blue-50 p-3 rounded-lg text-blue-600">
                        {service.icon}
                      </span>
                      <h3 className="text-xl font-bold text-[#2c3d50]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">טוען שירותים...</p>
      </div>
    </div>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">שגיאה בטעינת השירותים</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          נסה שוב
        </button>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        <ServicesContent />
      </Suspense>
    </ErrorBoundary>
  )
} 