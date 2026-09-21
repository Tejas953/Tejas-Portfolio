import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const { profile } = portfolio;

  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          TypeScript, Tailwind CSS &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="transition-colors hover:text-primary"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="transition-colors hover:text-primary"
          >
            <GithubIcon className="size-5" />
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
