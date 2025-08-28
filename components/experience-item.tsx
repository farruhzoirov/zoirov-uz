import {
  Briefcase,
  Building,
  Calendar,
  Database,
  Network,
  Package,
} from "lucide-react";
import { SkillBadge } from "@/components/skill-badge";
import { formatDate } from "@/lib/utils";
import {
  Code2,
  FileJson,
  Palette,
  Layers,
  Cpu,
  LayoutGrid,
  Boxes,
} from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
  isLast?: boolean;
}

export function ExperienceItem({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies,
  isLast = false,
}: ExperienceItemProps) {
  // Map technology names to icons
  const getIconForTech = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("html")) return Code2;
    if (techLower.includes("css") || techLower.includes("scss")) return Palette;
    if (techLower.includes("javascript")) return FileJson;
    if (techLower.includes("node.js")) return Cpu;
    if (techLower.includes("express.js")) return Boxes;
    if (techLower.includes("nest.js")) return Layers;
    if (techLower.includes("mongodb")) return Database;
    if (techLower.includes("mysql")) return Database;
    if (techLower.includes("ci/cd")) return Package;
    if (techLower.includes("grammy.js")) return Network;
    if (techLower.includes("postgresql")) return Database;
    if (techLower.includes("rest api")) return Network;
    if (techLower.includes("jwt") || techLower.includes("auth")) return Network;
    if (techLower.includes("docker")) return Package;
    if (techLower.includes("websockets")) return Layers;
    if (techLower.includes("typescript")) return Cpu;
    if (techLower.includes("tailwind")) return LayoutGrid;
    if (techLower.includes("angular")) return Boxes;
    if (techLower.includes("material")) return Layers;
    return undefined;
  };

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline connector */}
      <div className="absolute left-4 top-6 bottom-0 w-px bg-border md:left-1/2 md:-ml-0.5"></div>

      <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
        {/* Left side - Company and date */}
        <div className="mb-4 md:mb-0 md:text-right">
          <div className="flex items-center md:justify-end">
            <div className="absolute left-0 mt-1.5 h-8 w-8 rounded-full border bg-background flex items-center justify-center md:relative md:left-auto md:mt-0 md:ml-4">
              <Building className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-lg font-semibold pl-1.5">{company}</h3>
          </div>
          <p className="text-muted-foreground">{location}</p>
          <p className="text-sm text-muted-foreground">
            {startDate} - {endDate ? endDate : "hozirgacha"}
          </p>
        </div>

        {/* Right side - Role and description */}
        <div>
          <h4 className="text-base font-medium">{title}</h4>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc pl-4">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {technologies && technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <SkillBadge
                  key={tech}
                  name={tech}
                  icon={getIconForTech(tech)}
                  color={
                    tech.toLowerCase().includes("html")
                      ? "html"
                      : tech.toLowerCase().includes("css") ||
                        tech.toLowerCase().includes("scss")
                      ? "css"
                      : tech.toLowerCase().includes("javascript")
                      ? "js"
                      : tech.toLowerCase().includes("tailwind")
                      ? "tailwind"
                      : tech.toLowerCase().includes("angular")
                      ? "angular"
                      : tech.toLowerCase().includes("node")
                      ? "node"
                      : tech.toLowerCase().includes("express")
                      ? "express"
                      : tech.toLowerCase().includes("nest")
                      ? "nest"
                      : tech.toLowerCase().includes("websocket")
                      ? "websockets"
                      : tech.toLowerCase().includes("mongodb")
                      ? "mongodb"
                      : tech.toLowerCase().includes("mysql")
                      ? "mysql"
                      : tech.toLowerCase().includes("postgres")
                      ? "postgres"
                      : tech.toLowerCase().includes("api")
                      ? "api"
                      : tech.toLowerCase().includes("graphql")
                      ? "graphql"
                      : tech.toLowerCase().includes("auth") ||
                        tech.toLowerCase().includes("jwt")
                      ? "auth"
                      : tech.toLowerCase().includes("docker")
                      ? "docker"
                      : "default"
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
