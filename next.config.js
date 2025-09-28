/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable turbopack for faster builds
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimize bundle
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  
  // Enable compression
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // CORS configuration for development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },

  // Allowed development origins
  allowedDevOrigins: ['192.168.12.123', 'localhost'],

        // Headers for better caching and security
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                // Security Headers
                {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
                },
                {
                  key: 'X-Frame-Options',
                  value: 'DENY',
                },
                {
                  key: 'X-XSS-Protection',
                  value: '1; mode=block',
                },
                {
                  key: 'Referrer-Policy',
                  value: 'strict-origin-when-cross-origin',
                },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                },
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=31536000; includeSubDomains; preload',
                },
                {
                  key: 'Content-Security-Policy',
                  value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
                },
              ],
            },
            {
              source: '/static/(.*)',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=31536000, immutable',
                },
              ],
            },
            {
              source: '/api/(.*)',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'no-store, no-cache, must-revalidate',
                },
                {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
                },
              ],
            },
          ];
        },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['app', 'components', 'lib'],
  },
}

module.exports = nextConfig
