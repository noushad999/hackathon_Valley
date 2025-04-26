"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code2, Menu, X } from "lucide-react"
import { useState } from "react"

export function HackathonNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6" />
          <span>Hackathon Valley</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/#schedule" className="text-sm font-medium hover:text-primary">
            Schedule
          </Link>
          <Link href="/#sponsors" className="text-sm font-medium hover:text-primary">
            Sponsors
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex gap-2">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/#schedule" className="text-sm font-medium hover:text-primary">
              Schedule
            </Link>
            <Link href="/#sponsors" className="text-sm font-medium hover:text-primary">
              Sponsors
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link href="/dashboard">
                <Button variant="outline" className="w-full">
                  Dashboard
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
