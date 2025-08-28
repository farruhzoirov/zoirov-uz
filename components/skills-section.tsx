import { SkillBadge } from "@/components/skill-badge";
import {
  Code2,
  FileJson,
  Palette,
  Layers,
  Cpu,
  LayoutGrid,
  Boxes,
  Smartphone,
  PenTool,
  Database,
  Network,
  GitBranch,
  Package,
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "JavaScript", color: "js" as const, icon: Code2 },
    { name: "Node.js", color: "node" as const, icon: Cpu },
    { name: "Express.js", color: "express" as const, icon: Boxes },
    { name: "Nest.js", color: "nest" as const, icon: Layers },
    { name: "TypeScript", color: "default" as const, icon: FileJson },
    { name: "MongoDB", color: "mongodb" as const, icon: Database },
    { name: "MySQL", color: "mysql" as const, icon: Database },
    { name: "PostgreSQL", color: "postgres" as const, icon: Database },
    { name: "REST API", color: "api" as const, icon: Network },
    { name: "JWT & Auth", color: "auth" as const, icon: Network },
    { name: "Websockets", color: "websockets" as const, icon: Layers },
    { name: "Docker", color: "docker" as const, icon: Package },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">
            Mening <span className="gradient-text">ko'nikmalarim</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Men yuqori samaradorlikka ega backend tizimlari va foydalanuvchilar
            uchun qulay xizmatlarni yaratishda ushbu texnologiyalardan
            foydalanaman.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              color={skill.color}
              icon={skill.icon}
              className="text-sm py-1.5 px-3"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
