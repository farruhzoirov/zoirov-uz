import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

// Sample blog posts - in a real app, this would come from a database or CMS
const posts = [
  {
    id: "microservices-vs-monolith",
    title: "Microservices vs Monolith: Choosing the Right Architecture",
    excerpt:
      "An in-depth comparison of microservices and monolithic architectures, with guidance on when to use each approach.",
    date: "2023-05-15",
    readTime: "8 min read",
    categories: ["Architecture", "Microservices"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization Techniques",
    excerpt: "Learn how to optimize your Node.js applications for maximum performance and scalability.",
    date: "2023-04-22",
    readTime: "10 min read",
    categories: ["Node.js", "Performance"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "database-scaling-strategies",
    title: "Database Scaling Strategies for High-Traffic Applications",
    excerpt:
      "Explore different approaches to scaling databases when your application needs to handle millions of users.",
    date: "2023-03-18",
    readTime: "12 min read",
    categories: ["Databases", "Scaling"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "securing-nodejs-apis",
    title: "Securing Node.js APIs: Best Practices",
    excerpt: "A comprehensive guide to securing your Node.js APIs against common vulnerabilities and attacks.",
    date: "2023-02-10",
    readTime: "9 min read",
    categories: ["Security", "Node.js", "API"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "docker-for-nodejs-developers",
    title: "Docker for Node.js Developers: A Practical Guide",
    excerpt:
      "Learn how to containerize your Node.js applications using Docker for consistent development and deployment.",
    date: "2023-01-25",
    readTime: "7 min read",
    categories: ["Docker", "DevOps", "Node.js"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "graphql-vs-rest",
    title: "GraphQL vs REST: When to Use Each",
    excerpt:
      "A detailed comparison of GraphQL and REST APIs, with practical advice on choosing the right approach for your project.",
    date: "2022-12-14",
    readTime: "11 min read",
    categories: ["API", "GraphQL", "REST"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, tutorials, and thoughts on backend development, system architecture, and more.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="transition-transform hover:scale-[1.02]">
            <Card className="h-full overflow-hidden border-2 hover:border-purple-500 transition-colors">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
