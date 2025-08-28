import { blogPosts } from '@/lib/blog-posts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string
  };
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post topilmadi'
    };
  }

  return {
    title: `${ post.title } | Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-8 md:py-16">
      <div className="container px-4 md:px-6">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Bloglar sahifasiga qaytish
          </Link>
        </Button>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl xl:text-3xl font-bold mb-1">{ post.title }</h1>
            <p className="text-muted-foreground">{ post.date }</p>
          </div>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image src={ post.image || '/placeholder.svg' } alt={ post.title } fill className="object-cover"/>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <article className="flex flex-col gap-4 text-justify" dangerouslySetInnerHTML={ { __html: post.content } }/>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">O'qishda davom eting</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              { blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={ relatedPost.id }
                    href={ `/blog/${ relatedPost.slug }` }
                    className="block p-4 rounded-lg border hover:border-primary transition-colors"
                  >
                    <h4 className="font-medium mb-1">{ relatedPost.title }</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{ relatedPost.excerpt }</p>
                  </Link>
                )) }
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
