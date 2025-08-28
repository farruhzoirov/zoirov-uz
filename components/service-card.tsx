import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Service } from "@/lib/services"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-md gradient-border overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>
        <p className="text-muted-foreground">{service.description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <p className="text-3xl font-bold">
            {service.price.startingFrom ? "From " : ""}${service.price.amount}
            {service.price.per && (
              <span className="text-sm font-normal text-muted-foreground"> /{service.price.per}</span>
            )}
          </p>
        </div>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/contact">Buyurtma berish</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
