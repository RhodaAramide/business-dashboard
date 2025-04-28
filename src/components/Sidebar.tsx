import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
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
                 className="w-64 h-full bg-white shadow-md flex flex-none flex-col z-50"
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
                <div className="flex flex-col justify-center items-center p-6 gap-2 border-b border-gray-300">
                    <div className="hidden w-[170px] h-12"></div>
                </div>

                {/* Navigation Section */}
                <nav className="flex flex-col items-center justify-center p-8 gap-2 flex-grow">
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 bg-[#5A65AB] rounded-lg text-[#EBFFE2] font-semibold text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#EBFFE2]"></div>
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#525252]"></div>
                        Shipments
                    </a>
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#525252]"></div>
                        Services
                    </a>
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#525252]"></div>
                        Wallet
                    </a>
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#525252]"></div>
                        Invite & Earn
                    </a>
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#525252]"></div>
                        Help Center
                    </a>
                </nav>

                {/* Profile Section */}
                <div className="flex flex-col items-start p-0 gap-2 w-[180px] mb-8 mx-auto">
                    <div className="flex items-center p-4 gap-2 w-full h-20 rounded-lg">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div className="text-[#525252] text-sm">
                            <p>Firstname Lastname</p>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex items-center p-4 gap-2 w-full h-14 rounded-lg text-[#525252] font-normal text-sm"
                    >
                        <div className="w-6 h-6 border-2 border-[#525252]"></div>
                        Log Out
                    </a>
                </div>
            </motion.aside>
        </>
    );
};
