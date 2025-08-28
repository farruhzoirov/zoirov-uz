"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectFilterProps {
  projectTypes: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
  projects: Array<{ type: string }> // loyihalar massivini props sifatida qabul qilish
}

export function ProjectFilter({ projectTypes, activeFilter, onFilterChange, projects }: ProjectFilterProps) {
  // Har bir tip uchun loyihalar sonini hisoblash
  const getProjectCount = (type: string) => {
    if (type === "Barchasi") {
      return projects.length
    }
    return projects.filter(project => project.type === type).length
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Button
        variant={activeFilter === "Barchasi" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("Barchasi")}
        className={cn("rounded-full flex items-center gap-2", activeFilter === "Barchasi" ? "gradient-bg" : "")}
      >
        Barchasi
        <Badge
          variant={activeFilter === "Barchasi" ? "secondary" : "default"}
          className="ml-1 h-5 w-5 rounded-full flex items-center justify-center p-0 text-xs font-medium"
        >
          {getProjectCount("Barchasi")}
        </Badge>
      </Button>

      {projectTypes.map((type) => (
        <Button
          key={type}
          variant={activeFilter === type ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(type)}
          className={cn("rounded-full flex items-center gap-2", activeFilter === type ? "gradient-bg" : "")}
        >
          {type}
          <Badge
            variant={activeFilter === type ? "secondary" : "default"}
            className="ml-1 h-5 w-5 rounded-full flex items-center justify-center p-0 text-xs font-medium"
          >
            {getProjectCount(type)}
          </Badge>
        </Button>
      ))}
    </div>
  )
}
