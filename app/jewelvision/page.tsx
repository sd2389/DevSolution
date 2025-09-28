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
import { Steps, Step } from "@/components/steps"
import { FeatureGrid, Feature } from "@/components/feature-grid"
import { 
  Sparkles, 
  Search, 
  Database, 
  Zap, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Cloud,
  BarChart,
  Image,
  Layers,
  RefreshCw
} from "lucide-react"

export const metadata: Metadata = {
  title: "JewelVision - AI-Powered Jewelry Catalog Management",
  description: "Identify designs, dedupe catalogs, and auto-generate variants with 99.9% accuracy. The AI vision system built for jewelry businesses.",
}

const features: Feature[] = [
  {
    title: "Image Matching",
    description: "Find similar designs across your catalog instantly with AI-powered visual search",
    icon: Search,
  },
  {
    title: "Similarity Scoring",
    description: "Get precise similarity percentages between designs to identify duplicates and variants",
    icon: BarChart,
  },
  {
    title: "Bulk S3 Ingestion",
    description: "Process thousands of images directly from your S3 bucket with automatic indexing",
    icon: Cloud,
  },
  {
    title: "Smart Tagging",
    description: "Automatically tag products with style, metal type, stone details, and categories",
    icon: Layers,
  },
  {
    title: "RESTful API",
    description: "Integrate JewelVision into your existing systems with our comprehensive API",
    icon: Zap,
  },
  {
    title: "Audit Logs",
    description: "Complete traceability with detailed logs of all operations and changes",
    icon: Shield,
  },
]

const workflowSteps: Step[] = [
  {
    title: "Connect Your Catalog",
    description: "Link your S3 bucket or upload images directly. We support JPEG, PNG, and HEIF formats.",
    icon: Database,
  },
  {
    title: "Auto-Index & Process",
    description: "Our AI automatically indexes your entire catalog, extracting features and generating embeddings.",
    icon: RefreshCw,
  },
  {
    title: "Search & Generate",
    description: "Find similar designs, identify duplicates, and auto-generate product variants with AI.",
    icon: Search,
  },
  {
    title: "Review & Refine",
    description: "Review AI suggestions, make adjustments, and approve changes with confidence.",
    icon: CheckCircle,
  },
  {
    title: "Export & Integrate",
    description: "Export cleaned catalog data or integrate via API with your e-commerce platform.",
    icon: TrendingUp,
  },
]

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small jewelry stores",
    price: "$199",
    interval: "month",
    features: [
      "Up to 5,000 products",
      "Image matching & similarity",
      "Basic tagging",
      "API access (1,000 calls/month)",
      "Email support",
      "Monthly catalog refresh",
    ],
    cta: { text: "Start Free Trial", href: "/contact?plan=starter" },
  },
  {
    name: "Growth",
    description: "For growing jewelry businesses",
    price: "$599",
    interval: "month",
    features: [
      "Up to 50,000 products",
      "Advanced AI features",
      "Custom tagging rules",
      "API access (10,000 calls/month)",
      "Priority support",
      "Daily catalog refresh",
      "Variant generation",
      "Bulk operations",
    ],
    cta: { text: "Start Free Trial", href: "/contact?plan=growth" },
    popular: true,
  },
  {
    name: "Scale",
    description: "For enterprise jewelry operations",
    price: "Custom",
    features: [
      "Unlimited products",
      "Custom AI model training",
      "White-label options",
      "Unlimited API calls",
      "Dedicated support",
      "Real-time processing",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    cta: { text: "Contact Sales", href: "/contact?plan=scale" },
  },
]

const faqs: FAQItem[] = [
  {
    question: "How accurate is JewelVision?",
    answer: "JewelVision achieves 99.9% accuracy in design matching and duplicate detection. Our AI model is specifically trained on millions of jewelry images and continuously improves with usage.",
  },
  {
    question: "Can JewelVision integrate with my existing e-commerce platform?",
    answer: "Yes! JewelVision provides a comprehensive REST API that integrates with any platform. We also offer pre-built integrations for Shopify, WooCommerce, and Magento.",
  },
  {
    question: "How long does it take to process my catalog?",
    answer: "Initial processing typically takes 1-2 hours for 10,000 products. After that, new products are processed in real-time, and updates happen instantly.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, store data in secure AWS facilities, and are SOC 2 compliant. Your catalog data is never shared or used to train models for other customers.",
  },
  {
    question: "Can I try JewelVision on my own images?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. Upload up to 1,000 products and see the results for yourself.",
  },
  {
    question: "What image formats are supported?",
    answer: "JewelVision supports JPEG, PNG, WebP, and HEIF formats. Images should be at least 500x500 pixels for optimal results.",
  },
]

export default function JewelVisionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
          <div className="relative">
            <PageHeader
              title="JewelVision"
              subtitle="The AI vision system that understands jewelry. Identify designs, dedupe catalogs, and auto-generate variants with 99.9% accuracy."
            >
              <Button asChild size="lg">
                <Link href="/contact?product=jewelvision">Try on Your Images</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </PageHeader>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-gold">99.9%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-gold">10K+</div>
                  <div className="text-sm text-muted-foreground">SKUs/Hour</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-gold">&lt; 100ms</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-gold">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Jewelry Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage, organize, and optimize your jewelry catalog with AI
            </p>
          </div>
          <FeatureGrid features={features} columns={3} />
        </Section>

        {/* Workflow */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How JewelVision Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From catalog chaos to organized excellence in 5 simple steps
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Steps steps={workflowSteps} />
          </div>
        </Section>

        {/* Use Cases */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Every Jewelry Business</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Image className="h-8 w-8 text-gold mb-2" />
                <CardTitle>Retailers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage inventory across multiple suppliers, identify duplicates, and ensure consistent product presentation.
                </p>
                <ul className="space-y-1">
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Multi-supplier catalog merge
                  </li>
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Automatic duplicate removal
                  </li>
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Consistent tagging
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-gold mb-2" />
                <CardTitle>Wholesalers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Process large catalogs efficiently, generate variants automatically, and provide better search for buyers.
                </p>
                <ul className="space-y-1">
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Bulk catalog processing
                  </li>
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Auto-variant generation
                  </li>
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    B2B portal integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-8 w-8 text-gold mb-2" />
                <CardTitle>Manufacturers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track design variations, prevent counterfeits, and analyze design trends across your product lines.
                </p>
                <ul className="space-y-1">
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Design similarity tracking
                  </li>
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Counterfeit detection
                  </li>
                  <li className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                    Trend analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing" className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>
          <PricingTable tiers={pricingTiers} />
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
          <Card className="bg-gradient-to-r from-gold/10 to-gold/5 border-gold/20">
            <CardContent className="pt-12 pb-12 text-center">
              <Sparkles className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">See JewelVision in Action</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Upload your jewelry images and experience the power of AI-driven catalog management. 
                Free trial includes full access to all features.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact?product=jewelvision&action=trial">
                    Start Free Trial
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact?product=jewelvision&action=demo">
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  )
}
