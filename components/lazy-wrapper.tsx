'use client'

import { Suspense, lazy, ComponentType } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LazyWrapper({ children, fallback }: LazyWrapperProps) {
  return (
    <Suspense fallback={fallback || <DefaultFallback />}>
      {children}
    </Suspense>
  )
}

function DefaultFallback() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

// Higher-order component for lazy loading
export function withLazyLoading<T extends object>(
  Component: ComponentType<T>,
  fallback?: React.ReactNode
) {
  return function LazyComponent(props: T) {
    return (
      <LazyWrapper fallback={fallback}>
        <Component {...props} />
      </LazyWrapper>
    )
  }
}

// Lazy load heavy components
export const LazyPricingTable = lazy(() => 
  import('./pricing-table').then(module => ({ default: module.PricingTable }))
)

export const LazyFeatureGrid = lazy(() => 
  import('./feature-grid').then(module => ({ default: module.FeatureGrid }))
)

export const LazyTestimonial = lazy(() => 
  import('./testimonial').then(module => ({ default: module.Testimonial }))
)
