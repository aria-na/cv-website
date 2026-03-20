import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Docker"],
  },
]

export function SkillsSection() {
  return (
    <section className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-sm font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
