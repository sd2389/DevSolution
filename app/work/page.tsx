import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { CaseStudyCard, CaseStudy } from "@/components/case-study-card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Our Work",
  description: "Case studies and success stories from our client projects. See how we've helped businesses transform with technology.",
}

const caseStudies: CaseStudy[] = [
  {
    title: "E-commerce Platform Overhaul",
    client: "Luxury Diamonds Direct",
    problem: "Legacy platform couldn't handle Black Friday traffic, losing $500K in potential sales",
    result: "New Next.js platform handled 10x traffic spike, zero downtime, 250% increase in conversions",
    metrics: ["10x capacity", "0% downtime", "250% conversion"],
    stack: ["Next.js", "Vercel", "Stripe", "Sanity CMS"],
    href: "#luxury-diamonds",
  },
  {
    title: "AI Customer Service Revolution",
    client: "Premier Jewelers Network",
    problem: "12-person support team overwhelmed with 500+ daily inquiries",
    result: "AI agent handles 80% of inquiries, response time from hours to seconds",
    metrics: ["80% automated", "< 1min response", "$200K saved/year"],
    stack: ["GPT-4", "Voice AI", "FastAPI", "PostgreSQL"],
    href: "#premier-jewelers",
  },
  {
    title: "B2B Marketplace Development",
    client: "GemTrade Global",
    problem: "No digital platform for wholesale jewelry trading between dealers",
    result: "Built complete B2B marketplace connecting 1,000+ dealers, $10M GMV in 6 months",
    metrics: ["1,000+ dealers", "$10M GMV", "6 months to market"],
    stack: ["React", "Node.js", "AWS", "Elasticsearch"],
    href: "#gemtrade",
  },
  {
    title: "Inventory Management System",
    client: "Multi-Store Jewelry Chain",
    problem: "Manual inventory across 15 locations causing stock-outs and overstock",
    result: "Real-time inventory system reduced stock-outs by 90%, increased turnover 40%",
    metrics: ["90% fewer stock-outs", "40% turnover increase", "15 locations"],
    stack: ["Next.js", "Supabase", "Redis", "JewelVision"],
    href: "#inventory-system",
  },
  {
    title: "Custom Design Portal",
    client: "Artisan Jewelry Studio",
    problem: "Complex custom order process losing 60% of interested customers",
    result: "3D design portal with real-time pricing increased custom orders by 300%",
    metrics: ["300% more orders", "60% faster quotes", "5-star reviews"],
    stack: ["Three.js", "React", "Stripe", "SendGrid"],
    href: "#design-portal",
  },
  {
    title: "Mobile App for Field Sales",
    client: "Wholesale Diamond Distributor",
    problem: "Sales team couldn't access inventory and pricing during client visits",
    result: "Native mobile app increased field sales by 150% with offline capability",
    metrics: ["150% sales increase", "100% adoption", "Offline ready"],
    stack: ["React Native", "GraphQL", "Apollo", "AWS"],
    href: "#mobile-app",
  },
]

const industries = [
  "Jewelry & Diamonds",
  "E-commerce",
  "B2B Marketplaces",
  "Retail",
  "Manufacturing",
  "Professional Services",
]

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Vercel",
  "AI/ML",
]

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="Our Work"
            subtitle="Real results for real businesses. See how we've helped companies transform with modern technology."
          />
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3.5x</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </Section>

        {/* Case Studies */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed success stories from our recent projects
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </Section>

        {/* Industries & Technologies */}
        <Section className="bg-muted/30">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <p className="italic mb-4">
                "DevSolutions transformed our entire digital presence. The AI agent alone saves us 
                30 hours per week in customer support. Incredible ROI."
              </p>
              <div>
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">CEO, Luxury Diamonds Direct</div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <p className="italic mb-4">
                "JewelVision solved our catalog nightmare. We went from 3 people spending days 
                on inventory to automated perfection. Game changer."
              </p>
              <div>
                <div className="font-semibold">Michael Torres</div>
                <div className="text-sm text-muted-foreground">COO, GemTrade Global</div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
