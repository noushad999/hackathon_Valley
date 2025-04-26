import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Check, Clock, Mail, MessageSquare, ShieldAlert, User } from "lucide-react"

export function NotificationsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
          <Button size="sm">Settings</Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your notifications in one place.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: User,
                  title: "New user registered",
                  description: "John Doe has registered a new account",
                  time: "2 minutes ago",
                  read: false,
                },
                {
                  icon: MessageSquare,
                  title: "New comment on your post",
                  description: "Jane Smith commented on your latest post",
                  time: "1 hour ago",
                  read: false,
                },
                {
                  icon: Bell,
                  title: "Reminder: Team meeting",
                  description: "Your team meeting starts in 30 minutes",
                  time: "3 hours ago",
                  read: false,
                },
                {
                  icon: Mail,
                  title: "New message received",
                  description: "You have a new message from Robert Johnson",
                  time: "5 hours ago",
                  read: false,
                },
                {
                  icon: ShieldAlert,
                  title: "Security alert",
                  description: "Unusual login attempt detected",
                  time: "1 day ago",
                  read: true,
                },
                {
                  icon: Check,
                  title: "Task completed",
                  description: "Your task 'Update documentation' has been completed",
                  time: "2 days ago",
                  read: true,
                },
                {
                  icon: Clock,
                  title: "Maintenance scheduled",
                  description: "System maintenance scheduled for tomorrow at 2 AM",
                  time: "3 days ago",
                  read: true,
                },
              ].map((notification, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
                >
                  <div
                    className={`rounded-full p-2 ${!notification.read ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
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
        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>View your unread notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: User,
                  title: "New user registered",
                  description: "John Doe has registered a new account",
                  time: "2 minutes ago",
                },
                {
                  icon: MessageSquare,
                  title: "New comment on your post",
                  description: "Jane Smith commented on your latest post",
                  time: "1 hour ago",
                },
                {
                  icon: Bell,
                  title: "Reminder: Team meeting",
                  description: "Your team meeting starts in 30 minutes",
                  time: "3 hours ago",
                },
                {
                  icon: Mail,
                  title: "New message received",
                  description: "You have a new message from Robert Johnson",
                  time: "5 hours ago",
                },
              ].map((notification, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4 bg-muted/50">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{notification.title}</p>
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
        <TabsContent value="mentions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mentions</CardTitle>
              <CardDescription>View notifications where you were mentioned.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-medium">No mentions yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">When someone mentions you, you'll see it here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>View system-related notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: ShieldAlert,
                  title: "Security alert",
                  description: "Unusual login attempt detected",
                  time: "1 day ago",
                  read: true,
                },
                {
                  icon: Clock,
                  title: "Maintenance scheduled",
                  description: "System maintenance scheduled for tomorrow at 2 AM",
                  time: "3 days ago",
                  read: true,
                },
              ].map((notification, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full p-2 bg-muted text-muted-foreground">
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
