import { PlaceholderLogo } from "@/components/placeholder-logo"

export function HackathonSponsors() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="sponsors">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Sponsors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hackathon Valley is made possible by our amazing sponsors who support innovation and technology.
            </p>
          </div>
        </div>
        <div className="space-y-12 py-8">
          <div className="space-y-4">
            <h3 className="text-center text-xl font-medium">Platinum Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={`platinum-${i}`} className="flex items-center justify-center">
                  <PlaceholderLogo className="h-12" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-center text-xl font-medium">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`gold-${i}`} className="flex items-center justify-center">
                  <PlaceholderLogo className="h-10" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-center text-xl font-medium">Silver Sponsors</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center justify-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`silver-${i}`} className="flex items-center justify-center">
                  <PlaceholderLogo className="h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
