import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16 lg:py-20 transition-all duration-300", className)}>
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
