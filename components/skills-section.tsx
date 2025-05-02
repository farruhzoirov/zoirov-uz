import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Terminal } from "lucide-react"

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I specialize in these technologies to build robust backend systems.
            </p>
          </div>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <Terminal className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">JavaScript & Node.js</h3>
            <p className="text-muted-foreground mb-4">
              Building server-side applications with JavaScript and Node.js ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express.js</Badge>
              <Badge>Nest.js</Badge>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <Database className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Databases</h3>
            <p className="text-muted-foreground mb-4">
              Designing and optimizing SQL and NoSQL databases for performance and scalability.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <Badge>PostgreSQL</Badge>
              <Badge>MongoDB</Badge>
              <Badge>MySQL</Badge>
              <Badge>Redis</Badge>
              <Badge>SQL</Badge>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <Server className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">DevOps & CI/CD</h3>
            <p className="text-muted-foreground mb-4">
              Containerization, deployment automation, and infrastructure management.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <Badge>Docker</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Linux</Badge>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <Code className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">API Development</h3>
            <p className="text-muted-foreground mb-4">
              Building robust, scalable, and secure APIs for modern applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              <Badge>REST</Badge>
              <Badge>GraphQL</Badge>
              <Badge>WebSockets</Badge>
              <Badge>JWT</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
