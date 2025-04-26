import api from "./api"
import type { User } from "./auth"

export interface ResourceCategory {
  id: number
  name: string
  description: string
  order: number
}

export interface Resource {
  id: number
  title: string
  description: string
  url: string
  type: "article" | "video" | "tutorial" | "tool" | "library" | "documentation" | "other"
  category: ResourceCategory
  created_by: User
  created_at: string
  updated_at: string
  featured: boolean
}

export interface CreateResourceData {
  title: string
  description: string
  url: string
  type: string
  category_id: number
}

export const getResourceCategories = async (): Promise<ResourceCategory[]> => {
  const response = await api.get("/resources/categories/")
  return response.data.results
}

export const getResources = async (params?: {
  category?: number
  type?: string
  featured?: boolean
}): Promise<Resource[]> => {
  const response = await api.get("/resources/", { params })
  return response.data.results
}

export const getResource = async (id: number): Promise<Resource> => {
  const response = await api.get(`/resources/${id}/`)
  return response.data
}

export const createResource = async (data: CreateResourceData): Promise<Resource> => {
  const response = await api.post("/resources/", data)
  return response.data
}

export const getResourceTypes = async (): Promise<Record<string, string>> => {
  const response = await api.get("/resources/types/")
  return response.data
}
