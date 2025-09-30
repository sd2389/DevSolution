import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { WebsiteShowcase } from "@/components/website-showcase"
import { WebsiteDemos } from "@/components/website-demos"
import { Globe, Code, Brain, Sparkles, ArrowRight, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Comprehensive digital solutions for modern businesses. Website development, software development, AI development, and JewelVision.",
}

const solutions = [
  {
    id: "website",
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built with modern frameworks",
    icon: Globe,
    features: [
      "Next.js/React with TypeScript",
      "Mobile-first responsive design",
      "CMS integration (Sanity/Strapi)",
      "SEO optimization & Core Web Vitals",
      "Analytics & conversion tracking",
      "A/B testing capabilities",
    ],
    benefits: [
      "Launch in 2-4 weeks",
      "3x faster load times",
      "50% better conversion rates",
      "Built for scale",
    ],
    pricing: "Starting at $2,499",
    cta: { text: "Get Quote", href: "/contact?service=website" },
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom software solutions tailored to your business processes and workflows",
    icon: Code,
    features: [
      "Full-stack application development",
      "API design & integration",
      "Database architecture",
      "Cloud deployment (AWS/Vercel)",
      "Real-time features",
      "Enterprise integrations",
    ],
    benefits: [
      "Scalable architecture",
      "99.9% uptime SLA",
      "Automated workflows",
      "Real-time analytics",
    ],
    pricing: "Starting at $9,999",
    cta: { text: "Discuss Project", href: "/contact?service=software" },
  },
  {
    id: "ai",
    title: "AI Development",
    description: "Intelligent automation and AI-powered features for competitive advantage",
    icon: Brain,
    features: [
      "Custom AI/ML models",
      "Voice & chat agents",
      "Computer vision systems",
      "Predictive analytics",
      "Natural language processing",
      "Workflow automation",
    ],
    benefits: [
      "70% task automation",
      "24/7 availability",
      "Human-level accuracy",
      "Continuous learning",
    ],
    pricing: "Starting at $4,999",
    cta: { text: "Explore AI", href: "/contact?service=ai" },
  },
  {
    id: "jewelvision",
    title: "JewelVision",
    description: "Proprietary AI vision system designed specifically for jewelry businesses",
    icon: Sparkles,
    features: [
      "Design similarity matching",
      "Automated catalog deduplication",
      "Variant generation",
      "Quality assessment",
      "Trend analysis",
      "Inventory optimization",
    ],
    benefits: [
      "99.9% accuracy",
      "Process 10K+ SKUs",
      "Real-time updates",
      "API integration",
    ],
    pricing: "Starting at $199/mo",
    cta: { text: "Try JewelVision", href: "/contact?service=jewelvision" },
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <div className="animate-fade-in">
            <PageHeader
              title="Solutions That Scale"
              subtitle="From stunning websites to intelligent AI systems, we build technology that grows with your business"
            />
          </div>
        </Section>

        <Section>
          <div className="space-y-16 md:space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-base">Features</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 mt-1 text-primary">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-base">Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 mt-1 text-primary">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href={solution.cta.href}>
                        {solution.cta.text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="text-base md:text-lg font-semibold text-center sm:text-left">{solution.pricing}</span>
                  </div>
                </div>

                {/* Visual Card */}
                <div className="flex-1 max-w-md w-full">
                  <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border ${
                    solution.id === 'website' 
                      ? 'border-blue-200/50 bg-gradient-to-br from-blue-50/30 via-background to-cyan-50/20' 
                      : solution.id === 'software'
                      ? 'border-purple-200/50 bg-gradient-to-br from-purple-50/30 via-background to-violet-50/20'
                      : solution.id === 'ai'
                      ? 'border-emerald-200/50 bg-gradient-to-br from-emerald-50/30 via-background to-teal-50/20'
                      : 'border-gold/50 bg-gradient-to-br from-gold/20 via-background to-gold/10'
                  }`}>
                    
                    {/* Solution-Specific Background Patterns */}
                    {solution.id === 'website' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl" />
                        {/* Web Grid Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-4 left-4 w-8 h-8 border border-blue-400/30 rounded" />
                          <div className="absolute top-4 left-16 w-8 h-8 border border-blue-400/30 rounded" />
                          <div className="absolute top-4 left-28 w-8 h-8 border border-blue-400/30 rounded" />
                          <div className="absolute top-16 left-4 w-8 h-8 border border-blue-400/30 rounded" />
                          <div className="absolute top-16 left-16 w-8 h-8 border border-blue-400/30 rounded" />
                          <div className="absolute top-16 left-28 w-8 h-8 border border-blue-400/30 rounded" />
                        </div>
                      </>
                    )}
                    
                    {solution.id === 'software' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-transparent rounded-full blur-xl" />
                        {/* Code Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-6 left-4 text-xs font-mono text-purple-400">function()</div>
                          <div className="absolute top-12 left-4 text-xs font-mono text-purple-400">  return</div>
                          <div className="absolute top-18 left-4 text-xs font-mono text-purple-400">{'}'}</div>
                          <div className="absolute top-24 left-4 text-xs font-mono text-purple-400">const =</div>
                        </div>
                      </>
                    )}
                    
                    {solution.id === 'ai' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full blur-xl" />
                        {/* Neural Network Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-6 left-4 w-2 h-2 bg-emerald-400 rounded-full" />
                          <div className="absolute top-6 left-8 w-2 h-2 bg-emerald-400 rounded-full" />
                          <div className="absolute top-6 left-12 w-2 h-2 bg-emerald-400 rounded-full" />
                          <div className="absolute top-12 left-6 w-2 h-2 bg-emerald-400 rounded-full" />
                          <div className="absolute top-12 left-10 w-2 h-2 bg-emerald-400 rounded-full" />
                          <div className="absolute top-18 left-8 w-2 h-2 bg-emerald-400 rounded-full" />
                          {/* Connection lines */}
                          <div className="absolute top-7 left-5 w-1 h-5 bg-emerald-400/30 rotate-12" />
                          <div className="absolute top-7 left-9 w-1 h-5 bg-emerald-400/30 -rotate-12" />
                          <div className="absolute top-13 left-7 w-1 h-5 bg-emerald-400/30 rotate-12" />
                        </div>
                      </>
                    )}
                    
                    {solution.id === 'jewelvision' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-xl" />
                        {/* Jewel Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-8 left-8 w-4 h-4 bg-gold/30 rotate-45" />
                          <div className="absolute top-8 left-16 w-3 h-3 bg-gold/30 rotate-45" />
                          <div className="absolute top-16 left-12 w-2 h-2 bg-gold/30 rotate-45" />
                        </div>
                      </>
                    )}
                    
                    {/* Enhanced Hover Effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      solution.id === 'website' 
                        ? 'from-blue-500/20 via-cyan-500/10 to-transparent' 
                        : solution.id === 'software'
                        ? 'from-purple-500/20 via-violet-500/10 to-transparent'
                        : solution.id === 'ai'
                        ? 'from-emerald-500/20 via-teal-500/10 to-transparent'
                        : 'from-gold/25 via-gold/10 to-transparent'
                    }`} />
                    
                    <CardHeader className="relative p-4 md:p-6 z-10">
                      <div className="relative">
                        <solution.icon className={`h-10 w-10 md:h-12 md:w-12 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 ${
                          solution.id === 'website' 
                            ? 'text-blue-600' 
                            : solution.id === 'software'
                            ? 'text-purple-600'
                            : solution.id === 'ai'
                            ? 'text-emerald-600'
                            : 'text-gold'
                        }`} />
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full group-hover:scale-150 transition-transform duration-500 ${
                          solution.id === 'website' 
                            ? 'bg-blue-500/25' 
                            : solution.id === 'software'
                            ? 'bg-purple-500/25'
                            : solution.id === 'ai'
                            ? 'bg-emerald-500/25'
                            : 'bg-gold/25'
                        }`} />
                      </div>
                      <CardTitle className={`text-xl md:text-2xl group-hover:transition-colors duration-300 ${
                        solution.id === 'website' 
                          ? 'group-hover:text-blue-600' 
                          : solution.id === 'software'
                          ? 'group-hover:text-purple-600'
                          : solution.id === 'ai'
                          ? 'group-hover:text-emerald-600'
                          : 'group-hover:text-gold'
                      }`}>
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative p-4 md:p-6 z-10">
                      <div className="space-y-3 md:space-y-4">
                        {/* Solution-Specific Content */}
                        {solution.id === 'website' && (
                          <>
                            {/* Website Header Bar */}
                            <div className="h-6 bg-gradient-to-r from-blue-200/60 to-cyan-200/40 rounded-t-lg flex items-center px-3">
                              <div className="flex space-x-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              </div>
                              <div className="flex-1 text-center">
                                <div className="h-1 bg-white/30 rounded w-16 mx-auto"></div>
                              </div>
                            </div>
                            
                            {/* Website Content Area */}
                            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/60 rounded-b-lg p-3 space-y-2">
                              <div className="h-2 bg-blue-300/40 rounded w-3/4"></div>
                              <div className="h-2 bg-cyan-300/40 rounded w-1/2"></div>
                              <div className="grid grid-cols-3 gap-2 mt-3">
                                <div className="h-8 bg-gradient-to-br from-blue-200/50 to-cyan-200/30 rounded"></div>
                                <div className="h-8 bg-gradient-to-br from-cyan-200/50 to-blue-200/30 rounded"></div>
                                <div className="h-8 bg-gradient-to-br from-blue-200/50 to-cyan-200/30 rounded"></div>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {solution.id === 'software' && (
                          <>
                            {/* Code Editor Header */}
                            <div className="h-6 bg-gradient-to-r from-purple-200/60 to-violet-200/40 rounded-t-lg flex items-center px-3">
                              <div className="text-xs font-mono text-purple-600">main.js</div>
                            </div>
                            
                            {/* Code Content */}
                            <div className="bg-gradient-to-br from-purple-50/80 to-violet-50/60 rounded-b-lg p-3 font-mono text-xs space-y-1">
                              <div className="text-purple-600">
                                <span className="text-purple-400">function</span> <span className="text-purple-800">buildApp</span>() {'{'}
                              </div>
                              <div className="text-purple-600 ml-4">
                                <span className="text-purple-400">return</span> <span className="text-purple-800">app</span>;
                              </div>
                              <div className="text-purple-600">{'}'}</div>
                              <div className="text-violet-600 mt-2">
                                <span className="text-violet-400">const</span> <span className="text-violet-800">result</span> = <span className="text-violet-400">await</span> <span className="text-violet-800">buildApp</span>();
                              </div>
                            </div>
                          </>
                        )}
                        
                        {solution.id === 'ai' && (
                          <>
                            {/* AI Processing Header */}
                            <div className="h-6 bg-gradient-to-r from-emerald-200/60 to-teal-200/40 rounded-t-lg flex items-center px-3">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <div className="text-xs font-mono text-emerald-700">AI Processing</div>
                              </div>
                            </div>
                            
                            {/* Neural Network Visualization */}
                            <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/60 rounded-b-lg p-3">
                              <div className="flex justify-center items-center space-x-4">
                                {/* Input Layer */}
                                <div className="flex flex-col space-y-1">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                </div>
                                
                                {/* Hidden Layer */}
                                <div className="flex flex-col space-y-1">
                                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                </div>
                                
                                {/* Output Layer */}
                                <div className="flex flex-col space-y-1">
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                </div>
                              </div>
                              
                              {/* Connection Lines */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-px bg-gradient-to-r from-emerald-300/50 to-teal-300/50"></div>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {solution.id === 'jewelvision' && (
                          <>
                            {/* JewelVision Interface */}
                            <div className="h-6 bg-gradient-to-r from-gold/60 to-yellow-200/40 rounded-t-lg flex items-center px-3">
                              <div className="text-xs font-semibold text-gold-foreground">JewelVision AI</div>
                            </div>
                            
                            {/* Jewel Analysis Display */}
                            <div className="bg-gradient-to-br from-gold/20 to-yellow-50/60 rounded-b-lg p-3">
                              <div className="flex items-center justify-center mb-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-gold/40 to-yellow-300/40 rounded-full flex items-center justify-center">
                                  <div className="w-4 h-4 bg-gold/60 rounded-full"></div>
                                </div>
                        </div>
                              <div className="text-center space-y-1">
                                <div className="h-1 bg-gold/40 rounded w-3/4 mx-auto"></div>
                                <div className="h-1 bg-yellow-300/40 rounded w-1/2 mx-auto"></div>
                                <div className="text-xs text-gold-foreground font-semibold">99.9% Accuracy</div>
                        </div>
                        </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                    
                    {/* Solution-Specific Hover Glow */}
                    <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      solution.id === 'website' 
                        ? 'bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent' 
                        : solution.id === 'software'
                        ? 'bg-gradient-to-r from-purple-500/10 via-violet-500/5 to-transparent'
                        : solution.id === 'ai'
                        ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent'
                        : 'bg-gradient-to-r from-gold/10 via-yellow-500/5 to-transparent'
                    }`} />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Website Types Showcase */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Websites We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple static sites to complex e-commerce platforms, we create websites tailored to your specific needs.
            </p>
          </div>
          
          <WebsiteShowcase limit={6} />
          
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/websites">
                View All Website Types
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Section>

        {/* Live Demos Section */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Our Work in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore live demos of websites we've built for real clients across different industries.
            </p>
          </div>
          
          <WebsiteDemos limit={3} />
          
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/demos">
                <Play className="ml-2 h-5 w-5" />
                View All Demos
              </Link>
            </Button>
          </div>
        </Section>

        {/* Comparison Section */}
        <Section className="bg-muted/30">
          <div className="text-center mb-8 md:mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Solutions?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We combine technical excellence with industry expertise to deliver solutions that actually work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>Launch in weeks, not months</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our streamlined process and reusable components enable rapid deployment without compromising quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Enterprise Grade</CardTitle>
                <CardDescription>Built for scale and reliability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every solution follows best practices with comprehensive testing, monitoring, and security built-in.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>We're here for the long term</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From deployment to scaling, our team provides continuous support and optimization for your solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
