"use client";

import { Check, Copy, Download, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Label, Textarea } from "@/components/ui/input";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { profile } = portfolio;
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus(`Couldn't copy automatically — my email is ${profile.email}.`);
    }
  }

  /**
   * There is no backend on purpose (zero infra, nothing to secure or rate
   * limit): the form validates natively, then hands the message to the visitor's
   * mail client via a prefilled mailto: link.
   */
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app with the message ready to send…");
  }

  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "in/tejas-pingale",
      href: profile.social.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
    {
      label: "GitHub",
      value: "Tejas953",
      href: profile.social.github,
      icon: GithubIcon,
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something that works in production"
      description="I'm available to join immediately for Full-Stack, AI Engineering and Forward Deployed Engineer roles. Send a note, or grab my resume."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Links + resume */}
        <div className="space-y-6 lg:col-span-2">
          <Reveal>
            <Card className="p-2">
              <ul>
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-[1.15rem]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-muted-foreground">
                            {link.label}
                          </span>
                          <span className="block truncate text-sm font-medium">
                            {link.value}
                          </span>
                        </span>
                        {link.external ? (
                          <span className="sr-only">(opens in a new tab)</span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
                <li className="flex items-center gap-4 p-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground">
                    <MapPin className="size-[1.15rem]" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Location
                    </span>
                    <span className="block text-sm font-medium">
                      {profile.location}
                    </span>
                  </span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="relative overflow-hidden border-primary/30 bg-linear-to-br from-primary/10 via-card to-card p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <FileText className="size-6" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">Resume</h3>
                    <Badge variant="success">{profile.availability.badge}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    PDF · 2 pages · experience, projects and certifications.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild>
                  <a href={profile.resume.href} download={profile.resume.fileName}>
                    <Download />
                    Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={profile.resume.href} target="_blank" rel="noopener noreferrer">
                    View in browser
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.05} className="lg:col-span-3">
          <Card className="p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  placeholder="Tell me about the role or project…"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" size="lg">
                  <Send />
                  Send message
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={copyEmail}>
                  {copied ? <Check /> : <Copy />}
                  {copied ? "Copied" : "Copy email"}
                </Button>
              </div>

              <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
                {status}
              </p>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
