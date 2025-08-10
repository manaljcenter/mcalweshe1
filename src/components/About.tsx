'use client'

import { HeartIcon, CameraIcon, MapIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useContent } from '@/hooks/useContent'

const About = () => {
  const { content, loading } = useContent()

  if (loading) {
    return <div className="py-20 bg-white flex items-center justify-center">
      <div className="text-center">جاري التحميل...</div>
    </div>
  }
  const passions = [
    {
      icon: MapIcon,
      title: 'تقييم المطاعم',
      description: 'أحب زيارة المطاعم وتجربة وتقييم الاكل من جميع انحاء العالم'
    },
    {
      icon: CameraIcon,
      title: 'التصوير',
      description: 'أوثق كل لحظة جميلة في رحلاتي لمشاركتها مع العالم'
    },
    {
      icon: GlobeAltIcon,
      title: 'الثقافات',
      description: 'أستمتع بتعلم لغات جديدة والتعرف على تقاليد مختلفة'
    },
    {
      icon: HeartIcon,
      title: 'المساعدة',
      description: 'أشارك في أعمال خيرية وأساعد المجتمعات المحلية في رحلاتي'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.aboutTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.aboutDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">قصتي</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {content.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">إحصائيات رحلاتي</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{content.travelStats?.countries || '45+'}</div>
                  <div className="text-gray-600">دولة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{content.travelStats?.cities || '150+'}</div>
                  <div className="text-gray-600">مدينة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{content.travelStats?.photos || '500+'}</div>
                  <div className="text-gray-600">صورة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{content.travelStats?.years || '8'}</div>
                  <div className="text-gray-600">سنوات</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passions.map((passion, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <passion.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{passion.title}</h4>
              <p className="text-gray-600">{passion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About