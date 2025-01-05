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
import { formatDistanceToNow } from "date-fns";

const transactions = [
  {
    id: "TX123",
    type: "INVESTMENT",
    amount: 50000,
    status: "COMPLETED",
    date: new Date("2024-03-01"),
    description: "Investment in Eco-Friendly Smart Home System",
  },
  {
    id: "TX124",
    type: "WITHDRAWAL",
    amount: 25000,
    status: "PENDING",
    date: new Date("2024-03-02"),
    description: "Withdrawal Request",
  },
  {
    id: "TX125",
    type: "DEPOSIT",
    amount: 75000,
    status: "COMPLETED",
    date: new Date("2024-03-03"),
    description: "Account Funding",
  },
];

export function TransactionTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-medium">{tx.id}</TableCell>
              <TableCell>
                <Badge variant="outline">{tx.type}</Badge>
              </TableCell>
              <TableCell
                className={
                  tx.type === "WITHDRAWAL" ? "text-red-500" : "text-green-500"
                }
              >
                {tx.type === "WITHDRAWAL" ? "-" : "+"}$
                {tx.amount.toLocaleString()}
              </TableCell>
              <TableCell>
                <Badge
                  variant={tx.status === "COMPLETED" ? "default" : "secondary"}
                >
                  {tx.status}
                </Badge>
              </TableCell>
              <TableCell>
                {formatDistanceToNow(tx.date, { addSuffix: true })}
              </TableCell>
              <TableCell className="max-w-[200px] truncate">
                {tx.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
