import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HackathonHero } from "@/components/hackathon-hero"
import { HackathonFeatures } from "@/components/hackathon-features"
import { HackathonSponsors } from "@/components/hackathon-sponsors"
import { HackathonFAQ } from "@/components/hackathon-faq"
import { HackathonFooter } from "@/components/hackathon-footer"
import { HackathonNavbar } from "@/components/hackathon-navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HackathonNavbar />
      <main className="flex-1">
        <HackathonHero />
        <HackathonFeatures />
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Hack?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of innovators and creators at Hackathon Valley. Register now to secure your spot!
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
            </div>
          </div>
        </section>
        <HackathonSponsors />
        <HackathonFAQ />
      </main>
      <HackathonFooter />
    </div>
  )
}
