"use client";

import { Check, ExternalLink, Network, Trophy } from "lucide-react";
import Image from "next/image";

import { GithubIcon } from "@/components/BrandIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenArchitecture: (projectId: string) => void;
}

export function ProjectCard({ project, onOpenArchitecture }: ProjectCardProps) {
  const Icon = getIcon(project.icon);
  const { links, architecture } = project;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden border-b bg-muted">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-br from-primary/25 via-card to-brand-2/25"
          >
            <div className="bg-grid absolute inset-0 opacity-70" />
            <Icon className="absolute bottom-5 right-6 size-24 text-primary/35 transition-transform duration-500 group-hover:scale-110" />
            <p className="absolute bottom-5 left-5 max-w-[60%] font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-foreground/55">
              {project.context.split(" · ")[0]}
              <br />
              <span className="text-primary/80">{project.categories[0]}</span>
            </p>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs text-muted-foreground">
            {project.period}
          </p>
          {project.award ? (
            <Badge variant="success">
              <Trophy />
              {project.award}
            </Badge>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{project.context}</p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm leading-snug text-foreground/90"
            >
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t pt-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="text-xl font-semibold tabular-nums leading-none">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {architecture ? (
            <Button
              size="sm"
              onClick={() => onOpenArchitecture(project.id)}
              aria-haspopup="dialog"
            >
              <Network />
              View architecture
              <span className="sr-only"> for {project.title}</span>
            </Button>
          ) : null}
          {links.live ? (
            <Button asChild size="sm" variant="outline">
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink />
                Live demo
                <span className="sr-only"> of {project.title} (opens in a new tab)</span>
              </a>
            </Button>
          ) : null}
          {links.repo ? (
            <Button asChild size="sm" variant="outline">
              <a href={links.repo} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                Source
                <span className="sr-only"> code for {project.title} (opens in a new tab)</span>
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
