"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Calendar, Clock, Download, Users, User } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { getMyTeams } from "@/lib/teams"
import { getMyProject } from "@/lib/projects"
import { getEvents } from "@/lib/schedule"
import { getUnreadNotifications } from "@/lib/notifications"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [team, setTeam] = useState<any>(null)
  const [project, setProject] = useState<any>(null)
  const [events, setEvents] = useState<any[]>([])
  const [notifications, setNotifications] = useState<any[]>([])

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)

        // Fetch team data
        try {
          const teamsData = await getMyTeams()
          if (teamsData && teamsData.length > 0) {
            setTeam(teamsData[0])
          }
        } catch (err) {
          console.log("No team found")
        }

        // Fetch project data
        try {
          const projectData = await getMyProject()
          setProject(projectData)
        } catch (err) {
          console.log("No project found")
        }

        // Fetch upcoming events
        const eventsData = await getEvents()
        setEvents(eventsData.slice(0, 3)) // Get first 3 events

        // Fetch unread notifications
        const notificationsData = await getUnreadNotifications()
        setNotifications(notificationsData)

        setLoading(false)
      } catch (err) {
        console.error("Error fetching dashboard data:", err)
        setError("Failed to load dashboard data")
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Welcome message */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Welcome back, {user?.first_name || user?.username || "Hacker"}!</h3>
            <p className="text-muted-foreground">
              Track your hackathon progress, manage your team, and submit your project all from one place.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Status</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{team ? team.name : "No Team"}</div>
            <p className="text-xs text-muted-foreground">
              {team
                ? `${team.members?.length || 0} of ${team.max_members} members`
                : "Join or create a team to get started"}
            </p>
            {!team && (
              <Button asChild className="mt-2 w-full" size="sm">
                <Link href="/dashboard/team">Find Team</Link>
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Status</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {project ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : "No Project"}
            </div>
            <p className="text-xs text-muted-foreground">
              {project
                ? `Last updated: ${new Date(project.updated_at).toLocaleDateString()}`
                : "Create a project to showcase your work"}
            </p>
            {!project && team && (
              <Button asChild className="mt-2 w-full" size="sm">
                <Link href="/dashboard/project">Create Project</Link>
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
            <p className="text-xs text-muted-foreground">
              {events.length > 0 ? `Next: ${events[0]?.title || "Loading..."}` : "No upcoming events"}
            </p>
            <Button asChild className="mt-2 w-full" size="sm">
              <Link href="/dashboard/schedule">View Schedule</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.length}</div>
            <p className="text-xs text-muted-foreground">
              {notifications.length > 0 ? "You have unread notifications" : "No new notifications"}
            </p>
            <Button asChild className="mt-2 w-full" size="sm">
              <Link href="/dashboard/notifications">View All</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="project">Project</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Project Status */}
          {project ? (
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Current status of your hackathon project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-lg font-medium">{project.title}</div>
                      <div className="text-sm text-muted-foreground">{project.description.substring(0, 100)}...</div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "draft"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          : project.status === "submitted"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            : project.status === "approved"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium">Technologies</div>
                      <div className="text-sm text-muted-foreground">
                        {project.technologies && project.technologies.length > 0
                          ? project.technologies.join(", ")
                          : "None specified"}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Last Updated</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(project.updated_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/dashboard/project">Manage Project</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Project Found</AlertTitle>
              <AlertDescription>
                You haven't created a project yet.
                {team ? (
                  <Link href="/dashboard/project" className="ml-1 underline">
                    Create one now
                  </Link>
                ) : (
                  <span className="ml-1">Join a team first to create a project.</span>
                )}
              </AlertDescription>
            </Alert>
          )}

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss these important hackathon events</CardDescription>
            </CardHeader>
            <CardContent>
              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.location}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(event.start_time).toLocaleString()} -{" "}
                          {new Date(event.end_time).toLocaleTimeString()}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className={event.is_attending ? "bg-primary/10" : ""}>
                        {event.is_attending ? "Attending" : "Attend"}
                      </Button>
                    </div>
                  ))}
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dashboard/schedule">View All Events</Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Clock className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No upcoming events</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Check back later for scheduled events.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          {team ? (
            <Card>
              <CardHeader>
                <CardTitle>{team.name}</CardTitle>
                <CardDescription>{team.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Team Members</h4>
                    <div className="space-y-3">
                      {team.members &&
                        team.members.map((member: any) => (
                          <div key={member.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium">{member.username}</div>
                                <div className="text-xs text-muted-foreground">{member.email}</div>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {team.memberships.find((m: any) => m.user.id === member.id)?.role === "leader"
                                ? "Team Leader"
                                : "Member"}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/dashboard/team">Manage Team</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Team Found</AlertTitle>
              <AlertDescription>
                You're not part of any team yet.
                <Link href="/dashboard/team" className="ml-1 underline">
                  Join or create a team
                </Link>
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="project" className="space-y-4">
          {project ? (
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Project Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Status:</span>
                          <span className="text-sm font-medium">
                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Created:</span>
                          <span className="text-sm">{new Date(project.created_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Last Updated:</span>
                          <span className="text-sm">{new Date(project.updated_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Links</h4>
                      <div className="space-y-2">
                        {project.github_url && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">GitHub:</span>
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              View Repository
                            </a>
                          </div>
                        )}
                        {project.demo_url && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Demo:</span>
                            <a
                              href={project.demo_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              View Demo
                            </a>
                          </div>
                        )}
                        {project.video_url && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Video:</span>
                            <a
                              href={project.video_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              Watch Video
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies && project.technologies.length > 0 ? (
                        project.technologies.map((tech: string, index: number) => (
                          <div key={index} className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                            {tech}
                          </div>
                        ))
                      ) : (
                        <span className="text-sm text-muted-foreground">No technologies specified</span>
                      )}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/dashboard/project">Manage Project</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Project Found</AlertTitle>
              <AlertDescription>
                You haven't created a project yet.
                {team ? (
                  <Link href="/dashboard/project" className="ml-1 underline">
                    Create one now
                  </Link>
                ) : (
                  <span className="ml-1">Join a team first to create a project.</span>
                )}
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
