import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HackathonHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="inline-flex">Registration Open</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hackathon Valley Quarter 2 Hackathon 2025
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join the largest hackathon in the valley. 48 hours of coding, collaboration, and innovation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="h-12">
                  Go to Dashboard
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="h-12">
                  Register Now
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="font-medium">1000+</span> Participants
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">$50K</span> in Prizes
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Oct 15-17</span> 2025
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg">
              <Image
                src="/hackathon_Valley.jpg?height=100%&width=100%"
                width={600}
                height={600}
                alt="Hackathon Valley"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
