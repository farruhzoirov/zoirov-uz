import { projects } from '@/lib/projects';
import { SkillBadge } from '@/components/skill-badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Code2, FileJson, Palette, Layers, Cpu, LayoutGrid, Boxes } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    slug: string
  };
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Loyiha topilmadi'
    };
  }

  return {
    title: `${ project.title } | Loyiha`,
    description: project.description
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Loyihalar sahifasiga qaytish
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src={ project.image || '/placeholder.svg' } alt={ project.title } fill className="object-cover"/>
            </div>

            <div className="mt-8 space-y-6">
              <h1 className="text-3xl font-bold">{ project.title }</h1>

              <p className="text-muted-foreground text-justify" dangerouslySetInnerHTML={ { __html: project.description } }>
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-3">Xususiyatlar</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  { project.features.map((feature) => (
                    <li key={ feature }>{ feature }</li>
                  )) }
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg border p-6 sticky top-20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Texnologiyalar</h3>
                  <div className="flex flex-wrap gap-2">
                    { project.technologies.map((tech) => {
                      // Map technology names to icons
                      const getIconForTech = (tech: string) => {
                        const techLower = tech.toLowerCase();
                        if (techLower.includes('html')) return Code2;
                        if (techLower.includes('css') || techLower.includes('scss')) return Palette;
                        if (techLower.includes('javascript')) return FileJson;
                        if (techLower.includes('typescript')) return Cpu;
                        if (techLower.includes('tailwind')) return LayoutGrid;
                        if (techLower.includes('angular')) return Boxes;
                        if (techLower.includes('material')) return Layers;
                        return undefined;
                      };

                      return (
                        <SkillBadge
                          key={ tech }
                          name={ tech }
                          icon={ getIconForTech(tech) }
                          color={
                            tech.toLowerCase().includes('html')
                              ? 'html'
                              : tech.toLowerCase().includes('css') || tech.toLowerCase().includes('scss')
                                ? 'css'
                                : tech.toLowerCase().includes('javascript')
                                  ? 'js'
                                  : tech.toLowerCase().includes('tailwind')
                                    ? 'tailwind'
                                    : tech.toLowerCase().includes('angular')
                                      ? 'angular'
                                      : 'default'
                          }
                        />
                      );
                    }) }
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Loyiha turi</h3>
                  <span
                    className="inline-block bg-primary/10 text-primary dark:bg-primary/20 px-3 py-1 rounded-full text-sm">
                    { project.type }
                  </span>
                </div>

                <div className="space-y-3">
                  { project.demoUrl && (
                    <Button asChild className="w-full gradient-bg">
                      <a href={ project.demoUrl } target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4"/>
                        Jonli demo
                      </a>
                    </Button>
                  ) }
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Menga bog'laning</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Birga ishlash yoki loyihalar haqida savollaringiz bormi?
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Aloqaga chiqing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
