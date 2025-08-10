'use client'

import { useState } from 'react'
import ImageUpload from '@/components/ImageUpload'

export default function TestUploadPage() {
  const [uploadedImage, setUploadedImage] = useState<string>('')

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          اختبار رفع الصور
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">رفع صورة جديدة</h2>
            <ImageUpload
              currentImage={uploadedImage}
              onImageUpload={(url) => {
                setUploadedImage(url)
                console.log('Image uploaded:', url)
              }}
              onImageDelete={() => {
                setUploadedImage('')
                console.log('Image deleted')
              }}
              label="صورة اختبار"
              description="اختر صورة لاختبار وظيفة الرفع"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">معلومات الاختبار</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  رابط الصورة المرفوعة:
                </label>
                <input
                  type="text"
                  value={uploadedImage}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
                  placeholder="سيظهر الرابط هنا بعد رفع الصورة"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">تعليمات الاختبار:</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• اختر صورة بحجم أقل من 5 ميجابايت</li>
                  <li>• الصيغ المدعومة: JPG, PNG, WebP, GIF</li>
                  <li>• ستُحفظ الصورة في مجلد /uploads</li>
                  <li>• يمكنك حذف الصورة بعد الرفع</li>
                </ul>
              </div>

              {uploadedImage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">✅ تم رفع الصورة بنجاح!</h3>
                  <p className="text-green-800 text-sm">
                    يمكنك الآن استخدام هذا الرابط في موقعك
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/admin"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            العودة إلى لوحة التحكم
          </a>
        </div>
      </div>
    </div>
  )
}