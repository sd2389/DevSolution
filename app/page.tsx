import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { FeatureGrid, Feature } from "@/components/feature-grid"
import { CaseStudyCard, CaseStudy } from "@/components/case-study-card"
import { CTASection } from "@/components/cta-section"
import { Typewriter } from "@/components/typewriter"
import { 
  Sparkles, 
  Globe, 
  Zap, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI for Jewelry and SMBs - DevSolutions",
  description: "Launch AI-powered solutions in days, not months. Specializing in jewelry industry with JewelVision and comprehensive business solutions.",
}

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DevSolutions",
  "url": "https://devsolutions.com",
  "logo": "https://devsolutions.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales",
    "email": "hello@devsolutions.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/devsolutions",
    "https://linkedin.com/company/devsolutions"
  ]
}

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "JewelVision",
  "description": "AI-powered jewelry catalog management system",
  "brand": {
    "@type": "Brand",
    "name": "DevSolutions"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "199",
    "highPrice": "599",
    "offerCount": "3"
  }
}

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Website + AI Agent Bundle",
  "provider": {
    "@type": "Organization",
    "name": "DevSolutions"
  },
  "description": "Complete digital transformation package with website and AI assistant",
  "offers": {
    "@type": "Offer",
    "price": "4999",
    "priceCurrency": "USD"
  }
}

const outcomes: Feature[] = [
  {
    title: "More Leads",
    description: "Convert 3x more visitors with AI-powered engagement and optimized user experiences",
    icon: TrendingUp,
  },
  {
    title: "Less Operations Time",
    description: "Automate 70% of repetitive tasks with intelligent workflows and AI assistants",
    icon: Clock,
  },
  {
    title: "Catalog Accuracy",
    description: "99.9% accuracy in product matching and inventory management with JewelVision",
    icon: CheckCircle,
  },
  {
    title: "24/7 Responses",
    description: "Never miss a customer inquiry with AI agents handling chat and voice interactions",
    icon: Zap,
  },
]

const caseStudies: CaseStudy[] = [
  {
    title: "Diamond Retailer Digital Transformation",
    client: "Premium Jewels Inc.",
    problem: "Manual inventory management and customer inquiries overwhelming staff",
    result: "80% reduction in response time, 150% increase in online sales",
    metrics: ["80% faster", "150% growth", "24/7 support"],
    stack: ["Next.js", "JewelVision", "AI Agent"],
  },
  {
    title: "B2B Jewelry Platform Launch",
    client: "GemTrade Network",
    problem: "No digital presence for wholesale jewelry trading",
    result: "Connected 500+ dealers in 3 months with automated matching",
    metrics: ["500+ users", "3 months", "$2M GMV"],
    stack: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Custom Design Studio Portal",
    client: "Artisan Jewelry Co.",
    problem: "Complex custom order process losing potential customers",
    result: "Streamlined design-to-order workflow increased conversions by 200%",
    metrics: ["200% conversion", "5 days faster", "Zero errors"],
    stack: ["Next.js", "3D Viewer", "AI Design"],
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="pt-8 pb-0">
          <div className="animate-fade-in">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <Typewriter 
                  texts={[
                    "Launch in days, not months.\n (We're not kidding.)",
                    "Deploy in hours, not weeks.\n Seriously.",
                    "Scale fast, grow faster.\n No cap.",
                    "Smart solutions, simple setup. \n It's that easy.",
                    "Enterprise-grade, startup speed.\n Best of both worlds.",
                    "Built for speed, designed for scale.\n Period.",
                    "AI that actually works.\n No fluff, just results.",
                    "From idea to launch in days.\n We dare you to find faster.",
                    "Enterprise power, startup agility.\n You're welcome."
                  ]}
                  className="text-foreground"
                  typingSpeed={50}
                  deletingSpeed={25}
                  pauseDuration={2000}
                />
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Stop drowning in spreadsheets and manual processes. Automate everything, boost sales, and scale like a boss. Enterprise power without the enterprise BS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="transition-all duration-300 hover:scale-105">
                  <Link href="/contact">Book Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Feature Cards */}
        <Section>
          <div className="grid gap-8 md:grid-cols-2">
            {/* JewelVision Card */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full group animate-slide-in-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="h-6 w-6 text-gold" />
                  <Badge variant="default" className="bg-gold text-gold-foreground">Flagship</Badge>
                </div>
                <CardTitle className="text-2xl">JewelVision</CardTitle>
                <CardDescription className="text-base">
                  Identify designs, dedupe catalogs, auto-generate variants with our proprietary AI vision system
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    99.9% accuracy in design matching
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Process 10,000+ SKUs in minutes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Auto-generate product variants
                  </li>
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/jewelvision">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bundle Card */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full group animate-slide-in-right">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="h-6 w-6 text-primary" />
                  <Badge>Best Value</Badge>
                </div>
                <CardTitle className="text-2xl">Website + AI Agent Bundle</CardTitle>
                <CardDescription className="text-base">
                  High-converting site + industry-tuned AI agent for complete digital transformation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Custom Next.js website with CMS
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    AI voice & chat agent included
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Launch in 2-3 weeks guaranteed
                  </li>
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/bundle">
                    View Bundle
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Outcomes Section */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Measurable Business Outcomes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our solutions deliver immediate ROI with proven results across the jewelry industry
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <FeatureGrid features={outcomes} columns={4} />
          </div>
        </Section>

        {/* Case Studies */}
        <Section>
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've transformed jewelry businesses with AI-powered solutions
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {caseStudies.map((study, index) => (
              <div key={index} className="animate-scale-in flex" style={{ animationDelay: `${index * 0.2}s` }}>
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </Section>

        {/* Statistics */}
        <Section className="bg-primary/5 rounded-2xl">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-2">Projects Delivered</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground mt-2">Uptime Guaranteed</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-2">Support Available</div>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section>
          <div className="animate-fade-in">
            <CTASection
              title="Ready to Transform Your Business?"
              description="Join 500+ jewelry businesses already using our AI-powered solutions to grow faster and serve customers better."
              primaryCTA={{ text: "Start Free Trial", href: "/contact" }}
              secondaryCTA={{ text: "Book a Demo", href: "/contact#demo" }}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}