"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";

const users = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "IDEA_CREATOR",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    status: "Active",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    role: "INVESTOR",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    status: "Active",
  },
  // Add more users as needed
];

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <div className="flex items-center space-x-2">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-8" />
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role.replace("_", " ")}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="default">{user.status}</Badge>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
