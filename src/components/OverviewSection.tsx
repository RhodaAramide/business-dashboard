import { ArrowDownIcon, ArrowUpIcon, TruckIcon } from "@/assets/icons";
import { ReactNode } from "react";

const shipments: { title: string; value: number; icon: ReactNode }[] = [
  { title: "Total Shipments", value: 34, icon: <TruckIcon /> },
  { title: "Total Exports", value: 34, icon: <ArrowUpIcon /> },
  { title: "Total Imports", value: 34, icon: <ArrowDownIcon /> },
];

export const OverviewSection = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-grey-900 text-2xl">Overview</h1>
        <div className="flex gap-2 items-center">
            <select className="py-2 px-3 text-sm font-medium bg-white rounded-md border-grey-200 text-gray-700">
            {["This Month", "This Week", "This Day"].map((filter, index) => (
              <option key={index} value={filter}>
              {filter}
              </option>
            ))}
            </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-[448px] h-[163px] bg-links py-6 px-4 text-white flex flex-col gap-2 rounded-md">
        <h2 className="text-sm font-medium">Your Balance</h2>
        <p className="text-2xl font-bold">₦3,000,000.28</p>
        <button className="w-fit bg-white py-2 px-4 rounded-lg text-links font-medium text-xs mt-4">
          Fund Waitlist
        </button>
      </div>
      <div className="w-full h-[163px] grid grid-cols-3 gap-4">
        {shipments.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-md w-[212px] flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <p>{item.icon}</p>
              <h2 className="text-sm font-medium text-gray-500">{item.title}</h2>
            </div>
            <div className="flex flex-col items-center gap-2">              
              <p className="flex items-center text-2xl font-bold">{item.value}
                <span className="text-"><ArrowUpIcon className="size-3"/>90%</span>
              </p>
              <p className="text-[#7B7B7B] text-[8px] leading-[16px] flex gap-2 items-center">Vs last month: 
                <span className="font-medium text-[11px] leading-[16px]">4</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};