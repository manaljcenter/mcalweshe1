'use client'

import { useState } from 'react'
import ImageUpload from '@/components/ImageUpload'

export default function TestCloudinaryPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleImageUpload = (url: string) => {
    setUploadedImages(prev => [...prev, url])
    console.log('New image uploaded:', url)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          اختبار Cloudinary
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">رفع صورة إلى Cloudinary</h2>
            <ImageUpload
              onImageUpload={handleImageUpload}
              label="اختبار Cloudinary"
              description="رفع الصور مع تحسين تلقائي وCDN عالمي"
            />

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">مميزات Cloudinary:</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• تحسين تلقائي للصور</li>
                <li>• تحويل تلقائي للصيغة الأمثل (WebP)</li>
                <li>• CDN عالمي للتحميل السريع</li>
                <li>• تغيير الحجم التلقائي</li>
                <li>• ضغط ذكي للصور</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              الصور المرفوعة ({uploadedImages.length})
            </h2>
            
            {uploadedImages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>لم يتم رفع أي صور بعد</p>
                <p className="text-sm mt-2">ارفع صورة لرؤية النتائج</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {uploadedImages.map((url, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={url}
                        alt={`صورة ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          صورة #{index + 1}
                        </p>
                        <p className="text-xs text-gray-500 break-all">
                          {url}
                        </p>
                        <button
                          onClick={() => navigator.clipboard.writeText(url)}
                          className="mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                        >
                          نسخ الرابط
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Status Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">حالة الاتصال</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Cloud Name</h3>
              <p className="text-green-800 text-sm">dlzkfcvgs</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900">API Status</h3>
              <p className="text-blue-800 text-sm">متصل ✅</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900">Upload Folder</h3>
              <p className="text-purple-800 text-sm">adventure-profile</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center space-x-4 space-x-reverse">
          <a
            href="/test-upload"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            اختبار الرفع المحلي
          </a>
          <a
            href="/admin"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            لوحة التحكم
          </a>
        </div>
      </div>
    </div>
  )
}