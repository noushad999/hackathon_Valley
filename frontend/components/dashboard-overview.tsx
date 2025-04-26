import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CalendarDays, Clock, Download, FileCode, MessageSquare, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

export function DashboardOverview() {
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hackathon Status</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge className="text-xs font-medium">Registration Open</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Starts in 14 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Status</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2/4 Members</div>
            <p className="text-xs text-muted-foreground">Looking for 2 more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Status</CardTitle>
            <FileCode className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Not Started</div>
            <p className="text-xs text-muted-foreground">Idea phase</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Team Formation</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Hackathon Progress</CardTitle>
            <CardDescription>Track your progress through the hackathon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Registration</div>
                  <div className="text-muted-foreground">Completed</div>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Team Formation</div>
                  <div className="text-muted-foreground">50%</div>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Project Submission</div>
                  <div className="text-muted-foreground">0%</div>
                </div>
                <Progress value={0} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Presentation</div>
                  <div className="text-muted-foreground">0%</div>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>Latest updates from the organizers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Welcome to Hackathon Valley!",
                  description: "Registration is now open. Form your teams and get ready!",
                  time: "2 days ago",
                },
                {
                  title: "Team Formation Event",
                  description: "Join us on Oct 1st for our team formation mixer.",
                  time: "1 day ago",
                },
                {
                  title: "Sponsor Workshop Schedule",
                  description: "Check out the schedule for sponsor workshops and tech talks.",
                  time: "5 hours ago",
                },
              ].map((announcement, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                  <Bell className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{announcement.title}</p>
                    <p className="text-xs text-muted-foreground">{announcement.description}</p>
                    <p className="text-xs text-muted-foreground">{announcement.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="resources">Quick Resources</TabsTrigger>
          <TabsTrigger value="tasks">My Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss these important hackathon events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Team Formation Mixer",
                    description: "Meet potential teammates and form your dream team",
                    date: "Oct 1, 2023",
                    time: "6:00 PM - 8:00 PM",
                  },
                  {
                    title: "Kickoff Ceremony",
                    description: "Official start of the hackathon with keynote speakers",
                    date: "Oct 15, 2023",
                    time: "10:00 AM - 12:00 PM",
                  },
                  {
                    title: "API Workshop by TechCorp",
                    description: "Learn how to use TechCorp's APIs for your project",
                    date: "Oct 15, 2023",
                    time: "2:00 PM - 3:30 PM",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CalendarDays className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium leading-none">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="flex items-center pt-2">
                        <p className="text-xs font-medium">{event.date}</p>
                        <span className="mx-2 text-xs text-muted-foreground">•</span>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Add to Calendar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Resources</CardTitle>
              <CardDescription>Helpful resources for your hackathon journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Hackathon Rules",
                    description: "Review the official rules and guidelines",
                    icon: FileCode,
                    href: "/resources/rules",
                  },
                  {
                    title: "Sponsor Resources",
                    description: "Access APIs, tools, and resources from sponsors",
                    icon: Lightbulb,
                    href: "/resources/sponsors",
                  },
                  {
                    title: "Team Formation Guide",
                    description: "Tips for finding and forming the perfect team",
                    icon: Users,
                    href: "/resources/team-guide",
                  },
                  {
                    title: "Mentor Directory",
                    description: "Connect with mentors in various tech domains",
                    icon: MessageSquare,
                    href: "/resources/mentors",
                  },
                ].map((resource, i) => (
                  <Link key={i} href={resource.href}>
                    <div className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <resource.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium leading-none">{resource.title}</p>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Tasks</CardTitle>
              <CardDescription>Track your hackathon to-do list</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Complete your profile",
                    description: "Add your skills and experience to your profile",
                    completed: true,
                  },
                  {
                    title: "Join or create a team",
                    description: "Find teammates or create your own team",
                    completed: false,
                  },
                  {
                    title: "Submit project idea",
                    description: "Submit your initial project idea for feedback",
                    completed: false,
                  },
                  {
                    title: "Register for workshops",
                    description: "Sign up for sponsor workshops and tech talks",
                    completed: false,
                  },
                ].map((task, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div
                      className={`mt-1 h-5 w-5 rounded-full border-2 ${task.completed ? "bg-primary border-primary" : "border-muted-foreground"}`}
                    >
                      {task.completed && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary-foreground"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p
                        className={`font-medium leading-none ${task.completed ? "line-through text-muted-foreground" : ""}`}
                      >
                        {task.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      {task.completed ? "Completed" : "Mark Complete"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
