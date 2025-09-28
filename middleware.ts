import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'off')
  response.headers.set('X-Download-Options', 'noopen')
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
  response.headers.set('X-DNS-Prefetch-Control', 'off')
  
  // Remove server information
  response.headers.delete('X-Powered-By')
  
  // API route security
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Add API-specific headers
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    
    // Check for suspicious patterns
    const userAgent = request.headers.get('user-agent') || ''
    const suspiciousPatterns = [
      'sqlmap',
      'nikto',
      'nmap',
      'masscan',
      'zap',
      'burp',
      'w3af',
      'acunetix',
      'nessus',
      'openvas'
    ]
    
    if (suspiciousPatterns.some(pattern => userAgent.toLowerCase().includes(pattern))) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // Block common attack patterns
  const url = request.nextUrl.pathname.toLowerCase()
  const blockedPatterns = [
    '/admin',
    '/wp-admin',
    '/wp-content',
    '/wp-includes',
    '/.env',
    '/config',
    '/backup',
    '/.git',
    '/.svn',
    '/phpmyadmin',
    '/pma',
    '/mysql',
    '/sql',
    '/database',
    '/db',
    '/api/v1/admin',
    '/api/v1/config',
    '/api/v1/debug'
  ]

  if (blockedPatterns.some(pattern => url.includes(pattern))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
