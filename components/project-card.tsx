import Image from "next/image"
import Link from "next/link"
import { SkillBadge } from "@/components/skill-badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/lib/projects"
import { Code2, FileJson, Palette, Layers, Cpu, LayoutGrid, Boxes } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Map technology names to icons
  const getIconForTech = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes("html")) return Code2
    if (techLower.includes("css") || techLower.includes("scss")) return Palette
    if (techLower.includes("javascript")) return FileJson
    if (techLower.includes("typescript")) return Cpu
    if (techLower.includes("tailwind")) return LayoutGrid
    if (techLower.includes("angular")) return Boxes
    if (techLower.includes("material")) return Layers
    return undefined
  }

  return (
    <Link href={`/portfolio/${project.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:scale-[1.02] gradient-border">
        <div className="aspect-video relative overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full">{project.type}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
          <p
            className="text-muted-foreground text-sm mb-4 line-clamp-2">
            { project.description?.replace(/<[^>]*>/g, '') }
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <SkillBadge
                key={tech}
                name={tech}
                icon={getIconForTech(tech)}
                color={
                  tech.toLowerCase().includes("html")
                    ? "html"
                    : tech.toLowerCase().includes("css") || tech.toLowerCase().includes("scss")
                      ? "css"
                      : tech.toLowerCase().includes("javascript")
                        ? "js"
                        : tech.toLowerCase().includes("tailwind")
                          ? "tailwind"
                          : tech.toLowerCase().includes("angular")
                            ? "angular"
                            : "default"
                }
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
