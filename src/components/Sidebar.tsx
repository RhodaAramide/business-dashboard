// Sidebar.tsx

"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import toast from "react-hot-toast";
import {
  AddressIcon,
  DashboardIcon,
  DollarIcon,
  HelpIcon,
  LogoutIcon,
  NotificationIcon,
  ServiceIcon,
  ShipmentIcon,
  WalletIcon,
} from "@/assets/icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";

interface LinkItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const links: LinkItem[] = [
  { href: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
  { href: "/shipments", icon: <ShipmentIcon />, label: "Shipments" },
  { href: "/services", icon: <ServiceIcon />, label: "Our Services" },
  { href: "/notifications", icon: <NotificationIcon />, label: "Notifications" },
  { href: "/wallet", icon: <WalletIcon />, label: "Wallet" },
  { href: "/addresses", icon: <AddressIcon />, label: "My Addresses" },
  { href: "/referral", icon: <DollarIcon />, label: "Invite & Earn" },
  { href: "/help", icon: <HelpIcon />, label: "Help Center" },
];

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
    const currentPath = usePathname();

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Removed incorrect setCurrentPath call
      const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    redirect("/auth/login");
  };

  return (
    <div className="font-sans">
      {/* Mobile Menu Icon */}
      <div className="md:hidden p-4">
        <Menu size={28} onClick={() => setOpen(!open)} className="cursor-pointer" />
      </div>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-full md:h-[1213px] bg-white border-r border-neutral-200 shadow-sm flex flex-col justify-between z-50 transition-transform md:translate-x-0 md:static md:w-64 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        initial={{ x: -250 }}
        animate={{ x: isDesktop ? 0 : open ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={() => setOpen(false)}
          className="mb-4 text-right md:hidden p-4"
        >
          Close ✖
        </button>

        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center w-full md:h-24 gap-2 border-b border-neutral-200">
          {/* You can add your logo here */}
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col items-center p-8 gap-2 flex-grow">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center p-4 gap-2 w-full h-14 rounded-lg ${
                currentPath === link.href
                  ? "bg-banner text-primary-50 font-semibold text-base"
                  : "text-secondary font-normal text-base"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="flex flex-col items-start p-0 gap-2 w-[180px] mb-8 mx-auto">
          <div className="flex items-center p-4 gap-2 w-full h-20 rounded-lg">
            <Image
              src="/images/Ellipse.png"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="text-[#525252] text-sm">
              <p>Firstname Lastname</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
          >
            <LogoutIcon />
            Log Out
          </button>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};
