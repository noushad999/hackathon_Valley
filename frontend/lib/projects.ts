import api from "./api"
import type { Team } from "./teams"
import type { User } from "./auth"

export interface Project {
  id: number
  title: string
  description: string
  team: Team
  created_by: User
  created_at: string
  updated_at: string
  github_url: string
  demo_url: string
  video_url: string
  presentation_url: string
  technologies: string[]
  status: "draft" | "submitted" | "approved" | "rejected"
  images: ProjectImage[]
  feedback: ProjectFeedback[]
}

export interface ProjectImage {
  id: number
  image: string
  caption: string
  order: number
}

export interface ProjectFeedback {
  id: number
  user: User
  comment: string
  rating: number | null
  created_at: string
}

export interface CreateProjectData {
  title: string
  description: string
  team_id: number
  github_url?: string
  demo_url?: string
  video_url?: string
  presentation_url?: string
  technologies?: string[]
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects/")
  return response.data.results
}

export const getProject = async (id: number): Promise<Project> => {
  const response = await api.get(`/projects/${id}/`)
  return response.data
}

export const getMyProject = async (): Promise<Project> => {
  const response = await api.get("/projects/my_project/")
  return response.data
}

export const createProject = async (data: CreateProjectData): Promise<Project> => {
  const response = await api.post("/projects/", data)
  return response.data
}

export const updateProject = async (id: number, data: Partial<CreateProjectData>): Promise<Project> => {
  const response = await api.patch(`/projects/${id}/`, data)
  return response.data
}

export const submitProject = async (id: number): Promise<Project> => {
  const response = await api.post(`/projects/${id}/submit/`)
  return response.data
}

export const uploadProjectImage = async (projectId: number, formData: FormData): Promise<ProjectImage> => {
  const response = await api.post(`/projects/${projectId}/images/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}

export const deleteProjectImage = async (projectId: number, imageId: number): Promise<void> => {
  await api.delete(`/projects/${projectId}/images/${imageId}/`)
}

export const addProjectFeedback = async (
  projectId: number,
  comment: string,
  rating?: number,
): Promise<ProjectFeedback> => {
  const response = await api.post(`/projects/${projectId}/feedback/`, {
    comment,
    rating,
  })
  return response.data
}
