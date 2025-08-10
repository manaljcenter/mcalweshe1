'use client'

import Image from 'next/image'
import { MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useContent } from '@/hooks/useContent'

const Hero = () => {
  const { content, loading } = useContent()

  if (loading) {
    return <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">جاري التحميل...</div>
    </div>
  }
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-relaxed">
              مرحباً، أنا <span className="gradient-text">{content.heroName}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-loose">
              {content.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>الموقع الحالي: {content.heroLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <GlobeAltIcon className="h-5 w-5 text-green-600" />
                <span>{content.heroCountries}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#adventures"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                استكشف مغامراتي
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                تواصل معي
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {content.heroImage ? (
                <Image
                  src={content.heroImage}
                  alt={content.heroName}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center h-full">
                  <div className="text-center text-gray-500">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">صورة {content.heroName}</p>
                    <p className="text-sm">ارفع صورتك من لوحة التحكم</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2019</div>
                <div className="text-sm text-gray-600">سنوات السفر</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">20+</div>
                <div className="text-sm text-gray-600">مدينة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero