import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aria-na",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ariana-siddayao-1b90343b8/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:arianasiddayao@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-semibold">{"Let's Connect"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {"I'm always open to discussing new projects and opportunities."}
            </p>
            <a
              href="mailto:arianasiddayao@gmail.com"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              arianasiddayao@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label={link.name}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ariana Siddayao. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
