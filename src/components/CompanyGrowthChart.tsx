

import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    { month: "Jan", value: 300 },
    { month: "Feb", value: 400 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 500 },
    { month: "May", value: 450 },
    { month: "Jun", value: 600 },
];

export const CompanyGrowthChart = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow mb-8">
            <h2 className="text-lg font-semibold mb-4">Company Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(90, 101, 171, 0.2)" stopOpacity={1} />
                            <stop offset="100%" stopColor="rgba(90, 101, 171, 0)" stopOpacity={0} />
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
    );
};
