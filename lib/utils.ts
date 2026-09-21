import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Canonical site origin for metadata, sitemap and Open Graph.
 *
 * Never throws: an unset, empty (`NEXT_PUBLIC_SITE_URL=""`), scheme-less or
 * malformed value falls back instead of failing the build. On Vercel, the
 * production domain is picked up automatically when the variable isn't set.
 */
function resolveSiteUrl(): string {
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (vercelHost ? `https://${vercelHost}` : "");

  if (!candidate) return FALLBACK_SITE_URL;

  const withScheme = /^https?:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`;

  try {
    return new URL(withScheme).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteUrl = resolveSiteUrl();
