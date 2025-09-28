import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Feature {
  title: string
  description: string
  icon?: LucideIcon
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({ features, columns = 3, className }: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn(`grid gap-8 ${gridCols[columns]}`, className)}>
      {features.map((feature, index) => (
        <div key={index} className="relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
          {feature.icon && (
            <div className="mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:rotate-12" />
              </div>
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{feature.title}</h3>
          <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
