'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Award, CheckCircle2, ArrowLeft, Clock } from 'lucide-react'

export default function Hero() {
  const HEADER_OFFSET = 64 // Approx navbar height

  return (
    <section 
      className="relative flex items-center overflow-hidden bg-primary-dark py-16 md:py-0"
      style={{ minHeight: `calc(100vh - ${HEADER_OFFSET}px)` }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-image-landmap.png" 
          alt="מדידות הנדסיות בצפון - LANDMAP" 
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Clean Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/95 via-primary-dark/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 md:px-12">
        <div className="max-w-3xl ml-auto text-right">
          

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            מדידות הנדסיות
            <span className="block text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300 mt-2">
              דיוק • אחריות • מקצועיות • מיומנות
            </span>
          </motion.h1>

          {/* Accent Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-gradient-to-l from-blue-500 via-cyan-400 to-transparent rounded-full mb-8 ml-auto"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light pl-0 md:pl-8"
          >
            משרד מודדים מוסמכים, הפועל מתוך תפיסה כי איכות התוצר הסופי מתחילה בבחירה הנכונה של מודד מוסמך – כזה שמבטיח דיוק, אחריות ושקט נפשי לכל אורך הפרויקט
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-start mb-16"
          >
             <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>קבל הצעת מחיר</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            {/* <Link 
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-white hover:text-blue-200 transition-colors"
            >
              השירותים שלנו
            </Link> */}
           
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-8 text-center"
          >
            <div className="flex items-center gap-2 md:gap-3 justify-start">  
              <Award className="w-6 h-6 md:w-8 md:h-8 text-blue-400 opacity-80 flex-shrink-0" />
              <div className="text-right">
                <p className="text-white font-bold text-xs md:text-sm">אחריות מקצועית</p>
                <p className="text-white font-bold text-xs md:text-sm">מלאה</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 justify-start">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-blue-400 opacity-80 flex-shrink-0" />
              <div className="text-right">
                <p className="text-white font-bold text-xs md:text-sm">פתרונות ודיוק</p>
                <p className="text-white font-bold text-xs md:text-sm">ברמה הגבוהה ביותר</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 justify-start">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-400 opacity-80 flex-shrink-0" />
              <div className="text-right">
                <p className="text-white font-bold text-xs md:text-sm">פריסה ארצית</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 justify-start">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-400 opacity-80 flex-shrink-0" />
              <div className="text-right">
                <p className="text-white font-bold text-xs md:text-sm">עמידה בלוחות</p>
                <p className="text-white font-bold text-xs md:text-sm">זמנים</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
