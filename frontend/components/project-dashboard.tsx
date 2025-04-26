import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileCode, Github, Globe, Upload } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProjectDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Project</h2>
        <div className="flex items-center gap-2">
          <Button>Submit Project</Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Project Details</TabsTrigger>
          <TabsTrigger value="submission">Submission</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
              <CardDescription>Provide details about your hackathon project</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="Enter your project name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Project Description</Label>
                  <Textarea
                    id="project-description"
                    placeholder="Describe your project in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="project-category">Category</Label>
                    <Select>
                      <SelectTrigger id="project-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Health & Wellness</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="environment">Environment</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="social">Social Impact</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-challenges">Sponsor Challenges</Label>
                    <Select>
                      <SelectTrigger id="project-challenges">
                        <SelectValue placeholder="Select challenges" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="techcorp">TechCorp AI Challenge</SelectItem>
                        <SelectItem value="datasoft">DataSoft Cloud Challenge</SelectItem>
                        <SelectItem value="innovate">Innovate Health Challenge</SelectItem>
                        <SelectItem value="ecotech">EcoTech Sustainability Challenge</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-technologies">Technologies Used</Label>
                  <Input id="project-technologies" placeholder="e.g., React, Node.js, TensorFlow" />
                  <p className="text-xs text-muted-foreground">Separate technologies with commas</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="github-repo">GitHub Repository</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        <Github className="h-4 w-4" />
                      </span>
                      <Input id="github-repo" placeholder="username/repository" className="rounded-l-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="demo-url">Demo URL</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        <Globe className="h-4 w-4" />
                      </span>
                      <Input id="demo-url" placeholder="https://your-demo-url.com" className="rounded-l-none" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Save Draft</Button>
              <Button>Save Project</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="submission" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Submission</CardTitle>
              <CardDescription>Submit your final project for judging</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border border-dashed p-10 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <h3 className="text-lg font-medium">Upload Project Files</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Drag and drop your project files here, or click to browse. You can upload a ZIP file containing
                      your project.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Select Files
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="submission-notes">Submission Notes</Label>
                  <Textarea
                    id="submission-notes"
                    placeholder="Add any notes for the judges..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Submission Checklist</Label>
                  <div className="space-y-2">
                    {[
                      "Project description is complete",
                      "GitHub repository is public and accessible",
                      "Demo URL is working and accessible",
                      "Project presentation is ready",
                      "All team members are listed",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input type="checkbox" id={`checklist-${i}`} className="h-4 w-4 rounded border-gray-300" />
                        <Label htmlFor={`checklist-${i}`} className="text-sm font-normal">
                          {item}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Save Draft</Button>
              <Button>Submit Project</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Status</CardTitle>
              <CardDescription>Track your project submission status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 rounded-lg border p-4 bg-muted/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Not Submitted</p>
                  <p className="text-sm text-muted-foreground">
                    Your project has not been submitted yet. Please complete your submission before the deadline.
                  </p>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                <p>Submission Deadline: October 17, 2023 at 11:59 PM</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Resources</CardTitle>
              <CardDescription>Helpful resources for your project development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Sponsor APIs & SDKs</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      {
                        name: "TechCorp AI API",
                        description:
                          "Access state-of-the-art AI models for natural language processing and computer vision",
                        link: "#",
                      },
                      {
                        name: "DataSoft Cloud Services",
                        description: "Cloud infrastructure and database services for your application",
                        link: "#",
                      },
                      {
                        name: "EcoTech Sustainability SDK",
                        description: "Tools for building applications focused on environmental sustainability",
                        link: "#",
                      },
                    ].map((resource, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="flex-1">
                          <p className="font-medium">{resource.name}</p>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={resource.link}>Access</a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Project Templates</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      {
                        name: "Web Application Starter",
                        description: "A React and Node.js starter template for web applications",
                        link: "#",
                      },
                      {
                        name: "Mobile App Template",
                        description: "React Native template for cross-platform mobile applications",
                        link: "#",
                      },
                      {
                        name: "Data Science Notebook",
                        description: "Jupyter notebook template for data analysis and machine learning",
                        link: "#",
                      },
                    ].map((template, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="flex-1">
                          <p className="font-medium">{template.name}</p>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={template.link}>Download</a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Documentation & Guides</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      {
                        name: "Project Submission Guide",
                        description: "Step-by-step guide for submitting your project",
                        link: "#",
                      },
                      {
                        name: "Judging Criteria",
                        description: "Detailed explanation of how projects will be judged",
                        link: "#",
                      },
                      {
                        name: "Presentation Tips",
                        description: "Tips for creating an effective project presentation",
                        link: "#",
                      },
                    ].map((guide, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="flex-1">
                          <p className="font-medium">{guide.name}</p>
                          <p className="text-sm text-muted-foreground">{guide.description}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={guide.link}>View</a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
