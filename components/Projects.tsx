"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { ArchitectureViewer } from "@/components/ArchitectureViewer";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types/portfolio";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise & CMS" },
  { id: "ai", label: "AI / ML" },
  { id: "hackathon", label: "Hackathon wins" },
];

const matches = (project: Project, filter: Filter) =>
  filter === "all" || project.categories.includes(filter);

export function Projects() {
  const { projects } = portfolio;
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible = useMemo(
    () => projects.filter((p) => matches(p, filter)),
    [filter, projects],
  );

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Systems I've built, and how they work"
      description="Enterprise CMS migrations, applied-AI products and award-winning hackathon builds. Where a design diagram exists, open it for an interactive walkthrough of the architecture and the decisions behind it."
    >
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const count = projects.filter((p) => matches(p, f.id)).length;
          const pressed = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(f.id)}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors",
                pressed
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card/40 text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {f.label}
              <span
                className={cn(
                  "rounded-full px-1.5 text-xs tabular-nums",
                  pressed ? "bg-primary-foreground/20" : "bg-muted",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <ProjectCard project={project} onOpenArchitecture={setActiveId} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <ArchitectureViewer
        project={activeProject}
        open={activeProject !== null}
        onOpenChange={(open) => {
          if (!open) setActiveId(null);
        }}
      />
    </Section>
  );
}
