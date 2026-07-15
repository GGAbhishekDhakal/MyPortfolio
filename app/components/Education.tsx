import Reveal from "./Reveal";

const education = [
  {
    degree: "BSc (Hons) Business Computing & Information Systems",
    school: "Softwarica College of IT & E-Commerce (Coventry University)",
    location: "Dillibazar, Kathmandu",
    year: "2020",
  },
  {
    degree: "Intermediate in Management (HSEB)",
    school: "Kathmandu Institute of Science & Technology (KIST)",
    location: "Kamalpokhari, Kathmandu",
    year: "2016",
  },
  {
    degree: "School Leaving Certificate (SLC)",
    school: "Newton Children's Academy",
    location: "Baluwatar, Kathmandu",
    year: "2014",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Education
          </h2>
          <p className="mb-12 text-sm text-muted">
            Academic background and qualifications.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {edu.year}
                </span>
                <h3 className="mb-1 text-sm font-semibold leading-snug text-foreground">
                  {edu.degree}
                </h3>
                <p className="mb-1 text-sm text-muted">{edu.school}</p>
                <p className="text-xs text-muted">{edu.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
