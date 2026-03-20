import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "TechStart Labs",
    date: "Jun 2025 — Aug 2025",
    description: [
      "Developed responsive UI components using React and TypeScript, improving user engagement by 25%",
      "Collaborated with senior developers on a customer-facing dashboard that served 10,000+ daily users",
      "Implemented automated testing with Jest and React Testing Library, achieving 85% code coverage",
    ],
    skills: ["React", "TypeScript", "Jest"],
  },
  {
    title: "Lead Developer",
    company: "University Capstone Project",
    date: "Jan 2025 — May 2025",
    description: [
      "Led a team of 4 students to build a full-stack course scheduling application for the CS department",
      "Designed and implemented a PostgreSQL database schema to handle complex scheduling constraints",
      "Built a RESTful API with Node.js and Express, integrating with the university's existing systems",
    ],
    skills: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Web Development Volunteer",
    company: "Code for Community",
    date: "Sep 2024 — Present",
    description: [
      "Volunteer developer for a local nonprofit, building and maintaining their donation platform",
      "Migrated legacy PHP codebase to a modern React frontend, reducing page load times by 60%",
      "Mentored 3 new volunteers on web development best practices and Git workflow",
    ],
    skills: ["React", "Tailwind CSS", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <div className="mt-10">
          <div className="relative space-y-12 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border md:before:left-[140px]">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 md:pl-[180px]">
                <div className="absolute left-0 top-2 size-2 rounded-full bg-primary md:left-[140px]" />
                <span className="mb-2 block text-sm text-muted-foreground md:absolute md:left-0 md:top-0 md:w-[120px] md:text-right">
                  {exp.date}
                </span>
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-full px-2.5 py-0.5 text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
