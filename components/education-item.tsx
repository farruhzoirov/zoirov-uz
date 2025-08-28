import { GraduationCap } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface EducationItemProps {
  institution: string
  degree: string
  location: string
  startDate: string
  endDate?: string
  description?: string
  isLast?: boolean
}

export function EducationItem({
  institution,
  degree,
  location,
  startDate,
  endDate,
  description,
  isLast = false,
}: EducationItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline connector */}
      <div className="absolute left-4 top-6 bottom-0 w-px bg-border md:left-1/2 md:-ml-0.5"></div>

      <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
        {/* Left side - Institution and date */}
        <div className="mb-4 md:mb-0 md:text-right">
          <div className="flex items-center md:justify-end">
            <div className="absolute left-0 mt-1.5 h-8 w-8 rounded-full border bg-background flex items-center justify-center md:relative md:left-auto md:mt-0 md:ml-4">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <h3 className="pl-2 text-lg font-semibold">{institution}</h3>
          </div>
          <p className="text-muted-foreground">{location}</p>
          <p className="text-sm text-muted-foreground">
            {startDate} - {endDate ? endDate : "hozirgacha"}
          </p>
        </div>

        {/* Right side - Degree and description */}
        <div>
          <h4 className="text-base font-medium">{degree}</h4>
          {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
    </div>
  )
}
