import { NextRequest, NextResponse } from 'next/server'

interface RateLimitOptions {
  windowMs: number
  maxRequests: number
  message?: string
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(options: RateLimitOptions) {
  const { windowMs, maxRequests, message = 'Too many requests' } = options

  return (request: NextRequest): NextResponse | null => {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    const now = Date.now()

    // Clean up old entries
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key)
      }
    }

    // Get or create rate limit entry
    let entry = rateLimitMap.get(ip)
    if (!entry || entry.resetTime < now) {
      entry = { count: 0, resetTime: now + windowMs }
      rateLimitMap.set(ip, entry)
    }

    // Check if limit exceeded
    if (entry.count >= maxRequests) {
      return NextResponse.json(
        { error: message, retryAfter: Math.ceil((entry.resetTime - now) / 1000) },
        { status: 429 }
      )
    }

    // Increment counter
    entry.count++

    return null // Allow request
  }
}

// Predefined rate limits
export const contactFormRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 requests per 15 minutes
  message: 'Too many contact form submissions. Please try again later.'
})

export const apiRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100, // 100 requests per minute
  message: 'Too many API requests. Please slow down.'
})
