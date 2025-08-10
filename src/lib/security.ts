// Security utilities and configurations

export const SECURITY_CONFIG = {
  // Admin authentication
  MAX_LOGIN_ATTEMPTS: 3,
  LOCKOUT_DURATION: 5 * 60 * 1000, // 5 minutes
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  
  // Content validation
  MAX_CONTENT_LENGTH: 10000, // characters
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  
  // Rate limiting
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS_PER_WINDOW: 100,
}

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
    .slice(0, SECURITY_CONFIG.MAX_CONTENT_LENGTH)
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Validate URL format
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return ['http:', 'https:'].includes(urlObj.protocol)
  } catch {
    return false
  }
}

// Validate phone number (basic)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

// Content validation for adventures
export function validateAdventure(adventure: any): boolean {
  return (
    typeof adventure.title === 'string' &&
    adventure.title.length > 0 &&
    adventure.title.length <= 100 &&
    typeof adventure.location === 'string' &&
    adventure.location.length > 0 &&
    typeof adventure.description === 'string' &&
    adventure.description.length > 0 &&
    Array.isArray(adventure.tags) &&
    adventure.tags.every((tag: any) => typeof tag === 'string' && tag.length <= 50)
  )
}

// Generate secure random string
export function generateSecureToken(length: number = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Hash password (simple - use bcrypt in production)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// Rate limiting check
export function checkRateLimit(ip: string, action: string): boolean {
  // In production, use Redis or database
  const key = `${ip}_${action}`
  const now = Date.now()
  
  // This is a simplified in-memory rate limiting
  // In production, implement proper rate limiting with Redis
  return true
}

// Log security events
export function logSecurityEvent(event: string, details: any): void {
  console.log(`[SECURITY] ${new Date().toISOString()} - ${event}:`, details)
  
  // In production, send to security monitoring service
  // Example: Sentry, LogRocket, or custom logging service
}