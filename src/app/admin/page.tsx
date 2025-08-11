'use client'

import { useState, useEffect } from 'react'
import {
    PhotoIcon,
    CheckIcon,
    TrashIcon,
    PlusIcon,
    EyeIcon,
    EyeSlashIcon,
    Cog6ToothIcon,
    DocumentTextIcon,
    UserIcon,
    MapIcon,
    PhoneIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import AdminAuth from '@/components/AdminAuth'
import ImageUpload from '@/components/ImageUpload'

interface ContentData {
    // Hero Section
    heroName: string
    heroDescription: string
    heroLocation: string
    heroCountries: string
    heroImage?: string

    // About Section
    aboutTitle: string
    aboutDescription: string
    aboutStory: string[]

    // Adventures
    adventures: Array<{
        id: number
        title: string
        location: string
        date: string
        description: string
        tags: string[]
    }>

    // Skills
    skillCategories: Array<{
        title: string
        skills: Array<{
            name: string
            level: number
        }>
    }>

    // Achievements
    achievements: Array<{
        title: string
        count: string
        description: string
        icon: string
    }>

    // Certifications
    certifications: Array<{
        title: string
        description: string
        icon: string
    }>
    showCertifications: boolean

    // Contact Info
    contactEmail: string
    contactPhone: string
    contactLocation: string

    // Travel Statistics
    travelStats: {
        countries: string
        cities: string
        photos: string
        years: string
    }

    // Social Links
    socialLinks: Array<{
        name: string
        url: string
        color: string
    }>

    // Site Settings
    siteTitle: string
    siteDescription: string
    primaryColor: string
    secondaryColor: string
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [content, setContent] = useState<ContentData>({
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
            },
            {
                title: 'اللغات والثقافة',
                skills: [
                    { name: 'العربية', level: 100 },
                    { name: 'الإنجليزية', level: 95 },
                    { name: 'الفرنسية', level: 78 },
                    { name: 'الإسبانية', level: 65 }
                ]
            },
            {
                title: 'المهارات التقنية',
                skills: [
                    { name: 'استخدام GPS', level: 90 },
                    { name: 'الإسعافات الأولية', level: 88 },
                    { name: 'صيانة المعدات', level: 82 },
                    { name: 'التخطيط للرحلات', level: 94 }
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
        },

        socialLinks: [
            { name: 'Instagram', url: 'https://instagram.com/mohammed_alweishi', color: 'bg-pink-500' },
            { name: 'YouTube', url: 'https://youtube.com/@mohammed_alweishi', color: 'bg-red-500' },
            { name: 'Twitter', url: 'https://twitter.com/mohammed_alweishi', color: 'bg-blue-500' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/mohammed-alweishi', color: 'bg-blue-700' }
        ],

        siteTitle: 'محمد الويشي - ملف المغامر الشخصي',
        siteDescription: 'موقع شخصي لمحمد الويشي - محب المغامرات والسفر',
        primaryColor: '#2563eb',
        secondaryColor: '#7c3aed'
    })

    const [activeTab, setActiveTab] = useState('hero')
    const [savedMessage, setSavedMessage] = useState('')


    useEffect(() => {
        // Load content from localStorage
        const savedContent = localStorage.getItem('websiteContent')
        if (savedContent) {
            try {
                const parsedContent = JSON.parse(savedContent)
                setContent(prev => ({ ...prev, ...parsedContent }))
            } catch (error) {
                console.error('Error parsing saved content:', error)
            }
        }
    }, [])

    const handleSave = () => {
        localStorage.setItem('websiteContent', JSON.stringify(content))
        setSavedMessage('تم حفظ التغييرات بنجاح!')
        setTimeout(() => setSavedMessage(''), 3000)
    }

    const handleImageUpload = (section: string, file: File) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            console.log(`Image uploaded for ${section}:`, e.target?.result)
            alert(`تم رفع الصورة بنجاح! في الإنتاج، ستُحفظ في الخادم.`)
        }
        reader.readAsDataURL(file)
    }

    const updateAdventure = (id: number, field: string, value: string | string[]) => {
        setContent(prev => ({
            ...prev,
            adventures: prev.adventures.map(adv =>
                adv.id === id ? { ...adv, [field]: value } : adv
            )
        }))
    }

    const addAdventure = () => {
        const newId = Math.max(...content.adventures.map(a => a.id)) + 1
        setContent(prev => ({
            ...prev,
            adventures: [...prev.adventures, {
                id: newId,
                title: 'مغامرة جديدة',
                location: 'الموقع',
                date: '2024',
                description: 'وصف المغامرة...',
                tags: ['مغامرة']
            }]
        }))
    }

    const removeAdventure = (id: number) => {
        setContent(prev => ({
            ...prev,
            adventures: prev.adventures.filter(adv => adv.id !== id)
        }))
    }

    const addStoryParagraph = () => {
        setContent(prev => ({
            ...prev,
            aboutStory: [...prev.aboutStory, 'فقرة جديدة...']
        }))
    }

    const removeStoryParagraph = (index: number) => {
        setContent(prev => ({
            ...prev,
            aboutStory: prev.aboutStory.filter((_, i) => i !== index)
        }))
    }

    const updateSkillCategory = (categoryIndex: number, field: string, value: string | Array<{name: string; level: number}>) => {
        setContent(prev => ({
            ...prev,
            skillCategories: prev.skillCategories.map((cat, i) =>
                i === categoryIndex ? { ...cat, [field]: value } : cat
            )
        }))
    }

    const addSkillCategory = () => {
        setContent(prev => ({
            ...prev,
            skillCategories: [...prev.skillCategories, {
                title: 'فئة مهارات جديدة',
                skills: [{ name: 'مهارة جديدة', level: 50 }]
            }]
        }))
    }

    const addSkillToCategory = (categoryIndex: number) => {
        setContent(prev => ({
            ...prev,
            skillCategories: prev.skillCategories.map((cat, i) =>
                i === categoryIndex
                    ? { ...cat, skills: [...cat.skills, { name: 'مهارة جديدة', level: 50 }] }
                    : cat
            )
        }))
    }

    const updateSocialLink = (index: number, field: string, value: string) => {
        setContent(prev => ({
            ...prev,
            socialLinks: prev.socialLinks.map((link, i) =>
                i === index ? { ...link, [field]: value } : link
            )
        }))
    }

    const addSocialLink = () => {
        setContent(prev => ({
            ...prev,
            socialLinks: [...prev.socialLinks, {
                name: 'منصة جديدة',
                url: 'https://example.com',
                color: 'bg-gray-500'
            }]
        }))
    }

    const updateAchievement = (index: number, field: string, value: string) => {
        setContent(prev => ({
            ...prev,
            achievements: prev.achievements.map((achievement, i) =>
                i === index ? { ...achievement, [field]: value } : achievement
            )
        }))
    }

    const addAchievement = () => {
        setContent(prev => ({
            ...prev,
            achievements: [...prev.achievements, {
                title: 'إنجاز جديد',
                count: '0',
                description: 'وصف الإنجاز',
                icon: 'trophy'
            }]
        }))
    }

    const removeAchievement = (index: number) => {
        setContent(prev => ({
            ...prev,
            achievements: prev.achievements.filter((_, i) => i !== index)
        }))
    }

    const updateCertification = (index: number, field: string, value: string) => {
        setContent(prev => ({
            ...prev,
            certifications: prev.certifications.map((cert, i) =>
                i === index ? { ...cert, [field]: value } : cert
            )
        }))
    }

    const addCertification = () => {
        setContent(prev => ({
            ...prev,
            certifications: [...prev.certifications, {
                title: 'شهادة جديدة',
                description: 'وصف الشهادة',
                icon: 'book'
            }]
        }))
    }

    const removeCertification = (index: number) => {
        setContent(prev => ({
            ...prev,
            certifications: prev.certifications.filter((_, i) => i !== index)
        }))
    }

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuth')
        setIsAuthenticated(false)
    }

    const tabs = [
        { id: 'hero', name: 'القسم الرئيسي', icon: UserIcon },
        { id: 'about', name: 'عني', icon: DocumentTextIcon },
        { id: 'adventures', name: 'المغامرات', icon: MapIcon },
        { id: 'skills', name: 'المهارات', icon: Cog6ToothIcon },
        { id: 'stats', name: 'إحصائيات رحلاتي', icon: DocumentTextIcon },
        { id: 'contact', name: 'التواصل', icon: PhoneIcon },
        { id: 'social', name: 'وسائل التواصل', icon: GlobeAltIcon },
        { id: 'images', name: 'الصور', icon: PhotoIcon },
        { id: 'settings', name: 'إعدادات الموقع', icon: Cog6ToothIcon }
    ]

    // Show authentication screen if not authenticated
    if (!isAuthenticated) {
        return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 pb-28 md:pb-0" dir="rtl">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم المحتوى المتقدمة</h1>
                            <p className="text-gray-600 mt-2">إدارة شاملة لجميع محتويات موقعك الشخصي</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <button
                                onClick={handleSave}
                                className="w-full sm:w-auto justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
                            >
                                <CheckIcon className="h-5 w-5" />
                                حفظ التغييرات
                            </button>
                            <a
                                href="/"
                                target="_blank"
                                className="w-full sm:w-auto justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors text-center"
                            >
                                <EyeIcon className="h-5 w-5" />
                                معاينة الموقع
                            </a>
                            <button
                                onClick={handleLogout}
                                className="w-full sm:w-auto justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 flex items-center gap-2 transition-colors"
                            >
                                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                                تسجيل الخروج
                            </button>
                        </div>
                    </div>

                    {savedMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            {savedMessage}
                        </div>
                    )}

                    {/* Enhanced Tabs */}
                    <div className="sticky top-0 z-30 -mx-6 px-6 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 mb-6">
                        <nav className="flex overflow-x-auto snap-x snap-mandatory space-x-3 space-x-reverse">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`min-h-[44px] min-w-fit py-3 px-4 border-b-2 font-medium text-sm flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <tab.icon className="h-4 w-4" />
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6">
                        {/* Hero Section */}
                        {activeTab === 'hero' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <UserIcon className="h-6 w-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">القسم الرئيسي</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                                        <input
                                            type="text"
                                            value={content.heroName}
                                            onChange={(e) => setContent(prev => ({ ...prev, heroName: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-500"
                                            placeholder="اسمك الكامل"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">الموقع الحالي</label>
                                        <input
                                            type="text"
                                            value={content.heroLocation}
                                            onChange={(e) => setContent(prev => ({ ...prev, heroLocation: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="المدينة، البلد"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الوصف الشخصي</label>
                                    <textarea
                                        value={content.heroDescription}
                                        onChange={(e) => setContent(prev => ({ ...prev, heroDescription: e.target.value }))}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="اكتب وصفاً مختصراً عن نفسك ومغامراتك"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">إحصائية الدول</label>
                                    <input
                                        type="text"
                                        value={content.heroCountries}
                                        onChange={(e) => setContent(prev => ({ ...prev, heroCountries: e.target.value }))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="مثال: 45+ دولة مُستكشفة"
                                    />
                                </div>
                            </div>
                        )}

                        {/* About Section */}
                        {activeTab === 'about' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">قسم عني</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">عنوان القسم</label>
                                        <input
                                            type="text"
                                            value={content.aboutTitle}
                                            onChange={(e) => setContent(prev => ({ ...prev, aboutTitle: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الوصف المختصر</label>
                                    <textarea
                                        value={content.aboutDescription}
                                        onChange={(e) => setContent(prev => ({ ...prev, aboutDescription: e.target.value }))}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="block text-sm font-medium text-gray-700">قصتي الشخصية</label>
                                        <button
                                            onClick={addStoryParagraph}
                                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
                                        >
                                            <PlusIcon className="h-4 w-4" />
                                            إضافة فقرة
                                        </button>
                                    </div>
                                    {content.aboutStory.map((paragraph, index) => (
                                        <div key={index} className="mb-4 relative">
                                            <textarea
                                                value={paragraph}
                                                onChange={(e) => {
                                                    const newStory = [...content.aboutStory]
                                                    newStory[index] = e.target.value
                                                    setContent(prev => ({ ...prev, aboutStory: newStory }))
                                                }}
                                                rows={4}
                                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder={`الفقرة ${index + 1}`}
                                            />
                                            {content.aboutStory.length > 1 && (
                                                <button
                                                    onClick={() => removeStoryParagraph(index)}
                                                    className="absolute top-2 left-2 text-red-600 hover:text-red-800"
                                                >
                                                    <TrashIcon className="h-5 w-5" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Adventures Section */}
                        {activeTab === 'adventures' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <MapIcon className="h-6 w-6 text-blue-600" />
                                        <h2 className="text-2xl font-bold text-gray-900">المغامرات</h2>
                                    </div>
                                    <button
                                        onClick={addAdventure}
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2"
                                    >
                                        <PlusIcon className="h-5 w-5" />
                                        إضافة مغامرة جديدة
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {content.adventures.map((adventure) => (
                                        <div key={adventure.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-lg font-semibold text-gray-900">مغامرة #{adventure.id}</h3>
                                                <button
                                                    onClick={() => removeAdventure(adventure.id)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <TrashIcon className="h-5 w-5" />
                                                </button>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">عنوان المغامرة</label>
                                                    <input
                                                        type="text"
                                                        value={adventure.title}
                                                        onChange={(e) => updateAdventure(adventure.id, 'title', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">الموقع</label>
                                                        <input
                                                            type="text"
                                                            value={adventure.location}
                                                            onChange={(e) => updateAdventure(adventure.id, 'location', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">التاريخ</label>
                                                        <input
                                                            type="text"
                                                            value={adventure.date}
                                                            onChange={(e) => updateAdventure(adventure.id, 'date', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">وصف المغامرة</label>
                                                    <textarea
                                                        value={adventure.description}
                                                        onChange={(e) => updateAdventure(adventure.id, 'description', e.target.value)}
                                                        rows={3}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">العلامات (مفصولة بفاصلة)</label>
                                                    <input
                                                        type="text"
                                                        value={adventure.tags.join(', ')}
                                                        onChange={(e) => updateAdventure(adventure.id, 'tags', e.target.value.split(', ').filter(tag => tag.trim()))}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="مغامرة, سفر, استكشاف"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Skills Section */}
                        {activeTab === 'skills' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Cog6ToothIcon className="h-6 w-6 text-blue-600" />
                                        <h2 className="text-2xl font-bold text-gray-900">المهارات</h2>
                                    </div>
                                    <button
                                        onClick={addSkillCategory}
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2"
                                    >
                                        <PlusIcon className="h-5 w-5" />
                                        إضافة فئة مهارات
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {content.skillCategories.map((category, categoryIndex) => (
                                        <div key={categoryIndex} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                                            <div className="flex justify-between items-center mb-4">
                                                <input
                                                    type="text"
                                                    value={category.title}
                                                    onChange={(e) => updateSkillCategory(categoryIndex, 'title', e.target.value)}
                                                    className="text-lg font-semibold bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
                                                />
                                                <button
                                                    onClick={() => addSkillToCategory(categoryIndex)}
                                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm"
                                                >
                                                    <PlusIcon className="h-4 w-4" />
                                                    إضافة مهارة
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <div key={skillIndex} className="bg-white p-4 rounded-lg">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <input
                                                                type="text"
                                                                value={skill.name}
                                                                onChange={(e) => {
                                                                    const newCategories = [...content.skillCategories]
                                                                    newCategories[categoryIndex].skills[skillIndex].name = e.target.value
                                                                    setContent(prev => ({ ...prev, skillCategories: newCategories }))
                                                                }}
                                                                className="font-medium bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1"
                                                            />
                                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                                        </div>
                                                        <input
                                                            type="range"
                                                            min="0"
                                                            max="100"
                                                            value={skill.level}
                                                            onChange={(e) => {
                                                                const newCategories = [...content.skillCategories]
                                                                newCategories[categoryIndex].skills[skillIndex].level = parseInt(e.target.value)
                                                                setContent(prev => ({ ...prev, skillCategories: newCategories }))
                                                            }}
                                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Achievements Section */}
                                <div className="mt-12">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">إنجازات بالأرقام</h3>
                                        <button
                                            onClick={addAchievement}
                                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
                                        >
                                            <PlusIcon className="h-4 w-4" />
                                            إضافة إنجاز
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {content.achievements.map((achievement, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h4 className="font-semibold text-gray-900">إنجاز #{index + 1}</h4>
                                                    <button
                                                        onClick={() => removeAchievement(index)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <TrashIcon className="h-4 w-4" />
                                                    </button>
                                                </div>

                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
                                                        <input
                                                            type="text"
                                                            value={achievement.title}
                                                            onChange={(e) => updateAchievement(index, 'title', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">العدد</label>
                                                        <input
                                                            type="text"
                                                            value={achievement.count}
                                                            onChange={(e) => updateAchievement(index, 'count', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                                                        <input
                                                            type="text"
                                                            value={achievement.description}
                                                            onChange={(e) => updateAchievement(index, 'description', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">الأيقونة</label>
                                                        <select
                                                            value={achievement.icon}
                                                            onChange={(e) => updateAchievement(index, 'icon', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        >
                                                            <option value="mountain">جبل</option>
                                                            <option value="camera">كاميرا</option>
                                                            <option value="globe">كرة أرضية</option>
                                                            <option value="heart">قلب</option>
                                                            <option value="trophy">كأس</option>
                                                            <option value="star">نجمة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications Section */}
                                <div className="mt-12">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-xl font-bold text-gray-900">الشهادات والتراخيص</h3>
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={content.showCertifications}
                                                    onChange={(e) => setContent(prev => ({ ...prev, showCertifications: e.target.checked }))}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-700">إظهار القسم</span>
                                            </label>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setContent(prev => ({ ...prev, showCertifications: !prev.showCertifications }))}
                                                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors ${content.showCertifications
                                                    ? 'bg-red-600 text-white hover:bg-red-700'
                                                    : 'bg-gray-600 text-white hover:bg-gray-700'
                                                    }`}
                                            >
                                                {content.showCertifications ? (
                                                    <>
                                                        <EyeSlashIcon className="h-4 w-4" />
                                                        إخفاء القسم
                                                    </>
                                                ) : (
                                                    <>
                                                        <EyeIcon className="h-4 w-4" />
                                                        إظهار القسم
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={addCertification}
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
                                            >
                                                <PlusIcon className="h-4 w-4" />
                                                إضافة شهادة
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`mb-4 p-3 rounded-lg ${content.showCertifications ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                                        <p className={`text-sm font-medium ${content.showCertifications ? 'text-green-800' : 'text-red-800'}`}>
                                            {content.showCertifications ? '✅ القسم مرئي في الموقع' : '❌ القسم مخفي من الموقع'}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {content.certifications.map((certification, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h4 className="font-semibold text-gray-900">شهادة #{index + 1}</h4>
                                                    <button
                                                        onClick={() => removeCertification(index)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <TrashIcon className="h-4 w-4" />
                                                    </button>
                                                </div>

                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
                                                        <input
                                                            type="text"
                                                            value={certification.title}
                                                            onChange={(e) => updateCertification(index, 'title', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                                                        <textarea
                                                            value={certification.description}
                                                            onChange={(e) => updateCertification(index, 'description', e.target.value)}
                                                            rows={2}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">الأيقونة</label>
                                                        <select
                                                            value={certification.icon}
                                                            onChange={(e) => updateCertification(index, 'icon', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                                        >
                                                            <option value="book">كتاب</option>
                                                            <option value="heart">قلب</option>
                                                            <option value="trophy">كأس</option>
                                                            <option value="star">نجمة</option>
                                                            <option value="certificate">شهادة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Travel Statistics Section */}
                        {activeTab === 'stats' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">إحصائيات رحلاتي</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">عدد الدول</label>
                                        <input
                                            type="text"
                                            value={content.travelStats.countries}
                                            onChange={(e) => setContent(prev => ({
                                                ...prev,
                                                travelStats: { ...prev.travelStats, countries: e.target.value }
                                            }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-500"
                                            placeholder="مثال: 45+"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">عدد المدن</label>
                                        <input
                                            type="text"
                                            value={content.travelStats.cities}
                                            onChange={(e) => setContent(prev => ({
                                                ...prev,
                                                travelStats: { ...prev.travelStats, cities: e.target.value }
                                            }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-500"
                                            placeholder="مثال: 150+"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">عدد الصور</label>
                                        <input
                                            type="text"
                                            value={content.travelStats.photos}
                                            onChange={(e) => setContent(prev => ({
                                                ...prev,
                                                travelStats: { ...prev.travelStats, photos: e.target.value }
                                            }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-500"
                                            placeholder="مثال: 500+"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">سنوات السفر</label>
                                        <input
                                            type="text"
                                            value={content.travelStats.years}
                                            onChange={(e) => setContent(prev => ({
                                                ...prev,
                                                travelStats: { ...prev.travelStats, years: e.target.value }
                                            }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white placeholder-gray-500"
                                            placeholder="مثال: 8"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">معاينة الإحصائيات</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">{content.travelStats.countries}</div>
                                            <div className="text-sm text-blue-800">دولة</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">{content.travelStats.cities}</div>
                                            <div className="text-sm text-green-800">مدينة</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-purple-600">{content.travelStats.photos}</div>
                                            <div className="text-sm text-purple-800">صورة</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-orange-600">{content.travelStats.years}</div>
                                            <div className="text-sm text-orange-800">سنوات</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Section */}
                        {activeTab === 'contact' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">معلومات التواصل</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <EnvelopeIcon className="h-4 w-4 inline ml-2" />
                                            البريد الإلكتروني
                                        </label>
                                        <input
                                            type="email"
                                            value={content.contactEmail}
                                            onChange={(e) => setContent(prev => ({ ...prev, contactEmail: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <PhoneIcon className="h-4 w-4 inline ml-2" />
                                            رقم الهاتف
                                        </label>
                                        <input
                                            type="tel"
                                            value={content.contactPhone}
                                            onChange={(e) => setContent(prev => ({ ...prev, contactPhone: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="+971 50 123 4567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <MapIcon className="h-4 w-4 inline ml-2" />
                                            الموقع
                                        </label>
                                        <input
                                            type="text"
                                            value={content.contactLocation}
                                            onChange={(e) => setContent(prev => ({ ...prev, contactLocation: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="المدينة، البلد"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Social Media Section */}
                        {activeTab === 'social' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <GlobeAltIcon className="h-6 w-6 text-blue-600" />
                                        <h2 className="text-2xl font-bold text-gray-900">وسائل التواصل الاجتماعي</h2>
                                    </div>
                                    <button
                                        onClick={addSocialLink}
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2"
                                    >
                                        <PlusIcon className="h-5 w-5" />
                                        إضافة رابط
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {content.socialLinks.map((link, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">اسم المنصة</label>
                                                    <input
                                                        type="text"
                                                        value={link.name}
                                                        onChange={(e) => updateSocialLink(index, 'name', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">الرابط</label>
                                                    <input
                                                        type="url"
                                                        value={link.url}
                                                        onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">لون الخلفية</label>
                                                    <select
                                                        value={link.color}
                                                        onChange={(e) => updateSocialLink(index, 'color', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        <option value="bg-blue-500">أزرق</option>
                                                        <option value="bg-pink-500">وردي</option>
                                                        <option value="bg-red-500">أحمر</option>
                                                        <option value="bg-green-500">أخضر</option>
                                                        <option value="bg-purple-500">بنفسجي</option>
                                                        <option value="bg-gray-500">رمادي</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Images Section */}
                        {activeTab === 'images' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <PhotoIcon className="h-6 w-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">إدارة الصور</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <ImageUpload
                                        currentImage={content.heroImage}
                                        onImageUpload={(url) => setContent(prev => ({ ...prev, heroImage: url }))}
                                        onImageDelete={() => setContent(prev => ({ ...prev, heroImage: '' }))}
                                        label="الصورة الرئيسية"
                                        description="صورتك الشخصية في القسم الرئيسي"
                                    />

                                    {content.adventures.map((adventure) => (
                                        <div key={adventure.id} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                                            <PhotoIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">{adventure.title}</h3>
                                            <p className="text-sm text-gray-500 mb-4">{adventure.location} - {adventure.date}</p>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => e.target.files?.[0] && handleImageUpload(`adventure${adventure.id}`, e.target.files[0])}
                                                className="hidden"
                                                id={`adventure-${adventure.id}-image`}
                                            />
                                            <label
                                                htmlFor={`adventure-${adventure.id}-image`}
                                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer inline-block transition-colors"
                                            >
                                                رفع صورة
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">معلومات مهمة</h3>
                                    <ul className="text-blue-800 space-y-2">
                                        <li>• أفضل أبعاد للصورة الرئيسية: 500x500 بكسل</li>
                                        <li>• أفضل أبعاد لصور المغامرات: 400x300 بكسل</li>
                                        <li>• الصيغ المدعومة: JPG, PNG, WebP</li>
                                        <li>• الحد الأقصى لحجم الصورة: 5 ميجابايت</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Site Settings */}
                        {activeTab === 'settings' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Cog6ToothIcon className="h-6 w-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">إعدادات الموقع</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الموقع</label>
                                        <input
                                            type="text"
                                            value={content.siteTitle}
                                            onChange={(e) => setContent(prev => ({ ...prev, siteTitle: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">وصف الموقع</label>
                                        <input
                                            type="text"
                                            value={content.siteDescription}
                                            onChange={(e) => setContent(prev => ({ ...prev, siteDescription: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">اللون الأساسي</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="color"
                                                value={content.primaryColor}
                                                onChange={(e) => setContent(prev => ({ ...prev, primaryColor: e.target.value }))}
                                                className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer"
                                            />
                                            <input
                                                type="text"
                                                value={content.primaryColor}
                                                onChange={(e) => setContent(prev => ({ ...prev, primaryColor: e.target.value }))}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">اللون الثانوي</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="color"
                                                value={content.secondaryColor}
                                                onChange={(e) => setContent(prev => ({ ...prev, secondaryColor: e.target.value }))}
                                                className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer"
                                            />
                                            <input
                                                type="text"
                                                value={content.secondaryColor}
                                                onChange={(e) => setContent(prev => ({ ...prev, secondaryColor: e.target.value }))}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">ملاحظة</h3>
                                    <p className="text-yellow-800">
                                        تغيير الألوان سيؤثر على مظهر الموقع. تأكد من اختبار الألوان في وضع المعاينة قبل الحفظ النهائي.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile bottom action bar */}
            {isAuthenticated && (
                <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 p-3">
                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-700"
                        >
                            حفظ التغييرات
                        </button>
                        <a
                            href="/"
                            target="_blank"
                            className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg text-base font-medium text-center hover:bg-gray-800"
                        >
                            معاينة
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}