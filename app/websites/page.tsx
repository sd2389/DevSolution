import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { WebsiteShowcase } from "@/components/website-showcase"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, DollarSign, Zap, Play } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website Types We Build | DevSolutions",
  description: "Explore different types of websites we create - from e-commerce stores to personal portfolios, corporate sites, and SaaS landing pages. See what we can build for you.",
}

const stats = [
  {
    icon: CheckCircle,
    value: "500+",
    label: "Websites Delivered",
    description: "Successfully launched projects"
  },
  {
    icon: Clock,
    value: "2-6",
    label: "Weeks Delivery",
    description: "Average project timeline"
  },
  {
    icon: DollarSign,
    value: "3.2x",
    label: "Average ROI",
    description: "Return on investment"
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable hosting"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We understand your business goals, target audience, and requirements to create the perfect website strategy."
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Our designers create wireframes and mockups that align with your brand and user experience goals."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your website using modern technologies, ensuring it's fast, secure, and mobile-responsive."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your website and provide ongoing support to ensure it continues to perform optimally."
  }
]

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", 
  "MongoDB", "Redis", "AWS", "Vercel", "Stripe", "Sanity CMS", "Framer Motion"
]

export default function WebsitesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section>
          <PageHeader
            title="Website Types We Build"
            subtitle="From simple static sites to complex e-commerce platforms, we create websites that drive results for your business."
          />
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </Section>

        {/* Website Showcase */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Website Type</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating different types of websites tailored to your specific needs and business goals.
            </p>
          </div>
          
          <WebsiteShowcase showAll={true} />
          
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/demos">
                <Play className="ml-2 h-5 w-5" />
                View Live Demos
              </Link>
            </Button>
          </div>
        </Section>

        {/* Process Section */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your website is delivered on time and exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Technologies */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage modern, proven technologies to build fast, secure, and scalable websites.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact?service=website">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/work">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
