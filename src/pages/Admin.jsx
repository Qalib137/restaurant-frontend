import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatsCards from "../components/Admin/StatsCards";
import RevenueChart from "../components/Admin/RevenueChart";
import FoodManagement from "../components/Admin/FoodManagement";
import OrderManagement from "../components/Admin/OrderManagement";

function Admin() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const navigate = useNavigate();

    const tabs = [
        {
            id: "dashboard",
            label: "Dashboard",
        },
        {
            id: "foods",
            label: "Food Management",
        },
        {
            id: "orders",
            label: "Order Management",
        },
    ];

    return (
        <div className="w-full min-h-screen bg-[#111111] text-white overflow-x-hidden">

            <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-5 sm:py-7 md:py-8">

                <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">

                    <div>

                        <p className="text-[#AC8941] text-xs sm:text-sm uppercase tracking-widest font-semibold">
                            Restaurant Management
                        </p>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
                            Admin Dashboard
                        </h1>

                        <p className="text-zinc-500 text-sm sm:text-base mt-2">
                            Manage your restaurant from one place.
                        </p>

                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="
                            shrink-0
                            flex items-center gap-2
                            px-3 sm:px-4
                            py-2 sm:py-2.5
                            rounded-lg
                            border border-zinc-800
                            bg-[#181818]
                            text-zinc-300
                            text-sm
                            hover:text-white
                            hover:border-[#AC8941]/50
                            transition-all duration-300
                        "
                    >
                        <span className="text-lg">
                            ←
                        </span>

                        <span className="hidden sm:inline">
                            Back to Home
                        </span>

                        <span className="sm:hidden">
                            Home
                        </span>
                    </button>

                </div>

                <div className="w-full overflow-x-auto mb-6">

                    <div className="flex min-w-max gap-1 sm:gap-2 border-b border-zinc-800">

                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-4 sm:px-6
                                    py-3
                                    text-sm sm:text-base
                                    font-medium
                                    whitespace-nowrap
                                    border-b-2
                                    transition-all
                                    duration-300
                                    ${
                                        activeTab === tab.id
                                            ? "text-[#AC8941] border-[#AC8941]"
                                            : "text-zinc-500 border-transparent hover:text-white"
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}

                    </div>

                </div>

                {activeTab === "dashboard" && (
                    <div className="space-y-5 sm:space-y-6">

                        <StatsCards />

                        <RevenueChart />

                    </div>
                )}

                {activeTab === "foods" && (
                    <FoodManagement />
                )}

                {activeTab === "orders" && (
                    <OrderManagement />
                )}

            </div>

        </div>
    );
}

export default Admin;