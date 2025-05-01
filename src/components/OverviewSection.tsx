import {
  ArrowDownIcon,
  ArrowUp2Icon,
  ArrowUpIcon,
  TruckIcon,
} from "@/assets/icons";
import { ReactNode } from "react";

const shipments: { title: string; value: number; icon: ReactNode }[] = [
  { title: "Total Shipments", value: 34, icon: <TruckIcon /> },
  { title: "Total Exports", value: 34, icon: <ArrowUpIcon /> },
  { title: "Total Imports", value: 34, icon: <ArrowDownIcon /> },
];

export const OverviewSection = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <div className="flex  justify-between items-start sm:items-center gap-4">
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
      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        <div className="w-full lg:w-[448px] h-auto bg-links py-6 px-4 text-white flex flex-col gap-4 rounded-md">
          <h2 className="text-xs font-light text-white/70">Your Balance</h2>
          <p className="text-2xl font-black text-white/90">₦3,000,000.28</p>
          <button className="w-fit bg-white py-2 px-4 rounded-lg text-links font-medium text-xs mt-4">
            Fund Waitlist
          </button>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shipments.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <p
                  className={`p-2 rounded-full ${
                    index === 0
                      ? "bg-[#F4E3C4]"
                      : index === 1
                      ? "bg-[#D9FFD7]"
                      : "bg-[#D7FDFF]"
                  }`}
                >
                  {item.icon}
                </p>
                <h2 className="text-sm font-medium text-gray-500">
                  {item.title}
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <p className="flex items-center text-2xl font-medium text-[#353535]">
                    {item.value}
                  </p>
                  <p className="flex items-center gap-0.5 text-primary-800">
                    <ArrowUp2Icon className="w-3 h-3" />
                    90%
                  </p>
                </div>
                <p className="text-[#7B7B7B] text-[8px] leading-[16px] flex gap-1 items-center">
                  Vs last month:{" "}
                  <span className="font-medium text-[11px] leading-[16px]">
                    4
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
