"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { IdeaCard } from "@/components/dashboard/idea-card";

const ideas = [
  {
    id: "1",
    title: "Eco-Friendly Smart Home System",
    description: "An integrated system for managing home energy consumption using AI and IoT devices.",
    creator: "Sarah Johnson",
    targetAmount: 250000,
    currentAmount: 125000,
    category: "Green Tech",
    status: "APPROVED",
    createdAt: new Date("2024-01-15"),
    images: ["https://images.unsplash.com/photo-1558002038-1055907df827"],
  },
  {
    id: "2",
    title: "AI-Powered Education Platform",
    description: "Personalized learning platform that adapts to each student's needs and learning style.",
    creator: "Michael Chen",
    targetAmount: 500000,
    currentAmount: 350000,
    category: "Education",
    status: "APPROVED",
    createdAt: new Date("2024-02-01"),
    images: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8"],
  },
  // Add more ideas as needed
];

export default function IdeasPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Ideas</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Idea
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}