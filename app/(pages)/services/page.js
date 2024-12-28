'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Background } from '@/components/Background'
import { ErrorBoundary } from 'react-error-boundary'
import { notFound } from 'next/navigation'

// Move allServices outside the component
const allServices = {
  'מדידות-קרקע': {
    title: 'מדידות קרקע',
    description: `מדידות קרקע מדויקות ומקצועיות המבוצעות באמצעות ציוד מדידה מתקדם. 
    אנו מספקים שירותי מדידה מקיפים הכוללים מיפוי טופוגרפי, חישובי כמויות, 
    ומדידות לפיתוח שטח. צוות המודדים המוסמך שלנו מבטיח דיוק מרבי ועמידה בכל התקנים והדרישות.`,
    icon: '🗺️',
    services: [
      { 
        title: 'מדידות טופוגרפיות', 
        desc: 'מיפוי מדויק של פני השטח וגבהים, כולל תיעוד מפורט של המצב הקיים, שיפועים, וקווי גובה. מתאים במיוחד לתכנון פרויקטים הנדסיים ועבודות פיתוח.',
        icon: '📏' 
      },
      { 
        title: 'חישובי כמויות ונפחים', 
        desc: 'חישובים מדויקים לעבודות עפר ופיתוח, כולל חישובי חפירה ומילוי, הערכת עלויות, ותכנון עבודות עפר. שימוש בתוכנות מתקדמות לחישוב מדויק.',
        icon: '📊' 
      },
      { 
        title: 'מדידות פיתוח שטח', 
        desc: 'תכנון וביצוע עבודות פיתוח מקיפות, כולל תכנון ניקוז, שיפועים, ומפלסים. מדידות מדויקות לתכנון פיתוח אופטימלי של השטח.',
        icon: '🏗️' 
      },
      { 
        title: 'מדידות לתכנון תשתיות', 
        desc: 'מדידות מדויקות לתכנון מערכות תשתית כגון מים, ביוב, חשמל ותקשורת. כולל מיפוי תשתיות קיימות ותכנון תשתיות חדשות.',
        icon: '🔌' 
      },
      { 
        title: 'מדידות גבולות', 
        desc: 'קביעת גבולות מדויקת של מגרשים, כולל סימון גבולות, זיהוי נקודות גבול, ופתרון סכסוכי גבולות. שימוש בציוד GPS מתקדם לדיוק מרבי.',
        icon: '🔲' 
      },
      { 
        title: 'מדידות לחישובי עפר', 
        desc: 'חישובי עבודות עפר מדויקים לפיתוח שטח, כולל תכנון מפלסים, חישובי איזון עבודות עפר, והערכת עלויות מדויקת לפרויקט.',
        icon: '⛰️' 
      }
    ]
  },
  'מדידות-לתכנון': {
    title: 'מדידות לתכנון',
    description: `שירותי מדידה מקצועיים לצורכי תכנון ובנייה, המותאמים לדרישות הרשויות והוועדות המקומיות. 
    צוות המודדים שלנו מתמחה בהכנת תכניות מדידה לכל סוגי ההיתרים והתכניות, תוך שימוש בטכנולוגיות המתקדמות ביותר 
    ועמידה בכל התקנים והדרישות המקצועיות.`,
    icon: '📐',
    services: [
      { 
        title: 'מדידות להיתרי בנייה', 
        desc: 'הכנת מפות מדידה מפורטות להיתרי בנייה, כולל סימון קווי בניין, גבולות מגרש, ותשתיות קיימות. מותאם לדרישות הוועדות המקומיות והתקנות העדכניות.',
        icon: '📋' 
      },
      { 
        title: 'מדידות לתב"ע', 
        desc: 'מדידות מקיפות להכנת תכניות בניין עיר, כולל מיפוי מצב קיים, ניתוח טופוגרפי, וסימון תשתיות. תיאום מלא עם דרישות מוסדות התכנון.',
        icon: '🏘️' 
      },
      { 
        title: 'תכניות בינוי ופיתוח', 
        desc: 'הכנת תכניות מפורטות לבינוי ופיתוח, כולל תכנון מפלסים, שיפועים, וניקוז. שילוב של תכנון אדריכלי עם אילוצי השטח הקיימים.',
        icon: '🏗️' 
      },
      { 
        title: 'מדידות לתכנון כבישים', 
        desc: 'מדידות מדויקות לתכנון תשתיות תחבורה, כולל חתכים לאורך ולרוחב, מיפוי תשתיות קיימות, וחישובי כמויות. התאמה לתקני משרד התחבורה.',
        icon: '🛣️' 
      },
      { 
        title: 'מדידות לתכנון מבנים', 
        desc: 'מדידות מפורטות לתכנון אדריכלי, כולל מיפוי המצב הקיים, גבהים, ותשתיות. שיתוף פעולה הדוק עם אדריכלים ומתכננים.',
        icon: '🏢' 
      },
      { 
        title: 'מדידות לתכנון נוף', 
        desc: 'מדידות לתכנון פיתוח נופי, כולל מיפוי צמחייה קיימת, טופוגרפיה, ותשתיות השקיה. תמיכה בתכנון אדריכלות נוף ופיתוח סביבתי.',
        icon: '🌳' 
      }
    ]
  },
  'מדידות-לרישום': {
    title: 'מדידות לרישום',
    description: `שירותי מדידה מקיפים לצורכי רישום בטאבו ורישוי, המבוצעים בהתאם לדרישות המרכז למיפוי ישראל ורשם המקרקעין. 
    אנו מלווים את הלקוח לאורך כל התהליך, מהמדידה הראשונית ועד לרישום הסופי, תוך הקפדה על דיוק, מקצועיות ועמידה בלוחות זמנים.`,
    icon: '📑',
    services: [
      { 
        title: 'תצ"ר', 
        desc: 'הכנת תכניות לצורכי רישום בטאבו בהתאם לתקנות המרכז למיפוי ישראל. כולל תיאום מול כל הגורמים הרלוונטיים, מדידות מדויקות, והגשת התכניות לאישור.',
        icon: '📄' 
      },
      { 
        title: 'חלוקה ואיחוד מגרשים', 
        desc: 'הכנת תכניות מפורטות לחלוקה ואיחוד של מגרשים, כולל תיאום עם בעלי הזכויות, הכנת תשריטים, וליווי עד לרישום הסופי בטאבו.',
        icon: '✂️' 
      },
      { 
        title: 'רישום בתים משותפים', 
        desc: 'הכנת כל המסמכים הנדרשים לרישום בית משותף, כולל תשריטים, צו בית משותף, וטבלאות שטחים. ליווי מלא עד לרישום הסופי.',
        icon: '🏢' 
      },
      { 
        title: 'תשריטי חלוקה', 
        desc: 'הכנת תשריטי חלוקה מפורטים בהתאם לדרישות הוועדות המקומיות, כולל חישובי שטחים, סימון זכויות מעבר, וזיקות הנאה.',
        icon: '📊' 
      },
      { 
        title: 'תכניות לצורכי הפקעה', 
        desc: 'הכנת תכניות מדידה להפקעת שטחים, כולל תיאום עם הרשויות, חישובי פיצויים, וליווי הליך ההפקעה מתחילתו ועד סופו.',
        icon: '🔄' 
      },
      { 
        title: 'הסדר מקרקעין', 
        desc: 'טיפול מקיף בהסדרת רישום מקרקעין, כולל בירור זכויות, תיאום עם רשויות, והכנת כל המסמכים הנדרשים להסדרה.',
        icon: '✅' 
      }
    ]
  },
  'מדידות-הנדסיות': {
    title: 'מדידות הנדסיות',
    description: `שירותי מדידה הנדסיים מתקדמים לפרויקטי בנייה ותשתיות. 
    אנו משלבים טכנולוגיות מדידה חדישות עם ניסיון מקצועי רב שנים, 
    ומספקים פתרונות מדידה מדויקים ואמינים לכל סוגי הפרויקטים ההנדסיים.`,
    icon: '⚙️',
    services: [
      { 
        title: 'מדידות As-Made', 
        desc: 'מדידות מדויקות של המצב הקיים לאחר ביצוע עבודות, כולל השוואה לתכנון המקורי, איתור סטיות, והכנת דוחות מפורטים לפיקוח ובקרת איכות.',
        icon: '✔️' 
      },
      { 
        title: 'בקרת איכות בנייה', 
        desc: 'פיקוח ובקרה מדויקים על עבודות בנייה, כולל מדידות תקופתיות, בדיקת התאמה לתכניות, ודיווח שוטף למנהלי הפרויקט.',
        icon: '🔍' 
      },
      { 
        title: 'סימון צירים ונקודות', 
        desc: 'סימון מדויק של נקודות וצירים בשטח לצורך ביצוע עבודות בנייה, כולל סימון יסודות, צירי מבנים, וגבהי עבודה.',
        icon: '📍' 
      },
      { 
        title: 'מדידות דפורמציה', 
        desc: 'מעקב ובקרה אחר שינויים ותזוזות במבנים, כולל מדידות תקופתיות, ניתוח תוצאות, והתראה על חריגות.',
        icon: '📊' 
      },
      { 
        title: 'מדידות תשתיות', 
        desc: 'מדידה וסימון של תשתיות תת-קרקעיות, כולל איתור תשתיות קיימות, תיעוד מיקומן המדויק, ותכנון תשתיות חדשות.',
        icon: '🔌' 
      },
      { 
        title: 'חישובי כמויות', 
        desc: 'חישובים מדויקים של כמויות בפרויקטים הנדסיים, כולל חישובי עפר, בטון, אספלט וחומרי בנייה אחרים.',
        icon: '🔢' 
      }
    ]
  },
  'מיפוי-פוטוגרמטרי': {
    title: 'מיפוי פוטוגרמטרי',
    description: `שירותי מיפוי מתקדמים באמצעות טכנולוגיות צילום אוויר וסריקה תלת-ממדית. 
    אנו משתמשים ברחפנים מתקדמים וציוד צילום חדיש לביצוע מיפוי מדויק ומפורט, 
    המאפשר קבלת תמונה מלאה ומדויקת של השטח בזמן קצר ובעלות משתלמת.`,
    icon: '📸',
    services: [
      { 
        title: 'צילום ברחפנים', 
        desc: 'מיפוי אווירי מתקדם באמצעות רחפנים מקצועיים, כולל תכנון מסלולי טיסה, צילום בזוויות שונות, ועיבוד תמונות לקבלת תוצרי מיפוי מדויקים.',
        icon: '🚁' 
      },
      { 
        title: 'מודלים תלת-ממדיים', 
        desc: 'יצירת מודלים תלת-ממדיים מדויקים של השטח והמבנים, כולל טקסטורות, מידות מדויקות, ואפשרות לניתוח מרחבי מתקדם.',
        icon: '🎮' 
      },
      { 
        title: 'אורתופוטו', 
        desc: 'הפקת תצלומי אוויר מיושרים בדיוק גבוה, המשמשים כבסיס למיפוי ותכנון. כולל תיקוני עיוותים וקנה מידה מדויק.',
        icon: '🖼️' 
      },
      { 
        title: 'מיפוי תרמי', 
        desc: 'זיהוי ומיפוי מוקדי חום ואנרגיה באמצעות מצלמות תרמיות מתקדמות. שימושי לבדיקת מבנים, תשתיות, ומערכות אנרגיה.',
        icon: '🌡️' 
      },
      { 
        title: 'חישובי נפח', 
        desc: 'חישובי נפח מדויקים מצילומי אוויר, כולל חישובי עפר, מלאי, וחומרי גלם. שימוש בתוכנות מתקדמות לעיבוד נתונים.',
        icon: '📦' 
      },
      { 
        title: 'ניטור שינויים', 
        desc: 'מעקב ותיעוד שינויים בשטח לאורך זמן, כולל השוואת מצבים, זיהוי שינויים, והפקת דוחות מפורטים.',
        icon: '👁️' 
      }
    ]
  }
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

function ServicesContent() {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category')

  if (category && !allServices[category]) {
    notFound()
  }

  const servicesToShow = category && allServices[category] ? 
    { [category]: allServices[category] } : 
    allServices

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="bg-[#2c3d50] text-white py-16">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">שירותי מדידה מקצועיים</h1>
            <p className="text-xl">
              {category ? allServices[category]?.description : 'מגוון שירותי מדידה מתקדמים ומקצועיים'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-white">
        <Background />
        <div className="container mx-auto px-4 max-w-full">
          {Object.entries(servicesToShow).map(([key, categoryData]) => (
            <div
              key={key}
              id={key}
              className="mb-16 last:mb-0 scroll-mt-20 overflow-hidden"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-4xl">{categoryData.icon}</span>
                <h2 className="text-3xl font-bold text-center">{categoryData.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {categoryData.services.map((service, index) => (
                  <div
                    key={`${key}-${index}`}
                    className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{service.icon}</span>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
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