import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Sahifa topilmadi</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Siz qidirgan sahifa mavjud emas
      </p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Bosh sahifaga qaytish
        </Link>
      </Button>
    </div>
  )
}
