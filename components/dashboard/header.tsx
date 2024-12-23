"use client";

import { UserNav } from "@/components/dashboard/user-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4 flex-1">
          <div className="w-full max-w-sm">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}