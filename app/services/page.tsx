import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services"

export const metadata = {
  title: "Services | Frontend Developer",
  description: "Professional frontend development services and pricing",
}

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Mening <span className="gradient-text">xizmatlarim</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Ehtiyojingizga qarab dasturlash xizmati qulay narxlarda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-lg p-6 md:p-8">
          <div className="flex flex-col items-center text-center space-y-4 mb-6">
            <h2 className="text-2xl font-bold">Maxsus loyiha talablari?</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Aniq bir narsa kerakmi yoki murakkab loyiha rejangiz bormi? Ehtiyojingizga qarab maxsus narx taklifi olish
              uchun men bilan bog'laning.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gradient-bg"
            >
              Maxsus narx olish
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
