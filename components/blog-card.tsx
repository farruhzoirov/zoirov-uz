import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BlogPost } from '@/lib/blog-posts';

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:scale-[1.02] gradient-border">
        <div className="aspect-video relative overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
