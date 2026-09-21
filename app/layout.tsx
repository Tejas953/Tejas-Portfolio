import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Providers } from "@/components/Providers";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/utils";

import "./globals.css";

const { profile } = portfolio;

const title = `${profile.name} — Full-Stack, AI & Forward Deployed Engineer`;
const description =
  "Full-Stack Engineer (React/Next.js, Java/Spring Boot), headless CMS & enterprise integration specialist and applied-AI builder. Smart India Hackathon 2023 winner (All-India Rank 1). Immediate joiner.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.social.linkedin }],
  keywords: [
    "Tejas Pingale",
    "Full-Stack Engineer",
    "Forward Deployed Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "Spring Boot",
    "Contentstack",
    "Headless CMS",
    "Azure AD B2C",
    "Computer Vision",
    "Pune",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Associate Software Engineer",
  worksFor: { "@type": "Organization", name: "Contentstack" },
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
  sameAs: [profile.social.linkedin, profile.social.github],
  knowsAbout: [
    "React",
    "Next.js",
    "Spring Boot",
    "Headless CMS",
    "Enterprise API Integration",
    "Prompt Engineering",
    "Computer Vision",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          // JSON-LD is static, first-party data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
