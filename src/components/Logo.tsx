 "use client";

import React from "react";

import { cn } from "../lib/cn";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, alt = "Van der Starre", variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex flex-col justify-center", className)} aria-label={alt}>
      <span
        className={cn(
          "font-extrabold text-lg leading-tight tracking-tight",
          variant === "inverse" ? "text-white" : "text-[#C8181B]"
        )}
      >
        Van der Starre
      </span>
      <span
        className={cn(
          "text-xs font-medium leading-tight",
          variant === "inverse" ? "text-white/70" : "text-[#6E6660]"
        )}
      >
        Timmerman &amp; Onderhoud
      </span>
    </div>
  );
}
