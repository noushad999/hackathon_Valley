"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { BarChart3, Clock, Home, type LucideIcon, MessageSquare, Settings, User, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { useAuth } from "@/components/auth/auth-provider"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Project",
    href: "/dashboard/project",
    icon: BarChart3,
  },
  {
    title: "Schedule",
    href: "/dashboard/schedule",
    icon: Clock,
  },
  {
    title: "Resources",
    href: "/dashboard/resources",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname()
  const { user } = useAuth()

  if (mobile) {
    return (
      <div className="flex flex-col gap-4 py-2">
        <div className="flex items-center gap-2 px-2">
          <BarChart3 className="h-6 w-6" />
          <span className="text-lg font-semibold">Hackathon Valley</span>
        </div>
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Sidebar className="hidden md:flex">
      <SidebarHeader className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>Hackathon Valley</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user?.username || "User"}</span>
            <span className="text-xs text-muted-foreground">{user?.email || "user@example.com"}</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
