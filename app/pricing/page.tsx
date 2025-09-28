import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { PricingTable, PricingTier } from "@/components/pricing-table"
import { FAQ, FAQItem } from "@/components/faq"
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for all our solutions. Website development, software development, AI development, and JewelVision.",
}

const websitePricing: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses",
    price: "$2,499",
    features: [
      "5-page website",
      "Mobile responsive",
      "Basic SEO",
      "Contact form",
      "2 rounds of revisions",
      "2-week delivery",
    ],
    cta: { text: "Get Started", href: "/contact?service=website-starter" },
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "$4,999",
    features: [
      "10-page website",
      "Custom design",
      "Advanced SEO",
      "CMS integration",
      "Analytics setup",
      "3 rounds of revisions",
      "3-week delivery",
    ],
    cta: { text: "Get Started", href: "/contact?service=website-pro" },
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Complex requirements",
    price: "$9,999+",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Multi-language",
      "Advanced integrations",
      "Priority support",
      "Dedicated PM",
      "4-6 week delivery",
    ],
    cta: { text: "Contact Sales", href: "/contact?service=website-enterprise" },
  },
]

const softwarePricing: PricingTier[] = [
  {
    name: "MVP",
    description: "Validate your idea",
    price: "$9,999",
    features: [
      "Core features only",
      "Basic UI/UX",
      "Single platform",
      "Basic integrations",
      "4-week delivery",
      "Hosted solution",
    ],
    cta: { text: "Start Project", href: "/contact?service=software-mvp" },
  },
  {
    name: "Standard",
    description: "Full-featured application",
    price: "$24,999",
    features: [
      "Complete feature set",
      "Professional UI/UX",
      "Web + mobile ready",
      "Third-party integrations",
      "8-week delivery",
      "3 months support",
    ],
    cta: { text: "Start Project", href: "/contact?service=software-standard" },
    popular: true,
  },
  {
    name: "Custom",
    description: "Enterprise solutions",
    price: "From $49,999",
    features: [
      "Complex requirements",
      "Scalable architecture",
      "Multiple platforms",
      "Custom integrations",
      "Flexible timeline",
      "Ongoing support",
    ],
    cta: { text: "Get Quote", href: "/contact?service=software-custom" },
  },
]

const aiPricing: PricingTier[] = [
  {
    name: "AI Agent",
    description: "Chat or voice assistant",
    price: "$2,999",
    features: [
      "Single channel (chat or voice)",
      "Pre-trained on your data",
      "1,000 conversations/mo",
      "Basic analytics",
      "1-week setup",
    ],
    cta: { text: "Deploy Agent", href: "/contact?service=ai-agent" },
  },
  {
    name: "AI Suite",
    description: "Complete AI solution",
    price: "$7,999",
    features: [
      "Multi-channel support",
      "Custom training",
      "5,000 interactions/mo",
      "Advanced analytics",
      "API access",
      "2-week setup",
    ],
    cta: { text: "Get AI Suite", href: "/contact?service=ai-suite" },
    popular: true,
  },
  {
    name: "Custom AI",
    description: "Bespoke AI development",
    price: "From $19,999",
    features: [
      "Custom model development",
      "Unlimited usage",
      "On-premise option",
      "White-label ready",
      "Ongoing optimization",
    ],
    cta: { text: "Discuss Project", href: "/contact?service=ai-custom" },
  },
]

const comparisonData = [
  { feature: "Project timeline", website: "2-4 weeks", software: "4-12 weeks", ai: "1-4 weeks", jewelvision: "Instant" },
  { feature: "Starting price", website: "$2,499", software: "$9,999", ai: "$2,999", jewelvision: "$199/mo" },
  { feature: "Maintenance required", website: "Monthly", software: "Ongoing", ai: "Minimal", jewelvision: "None" },
  { feature: "Technical expertise needed", website: "Low", software: "Medium", ai: "Low", jewelvision: "None" },
  { feature: "Customization level", website: "High", software: "Very High", ai: "High", jewelvision: "Medium" },
  { feature: "Scalability", website: "High", software: "Very High", ai: "High", jewelvision: "Very High" },
  { feature: "ROI timeline", website: "2-3 months", software: "3-6 months", ai: "1-2 months", jewelvision: "Immediate" },
]

const faqs: FAQItem[] = [
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for projects over $5,000. Typically 50% upfront and 50% on completion, though we can customize based on your needs.",
  },
  {
    question: "What's included in the pricing?",
    answer: "All prices include design, development, testing, deployment, and initial training. Ongoing maintenance and support are available through separate monthly plans.",
  },
  {
    question: "Can I get a custom quote?",
    answer: "Absolutely! Every business is unique. Contact us for a custom quote tailored to your specific requirements and budget.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. Any third-party costs (hosting, domains, API services) are clearly communicated upfront and billed separately at cost.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Minor changes are covered during the support period. Larger changes are quoted separately or can be handled through our maintenance plans.",
  },
  {
    question: "Do you offer discounts for multiple services?",
    answer: "Yes! Bundle multiple services for significant savings. Our Website + AI Bundle saves you 40% compared to purchasing separately.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="Simple, Transparent Pricing"
            subtitle="Choose the perfect solution for your business. All prices include everything you need to launch successfully."
          />
        </Section>

        {/* Service Pricing Tabs */}
        <Section>
          <Tabs defaultValue="website" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="website">Website</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="jewelvision">JewelVision</TabsTrigger>
            </TabsList>
            
            <TabsContent value="website" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Website Development</h2>
                <p className="text-muted-foreground">Modern, fast, conversion-optimized websites</p>
              </div>
              <PricingTable tiers={websitePricing} />
            </TabsContent>
            
            <TabsContent value="software" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Software Development</h2>
                <p className="text-muted-foreground">Custom applications tailored to your business</p>
              </div>
              <PricingTable tiers={softwarePricing} />
            </TabsContent>
            
            <TabsContent value="ai" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">AI Development</h2>
                <p className="text-muted-foreground">Intelligent automation and AI assistants</p>
              </div>
              <PricingTable tiers={aiPricing} />
            </TabsContent>
            
            <TabsContent value="jewelvision" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">JewelVision</h2>
                <p className="text-muted-foreground">AI-powered jewelry catalog management</p>
                <Button asChild className="mt-4">
                  <Link href="/jewelvision#pricing">View JewelVision Pricing</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Section>

        {/* Bundle Promotion */}
        <Section className="bg-gradient-to-r from-primary/5 to-gold/5">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <Badge className="w-fit mx-auto mb-2">Best Value</Badge>
              <CardTitle className="text-3xl">Website + AI Agent Bundle</CardTitle>
              <CardDescription className="text-lg">
                Save 40% when you bundle website development with an AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$4,999</div>
                  <div className="text-sm text-muted-foreground">One-time setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$199/mo</div>
                  <div className="text-sm text-muted-foreground">Maintenance & hosting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2-3 weeks</div>
                  <div className="text-sm text-muted-foreground">Time to launch</div>
                </div>
              </div>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/bundle">Learn About Bundle</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Comparison Table */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the right solution for your business needs and budget
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">Website</th>
                  <th className="text-center p-4">Software</th>
                  <th className="text-center p-4">AI</th>
                  <th className="text-center p-4">JewelVision</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.website}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.software}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.ai}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.jewelvision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Code Ownership Policy */}
        <Section className="bg-muted/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Code Ownership Policy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We retain ownership of all code, intellectual property, and technical implementations. 
              Clients receive fully functional, hosted solutions with ongoing maintenance and support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">You Get</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Fully functional solution</li>
                <li>• Hosting & maintenance</li>
                <li>• Ongoing support</li>
                <li>• Regular updates</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">We Retain</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Source code ownership</li>
                <li>• Intellectual property</li>
                <li>• Technical architecture</li>
                <li>• Development methodology</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Benefits</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• No technical debt</li>
                <li>• Professional maintenance</li>
                <li>• Continuous improvements</li>
                <li>• Focus on your business</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your budget
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
