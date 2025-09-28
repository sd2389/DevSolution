import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export interface PricingTier {
  name: string
  description: string
  price: string
  interval?: string
  features: string[]
  cta: {
    text: string
    href: string
  }
  popular?: boolean
}

interface PricingTableProps {
  tiers: PricingTier[]
}

export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <Card 
          key={index} 
          className={`flex flex-col h-full transition-all duration-500 hover:scale-105 hover:shadow-xl ${
            tier.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : "hover:border-primary/50"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader className="transition-all duration-300 hover:bg-muted/30 rounded-t-xl">
            <div className="flex items-center justify-between">
              <CardTitle className="transition-colors duration-300 hover:text-primary">{tier.name}</CardTitle>
              {tier.popular && (
                <Badge className="animate-bounce-in bg-primary text-primary-foreground">
                  Popular
                </Badge>
              )}
            </div>
            <CardDescription className="transition-colors duration-300">{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow transition-all duration-300">
            <div className="mb-6 transition-all duration-300 hover:scale-105">
              <span className="text-4xl font-bold transition-colors duration-300 hover:text-primary">{tier.price}</span>
              {tier.interval && (
                <span className="text-muted-foreground ml-2 transition-colors duration-300">/{tier.interval}</span>
              )}
            </div>
            <ul className="space-y-3 flex-grow">
              {tier.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="flex items-start transition-all duration-300 hover:translate-x-1 group"
                  style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                >
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-sm transition-colors duration-300 group-hover:text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto transition-all duration-300">
            <Button 
              asChild 
              className={`w-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                tier.popular ? "animate-pulse" : ""
              }`} 
              variant={tier.popular ? "default" : "outline"}
            >
              <Link href={tier.cta.href}>{tier.cta.text}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
