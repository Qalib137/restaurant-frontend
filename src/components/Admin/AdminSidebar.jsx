import { useNavigate } from "react-router-dom";

function AdminSidebar() {
    const navigate = useNavigate();

    return (
        <aside className="w-64 min-h-screen bg-[#0b0b0b] border-r border-zinc-800 p-5 flex flex-col">

            <div className="mb-8 px-3">
                <h2 className="text-xl font-bold text-white">
                    Resto<span className="text-[#AC8941]">App</span>
                </h2>

                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mt-1">
                    Admin Panel
                </p>
            </div>

            <nav className="flex flex-col gap-2">

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#AC8941]/10 border border-[#AC8941]/20 text-[#AC8941] text-sm font-medium text-left transition"
                >
                    <span>▦</span>
                    Dashboard
                </button>

                <button
                    onClick={() => document.getElementById("foods")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-sm font-medium text-left transition"
                >
                    <span>🍔</span>
                    Foods
                </button>

                <button
                    onClick={() => document.getElementById("orders")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-sm font-medium text-left transition"
                >
                    <span>📦</span>
                    Orders
                </button>

                <button
                    onClick={() => document.getElementById("users")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-sm font-medium text-left transition"
                >
                    <span>👤</span>
                    Users
                </button>

                <button
                    onClick={() => document.getElementById("revenue")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-sm font-medium text-left transition"
                >
                    <span>↗</span>
                    Revenue
                </button>

            </nav>

            <div className="mt-auto pt-6 border-t border-zinc-800">

                <button
                    onClick={() => navigate("/")}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-sm transition"
                >
                    <span>←</span>
                    Back to Website
                </button>

            </div>

        </aside>
    );
}

export default AdminSidebar;