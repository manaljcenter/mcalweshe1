'use client'

import { useState, useRef } from 'react'
import { PhotoIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface ImageUploadProps {
  currentImage?: string
  onImageUpload: (imageUrl: string) => void
  onImageDelete?: () => void
  label: string
  description?: string
}

export default function ImageUpload({ 
  currentImage, 
  onImageUpload, 
  onImageDelete, 
  label, 
  description 
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file
    if (!file.type.startsWith('image/')) {
      alert('يرجى اختيار ملف صورة صالح')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('حجم الملف كبير جداً. الحد الأقصى 5 ميجابايت')
      return
    }

    // Show preview
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target?.result as string)
    reader.readAsDataURL(file)

    // Upload file to Cloudinary
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/cloudinary-upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      
      if (result.success) {
        onImageUpload(result.url)
        alert('تم رفع الصورة بنجاح إلى Cloudinary!')
        console.log('Cloudinary upload result:', result)
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Cloudinary upload error:', error)
      alert('فشل في رفع الصورة. يرجى المحاولة مرة أخرى.')
      setPreview(currentImage || null)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = () => {
    if (confirm('هل أنت متأكد من حذف هذه الصورة؟')) {
      setPreview(null)
      onImageDelete?.()
    }
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
      {preview ? (
        <div className="relative">
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={preview}
              alt={label}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
            >
              <PhotoIcon className="h-4 w-4" />
              {uploading ? 'جاري الرفع...' : 'تغيير الصورة'}
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              <TrashIcon className="h-4 w-4" />
              حذف
            </button>
          </div>
        </div>
      ) : (
        <div>
          <PhotoIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">{label}</h3>
          {description && (
            <p className="text-sm text-gray-500 mb-4">{description}</p>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2 mx-auto"
          >
            <PhotoIcon className="h-5 w-5" />
            {uploading ? 'جاري الرفع...' : 'رفع صورة'}
          </button>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {uploading && (
        <div className="mt-4">
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700"></div>
              جاري رفع الصورة...
            </div>
          </div>
        </div>
      )}
    </div>
  )
}