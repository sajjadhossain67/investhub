"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  LightbulbIcon, 
  Users, 
  Settings, 
  PieChart,
  Wallet,
  MessageSquare,
  LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Ideas',
    icon: LightbulbIcon,
    href: '/dashboard/ideas',
    color: 'text-violet-500',
  },
  {
    label: 'Users',
    icon: Users,
    href: '/dashboard/users',
    color: 'text-pink-700',
  },
  {
    label: 'Investments',
    icon: PieChart,
    href: '/dashboard/investments',
    color: 'text-orange-700',
  },
  {
    label: 'Transactions',
    icon: Wallet,
    href: '/dashboard/transactions',
    color: 'text-emerald-500',
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/dashboard/messages',
    color: 'text-blue-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">InvestHub</h1>
        </Link>
        <ScrollArea className="flex-1">
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === route.href && "bg-secondary"
                )}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="px-3 py-2">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
}