"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Investment } from "@/app/types";

const investments: Investment[] = [
  {
    id: "1",
    ideaId: "1",
    investorId: "inv_1",
    amount: 50000,
    status: "COMPLETED",
    transactionDate: new Date("2024-02-15"),
  },
  {
    id: "2",
    ideaId: "2",
    investorId: "inv_2",
    amount: 25000,
    status: "PENDING",
    transactionDate: new Date("2024-03-01"),
  },
];

export function InvestmentTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Investment ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {investments.map((investment) => (
            <TableRow key={investment.id}>
              <TableCell className="font-medium">#{investment.id}</TableCell>
              <TableCell>${investment.amount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge
                  variant={investment.status === "COMPLETED" ? "success" : "secondary"}
                >
                  {investment.status}
                </Badge>
              </TableCell>
              <TableCell>
                {formatDistanceToNow(investment.transactionDate, { addSuffix: true })}
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}