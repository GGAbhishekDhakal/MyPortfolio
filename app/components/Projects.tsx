"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { useParallax } from "./useParallax";

const projects = [
  {
    title: "MoneyFex / KIIPay",
    subtitle: "International Remittance Platform",
    description:
      "A secure cross-border remittance system supporting bank transfers, mobile money, and cash pickups. I integrated Stripe for online payments, optimized the data flow, and helped ensure a smooth experience for users sending money across borders.",
    tags: [".NET", "Stripe", "Payments"],
    featured: true,
  },
  {
    title: "COE Management System",
    subtitle: "Hackathon Runner-Up 2024",
    description:
      "Built during a company hackathon — a management system for internal training programs with attendance tracking, team grouping, and session management. Our team took second place out of 20+ entries.",
    tags: [".NET", "Full-Stack", "Internal Tools"],
    featured: false,
  },
  {
    title: "BMS — Breeder Management System",
    subtitle: "Valley Cold Store",
    description:
      "An app for commercial broiler farmers to manage poultry operations — flock health tracking, inventory management, daily entries, and cash flow reports that reveal real insights into productivity and profitability.",
    tags: [".NET", "SQL Server", "Agriculture"],
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const headingRef = useRef<HTMLDivElement>(null);
  const offset = useParallax(headingRef);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div ref={headingRef} style={{ transform: `translateY(${offset}px)` }}>
          <Reveal>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
              Things I&apos;ve Built
            </h2>
            <p className="mb-12 text-sm text-muted">
              A few projects I&apos;m proud of — from hackathon experiments to
              production systems handling real money.
            </p>
          </Reveal>
        </div>

        {featured && (
          <Reveal delay={100}>
            <div className="group mb-6 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 p-8 transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  ⭐ Featured
                </span>
                <span className="text-xs text-muted">{featured.subtitle}</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {featured.title}
              </h3>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {featured.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {featured.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={i} delay={200 + i * 100}>
              <div className="group flex h-full flex-col rounded-xl border border-card-border card-glass p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <p className="mb-1 text-xs font-medium text-accent">
                  {project.subtitle}
                </p>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
