'use client'

import { useState, useEffect } from 'react'

interface ContentData {
  heroName: string
  heroDescription: string
  heroLocation: string
  heroCountries: string
  heroImage?: string
  aboutTitle: string
  aboutDescription: string
  aboutStory: string[]
  adventures: Array<{
    id: number
    title: string
    location: string
    date: string
    description: string
    tags: string[]
  }>
  skillCategories?: Array<{
    title: string
    skills: Array<{
      name: string
      level: number
    }>
  }>
  achievements?: Array<{
    title: string
    count: string
    description: string
    icon: string
  }>
  certifications?: Array<{
    title: string
    description: string
    icon: string
  }>
  showCertifications?: boolean
  contactEmail: string
  contactPhone: string
  contactLocation: string
  travelStats?: {
    countries: string
    cities: string
    photos: string
    years: string
  }
}

const defaultContent: ContentData = {
  heroName: 'محمد الويشي',
  heroDescription: 'مستكشف العالم ومحب للاكل والمغامرات. أسافر لأكتشف أكل أشهى وأعيش تجارب لا تُنسى. انضم إلي في رحلتي حول العالم!',
  heroLocation: 'دبي، الإمارات',
  heroCountries: '45+ دولة مُستكشفة',
  heroImage: '',
  aboutTitle: 'من أنا؟',
  aboutDescription: 'مغامر شغوف بالسفر والاستكشاف، أؤمن بأن الحياة مغامرة كبيرة يجب أن نعيشها بكل تفاصيلها',
  aboutStory: [
    'بدأت رحلتي في عالم السفر منذ أكثر من 8 سنوات، عندما قررت أن أترك وظيفتي التقليدية وأتبع شغفي في استكشاف العالم. منذ ذلك الحين، سافرت إلى أكثر من 45 دولة وعشت تجارب لا تُنسى.',
    'أؤمن بأن السفر ليس مجرد زيارة أماكن جديدة، بل هو رحلة لاكتشاف الذات والتعلم من الثقافات المختلفة. كل رحلة تعلمني شيئاً جديداً عن الحياة والناس.',
    'هدفي هو إلهام الآخرين للخروج من منطقة الراحة واستكشاف جمال هذا العالم الرائع.'
  ],
  adventures: [
    {
      id: 1,
      title: 'تسلق جبل إيفرست',
      location: 'نيبال',
      date: '2023',
      description: 'رحلة مذهلة إلى قمة العالم، تجربة غيرت حياتي وعلمتني معنى الإصرار والتحدي.',
      tags: ['تسلق', 'مغامرة', 'تحدي']
    },
    {
      id: 2,
      title: 'سفاري في السافانا',
      location: 'كينيا',
      date: '2023',
      description: 'استكشاف الحياة البرية في محمية ماساي مارا ومشاهدة الهجرة الكبرى للحيوانات.',
      tags: ['سفاري', 'حيوانات', 'طبيعة']
    },
    {
      id: 3,
      title: 'الغوص في الحاجز المرجاني',
      location: 'أستراليا',
      date: '2022',
      description: 'اكتشاف عالم تحت الماء مليء بالألوان والحياة البحرية المذهلة في الحاجز المرجاني العظيم.',
      tags: ['غوص', 'بحر', 'استكشاف']
    },
    {
      id: 4,
      title: 'رحلة عبر الصحراء',
      location: 'المغرب',
      date: '2022',
      description: 'مغامرة لا تُنسى عبر الكثبان الرملية في الصحراء الكبرى مع قبائل البدو.',
      tags: ['صحراء', 'ثقافة', 'تراث']
    },
    {
      id: 5,
      title: 'استكشاف الأمازون',
      location: 'البرازيل',
      date: '2021',
      description: 'رحلة عميقة في غابات الأمازون المطيرة لاكتشاف التنوع البيولوجي الفريد.',
      tags: ['غابة', 'طبيعة', 'بيئة']
    },
    {
      id: 6,
      title: 'الشفق القطبي',
      location: 'أيسلندا',
      date: '2021',
      description: 'مشاهدة الشفق القطبي الساحر في سماء أيسلندا، لحظات من الجمال الخالص.',
      tags: ['شفق', 'سماء', 'جمال']
    }
  ],
  skillCategories: [
    {
      title: 'مهارات المغامرة',
      skills: [
        { name: 'تسلق الجبال', level: 90 },
        { name: 'الغوص', level: 85 },
        { name: 'التخييم البري', level: 95 },
        { name: 'الملاحة', level: 88 }
      ]
    },
    {
      title: 'التصوير والإعلام',
      skills: [
        { name: 'التصوير الفوتوغرافي', level: 92 },
        { name: 'تصوير الفيديو', level: 87 },
        { name: 'المونتاج', level: 83 },
        { name: 'التصوير الجوي', level: 79 }
      ]
    }
  ],
  achievements: [
    {
      title: 'قمم مُتسلقة',
      count: '15+',
      description: 'قمة جبلية حول العالم',
      icon: 'mountain'
    },
    {
      title: 'صور موثقة',
      count: '10K+',
      description: 'صورة من رحلاتي',
      icon: 'camera'
    },
    {
      title: 'قارات مُستكشفة',
      count: '6',
      description: 'من أصل 7 قارات',
      icon: 'globe'
    },
    {
      title: 'مشاريع خيرية',
      count: '12',
      description: 'مشروع مساعدة محلية',
      icon: 'heart'
    }
  ],
  certifications: [
    {
      title: 'مرشد سياحي معتمد',
      description: 'رخصة إرشاد سياحي دولية',
      icon: 'book'
    },
    {
      title: 'الإسعافات الأولية',
      description: 'شهادة معتمدة في الإسعافات الأولية',
      icon: 'heart'
    },
    {
      title: 'تسلق الجبال',
      description: 'شهادة متقدمة في تسلق الجبال',
      icon: 'trophy'
    }
  ],
  showCertifications: true,
  contactEmail: 'mohammed@alweishi.com',
  contactPhone: '+971 50 123 4567',
  contactLocation: 'دبي، الإمارات العربية المتحدة',
  travelStats: {
    countries: '45+',
    cities: '150+',
    photos: '500+',
    years: '8'
  }
}

export function useContent() {
  const [content, setContent] = useState<ContentData>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem('websiteContent')
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent)
        setContent({ ...defaultContent, ...parsedContent })
      } catch (error) {
        console.error('Error parsing saved content:', error)
      }
    }
    setLoading(false)
  }, [])

  return { content, loading }
}