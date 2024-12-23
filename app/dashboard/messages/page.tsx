"use client";

import { MessageList } from "@/components/dashboard/messages/message-list";
import { MessageContent } from "@/components/dashboard/messages/message-content";
import { useState } from "react";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  return (
    <div className="flex-1 flex h-[calc(100vh-4rem)]">
      <MessageList 
        selectedId={selectedConversation} 
        onSelect={setSelectedConversation} 
      />
      <MessageContent conversationId={selectedConversation} />
    </div>
  );
}