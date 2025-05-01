// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { ReactNode } from "react";

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
      <div className="flex min-h-screen w-screen bg-neutral-50 font-dmsans overflow-scroll">
        {!isAuthPage && <Sidebar />}
        <div className="flex-1 flex flex-col overflow-auto">
          {!isAuthPage && <Topbar />}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
  );
};
