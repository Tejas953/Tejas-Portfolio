import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative scroll-mt-16 py-20 sm:py-28", className)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
