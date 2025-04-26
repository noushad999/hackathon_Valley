import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BarChart3, Clock, CreditCard, DollarSign, Download, LineChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px] flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">User {i}</p>
                        <p className="text-sm text-muted-foreground">user{i}@example.com</p>
                      </div>
                      <div className="ml-auto font-medium">+${Math.floor(Math.random() * 500) + 100}.00</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Reports</CardTitle>
              <CardDescription>View and download your monthly reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { month: "January", year: "2023", amount: "$12,234.89" },
                  { month: "February", year: "2023", amount: "$15,671.23" },
                  { month: "March", year: "2023", amount: "$18,102.45" },
                  { month: "April", year: "2023", amount: "$21,983.67" },
                  { month: "May", year: "2023", amount: "$24,521.90" },
                ].map((report, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">
                        {report.month} {report.year}
                      </p>
                      <p className="text-sm text-muted-foreground">Monthly revenue report</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right font-medium">{report.amount}</div>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Download className="h-4 w-4" />
                        <span className="sr-only md:not-sr-only md:whitespace-nowrap">Download</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>You have 5 unread notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "New user registered", time: "2 minutes ago", read: false },
                  { title: "New order placed", time: "1 hour ago", read: false },
                  { title: "Payment received", time: "3 hours ago", read: false },
                  { title: "Product out of stock", time: "5 hours ago", read: false },
                  { title: "New feature released", time: "1 day ago", read: false },
                  { title: "System update completed", time: "2 days ago", read: true },
                  { title: "Maintenance scheduled", time: "3 days ago", read: true },
                ].map((notification, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
                  >
                    <div className="flex-1 space-y-1">
                      <p className="font-medium leading-none">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                    </div>
                    {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
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
