import api from "./api"
import type { User } from "./auth"

export interface Event {
  id: number
  title: string
  description: string
  start_time: string
  end_time: string
  location: string
  created_by: User
  created_at: string
  updated_at: string
  is_important: boolean
  attendees: EventAttendee[]
  attendee_count: number
  is_attending: boolean
}

export interface EventAttendee {
  id: number
  user: User
  registered_at: string
}

export interface CreateEventData {
  title: string
  description: string
  start_time: string
  end_time: string
  location: string
  is_important: boolean
}

export const getEvents = async (params?: {
  important?: boolean
  start_date?: string
  end_date?: string
}): Promise<Event[]> => {
  const response = await api.get("/schedule/", { params })
  return response.data.results
}

export const getEvent = async (id: number): Promise<Event> => {
  const response = await api.get(`/schedule/${id}/`)
  return response.data
}

export const getMyEvents = async (): Promise<Event[]> => {
  const response = await api.get("/schedule/my_events/")
  return response.data
}

export const createEvent = async (data: CreateEventData): Promise<Event> => {
  const response = await api.post("/schedule/", data)
  return response.data
}

export const updateEvent = async (id: number, data: Partial<CreateEventData>): Promise<Event> => {
  const response = await api.patch(`/schedule/${id}/`, data)
  return response.data
}

export const attendEvent = async (id: number): Promise<void> => {
  await api.post(`/schedule/${id}/attend/`)
}

export const unattendEvent = async (id: number): Promise<void> => {
  await api.post(`/schedule/${id}/unattend/`)
}
