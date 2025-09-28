import { LucideIcon } from "lucide-react"

export interface Step {
  title: string
  description: string
  icon?: LucideIcon
}

interface StepsProps {
  steps: Step[]
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden md:block" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            {/* Step number or icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {step.icon ? (
                <step.icon className="h-6 w-6" />
              ) : (
                <span className="text-lg font-semibold">{index + 1}</span>
              )}
            </div>
            
            {/* Content */}
            <div className="ml-6">
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
