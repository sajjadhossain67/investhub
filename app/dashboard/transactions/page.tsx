"use client";

import { TransactionStats } from "@/components/dashboard/transactions/stats";
import { TransactionTable } from "@/components/dashboard/transactions/table";
import { TransactionFilters } from "@/components/dashboard/transactions/filters";

export default function TransactionsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
        <TransactionFilters />
      </div>
      <TransactionStats />
      <TransactionTable />
    </div>
  );
}