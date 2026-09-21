import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

export function Skills() {
  const { skillGroups } = portfolio;

  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="A full-stack toolbox with an applied-AI edge"
      description="Grouped by where I use them. Highlighted skills are my day-to-day core stack."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = getIcon(group.icon);
          return (
            <Reveal key={group.id} delay={(i % 3) * 0.06} className="h-full">
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="flex-row items-start gap-3 space-y-0">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <CardTitle className="text-base">{group.title}</CardTitle>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {group.blurb}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <Badge variant={skill.core ? "default" : "outline"}>
                          {skill.name}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
