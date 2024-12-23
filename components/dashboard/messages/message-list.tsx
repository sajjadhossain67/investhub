"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageListProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const conversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    lastMessage: "Thanks for considering my investment proposal",
    time: "2m ago",
    unread: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    lastMessage: "When can we schedule a meeting?",
    time: "1h ago",
    unread: false,
  },
];

export function MessageList({ selectedId, onSelect }: MessageListProps) {
  return (
    <div className="w-80 border-r">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-8" />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              "flex items-center space-x-4 p-4 cursor-pointer hover:bg-accent",
              selectedId === conversation.id && "bg-accent",
              conversation.unread && "font-medium"
            )}
            onClick={() => onSelect(conversation.id)}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={conversation.avatar} />
              <AvatarFallback>{conversation.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium leading-none">
                  {conversation.name}
                </p>
                <span className="text-xs text-muted-foreground">
                  {conversation.time}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {conversation.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}