import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import api, { BASE_URL } from "../services/api";
import Icons from "../assets/icons/Icons";
import PageHero from "../components/Common/PageHero.jsx";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const getMyOrders = async () => {
            try {
                const response = await api.get("/api/orders/my");
                setOrders(response.data.orders);
            } catch (error) {
                console.log(
                    error.response?.data?.message ||
                    "Sifarişləri yükləmək mümkün olmadı"
                );
            } finally {
                setLoading(false);
            }
        };

        getMyOrders();
    }, []);

    const getStatusStyle = (status) => {
        switch (status?.toLowerCase()) {
            case "pending":
                return {
                    bg: "bg-yellow-500/10",
                    border: "border-yellow-500/30",
                    text: "text-yellow-400",
                    dot: "bg-yellow-400",
                    label: "Gözləmədə",
                };
            case "preparing":
                return {
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/30",
                    text: "text-blue-400",
                    dot: "bg-blue-400",
                    label: "Hazırlanır",
                };
            case "ready":
                return {
                    bg: "bg-purple-500/10",
                    border: "border-purple-500/30",
                    text: "text-purple-400",
                    dot: "bg-purple-400",
                    label: " Hazırdır",
                };
            case "completed":
                return {
                    bg: "bg-green-500/10",
                    border: "border-green-500/30",
                    text: "text-green-400",
                    dot: "bg-green-400",
                    label: "Tamamlandı",
                };
            case "cancelled":
                return {
                    bg: "bg-red-500/10",
                    border: "border-red-500/30",
                    text: "text-red-400",
                    dot: "bg-red-400",
                    label: "Ləğv edildi",
                };
            default:
                return {
                    bg: "bg-[#8C8577]/10",
                    border: "border-[#8C8577]/30",
                    text: "text-[#8C8577]",
                    dot: "bg-[#8C8577]",
                    label: status,
                };
        }
    };

    const statusGroups = [
        { status: "pending", title: "Gözləmədə olan sifarişlər" },
        { status: "preparing", title: "Hazırlanan sifarişlər" },
        { status: "ready", title: "Hazır sifarişlər" },
        { status: "completed", title: "Tamamlanmış sifarişlər" },
        { status: "cancelled", title: "Ləğv edilmiş sifarişlər" },
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-[#141F1B] flex items-center justify-center">
                <p className="text-[#AC8941] text-xl font-serif">
                    Sifarişlər yüklənir...
                </p>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#141F1B] pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => navigate("/menu")}
                    className="inline-flex items-center gap-2 text-[#8C8577] hover:text-[#AC8941] mb-6 transition-colors duration-200 text-sm cursor-pointer"
                >
                    <FaArrowLeft className="text-xs" />
                    <span>Menyuya qayıt</span>
                </button>

                <PageHero
                    eyebrow="Sifariş tarixçəsi"
                    title="Mənim"
                    highlight="Sifarişlərim"
                    description="Son sifarişlərinizi və onların statusunu izləyin."
                />

                {orders.length === 0 ? (
                    <div className="bg-[#1B2925] border border-[#AC8941]/15 rounded-2xl text-center py-20 px-6 shadow-xl shadow-black/20">
                        <div className="w-20 h-20 rounded-full bg-[#AC8941]/10 flex items-center justify-center mx-auto mb-6">
                            <Icons.FaShoppingBag
                                className="text-[#AC8941]"
                                size={32}
                            />
                        </div>
                        <h2 className="text-xl font-serif font-semibold text-[#EDE7DA] mb-2">
                            Hələ ki sifariş yoxdur
                        </h2>
                        <p className="text-[#8C8577] mb-6">
                            Siz hələ heç bir sifariş verməmisiniz.
                        </p>
                        <button
                            onClick={() => navigate("/menu")}
                            className="px-6 py-3 bg-[#AC8941] hover:bg-[#c09a4d] text-black font-semibold rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.98]"
                        >
                            Menyuya bax
                        </button>
                    </div>
                ) : (
                    <div className="space-y-10">
                        {statusGroups.map((group) => {
                            const groupOrders = orders.filter(
                                (order) =>
                                    order.status?.toLowerCase() === group.status
                            );

                            if (groupOrders.length === 0) {
                                return null;
                            }

                            return (
                                <div key={group.status}>
                                    <div className="flex items-center gap-3 mb-5">
                                        <h2 className="text-2xl font-serif font-bold text-[#EDE7DA]">
                                            {group.title}
                                        </h2>
                                        <span className="px-3 py-1 rounded-full bg-[#AC8941]/10 text-[#AC8941] text-sm font-semibold">
                                            {groupOrders.length}
                                        </span>
                                    </div>

                                    <div className="space-y-6">
                                        {groupOrders.map((order) => {
                                            const status = getStatusStyle(order.status);

                                            return (
                                                <div
                                                    key={order.id}
                                                    className="bg-[#1B2925] border border-[#AC8941]/15 rounded-2xl p-4 sm:p-6 shadow-xl shadow-black/20"
                                                >
                                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                                                        <div>
                                                            <h3 className="text-xl font-serif font-bold text-[#EDE7DA]">
                                                                Sifariş #{order.id}
                                                            </h3>
                                                            <p className="text-sm text-[#8C8577] mt-1">
                                                                {new Date(order.createdAt).toLocaleString()}
                                                            </p>
                                                        </div>

                                                        <div
                                                            className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border ${status.bg} ${status.border}`}
                                                        >
                                                            <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                                                            <span className={`text-sm font-semibold ${status.text}`}>
                                                                {status.label}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4">
                                                        {order.items.map((item) => (
                                                            <div
                                                                key={item.id}
                                                                className="flex items-center gap-4 pb-4 border-b border-[#AC8941]/10"
                                                            >
                                                                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-[#141F1B]">
                                                                    {item.food?.image ? (
                                                                        <img
                                                                            src={item.food.image.startsWith("http") ? item.food.image : `${BASE_URL}${item.food.image}`}
                                                                            alt={item.food.name}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full flex items-center justify-center">
                                                                            <Icons.FaUtensils
                                                                                className="text-[#8C8577]"
                                                                                size={22}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                <div className="flex-1 min-w-0">
                                                                    <h4 className="font-semibold text-[#EDE7DA] truncate">
                                                                        {item.food?.name || "Naməlum yemək"}
                                                                    </h4>
                                                                    <p className="text-sm text-[#8C8577] mt-1">
                                                                        Say: {item.quantity}
                                                                    </p>
                                                                    <p className="text-sm text-[#8C8577]">
                                                                        ${Number(item.price || 0).toFixed(2)} hər biri
                                                                    </p>
                                                                </div>

                                                                <span className="text-[#AC8941] font-semibold whitespace-nowrap">
                                                                    ${(Number(item.price || 0) * item.quantity).toFixed(2)}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center mt-5 pt-4 border-t border-[#AC8941]/15">
                                                        <span className="font-semibold text-[#EDE7DA]">
                                                            Cəmi
                                                        </span>
                                                        <span className="text-xl font-bold text-[#AC8941]">
                                                            ${Number(order.totalPrice || 0).toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Orders;