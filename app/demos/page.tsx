import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { WebsiteDemos } from "@/components/website-demos"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Play, Eye, Star, TrendingUp, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website Demos & Examples | DevSolutions",
  description: "Explore our portfolio of live website demos and case studies. See real examples of e-commerce, corporate, SaaS, and creative websites we've built.",
}

const categories = [
  { id: "all", label: "All Demos", count: 6 },
  { id: "ecommerce", label: "E-commerce", count: 1 },
  { id: "saas", label: "SaaS Landing", count: 1 },
  { id: "creative", label: "Creative", count: 1 },
  { id: "corporate", label: "Corporate", count: 1 },
  { id: "nonprofit", label: "Non-Profit", count: 1 },
  { id: "restaurant", label: "Restaurant", count: 1 }
]

const stats = [
  {
    icon: CheckCircle,
    value: "50+",
    label: "Live Websites",
    description: "Successfully deployed"
  },
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Average ROI",
    description: "Return on investment"
  },
  {
    icon: Clock,
    value: "2-6",
    label: "Weeks Delivery",
    description: "Average timeline"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    description: "Customer satisfaction"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We understand your business goals, target audience, and specific requirements through a detailed consultation."
  },
  {
    step: "02", 
    title: "Design & Prototype",
    description: "Our designers create wireframes and interactive prototypes that align with your brand and user experience goals."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your website using modern technologies, ensuring it's fast, secure, and mobile-responsive."
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "We deploy your website and provide ongoing support to ensure it continues to perform optimally."
  }
]

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section>
          <PageHeader
            title="Live Website Demos"
            subtitle="See our work in action. Explore real websites we've built for clients across different industries and use cases."
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

        {/* Demo Categories */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Filter our demos by website type to find examples most relevant to your business.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 p-2"
                >
                  <span className="font-medium text-sm">{category.label}</span>
                  <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <WebsiteDemos showAll={true} />
            </TabsContent>
            
            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <WebsiteDemos showAll={true} category={category.id} />
              </TabsContent>
            ))}
          </Tabs>
        </Section>

        {/* Process Section */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Build Your Website</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures your website is delivered on time and exceeds expectations.
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
                  View Case Studies
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
