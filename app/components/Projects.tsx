import Reveal from "./Reveal";

const projects = [
  {
    title: "MoneyFex / KIIPay",
    subtitle: "International Remittance Platform",
    description:
      "Contributed to a secure cross-border remittance system supporting bank transfers, mobile money, and cash pickups. Integrated Stripe for online payments, optimized data flow, and ensured a smooth user experience for global transactions.",
    tags: [".NET", "Stripe", "Payments"],
    featured: true,
  },
  {
    title: "COE Management System",
    subtitle: "Hackathon Runner-Up 2024",
    description:
      "Built a Center of Excellence (COE) Management System during a company hackathon to manage internal training programs. Features include attendance tracking, team grouping, and efficient session management.",
    tags: [".NET", "Full-Stack", "Internal Tools"],
    featured: false,
  },
  {
    title: "BMS — Breeder Management System",
    subtitle: "Valley Cold Store",
    description:
      "A user-friendly app for commercial broiler farmers to manage poultry operations. Features include flock health tracking, inventory management, daily mortality/expense entries, and flock-wise cash flow reports.",
    tags: [".NET", "SQL Server", "Agriculture"],
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mb-12 text-sm text-muted">
            Key projects I&apos;ve built or contributed to.
          </p>
        </Reveal>

        {featured && (
          <Reveal delay={100}>
            <div className="group mb-6 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 via-card to-accent/10 p-8 transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  Featured
                </span>
                <span className="text-xs text-muted">{featured.subtitle}</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {featured.title}
              </h3>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
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
              <div className="group flex h-full flex-col rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
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
