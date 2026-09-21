import type { IconName } from "@/lib/icons";

/* -------------------------------------------------------------------------- */
/*  Profile                                                                   */
/* -------------------------------------------------------------------------- */

export interface Profile {
  name: string;
  /** Role line shown under the name in the hero. */
  headline: string;
  /** Short list used for <title>, JSON-LD and the hero "roles" strip. */
  roles: string[];
  location: string;
  email: string;
  phone: string;
  summary: string;
  availability: {
    /** Badge label, e.g. "Immediate Joiner". */
    badge: string;
    detail: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
  resume: {
    href: string;
    fileName: string;
  };
  /** Stack chips shown in the hero. */
  heroStack: string[];
  /** The three "lenses" from the LinkedIn banner. */
  pillars: Pillar[];
  education: {
    school: string;
    degree: string;
    period: string;
    cgpa: string;
  };
}

export interface Pillar {
  id: string;
  title: string;
  icon: IconName;
  points: string[];
}

/* -------------------------------------------------------------------------- */
/*  Metrics                                                                   */
/* -------------------------------------------------------------------------- */

export interface Metric {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  context: string;
  icon: IconName;
}

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export interface Skill {
  name: string;
  /** Part of the day-to-day core stack (from LinkedIn "Core stack"). */
  core?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: IconName;
  blurb: string;
  skills: Skill[];
}

/* -------------------------------------------------------------------------- */
/*  Projects & architecture                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = "enterprise" | "ai" | "hackathon";

export type NodeKind =
  | "client"
  | "service"
  | "ai"
  | "data"
  | "external"
  | "output";

export interface ArchNode {
  id: string;
  label: string;
  kind: NodeKind;
  summary: string;
  details?: string[];
  tech?: string[];
}

/** A stage is one step in the flow; nodes inside a stage run side by side. */
export interface ArchStage {
  label: string;
  nodes: ArchNode[];
}

export interface DesignDecision {
  title: string;
  rationale: string;
}

export interface ArchitectureDoc {
  overview: string;
  stages: ArchStage[];
  decisions: DesignDecision[];
  outcomes: string[];
  diagram: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  /** Where the work happened (employer, hackathon, internship...). */
  context: string;
  categories: ProjectCategory[];
  icon: IconName;
  summary: string;
  highlights: string[];
  metrics: ProjectMetric[];
  stack: string[];
  /** Small accent badge on the card, e.g. "All-India Rank 1". */
  award?: string;
  /** Optional cover image; a generated gradient cover is used otherwise. */
  cover?: { src: string; alt: string };
  links: {
    live?: string;
    repo?: string;
  };
  /** Present only for projects that ship with an architecture diagram. */
  architecture?: ArchitectureDoc;
}

/* -------------------------------------------------------------------------- */
/*  Experience                                                                */
/* -------------------------------------------------------------------------- */

export type ExperienceType = "Full-time" | "Internship" | "Hackathon";

export interface Milestone {
  period: string;
  title: string;
  detail: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: ExperienceType;
  icon: IconName;
  bullets: string[];
  stack: string[];
  /** Career-growth checkpoints inside a longer engagement. */
  milestones?: Milestone[];
}

/* -------------------------------------------------------------------------- */
/*  Achievements & certifications                                             */
/* -------------------------------------------------------------------------- */

export interface Achievement {
  id: string;
  title: string;
  event: string;
  result: string;
  detail: string;
  year?: string;
  icon: IconName;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: IconName;
  /** Add a verification URL here when available. */
  credentialUrl?: string;
}

/* -------------------------------------------------------------------------- */
/*  Root                                                                      */
/* -------------------------------------------------------------------------- */

export interface Portfolio {
  profile: Profile;
  metrics: Metric[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  certifications: Certification[];
}
