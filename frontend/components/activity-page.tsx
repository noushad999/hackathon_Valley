import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Download, Filter, Search, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ActivityPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Activity Log</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search activities..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Activities</SelectItem>
            <SelectItem value="user">User Activities</SelectItem>
            <SelectItem value="system">System Activities</SelectItem>
            <SelectItem value="security">Security Activities</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Activities</CardTitle>
              <CardDescription>View all system and user activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: User,
                  title: "User Login",
                  description: "John Doe logged in to the system",
                  time: "2 minutes ago",
                  type: "user",
                },
                {
                  icon: Users,
                  title: "New User Created",
                  description: "Admin created a new user account for Jane Smith",
                  time: "1 hour ago",
                  type: "user",
                },
                {
                  icon: Clock,
                  title: "System Backup",
                  description: "Automated system backup completed successfully",
                  time: "3 hours ago",
                  type: "system",
                },
                {
                  icon: User,
                  title: "Profile Updated",
                  description: "Robert Johnson updated their profile information",
                  time: "5 hours ago",
                  type: "user",
                },
                {
                  icon: Clock,
                  title: "Security Scan",
                  description: "Scheduled security scan completed",
                  time: "1 day ago",
                  type: "security",
                },
                {
                  icon: User,
                  title: "Password Reset",
                  description: "Emily Davis requested a password reset",
                  time: "2 days ago",
                  type: "security",
                },
                {
                  icon: Clock,
                  title: "Database Maintenance",
                  description: "Scheduled database maintenance completed",
                  time: "3 days ago",
                  type: "system",
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                  <div
                    className={`rounded-full p-2 ${
                      activity.type === "user"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
                        : activity.type === "system"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100"
                    }`}
                  >
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="user" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Activities</CardTitle>
              <CardDescription>View all user-related activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: User,
                  title: "User Login",
                  description: "John Doe logged in to the system",
                  time: "2 minutes ago",
                },
                {
                  icon: Users,
                  title: "New User Created",
                  description: "Admin created a new user account for Jane Smith",
                  time: "1 hour ago",
                },
                {
                  icon: User,
                  title: "Profile Updated",
                  description: "Robert Johnson updated their profile information",
                  time: "5 hours ago",
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full p-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100">
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Activities</CardTitle>
              <CardDescription>View all system-related activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: "System Backup",
                  description: "Automated system backup completed successfully",
                  time: "3 hours ago",
                },
                {
                  icon: Clock,
                  title: "Database Maintenance",
                  description: "Scheduled database maintenance completed",
                  time: "3 days ago",
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full p-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100">
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Activities</CardTitle>
              <CardDescription>View all security-related activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: "Security Scan",
                  description: "Scheduled security scan completed",
                  time: "1 day ago",
                },
                {
                  icon: User,
                  title: "Password Reset",
                  description: "Emily Davis requested a password reset",
                  time: "2 days ago",
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full p-2 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100">
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
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
