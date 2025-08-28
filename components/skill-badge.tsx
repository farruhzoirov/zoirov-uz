import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SkillBadgeProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  color?:
    | "default"
    | "html"
    | "css"
    | "js"
    | "tailwind"
    | "angular"
    | "node"
    | "express"
    | "nest"
    | "websockets"
    | "mongodb"
    | "mysql"
    | "postgres"
    | "api"
    | "graphql"
    | "auth"
    | "docker";
  icon?: LucideIcon;
}

export function SkillBadge({
  name,
  color = "default",
  icon: Icon,
  className,
  ...props
}: SkillBadgeProps) {
  const colorClasses = {
    default: "bg-primary/10 text-primary dark:bg-primary/20",
    html: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    css: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    js: "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
    tailwind:
      "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
    angular: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400",

    // Backend stack ranglari
    node: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    express:
      "bg-gray-500/10 text-gray-600 dark:bg-gray-500/20 dark:text-gray-400",
    nest: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400",
    mongodb:
      "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
    mysql: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400",
    postgres:
      "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
    api: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400",
    graphql:
      "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400",
    auth: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    docker:
      "bg-blue-400/10 text-blue-500 dark:bg-blue-400/20 dark:text-blue-300",
    websockets:
      "bg-orange-400/10 text-orange-500 dark:bg-orange-400/20 dark:text-orange-300",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium gap-1.5",
        colorClasses[color],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {name}
    </div>
  );
}
