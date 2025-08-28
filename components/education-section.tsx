import { EducationItem } from "@/components/education-item"
import { education } from "@/lib/education"

export function EducationSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">
            <span className="gradient-text">Ta'lim</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">Mening ta'limim haqida ma'lumot.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((item, index) => (
              <EducationItem
                key={index}
                institution={item.institution}
                degree={item.degree}
                location={item.location}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
