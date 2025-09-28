import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { 
  Globe, 
  Server, 
  Database, 
  Shield, 
  Zap,
  Cloud,
  Lock,
  Activity
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Our modern technology stack for building scalable, secure, and high-performance solutions.",
}

const frontendStack = [
  { name: "Next.js 14", description: "React framework for production", category: "Framework" },
  { name: "TypeScript", description: "Type-safe JavaScript", category: "Language" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Styling" },
  { name: "shadcn/ui", description: "Accessible component library", category: "Components" },
  { name: "React Query", description: "Data fetching and caching", category: "State" },
  { name: "Zustand", description: "Lightweight state management", category: "State" },
  { name: "Framer Motion", description: "Animation library", category: "Animation" },
  { name: "React Hook Form", description: "Form handling", category: "Forms" },
]

const backendStack = [
  { name: "FastAPI", description: "Modern Python web framework", category: "Framework" },
  { name: "Django", description: "High-level Python web framework", category: "Framework" },
  { name: "Node.js", description: "JavaScript runtime", category: "Runtime" },
  { name: "Express", description: "Web application framework", category: "Framework" },
  { name: "PHP", description: "Server-side scripting language", category: "Language" },
  { name: "Java", description: "Enterprise-grade programming language", category: "Language" },
  { name: "Prisma", description: "Type-safe ORM", category: "ORM" },
  { name: "GraphQL", description: "Query language for APIs", category: "API" },
  { name: "tRPC", description: "Type-safe API calls", category: "API" },
  { name: "Bull", description: "Queue management", category: "Queue" },
  { name: "JWT", description: "Authentication tokens", category: "Auth" },
]

const databaseStack = [
  { name: "PostgreSQL", description: "Relational database", category: "SQL" },
  { name: "MongoDB", description: "Document database", category: "NoSQL" },
  { name: "Redis", description: "In-memory data store", category: "Cache" },
  { name: "Elasticsearch", description: "Search engine", category: "Search" },
  { name: "Pinecone", description: "Vector database", category: "AI" },
  { name: "Supabase", description: "Backend as a service", category: "BaaS" },
]

const infrastructureStack = [
  { name: "AWS", description: "Cloud infrastructure", category: "Cloud" },
  { name: "Vercel", description: "Frontend hosting", category: "Hosting" },
  { name: "Docker", description: "Containerization", category: "Container" },
  { name: "Kubernetes", description: "Container orchestration", category: "Orchestration" },
  { name: "CloudFront", description: "CDN", category: "CDN" },
  { name: "S3", description: "Object storage", category: "Storage" },
  { name: "GitHub Actions", description: "CI/CD", category: "DevOps" },
  { name: "Terraform", description: "Infrastructure as code", category: "IaC" },
]

const aiStack = [
  { name: "OpenAI GPT-4", description: "Large language model", category: "LLM" },
  { name: "Anthropic Claude", description: "AI assistant", category: "LLM" },
  { name: "LangChain", description: "LLM framework", category: "Framework" },
  { name: "Whisper", description: "Speech recognition", category: "Voice" },
  { name: "ElevenLabs", description: "Voice synthesis", category: "Voice" },
  { name: "Hugging Face", description: "Model hub", category: "Models" },
  { name: "TensorFlow", description: "ML framework", category: "ML" },
  { name: "PyTorch", description: "Deep learning", category: "ML" },
]

const securityFeatures = [
  {
    icon: Lock,
    title: "Authentication & Authorization",
    features: ["OAuth 2.0 / OIDC", "Multi-factor authentication", "Role-based access control", "Session management"],
  },
  {
    icon: Shield,
    title: "Data Protection",
    features: ["TLS 1.3 encryption", "AES-256 at rest", "Field-level encryption", "PII tokenization"],
  },
  {
    icon: Activity,
    title: "Monitoring & Compliance",
    features: ["Audit logging", "SIEM integration", "GDPR compliance", "SOC 2 ready"],
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    features: ["VPC isolation", "WAF protection", "DDoS mitigation", "Regular backups"],
  },
]

const performanceMetrics = [
  { metric: "Page Load", target: "< 1s", achieved: "0.8s avg" },
  { metric: "API Response", target: "< 100ms", achieved: "45ms p50" },
  { metric: "Uptime", target: "99.9%", achieved: "99.95%" },
  { metric: "Core Web Vitals", target: "> 90", achieved: "95+" },
]

export default function TechPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="Our Tech Stack"
            subtitle="Modern, scalable, and secure technology choices for enterprise-grade solutions"
          />
        </Section>

        {/* Frontend Technologies */}
        <Section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-primary" />
              Frontend Technologies
            </h2>
            <p className="text-muted-foreground">Building responsive, accessible, and performant user interfaces</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {frontendStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">{tech.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Backend Technologies */}
        <Section className="bg-muted/30">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Server className="h-6 w-6 mr-2 text-primary" />
              Backend Technologies
            </h2>
            <p className="text-muted-foreground">Robust server-side solutions for complex business logic</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {backendStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">{tech.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Database & Storage */}
        <Section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Database className="h-6 w-6 mr-2 text-primary" />
              Database & Storage
            </h2>
            <p className="text-muted-foreground">Scalable data solutions for any workload</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {databaseStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">{tech.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Infrastructure & DevOps */}
        <Section className="bg-muted/30">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Cloud className="h-6 w-6 mr-2 text-primary" />
              Infrastructure & DevOps
            </h2>
            <p className="text-muted-foreground">Cloud-native infrastructure for reliability and scale</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {infrastructureStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">{tech.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* AI & Machine Learning */}
        <Section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Zap className="h-6 w-6 mr-2 text-primary" />
              AI & Machine Learning
            </h2>
            <p className="text-muted-foreground">Cutting-edge AI technologies for intelligent solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">{tech.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Security */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security approach to protect your data and applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <section.icon className="h-5 w-5 mr-2 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Performance */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We obsess over performance to deliver exceptional user experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {performanceMetrics.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">{item.metric}</div>
                  <div className="text-2xl font-bold text-primary mb-1">{item.achieved}</div>
                  <div className="text-xs text-muted-foreground">Target: {item.target}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
