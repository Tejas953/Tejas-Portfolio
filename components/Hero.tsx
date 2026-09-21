"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { profile } = portfolio;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-brand-2/15 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-2">
            <Badge variant="success" className="gap-2 py-1 pl-2 pr-3 text-[0.8rem]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-success opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {profile.availability.badge}
            </Badge>
            <Badge variant="outline" className="py-1">
              <MapPin />
              {profile.location}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm tracking-wide text-primary sm:text-base"
          >
            {profile.roles.join("  /  ")}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {profile.summary}
          </motion.p>

          <motion.ul
            variants={item}
            aria-label="Core technologies"
            className="mt-6 flex max-w-2xl flex-wrap gap-2"
          >
            {profile.heroStack.map((tech) => (
              <li key={tech}>
                <Badge variant="secondary" className="px-3 py-1 text-[0.8rem]">
                  {tech}
                </Badge>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={profile.resume.href} download={profile.resume.fileName}>
                <Download />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                <ArrowDown />
                View Projects
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="size-12"
            >
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                <GithubIcon className="size-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Three lenses */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <Card className="glass relative overflow-hidden p-5 shadow-2xl shadow-primary/5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
            />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              How I work
            </p>
            <ul className="space-y-3">
              {profile.pillars.map((pillar) => {
                const Icon = getIcon(pillar.icon);
                return (
                  <li
                    key={pillar.id}
                    className="rounded-lg border bg-background/50 p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-[1.1rem]" />
                      </span>
                      <p className="text-sm font-semibold">{pillar.title}</p>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {profile.availability.detail}.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
