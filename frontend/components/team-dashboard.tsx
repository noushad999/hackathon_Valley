import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, UserPlus, Users } from "lucide-react"

export function TeamDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Team</h2>
        <div className="flex items-center gap-2">
          <Button>Create Team</Button>
        </div>
      </div>

      <Tabs defaultValue="my-team" className="space-y-4">
        <TabsList>
          <TabsTrigger value="my-team">My Team</TabsTrigger>
          <TabsTrigger value="find-team">Find Team</TabsTrigger>
          <TabsTrigger value="team-requests">Team Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="my-team" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Team Innovators</CardTitle>
                  <CardDescription>Your current hackathon team</CardDescription>
                </div>
                <Badge>2/4 Members</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium">Team Members</h3>
                  <div className="mt-3 space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">John Doe</p>
                          <Badge variant="outline" className="text-xs">
                            Team Lead
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                      </div>
                      <Button variant="ghost" size="sm" disabled>
                        You
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Jane Smith</p>
                        <p className="text-xs text-muted-foreground">UI/UX Designer</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Message
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/20">
                        <UserPlus className="h-5 w-5 text-muted-foreground/40" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Open Position</p>
                        <p className="text-xs text-muted-foreground">Looking for Data Scientist</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Invite
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/20">
                        <UserPlus className="h-5 w-5 text-muted-foreground/40" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">Open Position</p>
                        <p className="text-xs text-muted-foreground">Looking for Backend Developer</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Invite
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Team Description</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We're building an AI-powered solution to help reduce food waste in restaurants and grocery stores.
                    Looking for team members with experience in machine learning and backend development.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Skills Needed</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Data Science</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Edit Team</Button>
              <Button variant="destructive">Leave Team</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="find-team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Find a Team</CardTitle>
              <CardDescription>Browse teams looking for members or create your own</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search teams..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "CodeCrafters",
                    description: "Building a platform for connecting local farmers with consumers",
                    members: "2/4",
                    skills: ["React", "Node.js", "MongoDB"],
                  },
                  {
                    name: "DataMinds",
                    description: "Creating an AI solution for medical image analysis",
                    members: "3/5",
                    skills: ["Python", "TensorFlow", "Healthcare"],
                  },
                  {
                    name: "EcoTech",
                    description: "Developing a smart recycling solution using computer vision",
                    members: "1/4",
                    skills: ["Computer Vision", "IoT", "Mobile Dev"],
                  },
                ].map((team, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium leading-none">{team.name}</p>
                        <Badge variant="outline">{team.members} Members</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{team.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {team.skills.map((skill, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm">Request to Join</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team-requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Requests</CardTitle>
              <CardDescription>Manage requests to join your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Alex Johnson",
                    role: "Backend Developer",
                    skills: ["Python", "Django", "AWS"],
                    message: "I'd love to join your team! I have 2 years of experience with Python and Django.",
                  },
                ].map((request, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" alt={request.name} />
                      <AvatarFallback>
                        {request.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium leading-none">{request.name}</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{request.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {request.skills.map((skill, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm border-t pt-2 mt-2">{request.message}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="w-24">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" className="w-24">
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Empty state */}
                {[].length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Users className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">No pending requests</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      When someone requests to join your team, you'll see it here.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
