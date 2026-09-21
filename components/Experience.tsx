import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import type { ExperienceType } from "@/types/portfolio";

const typeVariant: Record<ExperienceType, "default" | "violet" | "success"> = {
  "Full-time": "default",
  Internship: "violet",
  Hackathon: "success",
};

export function Experience() {
  const { experience, profile } = portfolio;

  return (
    <Section
      id="experience"
      eyebrow="Career timeline"
      title="From hackathon podiums to enterprise modernization"
      description="Computer vision and hackathon wins first, then production CMS platforms, enterprise integrations and applied AI at Contentstack — scope that has grown with every project."
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((job, index) => {
          const Icon = getIcon(job.icon);
          const isCurrent = index === 0;
          return (
            <li key={job.id} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden
                className="absolute -left-[2.15rem] top-5 grid size-8 place-items-center rounded-full border bg-background text-primary sm:-left-[3.4rem] sm:size-10"
              >
                <Icon className="size-4 sm:size-5" />
                {isCurrent ? (
                  <span className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-primary/30" />
                ) : null}
              </span>

              <Reveal>
                <Card className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-base text-primary">
                        {job.company}
                        <span className="text-muted-foreground">
                          {" "}
                          · {job.location}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 sm:items-end">
                      <Badge variant={typeVariant[job.type]}>{job.type}</Badge>
                      <p className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-primary/60"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {job.milestones ? (
                    <div className="mt-6 rounded-xl border bg-background/50 p-4">
                      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                        Growth path at {job.company}
                      </p>
                      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                        {job.milestones.map((m) => (
                          <li
                            key={m.title}
                            className="rounded-lg border bg-card p-3"
                          >
                            <p className="font-mono text-[0.68rem] text-primary">
                              {m.period}
                            </p>
                            <p className="mt-1 text-sm font-medium leading-snug">
                              {m.title}
                            </p>
                            <p className="mt-1 text-xs leading-snug text-muted-foreground">
                              {m.detail}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}

                  <ul
                    aria-label="Technologies used"
                    className="mt-5 flex flex-wrap gap-1.5"
                  >
                    {job.stack.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          );
        })}

        {/* Education */}
        <li className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.15rem] top-5 grid size-8 place-items-center rounded-full border bg-background text-brand-2 sm:-left-[3.4rem] sm:size-10"
          >
            <GraduationCap className="size-4 sm:size-5" />
          </span>
          <Reveal>
            <Card className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {profile.education.degree}
                </h3>
                <p className="mt-0.5 text-base text-brand-2">
                  {profile.education.school}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {profile.education.period}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gradient text-3xl font-semibold tabular-nums">
                  {profile.education.cgpa}
                </p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </div>
            </Card>
          </Reveal>
        </li>
      </ol>
    </Section>
  );
}
