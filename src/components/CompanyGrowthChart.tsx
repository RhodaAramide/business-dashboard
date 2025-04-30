import { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

const data = [
    { month: "0", value: 100 },
  { month: "1", value: 200 },
  { month: "2", value: 450 },
  { month: "3", value: 300 },
  { month: "4", value: 700 },
  { month: "5", value: 500 },
  { month: "6", value: 800 },
  { month: "7", value: 600 },
  { month: "8", value: 900 },
  { month: "9", value: 400 },
  { month: "10", value: 650 },
  { month: "11", value: 750 },
  { month: "12", value: 1000 },
];

export const CompanyGrowthChart = () => {
  const [activeTab, setActiveTab] = useState("Year");

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-grey-900 text-2xl">Recent shipment</h1>
        <p className="border-grey-200 py-2 px-3 font-medium text-neutral-500 bg-white rounded-lg">
          See All
        </p>
      </div>
      <div className="bg-white flex flex-col gap-4 p-6 rounded-xl">
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
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              domain={[1, 12]}
              tickFormatter={(tick) => (tick === "0" ? "" : tick)} // Skip rendering "0"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, "dataMax"]}
              tickCount={Math.ceil((1000 + 200) / 200) + 1} // Adjust tick count based on progression
            />
            <Tooltip />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
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
