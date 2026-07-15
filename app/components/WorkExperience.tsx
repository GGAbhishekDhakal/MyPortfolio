import Reveal from "./Reveal";

const jobs = [
  {
    role: "Software Engineer II",
    company: "Infinite Computer Solutions",
    location: "Hattisar, Kathmandu",
    period: "February 2024 – Present",
    highlights: [
      "Implemented secure authentication flows using Okta (SSO) across multiple applications",
      "Built reusable front-end modules in Ember.js, integrated with backend APIs",
      "Actively contributed to Agile sprints — from planning to deployment",
      "Runner-Up in Infinite Hackathon 2024 for building a full-stack COE app",
    ],
  },
  {
    role: "Software Engineer I",
    company: "Cotiviti Nepal Pvt. Ltd.",
    location: "Hattisar, Kathmandu",
    period: "September 2022 – February 2024",
    highlights: [
      "Worked on backend development using .NET, focusing on API integration, data handling, and authentication",
      "Integrated Angular and Ember.js frontends with .NET APIs",
      "Gained exposure to code quality and security tools like SonarQube, Veracode, and penetration testing",
      "Led a team in an internal Hackathon to build a Jira-based performance dashboard",
    ],
  },
  {
    role: "Intern — Associate .NET Developer",
    company: "Riddhasoft Pvt. Ltd.",
    location: "Thapagaun, Kathmandu",
    period: "August 2020 – September 2022",
    highlights: [
      "Grew from intern to developer, working on .NET projects using MVC, Web API, and Repository Pattern",
      "Built and maintained applications with Entity Framework and SQL Server",
      "Gained exposure to ADO.net and real-world IoT system deployment",
      "Managed full project lifecycles and provided client-facing support",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Where I&apos;ve Worked
          </h2>
          <p className="mb-12 text-sm text-muted">
            A timeline of my professional journey — from eager intern to
            building production systems at scale.
          </p>
        </Reveal>

        <div className="relative gap-8 space-y-12 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-card-border md:ml-4 md:before:left-[11px]">
          {jobs.map((job, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="relative pl-8 md:pl-12">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-accent bg-background md:left-[4px]" />

                <div className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <span className="whitespace-nowrap rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {job.period}
                    </span>
                  </div>
                  <p className="mb-1 text-sm font-medium text-muted">
                    {job.company}
                  </p>
                  <p className="mb-4 text-xs text-muted">{job.location}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
