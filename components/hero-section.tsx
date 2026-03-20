import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <Avatar className="size-32 border-4 border-primary/20 shadow-xl md:size-40">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Alex Chen" />
            <AvatarFallback className="text-3xl font-semibold">AC</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Software Engineering Student & Aspiring Web Developer
            </h1>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {"I'm a passionate developer focused on crafting clean, user-friendly web experiences. Currently pursuing my degree in Computer Science, I spend my time exploring modern frameworks like React and Next.js, building projects that solve real problems, and constantly learning new technologies."}
            </p>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {"My goal is to bridge the gap between beautiful design and functional code. I believe that great software should not only work flawlessly but also delight users with thoughtful interactions and accessible interfaces."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
