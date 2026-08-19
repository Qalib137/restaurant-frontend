import { useEffect, useState } from "react";
import api from "../../services/api";

function OrderManagement() {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        try {
            const response = await api.get("/api/orders");

            setOrders(response.data.orders || []);
        } catch (error) {
            console.error("Orders yüklənmədi:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateStatus = async (id, status) => {
        try {
            await api.patch(`/api/orders/${id}/status`, {
                status,
            });

            setOrders((prev) =>
                prev.map((order) =>
                    order.id === id
                        ? { ...order, status }
                        : order
                )
            );
        } catch (error) {
            console.error("Status dəyişmədi:", error);

            alert(
                error.response?.data?.message ||
                "Order status could not be updated"
            );
        }
    };

    const filteredOrders = orders.filter((order) => {
        const searchText = search.toLowerCase();

        return (
            String(order.id).includes(searchText) ||
            order.user?.name?.toLowerCase().includes(searchText) ||
            order.user?.email?.toLowerCase().includes(searchText) ||
            order.status?.toLowerCase().includes(searchText)
        );
    });

    const statusClass = (status) => {
        if (status === "completed") {
            return "bg-green-900/30 text-green-400";
        }

        if (status === "preparing") {
            return "bg-yellow-900/30 text-yellow-400";
        }

        if (status === "cancelled") {
            return "bg-red-900/30 text-red-400";
        }

        return "bg-zinc-800 text-zinc-400";
    };

    if (loading) {
        return (
            <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 md:p-6">
                <p className="text-zinc-500">
                    Loading orders...
                </p>
            </div>
        );
    }

    return (
        <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-4 sm:p-5 md:p-6">

            <div className="mb-6">

                <h2 className="text-lg sm:text-xl font-semibold text-white">
                    Order Management
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                    View and manage customer orders.
                </p>

            </div>

            <div className="mb-5">

                <input
                    type="text"
                    placeholder="Search order, customer or status..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-[#AC8941] transition"
                />

            </div>

            {filteredOrders.length === 0 ? (

                <p className="text-zinc-500">
                    No orders found.
                </p>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full min-w-212.5">

                        <thead>

                            <tr className="border-b border-zinc-800 text-left">

                                <th className="py-3 text-sm text-zinc-500">
                                    Order
                                </th>

                                <th className="py-3 text-sm text-zinc-500">
                                    Customer
                                </th>

                                <th className="py-3 text-sm text-zinc-500">
                                    Items
                                </th>

                                <th className="py-3 text-sm text-zinc-500">
                                    Total
                                </th>

                                <th className="py-3 text-sm text-zinc-500">
                                    Status
                                </th>

                                <th className="py-3 text-sm text-zinc-500">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredOrders.map((order) => (

                                <tr
                                    key={order.id}
                                    className="border-b border-zinc-800 last:border-0"
                                >

                                    <td className="py-4 text-white font-medium">
                                        #{order.id}
                                    </td>

                                    <td className="py-4">

                                        <p className="text-white">
                                            {order.user?.name || "Unknown"}
                                        </p>

                                        <p className="text-xs text-zinc-600 mt-1">
                                            {order.user?.email || ""}
                                        </p>

                                    </td>

                                    <td className="py-4 text-zinc-400">
                                        {order.items?.length || 0}
                                    </td>

                                    <td className="py-4 text-[#AC8941] font-semibold">
                                        ${Number(order.totalPrice || 0).toFixed(2)}
                                    </td>

                                    <td className="py-4">

                                        <span
                                            className={`px-3 py-1.5 rounded-full text-xs capitalize ${statusClass(order.status)}`}
                                        >
                                            {order.status}
                                        </span>

                                    </td>

                                    <td className="py-4">

                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                            className="bg-[#111111] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#AC8941]"
                                        >

                                            <option value="pending">
                                                Pending
                                            </option>

                                            <option value="preparing">
                                                Preparing
                                            </option>

                                            <option value="completed">
                                                Completed
                                            </option>

                                            <option value="cancelled">
                                                Cancelled
                                            </option>

                                        </select>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
}

export default OrderManagement;