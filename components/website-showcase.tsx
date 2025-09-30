import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ShoppingCart, User, Globe, Building2, Palette, Briefcase, Heart } from "lucide-react"
import Link from "next/link"

export interface WebsiteType {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  pricing: string
  timeline: string
  technologies: string[]
  useCases: string[]
  imageUrl?: string
  demoUrl?: string
  cta: {
    text: string
    href: string
  }
}

const websiteTypes: WebsiteType[] = [
  {
    id: "ecommerce",
    title: "E-commerce Websites",
    description: "Complete online stores with shopping cart, payment processing, and inventory management",
    icon: ShoppingCart,
    features: [
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Product catalog management",
      "Order tracking system",
      "Customer accounts",
      "Inventory management",
      "SEO optimization",
      "Mobile responsive design"
    ],
    pricing: "Starting at $3,999",
    timeline: "4-6 weeks",
    technologies: ["Next.js", "Stripe", "Sanity CMS", "Vercel", "PostgreSQL"],
    useCases: [
      "Online jewelry stores",
      "Fashion boutiques",
      "Electronics retailers",
      "Digital product sales",
      "Subscription services"
    ],
    imageUrl: "/demos/ecommerce-preview.jpg",
    demoUrl: "https://jewelry-store-demo.vercel.app",
    cta: {
      text: "Get E-commerce Quote",
      href: "/contact?service=ecommerce"
    }
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Professional portfolios for creatives, developers, and professionals to showcase their work",
    icon: User,
    features: [
      "Project showcase gallery",
      "About & contact sections",
      "Resume integration",
      "Blog functionality",
      "Contact forms",
      "Social media integration",
      "SEO optimization",
      "Fast loading design"
    ],
    pricing: "Starting at $1,499",
    timeline: "2-3 weeks",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "MDX"],
    useCases: [
      "Web developers",
      "Graphic designers",
      "Photographers",
      "Writers & bloggers",
      "Consultants"
    ],
    imageUrl: "/demos/portfolio-preview.jpg",
    demoUrl: "https://portfolio-demo.vercel.app",
    cta: {
      text: "Build My Portfolio",
      href: "/contact?service=portfolio"
    }
  },
  {
    id: "static",
    title: "Static Websites",
    description: "Fast, secure, and cost-effective websites for businesses that need simple online presence",
    icon: Globe,
    features: [
      "Lightning-fast loading",
      "SEO optimized",
      "Mobile responsive",
      "Contact forms",
      "Google Analytics",
      "SSL certificate",
      "CDN delivery",
      "Easy content updates"
    ],
    pricing: "Starting at $999",
    timeline: "1-2 weeks",
    technologies: ["Next.js", "Vercel", "Tailwind CSS", "MDX", "GitHub"],
    useCases: [
      "Small business websites",
      "Landing pages",
      "Event websites",
      "Documentation sites",
      "Marketing pages"
    ],
    imageUrl: "/demos/static-preview.jpg",
    demoUrl: "https://static-demo.vercel.app",
    cta: {
      text: "Create Static Site",
      href: "/contact?service=static"
    }
  },
  {
    id: "corporate",
    title: "Corporate Websites",
    description: "Professional corporate websites with advanced features for large organizations",
    icon: Building2,
    features: [
      "Multi-page architecture",
      "Team member profiles",
      "News & blog system",
      "Case studies section",
      "Client testimonials",
      "Advanced contact forms",
      "Multi-language support",
      "Analytics dashboard"
    ],
    pricing: "Starting at $4,999",
    timeline: "6-8 weeks",
    technologies: ["Next.js", "Sanity CMS", "PostgreSQL", "AWS", "Redis"],
    useCases: [
      "Law firms",
      "Consulting companies",
      "Real estate agencies",
      "Healthcare providers",
      "Financial services"
    ],
    imageUrl: "/demos/corporate-preview.jpg",
    demoUrl: "https://corporate-demo.vercel.app",
    cta: {
      text: "Plan Corporate Site",
      href: "/contact?service=corporate"
    }
  },
  {
    id: "creative",
    title: "Creative Agency Websites",
    description: "Stunning, interactive websites for creative agencies and design studios",
    icon: Palette,
    features: [
      "Interactive animations",
      "Portfolio galleries",
      "Client showcase",
      "Service pages",
      "Team profiles",
      "Contact forms",
      "Social media feeds",
      "Custom illustrations"
    ],
    pricing: "Starting at $3,499",
    timeline: "4-5 weeks",
    technologies: ["Next.js", "Framer Motion", "Three.js", "Sanity CMS", "Vercel"],
    useCases: [
      "Design agencies",
      "Marketing firms",
      "Photography studios",
      "Video production",
      "Brand consultants"
    ],
    imageUrl: "/demos/creative-preview.jpg",
    demoUrl: "https://creative-demo.vercel.app",
    cta: {
      text: "Design My Site",
      href: "/contact?service=creative"
    }
  },
  {
    id: "saas",
    title: "SaaS Landing Pages",
    description: "High-converting landing pages for software products and SaaS applications",
    icon: Briefcase,
    features: [
      "Conversion-optimized design",
      "Feature showcases",
      "Pricing tables",
      "Testimonials section",
      "Demo videos",
      "Lead capture forms",
      "A/B testing setup",
      "Analytics integration"
    ],
    pricing: "Starting at $2,999",
    timeline: "3-4 weeks",
    technologies: ["Next.js", "TypeScript", "Vercel", "Stripe", "PostHog"],
    useCases: [
      "Software startups",
      "SaaS companies",
      "App developers",
      "Tech products",
      "Digital services"
    ],
    imageUrl: "/demos/saas-preview.jpg",
    demoUrl: "https://saas-demo.vercel.app",
    cta: {
      text: "Build Landing Page",
      href: "/contact?service=saas"
    }
  },
  {
    id: "nonprofit",
    title: "Non-Profit Websites",
    description: "Purpose-driven websites for charities, foundations, and non-profit organizations",
    icon: Heart,
    features: [
      "Donation integration",
      "Event management",
      "Volunteer registration",
      "Impact stories",
      "News & updates",
      "Contact forms",
      "Social media integration",
      "Accessibility compliance"
    ],
    pricing: "Starting at $2,499",
    timeline: "4-5 weeks",
    technologies: ["Next.js", "Sanity CMS", "Stripe", "Vercel", "PostgreSQL"],
    useCases: [
      "Charities",
      "Foundations",
      "Community organizations",
      "Religious groups",
      "Educational institutions"
    ],
    imageUrl: "/demos/nonprofit-preview.jpg",
    demoUrl: "https://nonprofit-demo.vercel.app",
    cta: {
      text: "Support Non-Profit",
      href: "/contact?service=nonprofit"
    }
  }
]

interface WebsiteShowcaseProps {
  showAll?: boolean
  limit?: number
}

export function WebsiteShowcase({ showAll = false, limit = 6 }: WebsiteShowcaseProps) {
  const displayTypes = showAll ? websiteTypes : websiteTypes.slice(0, limit)

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {displayTypes.map((websiteType) => {
        const IconComponent = websiteType.icon
        return (
          <Card key={websiteType.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full group">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{websiteType.title}</CardTitle>
              </div>
              <CardDescription className="text-sm leading-relaxed">
                {websiteType.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 flex-grow">
              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {websiteType.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {websiteType.features.length > 4 && (
                    <li className="text-xs text-muted-foreground">
                      +{websiteType.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Perfect For</h4>
                <div className="flex flex-wrap gap-1">
                  {websiteType.useCases.slice(0, 3).map((useCase, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {websiteType.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="flex justify-between items-center pt-2 border-t">
                <div>
                  <div className="text-lg font-semibold text-primary">{websiteType.pricing}</div>
                  <div className="text-xs text-muted-foreground">{websiteType.timeline}</div>
                </div>
                {websiteType.demoUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={websiteType.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>

            <div className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={websiteType.cta.href}>
                  {websiteType.cta.text}
                </Link>
              </Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export { websiteTypes }
