import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <Avatar className="size-32 border-4 border-primary/20 shadow-xl md:size-40">
            <AvatarImage src="/ariana-siddayao.png" alt="Ariana Siddayao" />
            <AvatarFallback className="text-3xl font-semibold">AS</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Information Technology Student & Aspiring Fullstack Developer
            </h1>
            <p className="mt-6 max-w-2xl text-justify text-pretty leading-relaxed text-muted-foreground">
              {"I am a dedicated IT student at St. Paul University Philippines with a strong focus on building dynamic, end-to-end web applications. I enjoy bridging the gap between robust backend logic and clean, interactive frontend designs. My toolkit currently revolves around Laravel, Next.js, and Tailwind CSS, and I am always eager to dive into modern frameworks to build tools that solve real-world problems."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
