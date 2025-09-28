import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeader({ title, subtitle, children, className }: PageHeaderProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children && <div className="flex flex-wrap gap-4 justify-center mt-8">{children}</div>}
    </div>
  )
}
