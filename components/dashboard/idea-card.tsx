"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

interface IdeaCardProps {
  idea: {
    id: string;
    title: string;
    description: string;
    creator: string;
    targetAmount: number;
    currentAmount: number;
    category: string;
    status: string;
    createdAt: Date;
    images: string[];
  };
}

export function IdeaCard({ idea }: IdeaCardProps) {
  const progress = (idea.currentAmount / idea.targetAmount) * 100;

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={idea.images[0]}
          alt={idea.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{idea.category}</Badge>
          <Badge variant={idea.status === "default" ? "outline" : "secondary"}>
            {idea.status}
          </Badge>
        </div>
        <CardTitle>{idea.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{idea.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Raised</span>
            <span className="font-medium">
              ${idea.currentAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Target</span>
            <span className="font-medium">
              ${idea.targetAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Created by {idea.creator} •{" "}
        {formatDistanceToNow(idea.createdAt, { addSuffix: true })}
      </CardFooter>
    </Card>
  );
}
