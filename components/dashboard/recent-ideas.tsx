"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentIdeas = [
  {
    id: "1",
    title: "Eco-Friendly Smart Home System",
    creator: "Sarah Johnson",
    amount: 25000,
    status: "Pending",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "2",
    title: "AI-Powered Education Platform",
    creator: "Michael Chen",
    amount: 50000,
    status: "Approved",
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    id: "3",
    title: "Sustainable Fashion Marketplace",
    creator: "Emma Davis",
    amount: 35000,
    status: "Pending",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: "4",
    title: "Healthcare IoT Solution",
    creator: "David Kim",
    amount: 75000,
    status: "Approved",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: "5",
    title: "Urban Farming Technology",
    creator: "Lisa Wang",
    amount: 45000,
    status: "Pending",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
  },
];

export function RecentIdeas() {
  return (
    <div className="space-y-8">
      {recentIdeas.map((idea) => (
        <div key={idea.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={idea.avatarUrl} alt="Avatar" />
            <AvatarFallback>{idea.creator[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{idea.title}</p>
            <p className="text-sm text-muted-foreground">
              by {idea.creator}
            </p>
          </div>
          <div className="ml-auto font-medium">
            ${idea.amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}