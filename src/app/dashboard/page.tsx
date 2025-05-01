"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HeaderBanner } from "@/components/HeaderBanner";
import { OverviewSection } from "@/components/OverviewSection";
import { CompanyGrowthChart } from "@/components/CompanyGrowthChart";
import { ShipmentList } from "@/components/ShipmentList";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    if (!isLoggedIn) {
      router.replace('/auth/login');
    }
  }, [router]);

  return (
    <div className="flex w-full h-full bg-neutral-50 font-dmsans">
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8 py-4 px-4 ">
          <HeaderBanner />
          <OverviewSection />
          <CompanyGrowthChart />
          <ShipmentList />
        </div>
      </motion.main>
    </div>
  );
}
