"use client";

import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Open to opportunities
        </div>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Abhishek Dhakal
        </h1>

        <div className="text-lg sm:text-xl">
          I&apos;m a{" "}
          <Typewriter />
        </div>

        <p className="max-w-md text-sm leading-relaxed text-muted">
          Based in Kathmandu, Nepal. Building clean, scalable solutions with a
          passion for continuous learning and Agile collaboration.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            Get in Touch
          </a>
          <a
            href="#work"
            className="inline-flex h-11 items-center rounded-full border border-card-border bg-card px-6 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
          >
            View Work
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/GGAbhishekDhakal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-all hover:scale-110 hover:text-foreground"
            aria-label="GitHub"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-dhakal-02183a184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-all hover:scale-110 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:gg.abhishekdhakal@gmail.com"
            className="text-muted transition-all hover:scale-110 hover:text-foreground"
            aria-label="Email"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
