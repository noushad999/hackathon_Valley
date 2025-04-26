import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Code, MessageSquare, User, Users } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationsDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">Mark all as read</Button>
          <Button>Settings</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your notifications in one place</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Team Request",
                  description: "Alex Johnson has requested to join your team",
                  time: "10 minutes ago",
                  read: false,
                  type: "team",
                },
                {
                  icon: Bell,
                  title: "Workshop Reminder",
                  description: "TechCorp API Workshop starts in 1 hour",
                  time: "1 hour ago",
                  read: false,
                  type: "system",
                },
                {
                  icon: MessageSquare,
                  title: "New Message",
                  description: "You have a new message from your team member Jane",
                  time: "2 hours ago",
                  read: false,
                  type: "team",
                },
                {
                  icon: Code,
                  title: "Project Update",
                  description: "Your team member David pushed new code to the repository",
                  time: "3 hours ago",
                  read: true,
                  type: "team",
                },
                {
                  icon: Bell,
                  title: "Submission Deadline",
                  description: "Project submission deadline is in 24 hours",
                  time: "5 hours ago",
                  read: true,
                  type: "system",
                },
                {
                  icon: User,
                  title: "Profile Reminder",
                  description: "Complete your profile to improve team matching",
                  time: "1 day ago",
                  read: true,
                  type: "system",
                },
              ].map((notification, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      !notification.read ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="font-medium leading-none">{notification.title}</p>
                        <Badge variant="outline" className="text-xs">
                          {notification.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>View your unread notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Team Request",
                  description: "Alex Johnson has requested to join your team",
                  time: "10 minutes ago",
                  type: "team",
                },
                {
                  icon: Bell,
                  title: "Workshop Reminder",
                  description: "TechCorp API Workshop starts in 1 hour",
                  time: "1 hour ago",
                  type: "system",
                },
                {
                  icon: MessageSquare,
                  title: "New Message",
                  description: "You have a new message from your team member Jane",
                  time: "2 hours ago",
                  type: "team",
                },
              ].map((notification, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4 bg-muted/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="font-medium leading-none">{notification.title}</p>
                        <Badge variant="outline" className="text-xs">
                          {notification.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  <div className="flex h-2 w-2 rounded-full bg-primary"></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Notifications</CardTitle>
              <CardDescription>View notifications related to your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Team Request",
                  description: "Alex Johnson has requested to join your team",
                  time: "10 minutes ago",
                  read: false,
                },
                {
                  icon: MessageSquare,
                  title: "New Message",
                  description: "You have a new message from your team member Jane",
                  time: "2 hours ago",
                  read: false,
                },
                {
                  icon: Code,
                  title: "Project Update",
                  description: "Your team member David pushed new code to the repository",
                  time: "3 hours ago",
                  read: true,
                },
              ].map((notification, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      !notification.read ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>View system-related notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Bell,
                  title: "Workshop Reminder",
                  description: "TechCorp API Workshop starts in 1 hour",
                  time: "1 hour ago",
                  read: false,
                },
                {
                  icon: Bell,
                  title: "Submission Deadline",
                  description: "Project submission deadline is in 24 hours",
                  time: "5 hours ago",
                  read: true,
                },
                {
                  icon: User,
                  title: "Profile Reminder",
                  description: "Complete your profile to improve team matching",
                  time: "1 day ago",
                  read: true,
                },
              ].map((notification, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      !notification.read ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { title: "Email Notifications", description: "Receive notifications via email" },
            { title: "Push Notifications", description: "Receive notifications on your device" },
            { title: "Team Notifications", description: "Notifications about team activities" },
            { title: "System Notifications", description: "Important updates about the hackathon" },
            { title: "Workshop Reminders", description: "Reminders for upcoming workshops" },
          ].map((setting, i) => (
            <div key={i} className="flex items-center justify-between space-y-0">
              <div className="space-y-0.5">
                <Label htmlFor={`notification-${i}`}>{setting.title}</Label>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
              <Switch id={`notification-${i}`} defaultChecked={i < 3} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
