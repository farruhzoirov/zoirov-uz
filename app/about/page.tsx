import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Github, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Backend developer specializing in building robust and scalable systems.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          <div className="aspect-square w-full max-w-[300px] mx-auto overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1">
            <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
              <div className="text-center p-6">
                <h2 className="text-2xl font-bold">Farruh Zoirov</h2>
                <p className="text-muted-foreground mt-2">Backend Developer</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-muted-foreground mr-2" />
              <span>fzoirov29@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-muted-foreground mr-2" />
              <span>+998-97-545-04-09</span>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 text-muted-foreground mr-2" />
              <span>farruhzoirov</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-muted-foreground">
              I'm a backend developer with extensive experience in building robust, scalable systems using Node.js and
              related technologies. My expertise lies in designing efficient APIs, optimizing database performance, and
              implementing secure authentication systems.
            </p>
            <p className="text-muted-foreground mt-4">
              With a strong foundation in JavaScript and TypeScript, I specialize in creating maintainable codebases
              that can grow with your business needs. I'm passionate about clean code, performance optimization, and
              staying up-to-date with the latest industry best practices. I love algorithms and problem-solving skills.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Golang(Basics)</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Express.js</Badge>
                  <Badge>Nest.js</Badge>
                  <Badge>Sequelize</Badge>
                  <Badge>TypeOrm</Badge>
                  <Badge>Mongoose</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Redis</Badge>
                  <Badge>MySQL</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Docker</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Git</Badge>
                  <Badge>Linux</Badge>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Mentor</h3>
                    <p className="text-muted-foreground">Proskill IT Academy</p>
                  </div>
                  <Badge variant="outline">01.05.2025 - Present</Badge>
                </div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Passionate about sharing my Node.js backend knowledge with students and aspiring developers.</li>
                  <li>• Dedicated to helping others succeed in the IT field through mentorship and practical guidance.</li>
                  <li>• Strive to make a positive impact on youth and the community by promoting accessible tech education.</li>
                  <li>• Believe in the power of teaching to create opportunities and inspire growth.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Backend Engineer</h3>
                    <p className="text-muted-foreground">Dynamics-market</p>
                  </div>
                  <Badge variant="outline">01.02.2025 - Present</Badge>
                </div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Built a scalable backend application for an e-commerce platform with thousands of products.</li>
                  <li>• Implemented global product search, multi-language support, and hierarchical category logic.</li>
                  <li>• Integrated with Docker and enabled easy CI/CD deployments for efficient development workflow.</li>
                  <li>• Focused on performance, modularity, and clean API design to support high-volume traffic.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Backend Engineer</h3>
                    <p className="text-muted-foreground">UMFT</p>
                  </div>
                  <Badge variant="outline">01.10.2024 - 01.03.2025</Badge>
                </div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Developed backend APIs for the new version of a university website.</li>
                  <li>• Integrated with the university’s HEMIS API to sync academic and student data.</li>
                  <li>• Built APIs to support both the landing page and the admin panel functionalities.</li>
                  <li>• Implemented multi-language support to serve users in multiple regions.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Frontend Developer</h3>
                    <p className="text-muted-foreground">Fulfil Education</p>
                  </div>
                  <Badge variant="outline">01.11.2023 - 01.02.2025</Badge>
                </div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Developed webinar websites with 50,000+ registered users.</li>
                  <li>• Utilized Netlify and Firebase for hosting and automated CI/CD workflows.</li>
                  <li>• Focused on responsive design, user-friendly interfaces, and efficient data handling.</li>
                  <li>• Ensured high performance and scalability for large user traffic.</li>
                </ul>
              </div>
            </div>
          </div>



          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Bachelor of Science in Software engineering</h3>
                  <p className="text-muted-foreground">Tashkent State Transport University</p>
                </div>
                <Badge variant="outline">2022 - 2026</Badge>
              </div>
              <p className="mt-2 text-muted-foreground">
                Focused on software engineering, database systems, and network programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
