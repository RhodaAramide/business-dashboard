import { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { month: "Jan", value: 300 },
  { month: "Feb", value: 400 },
  { month: "Mar", value: 350 },
  { month: "Apr", value: 500 },
  { month: "May", value: 450 },
  { month: "Jun", value: 600 },
];

export const CompanyGrowthChart = () => {
  const [activeTab, setActiveTab] = useState("Year");

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-grey-900 text-2xl">Recent shipment</h1>
        <p className="border-grey-200 py-2 px-3 font-medium text-neutral-500 bg-white rounded-lg">See All</p>
      </div>
      <div className="bg-white p-6 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Company Growth
          </h2>
          <div className="flex space-x-4 bg-gray-100 p-1 rounded-lg">
            {["Year", "Month", "Week"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  activeTab === tab
                    ? "bg-white text-gray-800 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(90, 101, 171, 0.2)"
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor="rgba(90, 101, 171, 0)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
