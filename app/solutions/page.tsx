import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { Globe, Code, Brain, Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Comprehensive digital solutions for modern businesses. Website development, software development, AI development, and JewelVision.",
}

const solutions = [
  {
    id: "website",
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built with modern frameworks",
    icon: Globe,
    features: [
      "Next.js/React with TypeScript",
      "Mobile-first responsive design",
      "CMS integration (Sanity/Strapi)",
      "SEO optimization & Core Web Vitals",
      "Analytics & conversion tracking",
      "A/B testing capabilities",
    ],
    benefits: [
      "Launch in 2-4 weeks",
      "3x faster load times",
      "50% better conversion rates",
      "Built for scale",
    ],
    pricing: "Starting at $2,499",
    cta: { text: "Get Quote", href: "/contact?service=website" },
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom software solutions tailored to your business processes and workflows",
    icon: Code,
    features: [
      "Full-stack application development",
      "API design & integration",
      "Database architecture",
      "Cloud deployment (AWS/Vercel)",
      "Real-time features",
      "Enterprise integrations",
    ],
    benefits: [
      "Scalable architecture",
      "99.9% uptime SLA",
      "Automated workflows",
      "Real-time analytics",
    ],
    pricing: "Starting at $9,999",
    cta: { text: "Discuss Project", href: "/contact?service=software" },
  },
  {
    id: "ai",
    title: "AI Development",
    description: "Intelligent automation and AI-powered features for competitive advantage",
    icon: Brain,
    features: [
      "Custom AI/ML models",
      "Voice & chat agents",
      "Computer vision systems",
      "Predictive analytics",
      "Natural language processing",
      "Workflow automation",
    ],
    benefits: [
      "70% task automation",
      "24/7 availability",
      "Human-level accuracy",
      "Continuous learning",
    ],
    pricing: "Starting at $4,999",
    cta: { text: "Explore AI", href: "/contact?service=ai" },
  },
  {
    id: "jewelvision",
    title: "JewelVision",
    description: "Proprietary AI vision system designed specifically for jewelry businesses",
    icon: Sparkles,
    features: [
      "Design similarity matching",
      "Automated catalog deduplication",
      "Variant generation",
      "Quality assessment",
      "Trend analysis",
      "Inventory optimization",
    ],
    benefits: [
      "99.9% accuracy",
      "Process 10K+ SKUs",
      "Real-time updates",
      "API integration",
    ],
    pricing: "Starting at $199/mo",
    cta: { text: "Try JewelVision", href: "/jewelvision" },
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <div className="animate-fade-in">
            <PageHeader
              title="Solutions That Scale"
              subtitle="From stunning websites to intelligent AI systems, we build technology that grows with your business"
            />
          </div>
        </Section>

        <Section>
          <div className="space-y-16 md:space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-base">Features</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 mt-1 text-primary">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-base">Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 mt-1 text-primary">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href={solution.cta.href}>
                        {solution.cta.text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="text-base md:text-lg font-semibold text-center sm:text-left">{solution.pricing}</span>
                  </div>
                </div>

                {/* Visual Card */}
                <div className="flex-1 max-w-md w-full">
                  <Card className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      solution.id === 'jewelvision' 
                        ? 'from-gold/20 to-gold/5' 
                        : 'from-primary/20 to-primary/5'
                    }`} />
                    <CardHeader className="relative p-4 md:p-6">
                      <solution.icon className="h-10 w-10 md:h-12 md:w-12 mb-3 md:mb-4 text-primary" />
                      <CardTitle className="text-xl md:text-2xl">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative p-4 md:p-6">
                      <div className="space-y-3 md:space-y-4">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4 animate-pulse" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                          <div className="h-16 md:h-20 bg-muted/50 rounded-lg" />
                          <div className="h-16 md:h-20 bg-muted/50 rounded-lg" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted/50 rounded" />
                          <div className="h-3 bg-muted/50 rounded w-3/4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Comparison Section */}
        <Section className="bg-muted/30">
          <div className="text-center mb-8 md:mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Solutions?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We combine technical excellence with industry expertise to deliver solutions that actually work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>Launch in weeks, not months</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our streamlined process and reusable components enable rapid deployment without compromising quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Enterprise Grade</CardTitle>
                <CardDescription>Built for scale and reliability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every solution follows best practices with comprehensive testing, monitoring, and security built-in.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>We're here for the long term</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From deployment to scaling, our team provides continuous support and optimization for your solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
