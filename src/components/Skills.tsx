'use client'

import { 
  CameraIcon, 
  MapIcon, 
  LanguageIcon, 
  HeartIcon,
  TrophyIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import { useContent } from '@/hooks/useContent'

const Skills = () => {
  const { content, loading } = useContent()

  if (loading) {
    return <div className="py-20 bg-white flex items-center justify-center">
      <div className="text-center">جاري التحميل...</div>
    </div>
  }
  // Icon mapping for dynamic content
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
      mountain: TrophyIcon,
      camera: CameraIcon,
      globe: GlobeAltIcon,
      heart: HeartIcon,
      trophy: TrophyIcon,
      star: TrophyIcon,
      book: BookOpenIcon,
      certificate: BookOpenIcon,
      language: LanguageIcon,
      wrench: WrenchScrewdriverIcon,
      map: MapIcon
    }
    return iconMap[iconName] || TrophyIcon
  }

  // Default icon mapping for skill categories
  const getCategoryIcon = (title: string) => {
    if (title.includes('مغامرة')) return TrophyIcon
    if (title.includes('تصوير') || title.includes('إعلام')) return CameraIcon
    if (title.includes('لغات') || title.includes('ثقافة')) return LanguageIcon
    if (title.includes('تقنية')) return WrenchScrewdriverIcon
    return TrophyIcon
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">مهاراتي وإنجازاتي</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            المهارات التي اكتسبتها والإنجازات التي حققتها خلال رحلتي في عالم المغامرات
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {content.skillCategories?.map((category, index) => {
            const IconComponent = getCategoryIcon(category.title)
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
              
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">إنجازات بالأرقام</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.achievements?.map((achievement, index) => {
              const IconComponent = getIcon(achievement.icon)
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.count}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        {content.showCertifications && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">الشهادات والتراخيص</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.certifications?.map((certification, index) => {
                const IconComponent = getIcon(certification.icon)
                const colors = ['text-blue-600', 'text-red-600', 'text-green-600', 'text-purple-600', 'text-orange-600']
                const colorClass = colors[index % colors.length]
                
                return (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 card-hover">
                    <IconComponent className={`h-12 w-12 ${colorClass} mx-auto mb-4`} />
                    <h4 className="font-bold text-gray-900 mb-2">{certification.title}</h4>
                    <p className="text-gray-600 text-sm">{certification.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills