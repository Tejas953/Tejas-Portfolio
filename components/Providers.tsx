"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Dark by default (per design brief); the toggle in the navbar can switch to
 * light. MotionConfig with reducedMotion="user" makes every Framer Motion
 * transform/layout animation respect `prefers-reduced-motion`.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
