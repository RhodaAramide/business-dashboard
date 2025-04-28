"use client";

import { Sidebar } from "@/components/Sidebar";
import { HeaderBanner } from "@/components/HeaderBanner";
import { OverviewSection } from "@/components/OverviewSection";
import { CompanyGrowthChart } from "@/components/CompanyGrowthChart";
import { ShipmentList } from "@/components/ShipmentList";
import { Topbar } from "@/components/Topbar";

export default function DashboardPage() {
  return (
    <div className="flex min-w-screen min-h-screen">      
      <Sidebar />
      <main className="w-full h-full flex-1 bg-gray-50 overflow-auto">
      <Topbar />
      <div className="p-6">
      <HeaderBanner />
        <OverviewSection />
        <CompanyGrowthChart />
        <ShipmentList />
      </div>

      </main>
    </div>
  );
}
