import { useEffect, useState } from "react";
import api from "../../services/api";
import FoodForm from "./FoodForm";

function FoodManagement() {
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [showForm, setShowForm] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    const fetchFoods = async () => {
        try {
            const response = await api.get("/api/foods");

            setFoods(response.data);
        } catch (error) {
            console.error("Foods yüklənmədi:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFoods();
    }, []);

    const handleAdd = () => {
        setSelectedFood(null);
        setShowForm(true);
    };

    const handleEdit = (food) => {
        setSelectedFood(food);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Bu yeməyi silmək istədiyinizə əminsiniz?"
        );

        if (!confirmed) return;

        try {
            await api.delete(`/api/foods/${id}`);

            setFoods((prev) =>
                prev.filter((food) => food.id !== id)
            );
        } catch (error) {
            console.error("Food silinmədi:", error);

            alert(
                error.response?.data?.message ||
                "Food could not be deleted"
            );
        }
    };

    const handleSuccess = async () => {
        await fetchFoods();
    };

    const filteredFoods = foods.filter((food) => {
        const searchText = search.toLowerCase();

        return (
            food.name?.toLowerCase().includes(searchText) ||
            food.category?.toLowerCase().includes(searchText)
        );
    });

    if (loading) {
        return (
            <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 md:p-6">
                <p className="text-zinc-500">
                    Loading foods...
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-4 sm:p-5 md:p-6">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white">
                            Food Management
                        </h2>

                        <p className="text-zinc-500 text-sm mt-1">
                            Add, edit and delete restaurant foods.
                        </p>
                    </div>

                    <button
                        onClick={handleAdd}
                        className="w-full lg:w-auto bg-[#AC8941] hover:bg-[#c09a4d] text-black font-semibold px-5 py-2.5 rounded-lg transition"
                    >
                        Add Food
                    </button>

                </div>

                <div className="mb-5">

                    <input
                        type="text"
                        placeholder="Search food..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-[#AC8941] transition"
                    />

                </div>

                {filteredFoods.length === 0 ? (

                    <p className="text-zinc-500">
                        No foods found.
                    </p>

                ) : (

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-175">

                            <thead>
                                <tr className="border-b border-zinc-800 text-left">

                                    <th className="py-3 text-sm text-zinc-500">
                                        Food
                                    </th>

                                    <th className="py-3 text-sm text-zinc-500">
                                        Category
                                    </th>

                                    <th className="py-3 text-sm text-zinc-500">
                                        Price
                                    </th>

                                    <th className="py-3 text-sm text-zinc-500">
                                        Chef Special
                                    </th>

                                    <th className="py-3 text-sm text-zinc-500">
                                        Actions
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                {filteredFoods.map((food) => (

                                    <tr
                                        key={food.id}
                                        className="border-b border-zinc-800 last:border-0"
                                    >

                                        <td className="py-4">

                                            <div className="flex items-center gap-3">

                                                <img
                                                    src={`http://localhost:4000${food.image}`}
                                                    alt={food.name}
                                                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                                                />

                                                <span className="text-white font-medium">
                                                    {food.name}
                                                </span>

                                            </div>

                                        </td>

                                        <td className="py-4 text-zinc-400 capitalize">
                                            {food.category}
                                        </td>

                                        <td className="py-4 text-[#AC8941] font-semibold">
                                            ${Number(food.price).toFixed(2)}
                                        </td>

                                        <td className="py-4">

                                            {food.isChefSpecial ? (
                                                <span className="text-[#AC8941]">
                                                    Yes
                                                </span>
                                            ) : (
                                                <span className="text-zinc-500">
                                                    No
                                                </span>
                                            )}

                                        </td>

                                        <td className="py-4">

                                            <div className="flex gap-2">

                                                <button
                                                    onClick={() => handleEdit(food)}
                                                    className="px-3 py-1.5 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(food.id)}
                                                    className="px-3 py-1.5 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

            {showForm && (
                <FoodForm
                    food={selectedFood}
                    onClose={() => setShowForm(false)}
                    onSuccess={handleSuccess}
                />
            )}
        </>
    );
}

export default FoodManagement;