import "./globals.css";
import { ReactNode } from "react";
import { ToastProvider } from "./providers/ToastProvider";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export const metadata = {
  title: "Business Dashboard",
  description: "Dashboard project with Next.js, TypeScript, TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-screen bg-neutral-50 font-sans overflow-scroll">
        <ToastProvider />
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <Topbar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
