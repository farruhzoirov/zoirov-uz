import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Server, Terminal } from "lucide-react"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  Farruh Zoirov
                </h1>
                <p className="text-xl text-muted-foreground">Backend engineer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build robust, scalable backend systems and APIs that power modern web applications. Specializing in
                Node.js, Express, and database optimization.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/portfolio">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1">
                <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                  <div className="text-center">
                    <Terminal className="h-16 w-16 mx-auto mb-4 text-purple-500" />
                    <h2 className="text-2xl font-bold">Backend Developer</h2>
                    <p className="text-muted-foreground mt-2">JavaScript • Node.js • Express • Nest.js</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Can I Do</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I specialize in building robust backend systems that power modern web applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <Server className="h-12 w-12 text-purple-500" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">API Development</h3>
                <p className="text-muted-foreground">
                  Building robust and scalable RESTful APIs using Node.js, Express, and Nest.js.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Database className="h-12 w-12 text-pink-500" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Database Design</h3>
                <p className="text-muted-foreground">
                  Designing efficient database schemas and optimizing queries for SQL and NoSQL databases.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Code className="h-12 w-12 text-orange-500" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">DevOps & CI/CD</h3>
                <p className="text-muted-foreground">
                  Setting up Docker containers and CI/CD pipelines for seamless deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to work together?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Let's discuss how I can help bring your project to life with robust backend solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Get in Touch</Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
