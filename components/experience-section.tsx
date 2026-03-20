import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full-Stack Developer (Co-Creator)",
    company: "St. Paul University Philippines",
    date: "Jan 2026 - Present",
    description: [
      "Co-developing the Student Behavioral Incidents Management System with Data Analytics, a tailored administrative platform for the Basic Education Unit.",
      "Architecting a secure backend infrastructure using PHP and the Laravel framework, paired with a fully normalized MySQL database.",
      "Designing and implementing interactive Data Analytics dashboards to visualize behavioral trends, empowering school administrators to make data-driven decisions.",
      "Collaborating closely with my development partner and project stakeholders to gather requirements, iterate on UI/UX designs, and ensure the software meets institutional needs.",

    ],
    skills: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Data Analytics", "Team Collaboration"],
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
