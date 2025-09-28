import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { PricingTable, PricingTier } from "@/components/pricing-table"
import { FAQ, FAQItem } from "@/components/faq"
import { FeatureGrid, Feature } from "@/components/feature-grid"
import { 
  Globe, 
  Bot, 
  Zap, 
  CheckCircle, 
  Clock,
  Shield,
  Headphones,
  FileText,
  ArrowRight,
  Sparkles,
  Package
} from "lucide-react"

export const metadata: Metadata = {
  title: "Website + AI Agent Bundle",
  description: "Complete digital transformation package. High-converting website plus industry-tuned AI agent. Launch in 2-3 weeks.",
}

const deliverables: Feature[] = [
  {
    title: "Next.js Website",
    description: "Modern, fast, SEO-optimized website built with Next.js and TypeScript",
    icon: Globe,
  },
  {
    title: "CMS-Ready Content",
    description: "Fully managed content system with Sanity or Strapi integration",
    icon: FileText,
  },
  {
    title: "Booking System",
    description: "Integrated appointment booking with calendar sync and reminders",
    icon: Clock,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics with conversion tracking and user insights",
    icon: Zap,
  },
  {
    title: "AI Voice Agent",
    description: "24/7 voice assistant handling calls and inquiries professionally",
    icon: Headphones,
  },
  {
    title: "AI Chat Agent",
    description: "Intelligent chat bot for instant customer support and lead capture",
    icon: Bot,
  },
  {
    title: "SOP Documentation",
    description: "Complete standard operating procedures for managing your digital assets",
    icon: FileText,
  },
  {
    title: "Training & Support",
    description: "Comprehensive training and 30-day post-launch support included",
    icon: Shield,
  },
]

const timeline = [
  {
    phase: "Week 1: Discovery & Design",
    activities: [
      "Requirements gathering session",
      "Brand and design direction",
      "Content audit and planning",
      "AI agent personality design",
    ],
  },
  {
    phase: "Week 2: Development",
    activities: [
      "Website development",
      "CMS setup and configuration",
      "AI agent training",
      "Integration setup",
    ],
  },
  {
    phase: "Week 3: Launch & Optimize",
    activities: [
      "Testing and refinement",
      "Launch preparation",
      "Go-live deployment",
      "Post-launch optimization",
    ],
  },
]

const bundleTiers: PricingTier[] = [
  {
    name: "Launch",
    description: "Essential package for small businesses",
    price: "$2,499",
    features: [
      "5-page Next.js website",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "AI chat agent (1,000 conversations/mo)",
      "Basic analytics setup",
      "14-day post-launch support",
      "1 round of revisions",
    ],
    cta: { text: "Get Started", href: "/contact?bundle=launch" },
  },
  {
    name: "Pro",
    description: "Complete solution for growing businesses",
    price: "$4,999",
    features: [
      "10-page Next.js website",
      "Custom design system",
      "Advanced SEO & Core Web Vitals",
      "CMS integration (Sanity/Strapi)",
      "AI chat + voice agent (5,000 interactions/mo)",
      "Booking system integration",
      "Analytics dashboard",
      "SOP documentation",
      "30-day post-launch support",
      "3 rounds of revisions",
    ],
    cta: { text: "Get Started", href: "/contact?bundle=pro" },
    popular: true,
  },
  {
    name: "Elite",
    description: "Enterprise-grade digital transformation",
    price: "Custom",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Multi-language support",
      "Advanced integrations",
      "Unlimited AI interactions",
      "Custom AI training",
      "Priority support SLA",
      "Quarterly optimization",
      "Dedicated account manager",
      "White-label options",
    ],
    cta: { text: "Contact Sales", href: "/contact?bundle=elite" },
  },
]

const monthlyPlans = [
  {
    name: "Launch",
    price: "$99/mo",
    includes: ["Hosting", "Maintenance", "AI agent usage", "Email support"],
  },
  {
    name: "Pro",
    price: "$199/mo",
    includes: ["Everything in Launch", "Priority support", "Monthly optimization", "Advanced analytics"],
  },
  {
    name: "Elite",
    price: "Custom",
    includes: ["Everything in Pro", "SLA guarantee", "Dedicated support", "Quarterly reviews"],
  },
]

const faqs: FAQItem[] = [
  {
    question: "What's included in the bundle?",
    answer: "The bundle includes a complete website built with Next.js, an AI agent (chat and/or voice depending on tier), CMS integration, analytics setup, and comprehensive documentation. Everything you need for a modern digital presence.",
  },
  {
    question: "How long does it take to launch?",
    answer: "We guarantee launch within 2-3 weeks from project kickoff. Week 1 is discovery and design, Week 2 is development, and Week 3 is testing and launch. Most projects launch on schedule.",
  },
  {
    question: "Can I customize the AI agent?",
    answer: "Yes! The AI agent is fully customizable to match your brand voice and business needs. We'll train it on your specific products, services, and FAQs to ensure accurate responses.",
  },
  {
    question: "What happens after launch?",
    answer: "All packages include post-launch support (14-30 days depending on tier). After that, monthly maintenance plans ensure your site stays updated, secure, and optimized.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Each package includes revision rounds during development. Post-launch changes can be handled through our maintenance plans or quoted separately for larger updates.",
  },
]

export default function BundlePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="relative">
            <PageHeader
              title="Website + AI Agent Bundle"
              subtitle="The complete digital transformation package. Launch a high-converting website with an intelligent AI assistant in just 2-3 weeks."
            >
              <Badge variant="default" className="mb-4">
                <Package className="h-4 w-4 mr-1" />
                Save 40% with Bundle
              </Badge>
            </PageHeader>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button asChild size="lg">
                <Link href="/contact?product=bundle">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#pricing">View Packages</Link>
              </Button>
            </div>
          </div>
        </Section>

        {/* Value Proposition */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Two Powerful Solutions, One Unbeatable Price
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Professional Website</p>
                    <p className="text-sm text-muted-foreground">
                      Modern, fast, and conversion-optimized site built with Next.js
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">AI Assistant</p>
                    <p className="text-sm text-muted-foreground">
                      24/7 intelligent agent handling customer inquiries via chat and voice
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Faster Launch</p>
                    <p className="text-sm text-muted-foreground">
                      Integrated development means launching both in just 2-3 weeks
                    </p>
                  </div>
                </div>
              </div>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">If purchased separately:</span>
                    <span className="line-through text-muted-foreground">$7,498</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Bundle price:</span>
                    <span className="text-2xl font-bold text-primary">$4,999</span>
                  </div>
                  <Badge className="mt-3 w-full justify-center">You save $2,499 (33%)</Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">2-3</div>
                  <div className="text-sm text-muted-foreground">Weeks to Launch</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Availability</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">Bundle Savings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Hosted Solution</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Deliverables */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete digital transformation package with everything needed to compete online
            </p>
          </div>
          <FeatureGrid features={deliverables} columns={4} />
        </Section>

        {/* Timeline */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Launch in 3 Weeks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process gets you live fast without compromising quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing" className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One-time setup fee plus affordable monthly maintenance
            </p>
          </div>
          
          <PricingTable tiers={bundleTiers} />
          
          {/* Monthly Plans */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8">
              Monthly Maintenance & Hosting Plans
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {monthlyPlans.map((plan, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-2xl font-bold">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Success Stories */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bundle Success Stories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Jewelry Retailer</Badge>
                <CardTitle>Fine Gems Boutique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "The website and AI agent combo transformed our business. We're now capturing leads 24/7 and our conversion rate has tripled."
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="font-semibold text-primary">3x conversion</span>
                  <span className="font-semibold text-primary">24/7 coverage</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Service Business</Badge>
                <CardTitle>Elite Auto Detailing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "The AI agent books appointments while we sleep. Our new website looks amazing and we're booked solid for weeks."
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="font-semibold text-primary">85% automated</span>
                  <span className="font-semibold text-primary">2x bookings</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">E-commerce</Badge>
                <CardTitle>Artisan Crafts Co.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  "Launching both website and AI support together was genius. Customers love the instant responses and our team loves the efficiency."
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="font-semibold text-primary">50% less tickets</span>
                  <span className="font-semibold text-primary">5-star rating</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-12 pb-12 text-center">
              <Badge className="mb-4">Limited Time Offer</Badge>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have launched successfully with our bundle. 
                Get your website and AI assistant live in just 2-3 weeks.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact?product=bundle">
                    Get Your Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact?action=consultation">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No commitment required • Free consultation • Response within 24 hours
              </p>
            </CardContent>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  )
}
