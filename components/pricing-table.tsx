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
        <Card key={index} className={`flex flex-col h-full ${tier.popular ? "border-primary shadow-lg" : ""}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{tier.name}</CardTitle>
              {tier.popular && <Badge>Popular</Badge>}
            </div>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <div className="mb-6">
              <span className="text-4xl font-bold">{tier.price}</span>
              {tier.interval && (
                <span className="text-muted-foreground ml-2">/{tier.interval}</span>
              )}
            </div>
            <ul className="space-y-3 flex-grow">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
              <Link href={tier.cta.href}>{tier.cta.text}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
