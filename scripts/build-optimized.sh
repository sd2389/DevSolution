#!/bin/bash

# Production build script with optimizations
echo "🚀 Building optimized production version..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Set production environment
export NODE_ENV=production

# Build with optimizations
echo "🔨 Building with optimizations..."
npm run build

# Analyze bundle size
echo "📊 Analyzing bundle size..."
npx @next/bundle-analyzer

# Generate sitemap and robots.txt
echo "🗺️ Generating sitemap..."
node scripts/generate-sitemap.js

echo "✅ Build complete! Run 'npm start' to test production build."
