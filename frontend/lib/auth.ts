import api from "./api"

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  username: string
  email: string
  password: string
  password2: string
  first_name?: string
  last_name?: string
}

export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  bio: string
  avatar: string | null
  github_url: string
  linkedin_url: string
  twitter_url: string
  skills: string[]
  profile: {
    phone: string
    institution: string
    location: string
    graduation_year: number | null
    major: string
    experience_level: string
    dietary_restrictions: string
    t_shirt_size: string
  }
  date_joined: string
}

export const login = async (credentials: LoginCredentials) => {
  const response = await api.post("/users/token/", credentials)
  const { access, refresh } = response.data

  // Store tokens in localStorage
  localStorage.setItem("token", access)
  localStorage.setItem("refreshToken", refresh)

  return response.data
}

export const register = async (data: RegisterData) => {
  const response = await api.post("/users/register/", data)
  return response.data
}

export const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("refreshToken")
}

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get("/users/me/")
  return response.data
}

export const updateProfile = async (data: Partial<User>) => {
  const response = await api.put("/users/update_me/", data)
  return response.data
}

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("token")
}
