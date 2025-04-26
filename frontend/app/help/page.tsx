import { HackathonNavbar } from "@/components/hackathon-navbar"
import { HackathonFooter } from "@/components/hackathon-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Mail, Phone, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HackathonNavbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Help & Support</h1>
              <p className="text-muted-foreground">
                Get assistance with any questions or issues you might have during the hackathon.
              </p>
            </div>

            <Tabs defaultValue="faq" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                <TabsTrigger value="resources">Support Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="faq" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Common questions about Hackathon Valley</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        question: "How do I register for the hackathon?",
                        answer:
                          "You can register by clicking the 'Register' button on the homepage and filling out the registration form with your details.",
                      },
                      {
                        question: "Can I participate remotely?",
                        answer:
                          "Yes, we offer both in-person and remote participation options. You can indicate your preference during registration.",
                      },
                      {
                        question: "How do I form a team?",
                        answer:
                          "You can form a team through our team formation page in the dashboard. You can create your own team or browse existing teams looking for members.",
                      },
                      {
                        question: "What should I bring to the hackathon?",
                        answer:
                          "For in-person participants, bring your laptop, charger, and any hardware you plan to use. We'll provide food, drinks, and a comfortable hacking environment.",
                      },
                      {
                        question: "How are projects judged?",
                        answer:
                          "Projects are judged based on innovation, technical complexity, design, practicality, and presentation by a panel of industry experts and sponsors.",
                      },
                      {
                        question: "What happens if I have technical issues during the hackathon?",
                        answer:
                          "We have a dedicated technical support team available throughout the event. You can reach them through the help desk or by submitting a support ticket.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <h3 className="font-medium">{item.question}</h3>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Get in touch with our support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Your email" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your issue or question in detail..."
                          className="min-h-[150px]"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                        <Mail className="h-6 w-6 text-primary" />
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">support@hackathonvalley.com</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                        <Phone className="h-6 w-6 text-primary" />
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                        <MessageSquare className="h-6 w-6 text-primary" />
                        <h3 className="font-medium">Live Chat</h3>
                        <p className="text-sm text-muted-foreground">Available 9AM-5PM PT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Support Resources</CardTitle>
                    <CardDescription>Helpful resources for common issues</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          title: "Getting Started Guide",
                          description: "A comprehensive guide to getting started with Hackathon Valley",
                          icon: HelpCircle,
                          href: "#",
                        },
                        {
                          title: "Technical Troubleshooting",
                          description: "Solutions for common technical issues during the hackathon",
                          icon: HelpCircle,
                          href: "#",
                        },
                        {
                          title: "Team Formation Help",
                          description: "Tips and guidance for forming or joining a team",
                          icon: HelpCircle,
                          href: "#",
                        },
                        {
                          title: "Project Submission Guide",
                          description: "Step-by-step instructions for submitting your project",
                          icon: HelpCircle,
                          href: "#",
                        },
                      ].map((resource, i) => (
                        <Link key={i} href={resource.href}>
                          <div className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <resource.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-medium">{resource.title}</h3>
                              <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Support Hours</h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 5:00 PM PT</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Saturday - Sunday</span>
                          <span>10:00 AM - 3:00 PM PT</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>During Hackathon</span>
                          <span>24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <HackathonFooter />
    </div>
  )
}
