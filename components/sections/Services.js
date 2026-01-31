'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Layers, Map as MapIcon, Box } from 'lucide-react'

export default function Services() {
  const featuredServices = [
    { 
      id: 'registration',
      title: 'רישום וקדסטר (תצ״ר)',
      desc: 'הסדרת זכויות בטאבו, פרצלציה ורישום בתים משותפים.',
      icon: <Layers className="w-8 h-8" />,
    },
    { 
      id: 'engineering',
      title: 'מדידות הנדסיות ותשתיות',
      desc: 'ליווי פרויקטי ביצוע, כבישים, גשרים ומבנים מורכבים.',
      icon: <Box className="w-8 h-8" />,
    },
    { 
      id: 'photogrammetry',
      title: 'מיפוי מתקדם ורחפנים',
      desc: 'מדידות ברזולוציה גבוהה, אורתופוטו ומידול תלת-ממדי.',
      icon: <MapIcon className="w-8 h-8" />,
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">תחומי התמחות</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark leading-tight">
              דיוק הנדסי <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">ללא פשרות</span>
            </h2>
          </div>
          <Link 
            href="/services" 
            className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 text-primary-dark font-bold hover:border-secondary hover:text-secondary transition-all shadow-sm hover:shadow-md"
          >
            <span>כל השירותים</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-tr-2xl -z-10 opacity-50 group-hover:from-primary/5 transition-colors" />

              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary/30">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {service.desc}
              </p>
              
              <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-secondary transition-colors">
                <span className="ml-2">מידע נוסף</span>
                <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-secondary transition-all group-hover:w-12" />
              </div>

              <Link 
                href={`/services#${service.id}`} 
                className="absolute inset-0 z-10"
                aria-label={service.title}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-dark text-white font-bold shadow-lg"
          >
            <span>לכל השירותים</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
