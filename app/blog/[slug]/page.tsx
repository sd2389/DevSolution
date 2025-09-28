import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { format } from "date-fns"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post || !post.content) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <Section>
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <article>
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readingTime} min read
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="h-4 w-4 mr-1" />
                  By {post.author}
                </div>
              </header>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXRemote source={post.content} />
              </div>
            </article>

            <div className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <Button asChild variant="outline">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    More Articles
                  </Link>
                </Button>
                
                <Button asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
