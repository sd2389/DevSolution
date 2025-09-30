import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Play, Eye, Star, TrendingUp, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface WebsiteDemo {
  id: string
  title: string
  description: string
  category: string
  imageUrl?: string
  demoUrl: string
  caseStudyUrl?: string
  client: string
  industry: string
  metrics: {
    label: string
    value: string
    icon: React.ComponentType<{ className?: string }>
  }[]
  technologies: string[]
  features: string[]
  testimonial?: {
    text: string
    author: string
    role: string
  }
  pricing: string
  timeline: string
  status: "live" | "demo" | "coming-soon"
}

const websiteDemos: WebsiteDemo[] = [
  {
    id: "luxury-jewelry-store",
    title: "Luxury Jewelry E-commerce",
    description: "High-end jewelry store with advanced product customization, 3D viewing, and AI-powered recommendations",
    category: "ecommerce",
    demoUrl: "https://luxury-jewelry-demo.vercel.app",
    caseStudyUrl: "/work#luxury-jewelry",
    client: "Diamond Dreams Co.",
    industry: "Luxury Jewelry",
    metrics: [
      { label: "Conversion Rate", value: "12.5%", icon: TrendingUp },
      { label: "Load Time", value: "1.2s", icon: Clock },
      { label: "Mobile Traffic", value: "68%", icon: Users },
      { label: "Customer Rating", value: "4.9/5", icon: Star }
    ],
    technologies: ["Next.js", "Stripe", "Three.js", "Sanity CMS", "Vercel"],
    features: [
      "3D product visualization",
      "AI-powered recommendations",
      "Custom ring builder",
      "Virtual try-on",
      "Advanced filtering",
      "Wishlist & favorites",
      "Guest checkout",
      "Multi-currency support"
    ],
    testimonial: {
      text: "The 3D visualization feature increased our conversion rate by 40%. Customers love being able to see exactly how rings will look.",
      author: "Sarah Chen",
      role: "CEO, Diamond Dreams Co."
    },
    pricing: "$4,999",
    timeline: "6 weeks",
    status: "live"
  },
  {
    id: "tech-startup-landing",
    title: "SaaS Landing Page",
    description: "High-converting landing page for a project management SaaS with interactive demos and social proof",
    category: "saas",
    demoUrl: "https://saas-landing-demo.vercel.app",
    caseStudyUrl: "/work#saas-landing",
    client: "TaskFlow Pro",
    industry: "Project Management",
    metrics: [
      { label: "Conversion Rate", value: "8.3%", icon: TrendingUp },
      { label: "Bounce Rate", value: "32%", icon: Eye },
      { label: "Page Speed", value: "95/100", icon: Clock },
      { label: "Sign-ups", value: "+250%", icon: Users }
    ],
    technologies: ["Next.js", "Framer Motion", "Stripe", "PostHog", "Vercel"],
    features: [
      "Interactive product demo",
      "Animated pricing tables",
      "Customer testimonials",
      "Feature comparison",
      "Live chat integration",
      "A/B testing setup",
      "Analytics dashboard",
      "Lead scoring"
    ],
    testimonial: {
      text: "This landing page converted 3x better than our previous one. The interactive demo really helps prospects understand our value.",
      author: "Mike Rodriguez",
      role: "Founder, TaskFlow Pro"
    },
    pricing: "$2,999",
    timeline: "3 weeks",
    status: "live"
  },
  {
    id: "creative-agency-portfolio",
    title: "Creative Agency Portfolio",
    description: "Stunning portfolio website with smooth animations, case studies, and interactive project galleries",
    category: "creative",
    demoUrl: "https://creative-agency-demo.vercel.app",
    caseStudyUrl: "/work#creative-agency",
    client: "Pixel Perfect Studio",
    industry: "Design Agency",
    metrics: [
      { label: "Page Views", value: "+180%", icon: TrendingUp },
      { label: "Engagement", value: "4.2min", icon: Clock },
      { label: "Inquiries", value: "+320%", icon: Users },
      { label: "Awards", value: "3 won", icon: Star }
    ],
    technologies: ["Next.js", "Framer Motion", "Three.js", "Sanity CMS", "Vercel"],
    features: [
      "Smooth page transitions",
      "Interactive project gallery",
      "Case study deep-dives",
      "Team member profiles",
      "Client testimonials",
      "Blog integration",
      "Contact forms",
      "Social media feeds"
    ],
    testimonial: {
      text: "Our new website has brought in 3x more qualified leads. The interactive portfolio really showcases our work beautifully.",
      author: "Emma Thompson",
      role: "Creative Director, Pixel Perfect Studio"
    },
    pricing: "$3,499",
    timeline: "4 weeks",
    status: "live"
  },
  {
    id: "law-firm-corporate",
    title: "Law Firm Corporate Site",
    description: "Professional corporate website with case studies, attorney profiles, and client portal integration",
    category: "corporate",
    demoUrl: "https://law-firm-demo.vercel.app",
    caseStudyUrl: "/work#law-firm",
    client: "Justice & Associates",
    industry: "Legal Services",
    metrics: [
      { label: "Client Inquiries", value: "+150%", icon: TrendingUp },
      { label: "Page Load", value: "0.8s", icon: Clock },
      { label: "SEO Ranking", value: "#1-3", icon: Star },
      { label: "Mobile Traffic", value: "72%", icon: Users }
    ],
    technologies: ["Next.js", "Sanity CMS", "PostgreSQL", "AWS", "Redis"],
    features: [
      "Attorney profiles",
      "Case study database",
      "Practice area pages",
      "Client portal",
      "News & insights",
      "Contact forms",
      "Multi-language support",
      "Accessibility compliance"
    ],
    testimonial: {
      text: "The new website has significantly improved our online presence. We're ranking #1 for our main keywords now.",
      author: "David Justice",
      role: "Managing Partner, Justice & Associates"
    },
    pricing: "$4,999",
    timeline: "6 weeks",
    status: "live"
  },
  {
    id: "nonprofit-charity",
    title: "Non-Profit Charity Site",
    description: "Purpose-driven website with donation integration, volunteer registration, and impact tracking",
    category: "nonprofit",
    demoUrl: "https://nonprofit-demo.vercel.app",
    caseStudyUrl: "/work#nonprofit",
    client: "Hope Foundation",
    industry: "Charity",
    metrics: [
      { label: "Donations", value: "+200%", icon: TrendingUp },
      { label: "Volunteers", value: "+150%", icon: Users },
      { label: "Engagement", value: "5.1min", icon: Clock },
      { label: "Social Shares", value: "+400%", icon: Star }
    ],
    technologies: ["Next.js", "Sanity CMS", "Stripe", "Vercel", "PostgreSQL"],
    features: [
      "Donation processing",
      "Volunteer registration",
      "Impact stories",
      "Event management",
      "Newsletter signup",
      "Social media integration",
      "Transparency reports",
      "Multi-language support"
    ],
    testimonial: {
      text: "The donation integration alone increased our online giving by 200%. The impact stories really connect with donors.",
      author: "Maria Santos",
      role: "Executive Director, Hope Foundation"
    },
    pricing: "$2,499",
    timeline: "4 weeks",
    status: "live"
  },
  {
    id: "restaurant-booking",
    title: "Restaurant Booking Platform",
    description: "Modern restaurant website with online reservations, menu management, and customer reviews",
    category: "restaurant",
    demoUrl: "https://restaurant-demo.vercel.app",
    caseStudyUrl: "/work#restaurant",
    client: "Bella Vista Restaurant",
    industry: "Food & Beverage",
    metrics: [
      { label: "Reservations", value: "+180%", icon: TrendingUp },
      { label: "Online Orders", value: "+250%", icon: Users },
      { label: "Customer Reviews", value: "4.8/5", icon: Star },
      { label: "Load Time", value: "0.9s", icon: Clock }
    ],
    technologies: ["Next.js", "Stripe", "Resy API", "Sanity CMS", "Vercel"],
    features: [
      "Online reservations",
      "Menu management",
      "Customer reviews",
      "Photo gallery",
      "Event calendar",
      "Contact forms",
      "Social media integration",
      "Mobile optimization"
    ],
    testimonial: {
      text: "Online reservations have increased by 180%. The website perfectly captures our restaurant's atmosphere.",
      author: "Antonio Rossi",
      role: "Owner, Bella Vista Restaurant"
    },
    pricing: "$2,999",
    timeline: "3 weeks",
    status: "live"
  }
]

interface WebsiteDemosProps {
  showAll?: boolean
  limit?: number
  category?: string
}

export function WebsiteDemos({ showAll = false, limit = 6, category }: WebsiteDemosProps) {
  let displayDemos = websiteDemos
  
  if (category && category !== 'all') {
    displayDemos = websiteDemos.filter(demo => demo.category === category)
  }
  
  if (!showAll) {
    displayDemos = displayDemos.slice(0, limit)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {displayDemos.map((demo) => (
        <Card key={demo.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
          {/* Image */}
          <div className={`relative h-48 overflow-hidden ${
            demo.category === 'ecommerce' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/5' :
            demo.category === 'saas' ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/5' :
            demo.category === 'creative' ? 'bg-gradient-to-br from-pink-500/20 to-pink-600/5' :
            demo.category === 'corporate' ? 'bg-gradient-to-br from-gray-500/20 to-gray-600/5' :
            demo.category === 'nonprofit' ? 'bg-gradient-to-br from-green-500/20 to-green-600/5' :
            demo.category === 'restaurant' ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/5' :
            'bg-gradient-to-br from-primary/20 to-primary/5'
          }`}>
            {/* Placeholder with demo info */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <div className={`w-16 h-16 rounded-lg mx-auto mb-3 flex items-center justify-center ${
                  demo.category === 'ecommerce' ? 'bg-blue-500/20' :
                  demo.category === 'saas' ? 'bg-purple-500/20' :
                  demo.category === 'creative' ? 'bg-pink-500/20' :
                  demo.category === 'corporate' ? 'bg-gray-500/20' :
                  demo.category === 'nonprofit' ? 'bg-green-500/20' :
                  demo.category === 'restaurant' ? 'bg-orange-500/20' :
                  'bg-primary/20'
                }`}>
                  <span className={`text-2xl font-bold ${
                    demo.category === 'ecommerce' ? 'text-blue-600' :
                    demo.category === 'saas' ? 'text-purple-600' :
                    demo.category === 'creative' ? 'text-pink-600' :
                    demo.category === 'corporate' ? 'text-gray-600' :
                    demo.category === 'nonprofit' ? 'text-green-600' :
                    demo.category === 'restaurant' ? 'text-orange-600' :
                    'text-primary'
                  }`}>
                    {demo.title.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {demo.category.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4">
              <Badge 
                variant={demo.status === 'live' ? 'default' : demo.status === 'demo' ? 'secondary' : 'outline'}
                className="backdrop-blur-sm"
              >
                {demo.status === 'live' ? 'Live' : demo.status === 'demo' ? 'Demo' : 'Coming Soon'}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold text-lg mb-1">{demo.title}</h3>
              <p className="text-white/90 text-sm">{demo.client} • {demo.industry}</p>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {demo.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {demo.metrics.slice(0, 4).map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-semibold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {demo.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {demo.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{demo.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Testimonial */}
              {demo.testimonial && (
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm italic mb-2">"{demo.testimonial.text}"</p>
                  <div className="text-xs">
                    <div className="font-semibold">{demo.testimonial.author}</div>
                    <div className="text-muted-foreground">{demo.testimonial.role}</div>
                  </div>
                </div>
              )}

              {/* Pricing & Timeline */}
              <div className="flex justify-between items-center pt-2 border-t">
                <div>
                  <div className="text-lg font-semibold text-primary">{demo.pricing}</div>
                  <div className="text-xs text-muted-foreground">{demo.timeline}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={demo.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                  {demo.caseStudyUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={demo.caseStudyUrl}>
                        <Eye className="h-4 w-4 mr-1" />
                        Case Study
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { websiteDemos }
