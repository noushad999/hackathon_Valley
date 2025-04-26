import { Code, Lightbulb, Trophy, Users } from "lucide-react"

export function HackathonFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Join Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Ultimate Hackathon Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hackathon Valley brings together the brightest minds to solve real-world problems through technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Team Collaboration</h3>
              </div>
              <p className="text-muted-foreground">
                Form teams of up to 4 people or join existing teams. Collaborate with like-minded innovators.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mentorship & Workshops</h3>
              </div>
              <p className="text-muted-foreground">
                Get guidance from industry experts through mentorship sessions and skill-building workshops.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cutting-Edge Tech</h3>
              </div>
              <p className="text-muted-foreground">
                Access to the latest technologies and APIs from our sponsors to build your innovative solutions.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Amazing Prizes</h3>
              </div>
              <p className="text-muted-foreground">
                Compete for over $50,000 in prizes across multiple categories and special sponsor challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
