import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export interface TestimonialProps {
  quote: string
  author: string
  role: string
  company?: string
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-gold/20 mb-4" />
        <blockquote className="text-lg italic mb-6">
          "{quote}"
        </blockquote>
        <div className="flex items-center">
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role}
              {company && ` at ${company}`}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
