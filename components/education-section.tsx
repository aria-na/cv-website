import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "St. Paul University Philippines",
  year: "2023 - Present",
  gpa: "1.48",
  courses: [
    "Python Programming",
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Web System and Technologies",
    "Advanced Database Systems",
    "Rich Media Development",
    "Application Development",
    "Platform Technologies",
    "Information Assurance and Security",
    "Integrative and Programming Technologies",
    "Human-Computer Interaction",
    "Computer Network Systems",
    "Game Development",
    "Hybrid Mobile Application",
    "Artificial Intelligence and Robotics",
  ],
}

export function EducationSection() {
  return (
    <section className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        <div className="mt-10">
          <Card className="border-border/40">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="size-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg">{education.degree}</CardTitle>
                <CardDescription className="mt-1">
                  {education.school} • {education.year}
                </CardDescription>
                <p className="mt-1 text-sm font-medium text-primary">
                  Running GWA: {education.gpa}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <Badge
                      key={course}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-sm font-normal"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
