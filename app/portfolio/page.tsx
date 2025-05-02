import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

// Sample project data - in a real app, this would come from a database or CMS
const projects = [
   {
    id: "real-time-chat",
    title: "Real-time Chat Application",
    description: "Scalable real-time chat application backend with support for group chats.",
    technologies: ["Node.js","Express.js", "Socket.io", "MongoDB"],
    image: "/realtime-chat-application.jpg?height=300&width=500",
  },
  {
    id: "content-management-api",
    title: "Content Management API For University",
    description: "Developed backend APIs for the new version of a university website.\n" +
       "\n" +
       "Integrated with the university’s HEMIS API to sync academic and student data.\n" +
       "\n" +
       "Built APIs to support both the landing page and the admin panel functionalities.\n" +
       "\n" +
       "Implemented multi-language support to serve users in multiple regions.",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "/umft.png?height=300&width=500",
  },
  {
    id: "e-commerce-backend",
    title: "E-commerce Backend",
    description:
       "Built a scalable backend application for an e-commerce platform with thousands of products.\n" +
       "\n" +
       "Implemented global product search, multi-language support, and hierarchical category logic.\n" +
       "\n" +
       "Integrated with Docker and enabled easy CI/CD deployments for efficient development workflow.\n" +
       "\n" +
       "Focused on performance, modularity, and clean API design to support high-volume traffic.",
    technologies: ["Node.js", "Nest.js", "MongoDB", "Docker"],
    image: "/dynamics-market.png?height=300&width=500",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of backend projects I've built, showcasing my expertise in Node.js, API development, and system
          architecture.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/portfolio/${project.id}`} key={project.id} className="transition-transform hover:scale-[1.02]">
            <Card className="h-full overflow-hidden border-2 hover:border-purple-500 transition-colors">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-purple-600 dark:text-purple-400">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
