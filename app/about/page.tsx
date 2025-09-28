import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Sparkles,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DevSolutions - our mission, values, and the team behind your digital transformation.",
}

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We leverage cutting-edge technology to solve real business problems, not just follow trends.",
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success. We measure ourselves by the impact we create for your business.",
  },
  {
    icon: Target,
    title: "Quality Obsessed",
    description: "We don't cut corners. Every line of code, every pixel, every interaction is crafted with care.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We serve clients worldwide, bringing diverse perspectives to create inclusive solutions.",
  },
]

const milestones = [
  { year: "2019", event: "Founded with a mission to democratize AI for SMBs" },
  { year: "2020", event: "Launched first jewelry-specific AI solution" },
  { year: "2021", event: "Reached 100+ clients across 15 countries" },
  { year: "2022", event: "Released JewelVision AI vision system" },
  { year: "2023", event: "Expanded team to 50+ specialists" },
  { year: "2024", event: "Processed over $100M in jewelry transactions" },
]

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "15+ years in enterprise software. Former CTO at Fortune 500.",
  },
  {
    name: "Sarah Williams",
    role: "CTO & Co-Founder",
    bio: "AI researcher turned entrepreneur. PhD in Computer Vision from MIT.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Engineering",
    bio: "Full-stack architect with 12+ years building scalable systems.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Design",
    bio: "Award-winning designer focused on accessible, beautiful interfaces.",
  },
  {
    name: "David Kim",
    role: "Head of AI",
    bio: "Machine learning expert specializing in computer vision and NLP.",
  },
  {
    name: "Lisa Johnson",
    role: "Head of Customer Success",
    bio: "Passionate about helping businesses transform through technology.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="About DevSolutions"
            subtitle="We're on a mission to democratize AI and modern technology for businesses of all sizes"
          />
        </Section>

        {/* Mission Section */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe every business deserves access to enterprise-grade technology. 
              Our mission is to level the playing field by making AI, modern web development, 
              and sophisticated software accessible to businesses of all sizes. We specialize 
              in the jewelry industry because we understand its unique challenges and opportunities.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Timeline */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup to industry leader in AI-powered business solutions
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background border-2 border-primary">
                    <span className="text-sm font-bold">{milestone.year}</span>
                  </div>
                  <div className="ml-6 pt-4">
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented individuals passionate about your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose DevSolutions?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Industry Expertise</p>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of jewelry and SMB markets
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Proven Results</p>
                    <p className="text-sm text-muted-foreground">
                      Average 3.5x ROI for our clients
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Full-Service Partner</p>
                    <p className="text-sm text-muted-foreground">
                      From strategy to implementation to support
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Global Reach</p>
                    <p className="text-sm text-muted-foreground">
                      Serving clients across 15+ countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
                <CardDescription>
                  We're always looking for talented individuals to join our mission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're passionate about technology and want to make a real impact, 
                  we'd love to hear from you. We offer competitive compensation, remote work 
                  options, and the opportunity to work on cutting-edge projects.
                </p>
                <Button asChild>
                  <Link href="/contact?subject=careers">View Open Positions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage technology for growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">See Our Work</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
