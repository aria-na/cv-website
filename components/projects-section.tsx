import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TaskFlow",
    description:
      "A collaborative task management app with real-time updates, drag-and-drop organization, and team workspaces. Built to help small teams stay organized and productive.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DevBlog",
    description:
      "A modern blogging platform for developers featuring MDX support, syntax highlighting, and a custom CMS. Focused on performance and SEO optimization.",
    tech: ["React", "Node.js", "MongoDB", "MDX"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "WeatherWise",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts. Designed with accessibility in mind.",
    tech: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
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
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 size-4" />
                      Source
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 size-4" />
                      Demo
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
