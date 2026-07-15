import Reveal from "./Reveal";

const categories = [
  {
    title: "Programming & Frameworks",
    skills: [
      "C#",
      "ASP.NET Core (.NET 8 & 9)",
      ".NET Framework",
      "Web API",
      "Minimal API",
      "MVC",
      "Entity Framework Core",
      "LINQ",
    ],
  },
  {
    title: "Databases",
    skills: [
      "Microsoft SQL Server",
      "PostgreSQL",
      "Oracle",
      "PL/SQL",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Windows Server",
      "IIS Server",
      "AWS EC2",
      "Docker",
      "Git",
      "GitHub",
      "Bitbucket",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Angular",
      "Ember.js",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Architecture & Design",
    skills: [
      "Clean Architecture",
      "Domain-Driven Design",
      "Repository & Unit of Work",
      "Microservices",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Team Collaboration",
      "Problem-Solving",
      "Continuous Learning",
      "Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Skills
          </h2>
          <p className="mb-12 text-sm text-muted">
            Technologies and tools I work with.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
                    >
                      {skill}
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
