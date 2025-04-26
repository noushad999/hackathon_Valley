import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, FileText, Lightbulb, MessageSquare, Video } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function ResourcesDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Input type="search" placeholder="Search resources..." className="w-64" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="apis">APIs & SDKs</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>APIs & SDKs</CardTitle>
                <CardDescription>Access sponsor APIs and development tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4">
                  <Code className="h-10 w-10 text-primary/60" />
                  <p className="mt-2 text-center text-sm font-medium">Explore APIs and SDKs from our sponsors</p>
                  <Button variant="link" asChild>
                    <Link href="#apis">View All APIs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Guides & Documentation</CardTitle>
                <CardDescription>Helpful guides for your hackathon journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4">
                  <BookOpen className="h-10 w-10 text-primary/60" />
                  <p className="mt-2 text-center text-sm font-medium">Access guides, tutorials, and documentation</p>
                  <Button variant="link" asChild>
                    <Link href="#guides">View All Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Workshop Recordings</CardTitle>
                <CardDescription>Recordings of sponsor workshops and tech talks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4">
                  <Video className="h-10 w-10 text-primary/60" />
                  <p className="mt-2 text-center text-sm font-medium">Watch recordings of workshops and tech talks</p>
                  <Button variant="link" asChild>
                    <Link href="#workshops">View All Workshops</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Mentor Directory</CardTitle>
                <CardDescription>Connect with mentors in various domains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4">
                  <MessageSquare className="h-10 w-10 text-primary/60" />
                  <p className="mt-2 text-center text-sm font-medium">Find mentors to help with your project</p>
                  <Button variant="link" asChild>
                    <Link href="#mentors">View All Mentors</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Project Templates</CardTitle>
                <CardDescription>Starter templates for your hackathon project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4">
                  <FileText className="h-10 w-10 text-primary/60" />
                  <p className="mt-2 text-center text-sm font-medium">Download project templates and boilerplates</p>
                  <Button variant="link">View All Templates</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Idea Inspiration</CardTitle>
                <CardDescription>Get inspired for your hackathon project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4">
                  <Lightbulb className="h-10 w-10 text-primary/60" />
                  <p className="mt-2 text-center text-sm font-medium">Explore project ideas and inspiration</p>
                  <Button variant="link">View Ideas</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="apis" className="space-y-4" id="apis">
          <Card>
            <CardHeader>
              <CardTitle>APIs & SDKs</CardTitle>
              <CardDescription>Access sponsor APIs and development tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "TechCorp AI API",
                    description:
                      "Access state-of-the-art AI models for natural language processing and computer vision",
                    tags: ["AI", "Machine Learning", "NLP"],
                    link: "#",
                  },
                  {
                    name: "DataSoft Cloud Services",
                    description: "Cloud infrastructure and database services for your application",
                    tags: ["Cloud", "Database", "Storage"],
                    link: "#",
                  },
                  {
                    name: "EcoTech Sustainability SDK",
                    description: "Tools for building applications focused on environmental sustainability",
                    tags: ["Sustainability", "IoT", "Analytics"],
                    link: "#",
                  },
                  {
                    name: "FinTech Payment API",
                    description: "Integrate payment processing and financial services into your application",
                    tags: ["Payments", "Finance", "Banking"],
                    link: "#",
                  },
                  {
                    name: "HealthTech Medical API",
                    description: "Access medical data and healthcare services for health applications",
                    tags: ["Healthcare", "Medical", "Data"],
                    link: "#",
                  },
                  {
                    name: "MobileTech SDK",
                    description: "Tools for building cross-platform mobile applications",
                    tags: ["Mobile", "iOS", "Android"],
                    link: "#",
                  },
                ].map((api, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{api.name}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{api.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {api.tags.map((tag, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={api.link}>Access</a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="space-y-4" id="guides">
          <Card>
            <CardHeader>
              <CardTitle>Guides & Documentation</CardTitle>
              <CardDescription>Helpful guides for your hackathon journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Hackathon Survival Guide",
                    description: "Essential tips and tricks for making the most of your hackathon experience",
                    type: "Guide",
                    link: "#",
                  },
                  {
                    name: "Project Submission Guide",
                    description: "Step-by-step guide for submitting your project for judging",
                    type: "Guide",
                    link: "#",
                  },
                  {
                    name: "Judging Criteria",
                    description: "Detailed explanation of how projects will be judged",
                    type: "Documentation",
                    link: "#",
                  },
                  {
                    name: "Presentation Tips",
                    description: "Tips for creating an effective project presentation",
                    type: "Guide",
                    link: "#",
                  },
                  {
                    name: "Team Formation Guide",
                    description: "Strategies for forming an effective hackathon team",
                    type: "Guide",
                    link: "#",
                  },
                  {
                    name: "Hackathon Rules",
                    description: "Official rules and guidelines for the hackathon",
                    type: "Documentation",
                    link: "#",
                  },
                ].map((guide, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{guide.name}</p>
                        <Badge variant="outline">{guide.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{guide.description}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={guide.link}>Read</a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workshops" className="space-y-4" id="workshops">
          <Card>
            <CardHeader>
              <CardTitle>Workshop Recordings</CardTitle>
              <CardDescription>Recordings of sponsor workshops and tech talks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "TechCorp AI API Workshop",
                    description:
                      "Learn how to use TechCorp's AI APIs for natural language processing and computer vision",
                    duration: "60 min",
                    presenter: "Dr. Sarah Johnson, TechCorp",
                    link: "#",
                  },
                  {
                    name: "DataSoft Cloud Services Workshop",
                    description: "Getting started with DataSoft's cloud infrastructure and database services",
                    duration: "45 min",
                    presenter: "Michael Chen, DataSoft",
                    link: "#",
                  },
                  {
                    name: "UI/UX Design for Hackathons",
                    description:
                      "Quick tips for creating effective user interfaces and experiences in a hackathon setting",
                    duration: "30 min",
                    presenter: "Emily Rodriguez, Design Lead",
                    link: "#",
                  },
                  {
                    name: "Pitching Your Project",
                    description: "How to effectively present your project to judges and potential investors",
                    duration: "45 min",
                    presenter: "David Kim, Startup Mentor",
                    link: "#",
                  },
                ].map((workshop, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{workshop.name}</p>
                        <Badge variant="outline">{workshop.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{workshop.description}</p>
                      <p className="text-xs text-muted-foreground">Presenter: {workshop.presenter}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={workshop.link}>Watch</a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-4" id="mentors">
          <Card>
            <CardHeader>
              <CardTitle>Mentor Directory</CardTitle>
              <CardDescription>Connect with mentors in various domains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Dr. Sarah Johnson",
                    role: "AI Research Scientist, TechCorp",
                    expertise: ["Machine Learning", "Computer Vision", "NLP"],
                    availability: "Day 1: 2PM-5PM, Day 2: 10AM-12PM",
                    link: "#",
                  },
                  {
                    name: "Michael Chen",
                    role: "Senior Cloud Architect, DataSoft",
                    expertise: ["Cloud Infrastructure", "Databases", "Serverless"],
                    availability: "Day 1: 3PM-6PM, Day 2: 1PM-4PM",
                    link: "#",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Lead UX Designer, DesignHub",
                    expertise: ["UI/UX Design", "User Research", "Prototyping"],
                    availability: "Day 1: 1PM-4PM, Day 2: 2PM-5PM",
                    link: "#",
                  },
                  {
                    name: "David Kim",
                    role: "Startup Advisor & Pitch Coach",
                    expertise: ["Pitching", "Business Strategy", "Product Development"],
                    availability: "Day 2: 11AM-2PM, Day 3: 9AM-12PM",
                    link: "#",
                  },
                  {
                    name: "Dr. Lisa Patel",
                    role: "Healthcare Technology Specialist, MedTech",
                    expertise: ["Healthcare Tech", "Medical Data", "Regulatory Compliance"],
                    availability: "Day 1: 4PM-6PM, Day 2: 3PM-5PM",
                    link: "#",
                  },
                  {
                    name: "James Wilson",
                    role: "Full Stack Developer, TechStartup",
                    expertise: ["Web Development", "Mobile Apps", "DevOps"],
                    availability: "Day 1: 2PM-6PM, Day 2: 10AM-2PM",
                    link: "#",
                  },
                ].map((mentor, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{mentor.name}</p>
                      </div>
                      <p className="text-sm">{mentor.role}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {mentor.expertise.map((skill, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground pt-1">
                        <span className="font-medium">Available:</span> {mentor.availability}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={mentor.link}>Schedule</a>
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
