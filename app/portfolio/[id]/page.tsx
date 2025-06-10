import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github } from "lucide-react";

const projects = {
  "e-commerce-backend": {
    title: "E-commerce Backend",
    description:
      "Complete backend solution for an e-commerce platform with product management, cart functionality and global search functionality.",
    longDescription: `
      Built a scalable backend application for an e-commerce platform with thousands of products.Implemented global product search, multi-language support, and hierarchical category logic.Integrated with Docker and enabled easy CI/CD deployments for efficient development workflow.
      Focused on performance, modularity, and clean API design to support high-volume traffic.Built with Nest.js for a modular, maintainable architecture, the system uses MongoDB for flexible data storage and Stripe for secure payment processing.
      The API follows RESTful principles with comprehensive documentation using Swagger.
    `,
    technologies: [
      "Node.js",
      "Nest.js",
      "MongoDB",
      "Redis",
      "Docker",
      "Swagger",
    ],
    features: [
      "Product catalog with categories and search",
      "User authentication and profiles",
      "Shopping cart functionality",
      "Order management and history",
      "Admin dashboard API",
    ],
    challenges: [
      "Designing a flexible product catalog system",
      "Optimizing database queries for performance",
      "Designed and implemented an efficient, scalable solution for hierarchical category management.",
    ],
    image: "/dynamics-market-uz.jpg?height=600&width=1200",
    github: "https://github.com/farruhzoirov/dynamics-market-backend",
    liveDemo: "https://dynamics-market.uz/",
  },
  "real-time-chat": {
    title: "Real-time Chat System",
    description:
      "Scalable real-time chat application backend with support for private messaging and group chats.",
    longDescription: `
      This real-time chat system provides a scalable backend for messaging applications, supporting both one-on-one and group conversations.
      
      Built with Socket.io for real-time communication and PostgreSQL for persistent storage, the system handles message delivery, read receipts, and user presence.
      
      Redis is used for pub/sub messaging between server instances, allowing the system to scale horizontally.
    `,
    technologies: ["Node.js", "Socket.io", "Mongodb"],
    features: [
      "Group chat functionality",
      "Message delivery and read receipts",
    ],
    challenges: [
      "Ensuring message delivery in distributed environments",
      "Managing user presence across multiple server instances",
      "Optimizing for high message throughput",
    ],
    image: "/realtime-chat-application.jpg?height=600&width=1200",
    github: "https://github.com/farruhzoirov/realtime-chat-application",
    liveDemo: "https://chat-app.sharefy.uz/",
  },
  "content-management-api": {
    title: "Content Management API for UMFT",
    description:
      "Headless HEMIS API with content modeling, versioning, and multi-language support.",
    longDescription: `
      Developed backend APIs for the new version of a university website. Integrated with the university’s HEMIS API to sync academic and student data.
      Built APIs to support both the landing page and the admin panel functionalities.Implemented multi-language support to serve users in multiple regions.
    `,
    technologies: ["Node.js", "Express", "MongoDB"],
    features: [
      "Custom content type definitions",
      "Content versioning and publishing workflow",
      "Multi-language support",
      "Asset management",
      "Role-based access control",
    ],
    challenges: [
      "Designing a flexible content modeling system",
      "Implementing efficient content versioning",
      "Optimizing REST API for performance",
    ],
    image: "/umft.jpg?height=600&width=1200",
    github: "https://github.com/farruhzoirov",
    liveDemo: "https://umft.uz",
  },
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <p className="mt-4 text-muted-foreground">
          The project you're looking for doesn't exist.
        </p>
        <Link href="/portfolio">
          <Button className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/portfolio">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>
      </Link>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.longDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-pink-500" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Project Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Technologies
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Links
                </h3>
                <div className="mt-2 space-y-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository(It may be private)
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Need a similar solution?</h2>
            <p className="text-muted-foreground mb-4">
              I can build a custom solution tailored to your specific
              requirements.
            </p>
            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
