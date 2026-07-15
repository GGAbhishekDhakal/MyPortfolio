import Reveal from "./Reveal";

const categories = [
  {
    title: "Languages & Frameworks",
    icon: "💻",
    skills: [
      { name: "C#", className: "skill-tag-csharp" },
      { name: "ASP.NET Core (.NET 8 & 9)", className: "skill-tag-dotnet" },
      { name: ".NET Framework", className: "skill-tag-dotnet" },
      { name: "Web API", className: "skill-tag-dotnet" },
      { name: "Minimal API", className: "skill-tag-dotnet" },
      { name: "MVC", className: "skill-tag-dotnet" },
      { name: "Entity Framework Core", className: "skill-tag-dotnet" },
      { name: "LINQ", className: "skill-tag-dotnet" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "Microsoft SQL Server", className: "skill-tag-sql" },
      { name: "PostgreSQL", className: "skill-tag-sql" },
      { name: "Oracle", className: "skill-tag-sql" },
      { name: "PL/SQL", className: "skill-tag-sql" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Docker", className: "skill-tag-docker" },
      { name: "AWS EC2", className: "skill-tag-aws" },
      { name: "Windows Server", className: "" },
      { name: "IIS Server", className: "" },
      { name: "Git", className: "skill-tag-git" },
      { name: "GitHub", className: "skill-tag-git" },
      { name: "Bitbucket", className: "skill-tag-git" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "Angular", className: "skill-tag-angular" },
      { name: "Ember.js", className: "" },
      { name: "HTML", className: "skill-tag-html" },
      { name: "CSS", className: "skill-tag-css" },
      { name: "JavaScript", className: "skill-tag-js" },
      { name: "TypeScript", className: "skill-tag-typescript" },
    ],
  },
  {
    title: "Architecture",
    icon: "🏗️",
    skills: [
      { name: "Clean Architecture", className: "" },
      { name: "Domain-Driven Design", className: "" },
      { name: "Repository & Unit of Work", className: "" },
      { name: "Microservices", className: "" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: [
      { name: "Communication", className: "" },
      { name: "Team Collaboration", className: "" },
      { name: "Problem-Solving", className: "" },
      { name: "Continuous Learning", className: "" },
      { name: "Documentation", className: "" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            My Toolbox
          </h2>
          <p className="mb-12 text-sm text-muted">
            The technologies, tools, and patterns I reach for when building
            something great.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                  <span className="mr-1.5">{cat.icon}</span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors hover:opacity-80 ${
                        skill.className || "bg-accent/10 text-accent"
                      }`}
                    >
                      {skill.name}
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
