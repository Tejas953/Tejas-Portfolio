"use client";

import {
  Check,
  Database,
  ExternalLink,
  Flag,
  Lightbulb,
  Monitor,
  Plug,
  Server,
  Sparkles,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type {
  ArchitectureDoc,
  ArchNode,
  NodeKind,
  Project,
} from "@/types/portfolio";

/* -------------------------------------------------------------------------- */
/*  Node presentation                                                         */
/* -------------------------------------------------------------------------- */

const kindMeta: Record<
  NodeKind,
  { label: string; chip: string; icon: LucideIcon }
> = {
  client: {
    label: "Client",
    chip: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300",
    icon: Monitor,
  },
  service: {
    label: "Service",
    chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
    icon: Server,
  },
  ai: {
    label: "AI / ML",
    chip: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300",
    icon: Sparkles,
  },
  data: {
    label: "Data store",
    chip: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300",
    icon: Database,
  },
  external: {
    label: "External system",
    chip: "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300",
    icon: Plug,
  },
  output: {
    label: "Output",
    chip: "border-primary/30 bg-primary/10 text-primary",
    icon: Flag,
  },
};

/* -------------------------------------------------------------------------- */
/*  Viewer                                                                    */
/* -------------------------------------------------------------------------- */

interface ArchitectureViewerProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ArchitectureViewer({
  project,
  open,
  onOpenChange,
}: ArchitectureViewerProps) {
  const architecture = project?.architecture;

  return (
    <Dialog open={open && !!architecture} onOpenChange={onOpenChange}>
      <DialogContent className="h-[min(92dvh,860px)] max-w-6xl gap-0 p-0">
        {project && architecture ? (
          <>
            <DialogHeader className="border-b p-5 pr-14 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{project.period}</Badge>
                <Badge variant="outline">{project.context}</Badge>
              </div>
              <DialogTitle className="mt-1 text-balance">
                {project.title} — system design
              </DialogTitle>
              <DialogDescription className="max-w-3xl leading-relaxed">
                {architecture.overview}
              </DialogDescription>
            </DialogHeader>

            <Tabs
              key={project.id}
              defaultValue="flow"
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="overflow-x-auto px-5 pt-4 sm:px-6">
                <TabsList>
                  <TabsTrigger value="flow">System flow</TabsTrigger>
                  <TabsTrigger value="decisions">Design decisions</TabsTrigger>
                  <TabsTrigger value="diagram">Original diagram</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent
                value="flow"
                className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6"
              >
                <FlowTab architecture={architecture} />
              </TabsContent>

              <TabsContent
                value="decisions"
                className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6"
              >
                <DecisionsTab architecture={architecture} />
              </TabsContent>

              <TabsContent
                value="diagram"
                className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6"
              >
                <DiagramTab architecture={architecture} />
              </TabsContent>
            </Tabs>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tab: interactive system flow                                              */
/* -------------------------------------------------------------------------- */

function FlowTab({ architecture }: { architecture: ArchitectureDoc }) {
  const allNodes = useMemo(
    () => architecture.stages.flatMap((s) => s.nodes),
    [architecture],
  );
  const [selectedId, setSelectedId] = useState(allNodes[0]?.id ?? "");
  const selected = allNodes.find((n) => n.id === selectedId) ?? allNodes[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Select a component to see what it does and why it exists.
        </p>
        <ol className="space-y-0">
          {architecture.stages.map((stage, stageIndex) => {
            const isLast = stageIndex === architecture.stages.length - 1;
            const selectedInStage = stage.nodes.some((n) => n.id === selectedId);
            return (
              <li key={stage.label}>
                <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(stageIndex + 1).padStart(2, "0")} · {stage.label}
                </p>
                <div
                  className={cn(
                    "grid gap-2",
                    stage.nodes.length > 1 && "sm:grid-cols-2",
                  )}
                >
                  {stage.nodes.map((node) => (
                    <NodeButton
                      key={node.id}
                      node={node}
                      selected={node.id === selectedId}
                      onSelect={() => setSelectedId(node.id)}
                    />
                  ))}
                </div>

                {/* Small screens: show the detail inline under the stage */}
                {selectedInStage && selected ? (
                  <div className="mt-3 lg:hidden">
                    <NodeDetail node={selected} />
                  </div>
                ) : null}

                {!isLast ? (
                  <div aria-hidden className="flex h-8 justify-center py-1.5">
                    <span className="flow-line w-0.5 animate-flow rounded-full" />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Large screens: sticky detail panel */}
      <aside
        aria-label="Component details"
        className="hidden self-start lg:sticky lg:top-0 lg:block"
      >
        {selected ? <NodeDetail node={selected} /> : null}
      </aside>
    </div>
  );
}

function NodeButton({
  node,
  selected,
  onSelect,
}: {
  node: ArchNode;
  selected: boolean;
  onSelect: () => void;
}) {
  const meta = kindMeta[node.kind];
  const Icon = meta.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border p-3 text-left transition-all",
        selected
          ? "border-primary bg-primary/10 shadow-[0_0_28px_-10px_var(--primary)]"
          : "bg-card hover:border-primary/40 hover:bg-accent/40",
      )}
    >
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-md border",
          meta.chip,
        )}
      >
        <Icon className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium leading-tight">
          {node.label}
        </span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          {meta.label}
        </span>
      </span>
    </button>
  );
}

function NodeDetail({ node }: { node: ArchNode }) {
  const meta = kindMeta[node.kind];
  const Icon = meta.icon;
  return (
    <div
      key={node.id}
      className="animate-fade-in rounded-xl border bg-card p-5"
      aria-live="polite"
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
          meta.chip,
        )}
      >
        <Icon className="size-3.5" />
        {meta.label}
      </span>
      <h4 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
        {node.label}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {node.summary}
      </p>

      {node.details?.length ? (
        <ul className="mt-4 space-y-2">
          {node.details.map((detail) => (
            <li key={detail} className="flex gap-2 text-sm leading-snug">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {node.tech?.length ? (
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
          {node.tech.map((t) => (
            <li key={t}>
              <Badge variant="secondary">{t}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tab: design decisions & outcomes                                          */
/* -------------------------------------------------------------------------- */

function DecisionsTab({ architecture }: { architecture: ArchitectureDoc }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <section aria-labelledby="decisions-heading">
        <h4
          id="decisions-heading"
          className="mb-4 flex items-center gap-2 text-sm font-semibold"
        >
          <Lightbulb className="size-4 text-primary" />
          Key design choices
        </h4>
        <ol className="space-y-3">
          {architecture.decisions.map((decision, i) => (
            <li key={decision.title} className="flex gap-4 rounded-xl border bg-card p-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                {i + 1}
              </span>
              <div>
                <p className="font-medium leading-snug">{decision.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {decision.rationale}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="outcomes-heading" className="self-start rounded-xl border bg-card p-5">
        <h4 id="outcomes-heading" className="mb-4 text-sm font-semibold">
          Results
        </h4>
        <ul className="space-y-3">
          {architecture.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-2.5 text-sm leading-snug">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tab: original diagram with zoom                                           */
/* -------------------------------------------------------------------------- */

function DiagramTab({ architecture }: { architecture: ArchitectureDoc }) {
  const [zoomed, setZoomed] = useState(false);
  const { diagram } = architecture;

  return (
    <figure>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <figcaption className="text-sm text-muted-foreground">
          {diagram.caption}
        </figcaption>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoomed((z) => !z)}
            aria-pressed={zoomed}
          >
            {zoomed ? <ZoomOut /> : <ZoomIn />}
            {zoomed ? "Fit to width" : "Zoom in"}
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={diagram.src} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
              Open full size
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="max-h-[62vh] overflow-auto rounded-xl border bg-background">
        <Image
          src={diagram.src}
          alt={diagram.alt}
          width={diagram.width}
          height={diagram.height}
          quality={90}
          sizes={zoomed ? "2400px" : "(min-width: 1024px) 1100px, 100vw"}
          className="h-auto max-w-none transition-[width] duration-300"
          style={{ width: zoomed ? "200%" : "100%" }}
        />
      </div>
    </figure>
  );
}
