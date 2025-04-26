import api from "./api"
import type { User } from "./auth"

export interface Team {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
  members: User[]
  memberships: TeamMembership[]
  max_members: number
  looking_for_members: boolean
}

export interface TeamMembership {
  id: number
  user: User
  team: number
  role: "leader" | "member"
  joined_at: string
}

export interface TeamInvitation {
  id: number
  team: Team
  inviter: User
  invitee: User
  status: "pending" | "accepted" | "declined"
  created_at: string
  updated_at: string
}

export interface CreateTeamData {
  name: string
  description: string
  max_members: number
  looking_for_members: boolean
}

export const getTeams = async (): Promise<Team[]> => {
  const response = await api.get("/teams/")
  return response.data.results
}

export const getTeam = async (id: number): Promise<Team> => {
  const response = await api.get(`/teams/${id}/`)
  return response.data
}

export const getMyTeams = async (): Promise<Team[]> => {
  const response = await api.get("/teams/my_team/")
  return response.data
}

export const createTeam = async (data: CreateTeamData): Promise<Team> => {
  const response = await api.post("/teams/", data)
  return response.data
}

export const updateTeam = async (id: number, data: Partial<CreateTeamData>): Promise<Team> => {
  const response = await api.patch(`/teams/${id}/`, data)
  return response.data
}

export const joinTeam = async (id: number): Promise<any> => {
  const response = await api.post(`/teams/${id}/join/`)
  return response.data
}

export const leaveTeam = async (id: number): Promise<any> => {
  const response = await api.post(`/teams/${id}/leave/`)
  return response.data
}

export const transferLeadership = async (teamId: number, newLeaderId: number): Promise<any> => {
  const response = await api.post(`/teams/${teamId}/transfer_leadership/`, { new_leader_id: newLeaderId })
  return response.data
}

export const getTeamInvitations = async (): Promise<TeamInvitation[]> => {
  const response = await api.get("/teams/invitations/received/")
  return response.data
}

export const sendTeamInvitation = async (teamId: number, inviteeId: number): Promise<TeamInvitation> => {
  const response = await api.post("/teams/invitations/", {
    team_id: teamId,
    invitee_id: inviteeId,
  })
  return response.data
}

export const acceptInvitation = async (id: number): Promise<any> => {
  const response = await api.post(`/teams/invitations/${id}/accept/`)
  return response.data
}

export const declineInvitation = async (id: number): Promise<any> => {
  const response = await api.post(`/teams/invitations/${id}/decline/`)
  return response.data
}
