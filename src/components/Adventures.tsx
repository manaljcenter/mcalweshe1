'use client'

import { MapPinIcon } from '@heroicons/react/24/outline'
import { useContent } from '@/hooks/useContent'

const Adventures = () => {
  const { content, loading } = useContent()

  if (loading) {
    return <div className="py-20 bg-gray-50 flex items-center justify-center">
      <div className="text-center">جاري التحميل...</div>
    </div>
  }

  return (
    <section id="adventures" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">مغامراتي</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة من أجمل المغامرات والتجارب التي عشتها حول العالم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.adventures.map((adventure) => (
            <div key={adventure.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">صورة المغامرة</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-700">{adventure.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{adventure.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPinIcon className="h-4 w-4" />
                  <span className="text-sm">{adventure.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{adventure.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {adventure.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">هذه مجرد البداية... المزيد من المغامرات قادمة!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>شاركني مغامرتك القادمة</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Adventures