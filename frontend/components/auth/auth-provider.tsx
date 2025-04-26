"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { type User, getCurrentUser, isAuthenticated } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  refreshUser: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const fetchUser = async () => {
    if (!isAuthenticated()) {
      setLoading(false)
      return
    }

    try {
      const userData = await getCurrentUser()
      setUser(userData)
    } catch (err) {
      console.error("Error fetching user:", err)
      setError("Failed to load user data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    // Redirect to login if not authenticated and trying to access protected routes
    if (!loading && !user) {
      const protectedRoutes = ["/dashboard", "/profile", "/settings"]
      const isProtectedRoute = protectedRoutes.some((route) => pathname?.startsWith(route))

      if (isProtectedRoute) {
        router.push("/login")
      }
    }
  }, [loading, user, pathname, router])

  const refreshUser = async () => {
    setLoading(true)
    await fetchUser()
  }

  return <AuthContext.Provider value={{ user, loading, error, refreshUser }}>{children}</AuthContext.Provider>
}
