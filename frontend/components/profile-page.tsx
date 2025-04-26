import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { User } from "lucide-react"

export function ProfilePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        <Button>Edit Profile</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">Administrator</p>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between border-b py-2">
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-sm text-muted-foreground">john@example.com</span>
                </div>
                <div className="flex items-center justify-between border-b py-2">
                  <span className="text-sm font-medium">Phone</span>
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-between border-b py-2">
                  <span className="text-sm font-medium">Location</span>
                  <span className="text-sm text-muted-foreground">New York, USA</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium">Joined</span>
                  <span className="text-sm text-muted-foreground">January 2023</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Tabs defaultValue="about" className="space-y-4">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>Share information about yourself</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bio</CardTitle>
                  <CardDescription>Edit your public bio</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Write a short bio about yourself..."
                    className="min-h-[150px]"
                    defaultValue="Senior administrator with over 10 years of experience in project management and team leadership. Passionate about creating efficient workflows and improving organizational processes."
                  />
                </CardContent>
                <CardFooter>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent actions and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "Updated profile information", time: "2 hours ago" },
                      { action: "Added new user", time: "Yesterday at 4:30 PM" },
                      { action: "Updated system settings", time: "2 days ago" },
                      { action: "Generated monthly report", time: "3 days ago" },
                      { action: "Completed security audit", time: "1 week ago" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-muted-foreground">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
