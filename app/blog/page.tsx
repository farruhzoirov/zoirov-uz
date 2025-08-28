import { blogPosts } from "@/lib/blog-posts"
import { BlogCard } from "@/components/blog-card"

export const metadata = {
  title: "Blog | Frontend Developer",
  description: "Articles and insights on frontend development, design, and web technologies",
}

export default function BlogPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Mening <span className="gradient-text">blogim</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Frontend dasturlash va veb texnologiyalari bo'yicha ma'lumotlar, yangiliklar va tajribalarim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
