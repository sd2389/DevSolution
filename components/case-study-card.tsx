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
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle>{study.title}</CardTitle>
        </div>
        <CardDescription>{study.client}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-1">Problem</h4>
          <p className="text-sm text-muted-foreground">{study.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-1">Result</h4>
          <p className="text-sm text-muted-foreground">{study.result}</p>
        </div>
        {study.metrics && study.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {study.metrics.map((metric, index) => (
              <Badge key={index} variant="secondary">{metric}</Badge>
            ))}
          </div>
        )}
        {study.stack && study.stack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {study.stack.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      {study.href && (
        <CardFooter>
          <Link 
            href={study.href} 
            className="text-sm font-medium text-primary hover:underline inline-flex items-center"
          >
            Read case study
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
