'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-[#2c3d50] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">צור קשר</h1>
          <p className="text-xl">נשמח לעמוד לשירותכם ולענות על כל שאלה</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">השאירו פרטים</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">שם מלא *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">אימייל *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">טלפון *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">נושא הפנייה</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">בחר נושא</option>
                    <option value="מדידות קרקע">מדידות קרקע</option>
                    <option value="מדידות לתכנון">מדידות לתכנון</option>
                    <option value="מדידות לרישום">מדידות לרישום</option>
                    <option value="ייעוץ מקצועי">ייעוץ מקצועי</option>
                    <option value="אחר">אחר</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">תוכן ההודעה</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors"
                >
                  שליחה
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">פרטי התקשרות</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-2xl text-blue-500">📱</div>
                    <div>
                      <h3 className="font-semibold">טלפון</h3>
                      <p className="text-gray-600">04-6576444</p>
                      <p className="text-gray-600">050-5241177</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-2xl text-blue-500">📧</div>
                    <div>
                      <h3 className="font-semibold">אימייל</h3>
                      <p className="text-gray-600">office@surveyors.co.il</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-2xl text-blue-500">📍</div>
                    <div>
                      <h3 className="font-semibold">כתובת</h3>
                      <p className="text-gray-600">רחוב הראשי, כפר כנא</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">שעות פעילות</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">ראשון - חמישי: 8:00 - 17:00</p>
                  <p className="text-gray-600">שישי: 8:00 - 13:00</p>
                  <p className="text-gray-600">שבת: סגור</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 