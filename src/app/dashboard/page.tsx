"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { HeaderBanner } from "@/components/HeaderBanner";
import { OverviewSection } from "@/components/OverviewSection";
import { CompanyGrowthChart } from "@/components/CompanyGrowthChart";
import { ShipmentList } from "@/components/ShipmentList";
import { motion } from "framer-motion";
import { Topbar } from "@/components/Topbar";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div className="flex min-h-screen w-screen bg-neutral-50 font-sans overflow-scroll">
      <Sidebar />
      <motion.main
        className="flex-1 overflow-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Topbar />
        <div className="flex flex-col gap-8 p-6 ">
          <HeaderBanner />
          <OverviewSection />
          <CompanyGrowthChart />
          <ShipmentList />
        </div>
      </motion.main>
    </div>
  );
}
