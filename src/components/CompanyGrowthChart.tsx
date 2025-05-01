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

const dataYear = [
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

const dataMonth = [
  { day: "1", value: 50 },
  { day: "2", value: 80 },
  { day: "3", value: 120 },
  { day: "4", value: 90 },
  { day: "5", value: 150 },
  { day: "6", value: 200 },
  { day: "7", value: 180 },
  { day: "8", value: 220 },
  { day: "9", value: 170 },
  { day: "10", value: 250 },
];

const dataWeek = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 50 },
  { day: "Wed", value: 70 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 100 },
  { day: "Sun", value: 80 },
];

export const CompanyGrowthChart = () => {
  const [activeTab, setActiveTab] = useState("Year");

  const getData = () => {
    if (activeTab === "Year") return dataYear;
    if (activeTab === "Month") return dataMonth;
    if (activeTab === "Week") return dataWeek;
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-start sm:items-center gap-2">
        <h1 className="font-medium text-gray-900 text-xl sm:text-2xl">
          Recent shipment
        </h1>
        <p className="border border-gray-200 py-2 px-3 font-medium text-neutral-500 bg-white rounded-lg cursor-pointer">
          See All
        </p>
      </div>
      <div className="bg-white flex flex-col gap-4 p-4 sm:p-6 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Company Growth
          </h2>
          <div className="flex space-x-2 sm:space-x-4 bg-gray-100 p-1 rounded-lg">
            {["Year", "Month", "Week"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm ${
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
        <div className="w-full h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={getData()}>
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
                dataKey={activeTab === "Year" ? "month" : "day"}
                tickLine={false}
                axisLine={false}
                domain={activeTab === "Year" ? [1, 12] : undefined}
                tickFormatter={(tick) =>
                  activeTab === "Year" && tick === "0" ? "" : tick
                }
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                domain={[0, "dataMax"]}
                tickCount={Math.ceil((1000 + 200) / 200) + 1}

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
    </div>
  );
};
