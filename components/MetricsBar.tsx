import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { portfolio } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

export function MetricsBar() {
  const { metrics } = portfolio;

  return (
    <Section
      id="impact"
      eyebrow="Impact"
      title="Engineering outcomes, in numbers"
      description="Measured results from production work at Contentstack, internships and hackathons — each figure traces back to my resume."
      className="py-16 sm:py-24"
    >
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => {
          const Icon = getIcon(metric.icon);
          return (
            <li key={metric.id} className="bg-card">
              <Reveal
                delay={i * 0.05}
                y={12}
                className="group relative h-full p-6 transition-colors hover:bg-accent/40"
              >
                <Icon
                  aria-hidden
                  className="absolute right-5 top-5 size-5 text-muted-foreground/50 transition-colors group-hover:text-primary"
                />
                <p className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
                  <CountUp
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </p>
                <p className="mt-3 text-sm font-medium">{metric.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {metric.context}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
