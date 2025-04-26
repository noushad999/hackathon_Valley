import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Github, Globe, Linkedin, Twitter } from "lucide-react"

export function ProfileDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        <Button>Save Changes</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <span className="sr-only">Change avatar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
              <div className="flex gap-2">
                <Badge>Participant</Badge>
                <Badge variant="outline">Team Member</Badge>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between border-b py-2">
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-sm text-muted-foreground">john@example.com</span>
                </div>
                <div className="flex items-center justify-between border-b py-2">
                  <span className="text-sm font-medium">Location</span>
                  <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium">Joined</span>
                  <span className="text-sm text-muted-foreground">October 2023</span>
                </div>
              </div>
              <div className="flex w-full justify-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Tabs defaultValue="general" className="space-y-4">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" defaultValue="Full Stack Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      className="min-h-[120px]"
                      defaultValue="Full stack developer with 5 years of experience building web applications. Passionate about creating innovative solutions and participating in hackathons."
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Links</CardTitle>
                  <CardDescription>Connect your social profiles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        <Github className="h-4 w-4" />
                      </span>
                      <Input id="github" placeholder="username" className="rounded-l-none" defaultValue="johndoe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        <Linkedin className="h-4 w-4" />
                      </span>
                      <Input id="linkedin" placeholder="username" className="rounded-l-none" defaultValue="john-doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        <Twitter className="h-4 w-4" />
                      </span>
                      <Input id="twitter" placeholder="username" className="rounded-l-none" defaultValue="johndoe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Personal Website</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        <Globe className="h-4 w-4" />
                      </span>
                      <Input
                        id="website"
                        placeholder="https://example.com"
                        className="rounded-l-none"
                        defaultValue="https://johndoe.dev"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Links</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Technologies</CardTitle>
                  <CardDescription>Add your technical skills and expertise</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (comma separated)</Label>
                    <Textarea
                      id="skills"
                      placeholder="React, Node.js, TypeScript, etc."
                      className="min-h-[100px]"
                      defaultValue="JavaScript, TypeScript, React, Node.js, Express, MongoDB, GraphQL, Next.js, Tailwind CSS, Git"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Skill Level</Label>
                    <Select defaultValue="intermediate">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your overall skill level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Skills</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                  <CardDescription>Add your professional experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Professional Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Describe your professional experience..."
                      className="min-h-[150px]"
                      defaultValue="Senior Developer at TechCorp (2020-Present)
- Led development of company's flagship product
- Implemented CI/CD pipeline reducing deployment time by 40%

Web Developer at StartupXYZ (2018-2020)
- Built responsive web applications using React
- Collaborated with design team to implement UI/UX improvements"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education</Label>
                    <Textarea
                      id="education"
                      placeholder="Describe your educational background..."
                      className="min-h-[100px]"
                      defaultValue="B.S. Computer Science, University of Technology (2014-2018)
- GPA: 3.8/4.0
- Relevant coursework: Data Structures, Algorithms, Web Development"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hackathons">Previous Hackathons</Label>
                    <Textarea
                      id="hackathons"
                      placeholder="List your previous hackathon experiences..."
                      className="min-h-[100px]"
                      defaultValue="TechHack 2022 - 2nd Place
- Built an AI-powered accessibility tool
- Team of 3 developers

CodeFest 2021 - Participant
- Developed a sustainability tracking application
- Learned about blockchain integration"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Experience</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Email Notifications", description: "Receive notifications via email" },
                    { title: "Push Notifications", description: "Receive notifications on your device" },
                    { title: "Team Updates", description: "Notifications about team activities" },
                    { title: "Hackathon Announcements", description: "Important updates about the hackathon" },
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
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Manage your privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Profile Visibility",
                      description: "Make your profile visible to other hackathon participants",
                    },
                    { title: "Show Skills", description: "Display your skills on your public profile" },
                    { title: "Show Experience", description: "Display your experience on your public profile" },
                    { title: "Show Contact Info", description: "Allow others to see your contact information" },
                    { title: "Team Discovery", description: "Allow teams to discover you for recruitment" },
                  ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label htmlFor={`privacy-${i}`}>{setting.title}</Label>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                      <Switch id={`privacy-${i}`} defaultChecked={i < 4} />
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button>Save Privacy Settings</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>Manage your personal data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Download Your Data</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Download a copy of all the data we have stored about you.
                    </p>
                    <Button variant="outline" className="mt-4">
                      Request Data Export
                    </Button>
                  </div>
                  <div className="rounded-lg border border-destructive/50 p-4">
                    <h3 className="font-medium text-destructive">Delete Account</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" className="mt-4">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
