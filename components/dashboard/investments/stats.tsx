"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, History, PiggyBank } from "lucide-react";

const stats = [
  {
    title: "Total Invested",
    value: "$1.2M",
    change: "+12%",
    icon: DollarSign,
  },
  {
    title: "Active Investments",
    value: "45",
    change: "+5%",
    icon: TrendingUp,
  },
  {
    title: "Pending Returns",
    value: "$250K",
    change: "+8%",
    icon: History,
  },
  {
    title: "Available Balance",
    value: "$85K",
    icon: PiggyBank,
  },
];

export function InvestmentStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            {stat.change && (
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}