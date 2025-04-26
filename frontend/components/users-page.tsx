import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Plus, Search } from "lucide-react"

export function UsersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage your users, their roles and permissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search users..." className="pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                  { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
                  { name: "Robert Johnson", email: "robert@example.com", role: "Editor", status: "Inactive" },
                  { name: "Emily Davis", email: "emily@example.com", role: "User", status: "Active" },
                  { name: "Michael Wilson", email: "michael@example.com", role: "User", status: "Active" },
                  { name: "Sarah Brown", email: "sarah@example.com", role: "Editor", status: "Active" },
                  { name: "David Miller", email: "david@example.com", role: "User", status: "Inactive" },
                  { name: "Lisa Anderson", email: "lisa@example.com", role: "User", status: "Active" },
                ].map((user, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                        }`}
                      >
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
