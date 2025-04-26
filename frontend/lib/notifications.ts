import api from "./api"
import type { User } from "./auth"

export interface Notification {
  id: number
  recipient: User
  sender: User | null
  type: "team_invite" | "team_join" | "team_leave" | "project_update" | "project_feedback" | "system"
  title: string
  message: string
  read: boolean
  created_at: string
  related_object_id: number | null
  related_object_type: string
}

export const getNotifications = async (): Promise<Notification[]> => {
  const response = await api.get("/notifications/")
  return response.data.results
}

export const getUnreadNotifications = async (): Promise<Notification[]> => {
  const response = await api.get("/notifications/unread/")
  return response.data
}

export const markNotificationAsRead = async (id: number): Promise<void> => {
  await api.post(`/notifications/${id}/mark_read/`)
}

export const markAllNotificationsAsRead = async (): Promise<void> => {
  await api.post("/notifications/mark_all_read/")
}
