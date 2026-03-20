import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Capstone Project (Ongoing)",
    description:
      "Our capstone project repository. This contains the full source code, project structure, and implementation details for DEVELOPMENT_BEU.",
    tech: ["Capstone", "Git", "Collaboration"],
    github: "https://github.com/TheaMarieM/DEVELOPMENT_BEU.git",
  },
  {
    title: "Flutter Card Project",
    description:
      "A simple Flutter card application focused on basic UI layout and component structuring in Flutter.",
    tech: ["Flutter", "Dart", "UI"],
    github: "https://github.com/aria-na/yana_flutter_project1.git",
  },
  {
    title: "Thoughts Website",
    description:
      "A Laravel-based thoughts website, similar to a lightweight Twitter/Threads style posting platform.",
    tech: ["Laravel", "PHP", "Web"],
    github: "https://github.com/aria-na/siddayao_exam.git",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col border-border/40 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5 text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 size-4" />
                      Repository
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
