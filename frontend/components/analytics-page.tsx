import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Page Views</CardTitle>
                <CardDescription>Total page views across all pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234,567</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                <div className="h-[150px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Unique Visitors</CardTitle>
                <CardDescription>Total unique visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">456,789</div>
                <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                <div className="h-[150px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Bounce Rate</CardTitle>
                <CardDescription>Average bounce rate across all pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.4%</div>
                <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                <div className="h-[150px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>View your traffic sources and user behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>See where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
                </div>
                <div className="space-y-4">
                  {[
                    { source: "Direct", percentage: "35%", count: "159,245" },
                    { source: "Organic Search", percentage: "28%", count: "127,430" },
                    { source: "Social Media", percentage: "22%", count: "100,150" },
                    { source: "Referral", percentage: "10%", count: "45,560" },
                    { source: "Email", percentage: "5%", count: "22,780" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.source}</div>
                        <div className="text-sm text-muted-foreground">{item.count} visitors</div>
                      </div>
                      <div className="font-bold">{item.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="conversion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rates</CardTitle>
              <CardDescription>Track your conversion metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analysis</CardTitle>
              <CardDescription>Track your revenue and sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <LineChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Chart will render here</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
