import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { blogPosts } from "@/lib/blog-posts";

export default function Home() {
  // Get the latest 3 projects
  const featuredProjects = projects.slice(0, 6);
  // Get the latest 2 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <HeroSection />

      <SkillsSection />

      <ExperienceSection />

      <EducationSection />

      {/* Featured Projects Section */}
      {/* <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Tanlangan <span className="gradient-text">loyihalar</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Mening so'nggi ishlarimni ko'rib chiqing. Ushbu loyihalar frontend dasturlashdagi ko'nikmalarim va
              tajribamni ko'rsatadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/portfolio">
                Barcha loyihalarni ko'rish <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Latest Blog Posts Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Oxirgi <span className="gradient-text">blog postlar</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Men frontend dasturlash va IT sohasidagi tajribalarim haqida
              yozaman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                Barcha postlarni o'qish <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg p-8 md:p-12 gradient-bg text-white">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                Hamkorlik qilamiz
              </h2>
              <p className="max-w-[700px] text-white/90">
                G'oyalaringiz va biznes loyilaringizni amalga oshirishda yordam
                berishdan mamnun bo'laman. Hamkorlik qilmoqchi bo'lsangiz, men
                bilan bog'laning!
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Aloqaga chiqing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
