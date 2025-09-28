import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { getAllPosts } from "@/lib/mdx"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { format } from "date-fns"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI, web development, and digital transformation for modern businesses.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="Blog"
            subtitle="Insights on AI, web development, and digital transformation"
          />
        </Section>

        <Section>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readingTime} min read
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}
