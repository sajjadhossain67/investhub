"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, RefreshCcw, Wallet } from "lucide-react";

const stats = [
  {
    title: "Total Volume",
    value: "$2.4M",
    change: "+20%",
    icon: Wallet,
  },
  {
    title: "Inflow",
    value: "$1.8M",
    change: "+12%",
    icon: ArrowDownIcon,
    changeType: "positive",
  },
  {
    title: "Outflow",
    value: "$600K",
    change: "-5%",
    icon: ArrowUpIcon,
    changeType: "negative",
  },
  {
    title: "Pending",
    value: "$150K",
    icon: RefreshCcw,
  },
];

export function TransactionStats() {
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
              <p className={`text-xs ${
                stat.changeType === "negative" ? "text-red-500" : "text-green-500"
              }`}>
                {stat.change} from last month
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}