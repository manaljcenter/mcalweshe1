'use client'

import { useContent } from '@/hooks/useContent'

export default function StructuredData() {
  const { content } = useContent()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": content.heroName,
    "description": content.heroDescription,
    "url": "https://mohammed-alweishi.com",
    "image": "https://mohammed-alweishi.com/hero-image.jpg",
    "sameAs": content.socialLinks?.map(link => link.url) || [],
    "jobTitle": "مستكشف ومغامر",
    "worksFor": {
      "@type": "Organization",
      "name": "مستقل"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": content.heroLocation?.split('،')[0] || "دبي",
      "addressCountry": content.heroLocation?.split('،')[1]?.trim() || "الإمارات العربية المتحدة"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": content.contactPhone,
      "email": content.contactEmail,
      "contactType": "personal"
    },
    "knowsAbout": [
      "السفر والسياحة",
      "المغامرات",
      "التصوير",
      "الاستكشاف",
      "الثقافات المختلفة"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "مستكشف ومغامر",
      "description": "متخصص في السفر والمغامرات حول العالم"
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "محمد الويشي - ملف المغامر الشخصي",
    "description": content.aboutDescription,
    "url": "https://mohammed-alweishi.com",
    "author": {
      "@type": "Person",
      "name": content.heroName
    },
    "inLanguage": "ar-AE",
    "copyrightYear": new Date().getFullYear(),
    "genre": ["سفر", "مغامرات", "استكشاف"],
    "keywords": "محمد الويشي, مغامرات, سفر, استكشاف, رحلات, مدونة سفر"
  }

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "مدونة محمد الويشي للمغامرات",
    "description": "مدونة شخصية تحكي قصص المغامرات والسفر حول العالم",
    "url": "https://mohammed-alweishi.com/#adventures",
    "author": {
      "@type": "Person",
      "name": content.heroName
    },
    "inLanguage": "ar-AE",
    "blogPost": content.adventures?.map(adventure => ({
      "@type": "BlogPosting",
      "headline": adventure.title,
      "description": adventure.description,
      "datePublished": `${adventure.date}-01-01`,
      "author": {
        "@type": "Person",
        "name": content.heroName
      },
      "locationCreated": {
        "@type": "Place",
        "name": adventure.location
      },
      "keywords": adventure.tags?.join(', ')
    })) || []
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData)
        }}
      />
    </>
  )
}