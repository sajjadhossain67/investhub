"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

interface MessageContentProps {
  conversationId: string | null;
}

const messages = [
  {
    id: "1",
    senderId: "user1",
    content: "Hi, I'm interested in your eco-friendly smart home system.",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    senderId: "user2",
    content: "Thank you for your interest! What would you like to know?",
    timestamp: "10:32 AM",
  },
];

export function MessageContent({ conversationId }: MessageContentProps) {
  if (!conversationId) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">Active now</p>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.senderId === "user1" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.senderId === "user1"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input placeholder="Type a message..." />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}