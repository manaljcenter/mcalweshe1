'use client'

import { useState, useEffect } from 'react'
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { logSecurityEvent } from '@/lib/security'

interface AdminAuthProps {
  onAuthenticated: () => void
}

export default function AdminAuth({ onAuthenticated }: AdminAuthProps) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)
  const [blockTimeLeft, setBlockTimeLeft] = useState(0)

  // Simple password - in production, use proper authentication
  const ADMIN_PASSWORD = 'admin2024!'
  const MAX_ATTEMPTS = 3
  const BLOCK_DURATION = 300000 // 5 minutes

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = sessionStorage.getItem('adminAuth')
    if (isAuth === 'true') {
      onAuthenticated()
    }

    // Check if user is blocked
    const blockData = localStorage.getItem('adminBlock')
    if (blockData) {
      const { timestamp, attempts: savedAttempts } = JSON.parse(blockData)
      const timePassed = Date.now() - timestamp
      
      if (timePassed < BLOCK_DURATION && savedAttempts >= MAX_ATTEMPTS) {
        setIsBlocked(true)
        setBlockTimeLeft(Math.ceil((BLOCK_DURATION - timePassed) / 1000))
        
        const interval = setInterval(() => {
          const newTimePassed = Date.now() - timestamp
          const newTimeLeft = Math.ceil((BLOCK_DURATION - newTimePassed) / 1000)
          
          if (newTimeLeft <= 0) {
            setIsBlocked(false)
            setBlockTimeLeft(0)
            localStorage.removeItem('adminBlock')
            setAttempts(0)
            clearInterval(interval)
          } else {
            setBlockTimeLeft(newTimeLeft)
          }
        }, 1000)
        
        return () => clearInterval(interval)
      } else if (timePassed >= BLOCK_DURATION) {
        localStorage.removeItem('adminBlock')
        setAttempts(0)
      } else {
        setAttempts(savedAttempts)
      }
    }
  }, [onAuthenticated])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isBlocked) {
      setError(`تم حظر الوصول. المحاولة مرة أخرى خلال ${Math.floor(blockTimeLeft / 60)}:${(blockTimeLeft % 60).toString().padStart(2, '0')}`)
      return
    }

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuth', 'true')
      localStorage.removeItem('adminBlock')
      logSecurityEvent('ADMIN_LOGIN_SUCCESS', { timestamp: Date.now() })
      onAuthenticated()
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setError(`كلمة مرور خاطئة. المحاولات المتبقية: ${MAX_ATTEMPTS - newAttempts}`)
      
      logSecurityEvent('ADMIN_LOGIN_FAILED', { 
        attempts: newAttempts, 
        timestamp: Date.now() 
      })
      
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsBlocked(true)
        setBlockTimeLeft(BLOCK_DURATION / 1000)
        localStorage.setItem('adminBlock', JSON.stringify({
          timestamp: Date.now(),
          attempts: newAttempts
        }))
        setError('تم حظر الوصول لمدة 5 دقائق بسبب المحاولات المتكررة')
        logSecurityEvent('ADMIN_ACCOUNT_BLOCKED', { 
          duration: BLOCK_DURATION,
          timestamp: Date.now() 
        })
      }
      
      setPassword('')
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LockClosedIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">دخول لوحة التحكم</h1>
          <p className="text-gray-600 mt-2">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isBlocked}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="أدخل كلمة المرور"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {isBlocked && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg">
              <p className="font-medium">تم حظر الوصول مؤقتاً</p>
              <p className="text-sm mt-1">الوقت المتبقي: {formatTime(blockTimeLeft)}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isBlocked}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isBlocked ? 'محظور مؤقتاً' : 'دخول'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            كلمة المرور الافتراضية: <code className="bg-gray-100 px-2 py-1 rounded">admin2024!</code>
          </p>
        </div>
      </div>
    </div>
  )
}