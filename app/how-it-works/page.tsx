import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { Steps, Step } from "@/components/steps"
import { 
  Search, 
  Calendar, 
  Rocket, 
  Shield, 
  TrendingUp,
  MessageSquare,
  Code,
  CheckCircle,
  Users,
  BarChart
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works",
  description: "Our proven process for delivering successful projects. From discovery to launch and beyond.",
}

const processSteps: Step[] = [
  {
    title: "Discovery Call",
    description: "We start with a 30-minute call to understand your business, goals, and technical requirements. This helps us recommend the right solution and provide accurate pricing.",
    icon: MessageSquare,
  },
  {
    title: "Proposal & Planning",
    description: "Within 24 hours, you'll receive a detailed proposal including scope, timeline, and fixed pricing. Once approved, we create a comprehensive project plan with milestones.",
    icon: Search,
  },
  {
    title: "Design & Prototype",
    description: "We create wireframes and design mockups for your approval. For complex projects, we build interactive prototypes to ensure we're aligned on functionality.",
    icon: Code,
  },
  {
    title: "Development Sprint",
    description: "Our team builds your solution in focused sprints with regular updates. You'll have access to a staging environment to track progress in real-time.",
    icon: Rocket,
  },
  {
    title: "Testing & Refinement",
    description: "Comprehensive testing across devices and scenarios. We incorporate your feedback and make refinements to ensure everything works perfectly.",
    icon: CheckCircle,
  },
  {
    title: "Launch & Deployment",
    description: "We handle the entire deployment process, including domain setup, hosting configuration, and monitoring. Your solution goes live with zero downtime.",
    icon: Shield,
  },
  {
    title: "Training & Handoff",
    description: "We provide comprehensive training on managing your new system, along with documentation and video guides. You'll be fully equipped to succeed.",
    icon: Users,
  },
  {
    title: "Ongoing Support",
    description: "Post-launch support ensures smooth operation. We monitor performance, handle updates, and are available for enhancements as your business grows.",
    icon: TrendingUp,
  },
]

const methodologies = [
  {
    title: "Agile Development",
    description: "Iterative development with regular feedback loops ensures we build exactly what you need.",
  },
  {
    title: "Fixed Pricing",
    description: "No surprises. We provide fixed pricing upfront so you can budget with confidence.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, shared project boards, and open communication throughout the project.",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing at every stage ensures your solution is reliable and bug-free.",
  },
]

const deliveryTimelines = [
  {
    service: "Website Development",
    timeline: "2-4 weeks",
    phases: ["Week 1: Design", "Week 2: Development", "Week 3-4: Testing & Launch"],
  },
  {
    service: "Software Development",
    timeline: "4-12 weeks",
    phases: ["Weeks 1-2: Planning", "Weeks 3-8: Development", "Weeks 9-12: Testing & Deployment"],
  },
  {
    service: "AI Development",
    timeline: "1-4 weeks",
    phases: ["Week 1: Data & Training", "Week 2-3: Integration", "Week 4: Optimization"],
  },
  {
    service: "JewelVision Setup",
    timeline: "Same day",
    phases: ["Hour 1: Account setup", "Hour 2-3: Data import", "Hour 4: Ready to use"],
  },
]

const slaMetrics = [
  { metric: "Response Time", value: "< 2 hours", description: "During business hours" },
  { metric: "Uptime Guarantee", value: "99.9%", description: "For all hosted solutions" },
  { metric: "Bug Fix", value: "< 24 hours", description: "For critical issues" },
  { metric: "Feature Updates", value: "Monthly", description: "For SaaS products" },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="How It Works"
            subtitle="Our proven process delivers successful projects on time and on budget, every time."
          />
        </Section>

        {/* Process Steps */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our 8-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial discovery to ongoing support, we handle everything
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Steps steps={processSteps} />
          </div>
        </Section>

        {/* Methodologies */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our methodologies ensure project success and client satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {methodologies.map((method, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Delivery Timelines */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Typical Delivery Timelines</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work efficiently without compromising quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {deliveryTimelines.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.service}</CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {item.timeline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.phases.map((phase, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                        <span className="text-sm text-muted-foreground">{phase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* SLA & Success Metrics */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Level Agreement</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to your success, backed by measurable metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {slaMetrics.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="font-semibold mb-1">{item.metric}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Collaboration Tools */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stay Connected Throughout</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use modern tools to keep you informed and involved
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Project Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time project tracking with milestones, tasks, and progress updates.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Slack Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Direct communication channel with your project team for quick questions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Weekly Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive weekly updates on progress, blockers, and next steps.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a plan for success
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
