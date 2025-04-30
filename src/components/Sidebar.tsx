import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import toast from "react-hot-toast";
import { AddressIcon, DashboardIcon, DollarIcon, HelpIcon, LogoutIcon, NotificationIcon, ServiceIcon, ShipmentIcon, WalletIcon } from "@/assets/icons";
import Link from "next/link";
import { redirect } from 'next/navigation';

const links = [
    { href: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { href: "/shipments", icon: <ShipmentIcon />, label: "Shipments" },
    { href: "/services", icon: <ServiceIcon />, label: "Our Services" },
    { href: "/notifications", icon: <NotificationIcon />, label: "Notifications" },
    { href: "/wallet", icon: <WalletIcon />, label: "Wallet" },
    { href: "/addresses", icon: <AddressIcon />, label: "My Addresses" },
    { href: "/invite", icon: <DollarIcon />, label: "Invite & Earn" },
    { href: "/help", icon: <HelpIcon />, label: "Help Center" },
];

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    const handleLogout = () => {        
        toast.success("Logged out successfully");
        document.cookie =
      'dashboard-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        redirect("/login");
    };

    return (
        <div className="font-sans">
            {/* Mobile Menu Icon */}
            <div className="md:hidden p-4">
                <Menu
                    size={28}
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                />
            </div>

            {/* Sidebar */}
            <motion.aside
                className="w-64 h-[1213px] bg-white border-r border-neutral-200 flex flex-none flex-col justify-between "
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                exit={{ x: -250 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="mb-4 text-right md:hidden p-4"
                >
                    Close ✖
                </button>

                {/* Logo Section */}
                <div className="flex flex-col justify-center items-center w-full h-24 gap-2  border-b border-neutral-200">
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
                        <img src="/images/Ellipse.png"
                        className="size-12"/>
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
        </div>
    );
};
