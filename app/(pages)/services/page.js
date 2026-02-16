'use client'

import { Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { 
  FileText, ChevronLeft, X, Eye,
  FileSignature, Scale, FileCheck, Box, Map as MapIcon, Calculator, Gavel,
  Ruler, ClipboardList, CheckCircle2, PencilRuler, LayoutTemplate, Globe,
  HardHat, BarChart3, Construction, MapPin,
  Satellite, Activity, Plane, Scan,
  Loader2, RotateCw
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Data structure based on scanned files
const projectsData = {
  'הסדר מקרקעין': {
    description: "מדידות לצורך הסדר זכויות במקרקעין, קביעת גבולות משפטיים ותיעוד מצב קיים בהתאם לדרישות פקיד ההסדר והמרכז למיפוי ישראל.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "תכנית הסדר - חלק 1", url: "/updated-projects/הסדר מקרקעין/1/12900-MOKDEMET-FINAL-Gil-1.pdf" },
          { name: "תכנית הסדר - חלק 2", url: "/updated-projects/הסדר מקרקעין/1/12900-MOKDEMET-FINAL-Gil-2.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "תכנית הסדר", url: "/updated-projects/הסדר מקרקעין/2/12901-MOKDEMET-FINAL-Gil-1.pdf" }
        ]
      }
    ]
  },
  'חישובי כמויות': {
    description: "חישוב מדויק של כמויות עפר, חפירה, מילוי ואלמנטים הנדסיים, לצורכי תמחור, בקרה וליווי פרויקטים בביצוע.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "חישוב כמויות עפר", url: "/updated-projects/חישובי כמויות/1/חישוב כמויות עפר - ערימה מקרקע קיימת-Gil-2.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "חישוב כמויות - K242", url: "/updated-projects/חישובי כמויות/2/H-60-2025-K242_2025.pdf" }
        ]
      }
    ]
  },
  'מדידה לצורך ניטור דפורמציות': {
    description: "מדידות תקופתיות למעקב אחר שקיעות, תזוזות ושינויים גאומטריים במבנים, אלמנטים הנדסיים, קרקע ותשתיות, לצורך בקרה הנדסית ובטיחותית.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "דוח ניטור תזוזות ושקיעות", url: "/updated-projects/מדידה לצורך ניטור דפורמציות/1/דוח ניטור תזוזות ושקיעות לקיר תומך - מעגן מיכאל.pdf" }
        ]
      }
    ]
  },
  'מדידה לצורך תכנון': {
    description: "מדידות טופוגרפיות מפורטות המשמשות בסיס לתכנון אדריכלי והנדסי, כולל תשתיות, גבהים, גבולות ומצב קיים.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "מדידת ניין - מודל", url: "/updated-projects/מדידה לצורך תכנון/1/V2-38-2024-מדידת ניין-Model.pdf" },
          { name: "מדידת ניין - נספח", url: "/updated-projects/מדידה לצורך תכנון/1/V2-38-2024-מדידת ניין-NESPAH.pdf" }
        ]
      }
    ]
  },
  'מדידות באמצעות סורק לייזר': {
    description: "סריקות תלת־ממד מתקדמות להפקת ענני נקודות, מודלים מדויקים ותיעוד מפורט של מבנים, תשתיות וסביבות מורכבות.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "חתך 1.20", url: "/updated-projects/מדידות באמצעות סורק לייזר/1/M-PS-47-2024-SEC 1.20-RSHLZ-Gil3.pdf" },
          { name: "חתך 2.50", url: "/updated-projects/מדידות באמצעות סורק לייזר/1/M-PS-47-2024-SEC 2.50-RSHLZ-Gil2.pdf" },
          { name: "חתך A", url: "/updated-projects/מדידות באמצעות סורק לייזר/1/M-PS-47-2024-SEC_A-RSHLZ-Gil4.pdf" },
          { name: "חתך B", url: "/updated-projects/מדידות באמצעות סורק לייזר/1/M-PS-47-2024-SEC_B-RSHLZ-Gil5.pdf" },
          { name: "מבט על", url: "/updated-projects/מדידות באמצעות סורק לייזר/1/M-PS-47-2024-TOP_VIEW-RSHLZ-Gil1.pdf" }
        ]
      }
    ]
  },
  'מדידות באמצעות רחפן': {
    description: "מדידות אוויריות לצורכי מיפוי, חישובי כמויות, תיעוד שטחים גדולים מעקב התקדמות בפרויקטים מורכבים, בדיוק גבוה ובזמן קצר.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "אורתופוטו - חיפה", url: "/updated-projects/מדידות באמצעות רחפן/1/M-HAIFA-HISDER-ORTHO.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "מודל כבשני", url: "/updated-projects/מדידות באמצעות רחפן/2/M-KABSHANI-F-Model.pdf" }
        ]
      },
      {
        name: "דוגמה 3",
        files: [
          { name: "מדידת רחפן", url: "/updated-projects/מדידות באמצעות רחפן/3/TH -18970 - 63 _FINAL-DRONE.pdf" }
        ]
      }
    ]
  },
  'מדידות להיתרי בניה בנוהל רישוי זמין': {
    description: "מדידות לצורך הגשת בקשות להיתרי בנייה, כולל מצב קיים, סימון גבולות, קווי בניין והתאמה לנוהל רישוי זמין ולדרישות הוועדות.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "היתר בנייה - עכו", url: "/updated-projects/מדידות להיתרי בניה בנוהל רישוי זמין/1/M-AKKO-24-06-2025_V3-Model.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "היתר בנייה - כעביה", url: "/updated-projects/מדידות להיתרי בניה בנוהל רישוי זמין/2/76-2022 - כעביה.pdf" }
        ]
      },
      {
        name: "דוגמה 3",
        files: [
          { name: "היתר בנייה - רז", url: "/updated-projects/מדידות להיתרי בניה בנוהל רישוי זמין/3/M-RZ-10-12-25_87-2025.pdf" }
        ]
      }
    ]
  },
  'מדידות לטופס 4 - אישור איכלוס': {
    description: "מדידות בקרה בסיום פרויקט, לאימות התאמה בין הביצוע להיתרים ולתכניות המאושרות, כחלק מהליך קבלת טופס 4.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "טופס 4 - יפיע", url: "/updated-projects/מדידות לטופס 4 - אישור איכלוס/1/MK-2025-28-04-Yaffa-TOFES-4-FINAL-Model.pdf" }
        ]
      }
    ]
  },
  'מדידות פנים': {
    description: "מדידות מדויקות של שטחים וחללים פנימיים, פתחים, גבהים ומחיצות, תשתיות, לצורכי תכנון, רישוי, שיפוץ וארנונה.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "מדידת As-Made", url: "/updated-projects/מדידות פנים/1/MP-AsMade-7-2023-Signed.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "מדידת בית רב קומות", url: "/updated-projects/מדידות פנים/2/מדידת בית רב קומות לעיצוב אדריכלי וקונסטרוקטיבי.pdf" }
        ]
      },
      {
        name: "דוגמה 3",
        files: [
          { name: "מדידה בהרצליה", url: "/updated-projects/מדידות פנים/3/MP-107-2026-HERTZILIYA.pdf" }
        ]
      }
    ]
  },
  'מדידות רקע לתכניות סטטוטוריות לפי נוהל מבא״ת': {
    description: `מדידות רקע לתכניות סטטוטוריות לפי נוהל מבא״ת
מדידות טופוגרפיות ומדידות מצב קיים המשמשות בסיס להכנת תכניות סטטוטוריות, לרבות תב״ע, בהתאם לנוהל מבא״ת – המפרט הלאומי האחיד לתכנון, כולל קומפילציה של תכניות מאושרות, הכנת תשריטים למצב נכנס ומצב יוצא, חישובי שטחים וליווי שמאי לצורך הכנת טבלאות הקצאה ואיזון`,
    examples: []
  },
  'תוכניות לצרכי רישום - תצר': {
    description: "הכנת תכניות לצרכי רישום לחלוקה, איחוד ורישום זכויות במקרקעין, בהתאם לתוכניות מאושרות ולדרישות המרכז למיפוי ישראל והטאבו.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "תצ״ר מודל", url: "/updated-projects/תוכניות לצרכי רישום - תצר/1/503-2023-Model.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "תצ״ר - דוגמא 2", url: "/updated-projects/תוכניות לצרכי רישום - תצר/2/1994-2023_6075-S1.pdf" }
        ]
      },
      {
        name: "דוגמה 3",
        files: [
          { name: "תצ״ר חתום", url: "/updated-projects/תוכניות לצרכי רישום - תצר/3/792-2023-SIGNED.pdf" }
        ]
      }
    ]
  },
  'תכנית לצרכי רישום תלת־ממדית -תמ״ר': {
    description: "תכנית המייצרת חלקות תלת-ממדיות ומאפשרת רישום זכויות קניין מרחביות, וכן תכניות הכוללות איחוד וחלוקה של חלקה תלת-ממדית",
    examples: []
  },
  'תרשימי עזר - חישוב גבולות אנליטיים': {
    description: "תרשימי עזר לחישוב וקביעת גבולות אנליטיים, המשמשים בסיס לתכניות המשתרעות מחלקה בודדת ועד גושים רבים, תוך ביצוע חישוב מדויק ומבוקר",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "תרשים עזר - אור עקיבא", url: "/updated-projects/תרשימי עזר - חישוב גבולות אנליטיים/1/TARSHEM-EZER-ALL-אור עקיבא.pdf" }
        ]
      },
      {
        name: "דוגמה 2",
        files: [
          { name: "תרשים עזר - ניין", url: "/updated-projects/תרשימי עזר - חישוב גבולות אנליטיים/2/tarshim-azer-ניין.pdf" }
        ]
      },
      {
        name: "דוגמה 3",
        files: [
          { name: "תרשים עזר - גלגוליה", url: "/updated-projects/תרשימי עזר - חישוב גבולות אנליטיים/3/TarshimEZER-FINAL-גלגוליה.pdf" }
        ]
      }
    ]
  },
  'תשריטים לצורך חוות דעת משפטית': {
    description: "הכנת חוות דעת משפטית, באמצעות, הכנת תשריטים המבוססים על מדידות מדויקות, ותיעודים למחלוקות שונות והצגת ממצאים מקצועיים לבית משפט.",
    examples: []
  },
  'תשריטים לתיעוד גבולות- תתג': {
    description: "הכנת תשריט אשר מתעד באופן מדויק את גבולותיה של חלקה או נכס. הוא משמש להגדרת זכויות קניין, פתרון סכסוכי גבולות, בסיס להכנת תכניות סטטוטוריות.",
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "תת״ג מודל", url: "/updated-projects/תשריטים לתיעוד גבולות- תתג/1/1410-2022-Model.pdf" }
        ]
      }
    ]
  },
  'מדידות לליווי פרויקטים': {
    description: 'ליווי צמוד של אתרי בנייה, מתן מענה למודדים בשטח ופתרון סוגיות הנדסיות בזמן אמת.',
    examples: []
  },
  'סימון והתוויה בשטח': {
    description: 'סימון צירים, כלונסאות, גבולות חפירה ואלמנטים הנדסיים בשטח לקבלנים ולמבצעים.',
    examples: []
  },
  'מפות עדות (As-Made)': {
    description: 'מדידת המצב הסופי לאחר הביצוע והפקת תוכניות עדות לקבלן ולמזמין.',
    examples: [
      {
        name: "דוגמה 1",
        files: [
          { name: "מדידת As-Made", url: "/updated-projects/מדידות פנים/1/MP-AsMade-7-2023-Signed.pdf" }
        ]
      }
    ]
  }
}

// Map the keys used in allServices to the project keys
const serviceKeyMapping = {
  'registration': {
    0: 'הסדר מקרקעין',
    1: 'תוכניות לצרכי רישום - תצר',
    2: 'תכנית לצרכי רישום תלת־ממדית -תמ״ר',
    3: 'תשריטים לתיעוד גבולות- תתג',
    4: 'תרשימי עזר - חישוב גבולות אנליטיים',
    5: 'תשריטים לצורך חוות דעת משפטית'
  },
  'planning': {
    0: 'מדידות להיתרי בניה בנוהל רישוי זמין',
    1: 'מדידות לטופס 4 - אישור איכלוס',
    2: 'מדידה לצורך תכנון',
    3: 'מדידות פנים',
    4: 'מדידות רקע לתכניות סטטוטוריות לפי נוהל מבא״ת'
  },
  'engineering': {
    0: 'חישובי כמויות',
    1: 'מדידות לליווי פרויקטים',
    2: 'סימון והתוויה בשטח',
    3: 'מפות עדות (As-Made)'
  },
  'advanced': {
    0: 'מדידה לצורך ניטור דפורמציות',
    1: 'מדידות באמצעות רחפן',
    2: 'מדידות באמצעות סורק לייזר'
  }
}

const allServices = {
  'registration': {
    title: 'קדסטר ורישום מקרקעין',
    description: `הסדרת זכויות במקרקעין דורשת דיוק, בקיאות משפטית והתנהלות מול גופי הרישום. 
    אנו מספקים מעטפת מלאה של שירותי קדסטר מתקדמים להסדרת גבולות ורישום זכויות בטאבו.`,
    icon: <FileSignature className="w-6 h-6" />,
    services: [
      { 
        title: 'הסדר מקרקעין', 
        icon: <Scale className="w-6 h-6" /> 
      },
      { 
        title: 'תכניות לצרכי רישום (תצ״ר)', 
        icon: <FileCheck className="w-6 h-6" /> 
      },
      { 
        title: 'תכנית לצרכי רישום תלת־ממדית (תמ״ר)', 
        icon: <Box className="w-6 h-6" /> 
      },
      { 
        title: 'תשריט לתיעוד גבולות (תת״ג)', 
        icon: <MapIcon className="w-6 h-6" /> 
      },
      { 
        title: 'תרשימי עזר – חישוב גבולות אנליטיים', 
        icon: <Calculator className="w-6 h-6" /> 
      },
      { 
        title: 'חוות דעת משפטית', 
        icon: <Gavel className="w-6 h-6" /> 
      }
    ]
  },
  'planning': {
    title: 'תכנון סטטוטורי ורישוי',
    description: `מדידה היא הבסיס לכל הליך תכנוני. אנו מספקים מפות מדידה מדויקות להיתרי בנייה, 
    תב"עות וטופס 4, תוך עמידה בהנחיות מנהל התכנון והוועדות המקומיות.`,
    icon: <Ruler className="w-6 h-6" />,
    services: [
      { 
        title: 'מדידות להיתרי בנייה', 
        icon: <ClipboardList className="w-6 h-6" /> 
      },
      { 
        title: 'מדידות לטופס 4 (אישור אכלוס)', 
        icon: <CheckCircle2 className="w-6 h-6" /> 
      },
      { 
        title: 'מדידות לצורך תכנון הנדסי', 
        icon: <PencilRuler className="w-6 h-6" /> 
      },
      { 
        title: 'מדידות פנים', 
        icon: <LayoutTemplate className="w-6 h-6" />
      },
      { 
        title: 'מדידות רקע לתכניות סטטוטוריות', 
        icon: <Globe className="w-6 h-6" /> 
      }
    ]
  },
  'engineering': {
    title: 'ביצוע פרויקטי תשתיות וליווי הנדסי',
    description: `ליווי שוטף של פרויקטים הנדסיים מורכבים, מכבישים וגשרים ועד למבני מגורים ומסחר. 
    אנו מספקים שירותי מדידה לביצוע, חישובי כמויות ובקרת איכות בזמן אמת.`,
    icon: <HardHat className="w-6 h-6" />,
    services: [
      { 
        title: 'חישובי כמויות', 
        icon: <BarChart3 className="w-6 h-6" /> 
      },
      { 
        title: 'מדידות לליווי פרויקטים', 
        desc: 'ליווי צמוד של אתרי בנייה, מתן מענה למודדים בשטח ופתרון סוגיות הנדסיות בזמן אמת.',
        icon: <Construction className="w-6 h-6" /> 
      },
      { 
        title: 'סימון והתוויה בשטח', 
        desc: 'סימון צירים, כלונסאות, גבולות חפירה ואלמנטים הנדסיים בשטח לקבלנים ולמבצעים.',
        icon: <MapPin className="w-6 h-6" /> 
      },
      { 
        title: 'מפות עדות (As-Made)', 
        desc: 'מדידת המצב הסופי לאחר הביצוע והפקת תוכניות עדות לקבלן ולמזמין.',
        icon: <FileCheck className="w-6 h-6" /> 
      }
    ]
  },
  'advanced': {
    title: 'מדידות מתקדמות ובקרה',
    description: `שימוש בטכנולוגיות המדידה המתקדמות בעולם למיפוי מדויק, מהיר ומפורט. 
    פתרונות חכמים לפרויקטים הדורשים רמת דיוק קיצונית וניתוח נתונים מורכב.`,
    icon: <Satellite className="w-6 h-6" />,
    services: [
      { 
        title: 'ניטור דפורמציות', 
        icon: <Activity className="w-6 h-6" /> 
      },
      { 
        title: 'מדידות באמצעות רחפנים', 
        icon: <Plane className="w-6 h-6" /> 
      },
      { 
        title: 'סריקות לייזר', 
        icon: <Scan className="w-6 h-6" /> 
      }
    ]
  }
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-2xl border border-red-100 bg-red-50 p-6 text-right">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-red-800">משהו השתבש</h2>
            <p className="text-sm text-red-700/90">
              אירעה שגיאה בעת טעינת עמוד השירותים. ניתן לנסות שוב.
            </p>
          </div>
          <button
            onClick={resetErrorBoundary}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm ring-1 ring-red-200 hover:bg-red-50 transition"
          >
            <RotateCw className="w-4 h-4" />
            נסה שוב
          </button>
        </div>

        <pre className="mt-4 max-h-40 overflow-auto rounded-xl bg-white/70 p-3 text-xs text-red-900/80 ring-1 ring-red-200">
          {String(error?.message || error)}
        </pre>
      </div>
    </div>
  )
}

function ServicesPageInner() {
  const categories = [
    { key: 'registration' },
    { key: 'planning' },
    { key: 'engineering' },
    { key: 'advanced' },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeExample, setActiveExample] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  const openExample = (example) => {
    if (!example || !example.files?.length) {
      setToast('דוגמאות לשירות זה יועלו בהמשך')
      return
    }

    setActiveExample(example)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-right"
          >
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900">השירותים שלנו</h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600 leading-relaxed">
              מעטפת מלאה של שירותי מדידה, קדסטר ותכנון — עם דיוק, שקיפות וליווי צמוד לכל אורך הדרך.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content: render ALL categories as sections */}
      <section className="container mx-auto px-4 py-12 md:py-14">
        <div className="max-w-6xl space-y-14">
          {categories.map(({ key }) => {
            const category = allServices?.[key]
            const services = category?.services || []

            return (
              <div key={key} className="scroll-mt-24" id={key}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.35 }}
                  className="text-right"
                >
                  <div className="flex items-center justify-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-50 text-blue-600">
                      {category?.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">{category?.title}</h2>
                  </div>
                  {category?.description && (
                    <p className="mt-3 text-neutral-600 leading-relaxed whitespace-pre-line">
                      {category.description}
                    </p>
                  )}
                </motion.div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {services.map((s, idx) => {
                    const projectKey = serviceKeyMapping?.[key]?.[idx]
                    const examples = projectKey ? (projectsData?.[projectKey]?.examples || []) : []
                    const projectDescription = projectKey ? projectsData?.[projectKey]?.description : null

                    return (
                      <motion.div
                        key={`${key}-${idx}`}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ delay: idx * 0.02 }}
                        className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            {s.icon}
                          </div>
                          <div className="text-right">
                            <h3 className="font-extrabold text-neutral-900">{s.title}</h3>
                            {(projectDescription || s.desc) && (
                              <p className="mt-2 text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                                {projectDescription || s.desc}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Examples buttons: דוגמה 1/2/3... based on folders */}
                        <div className="mt-5">
                          {examples.length ? (
                            <div className="flex flex-wrap items-center justify-start gap-2">
                              {examples.map((ex, exIdx) => (
                                <button
                                  key={`${key}-${idx}-ex-${exIdx}`}
                                  onClick={() => openExample(ex)}
                                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2 text-sm font-bold text-white hover:bg-blue-700 transition"
                                  title={ex.files?.length === 1 ? 'פתח PDF' : 'בחר קובץ'}
                                >
                                  <Eye className="w-4 h-4" />
                                  {ex.name || `דוגמה ${exIdx + 1}`}
                                </button>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

       
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-6 z-[3500] max-w-[90vw] rounded-2xl bg-neutral-900 text-white px-4 py-3 shadow-xl"
          >
            <p className="text-sm font-semibold">{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        example={activeExample}
      />
    </div>
  )
}

export default function ServicesPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <ServicesPageInner />
      </Suspense>
    </ErrorBoundary>
  )
}

function ProjectModal({ isOpen, onClose, example }) {
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Reset selected PDF when modal opens or example changes
  useEffect(() => {
    if (isOpen && example) {
      if (example.files.length === 1) {
        setSelectedPdf(example.files[0])
      } else {
        setSelectedPdf(null)
      }
    }
  }, [isOpen, example])

  const handleDownload = (file) => {
    // Open PDF in new tab for viewing/downloading
    window.open(file.url, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && example && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] flex items-center justify-center sm:p-4 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white sm:rounded-2xl w-full max-w-6xl h-full sm:h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
            >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-100 bg-white/80 backdrop-blur-sm shrink-0 z-10 shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 truncate max-w-[200px] md:max-w-md">
                        {selectedPdf ? selectedPdf.name : example.name}
                    </h3>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                {selectedPdf && example.files.length > 1 && (
                    <>
                        <button 
                        onClick={() => setSelectedPdf(null)}
                        className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-full transition-all"
                        >
                        <ChevronLeft className="w-4 h-4" />
                        <span>חזרה לרשימה</span>
                        </button>
                        <button 
                        onClick={() => setSelectedPdf(null)}
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                        >
                        <ChevronLeft className="w-6 h-6" />
                        </button>
                    </>
                )}
                
                <button 
                    onClick={onClose}
                    className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-gray-100 relative w-full scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex justify-center">
                {!selectedPdf ? (
                // List View
                <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full h-fit">
                    {example.files.map((file, idx) => (
                    <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => setSelectedPdf(file)}
                        className="group flex flex-col items-center gap-4 p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 text-center relative overflow-hidden w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-blue-500 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center shadow-inner relative z-10">
                            <FileText className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        
                        <div className="space-y-2 relative z-10 w-full">
                            <span className="block font-bold text-gray-800 text-base md:text-lg group-hover:text-blue-700 transition-colors truncate w-full">
                                {file.name}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                <Eye className="w-3 h-3 md:w-4 md:h-4" />
                                לחץ לצפייה
                            </span>
                        </div>
                    </motion.button>
                    ))}
                </div>
                ) : (
                // PDF View with iframe
                <div className="relative w-full h-full flex flex-col">
                    {/* Download button */}
                    <div className="absolute top-4 right-4 z-20">
                        <button
                            onClick={() => handleDownload(selectedPdf)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all font-medium text-sm"
                        >
                            <FileText className="w-4 h-4" />
                            <span>פתח במסך מלא</span>
                        </button>
                    </div>

                    {/* PDF iframe */}
                    <iframe
                        src={selectedPdf.url}
                        className="w-full h-full border-0"
                        title={selectedPdf.name}
                        onLoad={() => setIsLoading(false)}
                    />

                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="flex flex-col items-center gap-4">
                                <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
                                <p className="text-gray-600 font-medium">טוען מסמך...</p>
                            </div>
                        </div>
                    )}
                </div>
                )}
            </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { ProjectModal, projectsData, serviceKeyMapping, allServices }