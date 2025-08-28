import { ExperienceItem } from "@/components/experience-item"
import { workExperience } from "@/lib/work-experience"

export function ExperienceSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">
            Ish <span className="gradient-text">tajribam</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Mening kasbiy yo'lim va men ishlagan kompaniyalar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {workExperience.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                technologies={experience.technologies}
                isLast={index === workExperience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
