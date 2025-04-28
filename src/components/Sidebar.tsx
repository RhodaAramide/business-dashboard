"use client";

export const Sidebar = () => {
    return (
        <aside className="flex flex-col w-60 h-screen top-0 left-0 bg-white border-r border-gray-300">
            {/* Logo Section */}
            <div className="flex flex-col justify-center items-center p-6 gap-2 border-b border-gray-300">
                {/* Logo (hidden as per design) */}
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
        </aside>
    );
};
