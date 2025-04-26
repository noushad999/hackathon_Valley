import Link from "next/link"
import { Code2 } from "lucide-react"

export function HackathonFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Code2 className="h-5 w-5" />
            <span>Hackathon Valley</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Hackathon Valley. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 md:gap-6">
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link href="/sponsors" className="text-sm text-muted-foreground hover:text-foreground">
            Sponsors
          </Link>
        </div>
      </div>
    </footer>
  )
}
