"use client";

import { InvestmentStats } from "@/components/dashboard/investments/stats";
import { InvestmentTable } from "@/components/dashboard/investments/table";
import { InvestmentFilters } from "@/components/dashboard/investments/filters";

export default function InvestmentsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Investments</h2>
        <InvestmentFilters />
      </div>
      <InvestmentStats />
      <InvestmentTable />
    </div>
  );
}