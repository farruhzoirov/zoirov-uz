"use client"

import { useState, useEffect } from "react"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"

export default function PortfolioPage() {
  // Get unique project types
  const allProjectTypes = [...new Set(projects.map((project) => project.type))]

  const [activeFilter, setActiveFilter] = useState("Barchasi")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "Barchasi") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.type === activeFilter))
    }
  }, [activeFilter])

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Mening <span className="gradient-text">loyihalarim</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Zamonaviy veb-texnologiyalar asosida ishlab chiqilgan loyihalarni ko'rib chiqing.
          </p>
        </div>

        <ProjectFilter
          projectTypes={allProjectTypes}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          projects={projects} // loyihalar massivini uzatish
        />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Bu filterga mos keladigan loyiha topilmadi</p>
          </div>
        )}
      </div>
    </div>
  )
}
