'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">מתחילים פרויקט בנייה או זקוקים למדידה?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            אל תתפשרו על דיוק. קבלו שירות ממודדים מוסמכים ומהנדסי מיפוי בוגרי הטכניון,
            <br className="hidden md:block"/>
            מומחים בקדסטר, תשתיות לאומיות ורישום מקרקעין.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="tel:054-6220167" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <span>📞</span>
              <span>ג'ואד: 054-6220167</span>
            </Link>
            <Link 
              href="tel:052-8139769" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg text-lg flex items-center justify-center gap-2 border border-white/20"
            >
              <span>📞</span>
              <span>עיסאם: 052-8139769</span>
            </Link>
          </div>
          
          <div className="mt-8">
             <Link 
              href="/contact" 
              className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors text-sm"
            >
              או השאירו פרטים בטופס יצירת קשר &larr;
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
