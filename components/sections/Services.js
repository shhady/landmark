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
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    { 
      id: 'engineering',
      title: 'מדידות הנדסיות ותשתיות',
      desc: 'ליווי פרויקטי ביצוע, כבישים, גשרים ומבנים מורכבים.',
      icon: <Box className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      id: 'photogrammetry',
      title: 'מיפוי מתקדם ורחפנים',
      desc: 'מדידות ברזולוציה גבוהה, אורתופוטו ומידול תלת-ממדי.',
      icon: <MapIcon className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-400"
    }
  ]

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">תחומי התמחות</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight">
              דיוק הנדסי <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">ללא פשרות</span>
            </h2>
          </div>
          <Link 
            href="/services" 
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
          >
            <span>לכל השירותים</span>
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
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
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="p-8 h-full flex flex-col relative z-10">
                {/* Icon Background Blob */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-auto">
                  <span>קרא עוד</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>

              <Link 
                href={`/services#${service.id}`} 
                className="absolute inset-0 z-20"
                aria-label={service.title}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-primary-dark font-bold shadow-sm hover:shadow-md transition-all"
          >
            <span>לכל השירותים</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
