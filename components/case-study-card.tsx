import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export interface CaseStudy {
  title: string
  client: string
  problem: string
  result: string
  metrics?: string[]
  stack?: string[]
  href?: string
}

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg leading-tight">{study.title}</CardTitle>
        </div>
        <CardDescription className="text-sm">{study.client}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div className="min-h-[60px]">
          <h4 className="text-sm font-semibold mb-1">Problem</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
        </div>
        <div className="min-h-[60px]">
          <h4 className="text-sm font-semibold mb-1">Result</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{study.result}</p>
        </div>
        {study.metrics && study.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {study.metrics.map((metric, index) => (
              <Badge key={index} variant="secondary" className="transition-all duration-200 hover:scale-105">{metric}</Badge>
            ))}
          </div>
        )}
        {study.stack && study.stack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {study.stack.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs transition-all duration-200 hover:scale-105">{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      {study.href && (
        <CardFooter className="flex-shrink-0">
          <Link 
            href={study.href} 
            className="text-sm font-medium text-primary hover:underline inline-flex items-center transition-all duration-200 hover:translate-x-1"
          >
            Read case study
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
