import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import api from "../../services/api";

function RevenueChart() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRevenue = async () => {
            try {
                const response = await api.get(
                    "/api/orders/admin/revenue"
                );

                setData(response.data.revenue || []);
            } catch (error) {
                console.error("Revenue yüklənmədi:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRevenue();
    }, []);

    if (loading) {
        return (
            <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 md:p-6 h-80 flex items-center justify-center">
                <p className="text-zinc-500">
                    Loading revenue...
                </p>
            </div>
        );
    }

    return (
        <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-4 sm:p-5 md:p-6">

            <div className="mb-5 md:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                    Revenue
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                    Last 6 months
                </p>
            </div>

            <div className="w-full h-64 sm:h-72 md:h-80">

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 5,
                            left: -15,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#27272a"
                        />

                        <XAxis
                            dataKey="month"
                            stroke="#71717a"
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis
                            stroke="#71717a"
                            tick={{ fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#181818",
                                border: "1px solid #3f3f46",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#AC8941"
                            strokeWidth={3}
                            dot={{
                                r: 4,
                                fill: "#AC8941",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default RevenueChart;