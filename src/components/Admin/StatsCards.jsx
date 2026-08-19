import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import api from "../../services/api";

function StatsCards() {
    const [stats, setStats] = useState({
        users: 0,
        foods: 0,
        orders: 0,
        revenue: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get("/admin/dashboard");

                const statistics = response.data.statistics;

                setStats({
                    users: Number(statistics?.users || 0),
                    foods: Number(statistics?.foods || 0),
                    orders: Number(statistics?.orders || 0),
                    revenue: Number(statistics?.revenue || 0),
                });
            } catch (error) {
                console.error("Stats yüklənmədi:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="w-full min-w-0 h-32 sm:h-36 bg-[#181818] border border-zinc-800 rounded-2xl animate-pulse"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            <div className="min-w-0">
                <StatCard
                    title="Total Revenue"
                    value={`$${stats.revenue.toFixed(2)}`}
                    description="Total revenue"
                />
            </div>

            <div className="min-w-0">
                <StatCard
                    title="Total Orders"
                    value={stats.orders}
                    description="All orders"
                />
            </div>

            <div className="min-w-0">
                <StatCard
                    title="Total Users"
                    value={stats.users}
                    description="Registered users"
                />
            </div>

            <div className="min-w-0">
                <StatCard
                    title="Total Foods"
                    value={stats.foods}
                    description="Restaurant foods"
                />
            </div>

        </div>
    );
}

export default StatsCards;