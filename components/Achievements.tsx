import { ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Achievements() {
  const { achievements, certifications } = portfolio;

  return (
    <Section
      id="achievements"
      eyebrow="Certifications & achievements"
      title="Recognised on national stages"
      description="Hackathon wins where the work was judged head-to-head, plus cloud certifications."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = getIcon(a.icon);
          return (
            <Reveal
              key={a.id}
              delay={i * 0.07}
              className={cn(a.featured && "lg:col-span-1")}
            >
              <Card
                className={cn(
                  "relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
                  a.featured && "border-primary/40 bg-linear-to-br from-primary/10 via-card to-brand-2/10",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-xl",
                      a.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  {a.year ? <Badge variant="outline">{a.year}</Badge> : null}
                </div>
                <p className="text-gradient mt-5 text-4xl font-semibold tracking-tight">
                  {a.result}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  {a.event}
                </h3>
                <p className="text-sm font-medium text-primary">{a.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.detail}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Cloud certifications
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => {
            const Icon = getIcon(cert.icon);
            return (
              <li key={cert.id}>
                <Card className="flex items-center gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-2/10 text-brand-2">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium leading-snug">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Verify ${cert.title} (opens in a new tab)`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </Card>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
