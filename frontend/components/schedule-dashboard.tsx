import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin } from "lucide-react"

export function ScheduleDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">Add to Calendar</Button>
          <Button>My Schedule</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="day1">Day 1 (Oct 15)</TabsTrigger>
          <TabsTrigger value="day2">Day 2 (Oct 16)</TabsTrigger>
          <TabsTrigger value="day3">Day 3 (Oct 17)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hackathon Schedule</CardTitle>
              <CardDescription>Complete schedule of all hackathon events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Day 1 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Day 1 - October 15, 2023</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        time: "9:00 AM - 10:00 AM",
                        title: "Check-in & Registration",
                        location: "Main Lobby",
                        type: "Main Event",
                      },
                      {
                        time: "10:00 AM - 11:30 AM",
                        title: "Opening Ceremony",
                        location: "Main Auditorium",
                        type: "Main Event",
                      },
                      {
                        time: "11:30 AM - 12:30 PM",
                        title: "Team Formation",
                        location: "Exhibition Hall",
                        type: "Main Event",
                      },
                      {
                        time: "12:30 PM - 1:30 PM",
                        title: "Lunch",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "1:30 PM - 2:30 PM",
                        title: "Hacking Begins",
                        location: "Hacking Spaces",
                        type: "Main Event",
                      },
                      {
                        time: "2:30 PM - 3:30 PM",
                        title: "TechCorp API Workshop",
                        location: "Workshop Room A",
                        type: "Workshop",
                      },
                      {
                        time: "4:00 PM - 5:00 PM",
                        title: "DataSoft Cloud Services Workshop",
                        location: "Workshop Room B",
                        type: "Workshop",
                      },
                      {
                        time: "6:00 PM - 7:00 PM",
                        title: "Dinner",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "8:00 PM - 9:00 PM",
                        title: "Mentor Office Hours",
                        location: "Mentoring Area",
                        type: "Mentoring",
                      },
                    ].map((event, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[0]}</div>
                          <div className="h-full w-px bg-border mx-2 my-1"></div>
                          <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[1]}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{event.title}</p>
                            <Badge
                              variant={
                                event.type === "Main Event"
                                  ? "default"
                                  : event.type === "Workshop"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Day 2 - October 16, 2023</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        time: "8:00 AM - 9:00 AM",
                        title: "Breakfast",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "9:00 AM - 10:00 AM",
                        title: "Daily Check-in",
                        location: "Main Auditorium",
                        type: "Main Event",
                      },
                      {
                        time: "10:30 AM - 11:30 AM",
                        title: "AI & Machine Learning Workshop",
                        location: "Workshop Room A",
                        type: "Workshop",
                      },
                      {
                        time: "12:00 PM - 1:00 PM",
                        title: "Lunch",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "2:00 PM - 3:00 PM",
                        title: "UI/UX Design Workshop",
                        location: "Workshop Room B",
                        type: "Workshop",
                      },
                      {
                        time: "4:00 PM - 5:00 PM",
                        title: "Mid-Hackathon Check-in",
                        location: "Main Auditorium",
                        type: "Main Event",
                      },
                      {
                        time: "6:00 PM - 7:00 PM",
                        title: "Dinner",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "8:00 PM - 10:00 PM",
                        title: "Gaming & Networking",
                        location: "Recreation Area",
                        type: "Social",
                      },
                    ].map((event, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[0]}</div>
                          <div className="h-full w-px bg-border mx-2 my-1"></div>
                          <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[1]}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{event.title}</p>
                            <Badge
                              variant={
                                event.type === "Main Event"
                                  ? "default"
                                  : event.type === "Workshop"
                                    ? "secondary"
                                    : event.type === "Social"
                                      ? "secondary"
                                      : "outline"
                              }
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day 3 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Day 3 - October 17, 2023</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        time: "8:00 AM - 9:00 AM",
                        title: "Breakfast",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "9:00 AM - 10:00 AM",
                        title: "Final Day Check-in",
                        location: "Main Auditorium",
                        type: "Main Event",
                      },
                      {
                        time: "10:00 AM - 12:00 PM",
                        title: "Project Finalization",
                        location: "Hacking Spaces",
                        type: "Main Event",
                      },
                      {
                        time: "12:00 PM - 1:00 PM",
                        title: "Lunch",
                        location: "Dining Area",
                        type: "Break",
                      },
                      {
                        time: "1:00 PM - 2:00 PM",
                        title: "Submission Deadline",
                        location: "Online",
                        type: "Main Event",
                      },
                      {
                        time: "2:00 PM - 4:00 PM",
                        title: "Project Presentations",
                        location: "Main Auditorium",
                        type: "Main Event",
                      },
                      {
                        time: "4:00 PM - 5:00 PM",
                        title: "Judging",
                        location: "Exhibition Hall",
                        type: "Main Event",
                      },
                      {
                        time: "5:00 PM - 6:30 PM",
                        title: "Closing Ceremony & Awards",
                        location: "Main Auditorium",
                        type: "Main Event",
                      },
                    ].map((event, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[0]}</div>
                          <div className="h-full w-px bg-border mx-2 my-1"></div>
                          <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[1]}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{event.title}</p>
                            <Badge
                              variant={
                                event.type === "Main Event"
                                  ? "default"
                                  : event.type === "Workshop"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day1" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Day 1 - October 15, 2023</CardTitle>
              <CardDescription>First day of the hackathon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: "9:00 AM - 10:00 AM",
                    title: "Check-in & Registration",
                    location: "Main Lobby",
                    type: "Main Event",
                  },
                  {
                    time: "10:00 AM - 11:30 AM",
                    title: "Opening Ceremony",
                    location: "Main Auditorium",
                    type: "Main Event",
                  },
                  {
                    time: "11:30 AM - 12:30 PM",
                    title: "Team Formation",
                    location: "Exhibition Hall",
                    type: "Main Event",
                  },
                  {
                    time: "12:30 PM - 1:30 PM",
                    title: "Lunch",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "1:30 PM - 2:30 PM",
                    title: "Hacking Begins",
                    location: "Hacking Spaces",
                    type: "Main Event",
                  },
                  {
                    time: "2:30 PM - 3:30 PM",
                    title: "TechCorp API Workshop",
                    location: "Workshop Room A",
                    type: "Workshop",
                  },
                  {
                    time: "4:00 PM - 5:00 PM",
                    title: "DataSoft Cloud Services Workshop",
                    location: "Workshop Room B",
                    type: "Workshop",
                  },
                  {
                    time: "6:00 PM - 7:00 PM",
                    title: "Dinner",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "8:00 PM - 9:00 PM",
                    title: "Mentor Office Hours",
                    location: "Mentoring Area",
                    type: "Mentoring",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[0]}</div>
                      <div className="h-full w-px bg-border mx-2 my-1"></div>
                      <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[1]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.title}</p>
                        <Badge
                          variant={
                            event.type === "Main Event"
                              ? "default"
                              : event.type === "Workshop"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day2" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Day 2 - October 16, 2023</CardTitle>
              <CardDescription>Second day of the hackathon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: "8:00 AM - 9:00 AM",
                    title: "Breakfast",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "9:00 AM - 10:00 AM",
                    title: "Daily Check-in",
                    location: "Main Auditorium",
                    type: "Main Event",
                  },
                  {
                    time: "10:30 AM - 11:30 AM",
                    title: "AI & Machine Learning Workshop",
                    location: "Workshop Room A",
                    type: "Workshop",
                  },
                  {
                    time: "12:00 PM - 1:00 PM",
                    title: "Lunch",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "2:00 PM - 3:00 PM",
                    title: "UI/UX Design Workshop",
                    location: "Workshop Room B",
                    type: "Workshop",
                  },
                  {
                    time: "4:00 PM - 5:00 PM",
                    title: "Mid-Hackathon Check-in",
                    location: "Main Auditorium",
                    type: "Main Event",
                  },
                  {
                    time: "6:00 PM - 7:00 PM",
                    title: "Dinner",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "8:00 PM - 10:00 PM",
                    title: "Gaming & Networking",
                    location: "Recreation Area",
                    type: "Social",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[0]}</div>
                      <div className="h-full w-px bg-border mx-2 my-1"></div>
                      <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[1]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.title}</p>
                        <Badge
                          variant={
                            event.type === "Main Event"
                              ? "default"
                              : event.type === "Workshop"
                                ? "secondary"
                                : event.type === "Social"
                                  ? "secondary"
                                  : "outline"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day3" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Day 3 - October 17, 2023</CardTitle>
              <CardDescription>Final day of the hackathon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: "8:00 AM - 9:00 AM",
                    title: "Breakfast",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "9:00 AM - 10:00 AM",
                    title: "Final Day Check-in",
                    location: "Main Auditorium",
                    type: "Main Event",
                  },
                  {
                    time: "10:00 AM - 12:00 PM",
                    title: "Project Finalization",
                    location: "Hacking Spaces",
                    type: "Main Event",
                  },
                  {
                    time: "12:00 PM - 1:00 PM",
                    title: "Lunch",
                    location: "Dining Area",
                    type: "Break",
                  },
                  {
                    time: "1:00 PM - 2:00 PM",
                    title: "Submission Deadline",
                    location: "Online",
                    type: "Main Event",
                  },
                  {
                    time: "2:00 PM - 4:00 PM",
                    title: "Project Presentations",
                    location: "Main Auditorium",
                    type: "Main Event",
                  },
                  {
                    time: "4:00 PM - 5:00 PM",
                    title: "Judging",
                    location: "Exhibition Hall",
                    type: "Main Event",
                  },
                  {
                    time: "5:00 PM - 6:30 PM",
                    title: "Closing Ceremony & Awards",
                    location: "Main Auditorium",
                    type: "Main Event",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[0]}</div>
                      <div className="h-full w-px bg-border mx-2 my-1"></div>
                      <div className="text-sm font-medium text-muted-foreground">{event.time.split(" - ")[1]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.title}</p>
                        <Badge
                          variant={
                            event.type === "Main Event"
                              ? "default"
                              : event.type === "Workshop"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Add
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
