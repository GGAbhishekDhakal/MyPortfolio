"use client";

import { useRef } from "react";
import Image from "next/image";
import Typewriter from "./Typewriter";
import Greeting from "./Greeting";
import AnimatedCounter from "./AnimatedCounter";
import { useParallax } from "./useParallax";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const offset = useParallax(sectionRef);
  return (
    <section
      ref={sectionRef}
      className="flex min-h-[85vh] flex-col items-center justify-center bg-transparent px-6 pt-24 pb-16 text-center"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Open to opportunities
        </div>

        <Greeting />

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Abhishek Dhakal
        </h1>

        <Image
          src="/profile.png"
          alt="Abhishek Dhakal"
          width={160}
          height={160}
          className="rounded-full border-2 border-card-border object-cover shadow-lg"
          priority
        />

        <div className="text-lg text-muted sm:text-xl">
          <span className="mr-1">I build things as a</span>
          <Typewriter />
        </div>

        <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          Full-stack developer from Kathmandu, Nepal — turning complex problems
          into clean, scalable .NET applications. I love writing code that
          actually works, learning something new every day, and shipping
          products that make a difference.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            Let&apos;s Talk
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-card-border bg-card px-6 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
          >
            See My Work
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          <AnimatedCounter target={5} suffix="+" label="Years Experience" />
          <AnimatedCounter target={15} suffix="+" label="Projects Delivered" />
          <AnimatedCounter target={3} label="Companies" />
          <AnimatedCounter target={2} label="Hackathon Wins" />
        </div>
      </div>
    </section>
  );
}
