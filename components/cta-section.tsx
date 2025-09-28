import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <div className="bg-primary/5 rounded-2xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {primaryCTA && (
              <Button asChild size="lg">
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
