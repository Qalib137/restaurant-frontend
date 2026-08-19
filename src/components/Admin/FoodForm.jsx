import { useEffect, useState } from "react";
import api from "../../services/api";

function FoodForm({ food, onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        isChefSpecial: false,
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (food) {
            setFormData({
                name: food.name || "",
                description: food.description || "",
                price: food.price || "",
                category: food.category || "",
                isChefSpecial: food.isChefSpecial || false,
            });
        }
    }, [food]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = new FormData();

            data.append("name", formData.name);
            data.append("description", formData.description);
            data.append("price", formData.price);
            data.append("category", formData.category);
            data.append(
                "isChefSpecial",
                String(formData.isChefSpecial)
            );

            if (image) {
                data.append("image", image);
            }

            if (food && food.id) {
                await api.put(`/api/foods/${food.id}`, data);
            } else {
                if (!image) {
                    alert("Food image is required");
                    setLoading(false);
                    return;
                }

                await api.post("/api/foods", data);
            }

            await onSuccess();
            onClose();

        } catch (error) {
            console.error("Food save error:", error);

            alert(
                error.response?.data?.message ||
                "Food could not be saved"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

            <div className="bg-[#181818] border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">

                <div className="flex items-center justify-between mb-6">

                    <div>
                        <h2 className="text-2xl font-semibold text-white">
                            {food ? "Edit Food" : "Add Food"}
                        </h2>

                        <p className="text-sm text-zinc-500 mt-1">
                            {food
                                ? "Update food information."
                                : "Add a new food."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-zinc-500 hover:text-white text-2xl"
                    >
                        ×
                    </button>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block text-sm text-zinc-400 mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#AC8941]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-400 mb-2">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#AC8941] resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <label className="block text-sm text-zinc-400 mb-2">
                                Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                                required
                                className="w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#AC8941]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-zinc-400 mb-2">
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[#AC8941]"
                            >
                                <option value="">
                                    Select category
                                </option>

                                <option value="main">
                                    Main
                                </option>

                                <option value="burger">
                                    Burger
                                </option>

                                <option value="pizza">
                                    Pizza
                                </option>

                                <option value="salad">
                                    Salad
                                </option>

                                <option value="dessert">
                                    Dessert
                                </option>

                                <option value="drink">
                                    Drink
                                </option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label className="flex items-center gap-3 cursor-pointer">

                            <input
                                type="checkbox"
                                name="isChefSpecial"
                                checked={formData.isChefSpecial}
                                onChange={handleChange}
                                className="w-4 h-4 accent-[#AC8941]"
                            />

                            <span className="text-sm text-zinc-300">
                                Chef Special
                            </span>

                        </label>
                    </div>

                    <div>

                        <label className="block text-sm text-zinc-400 mb-2">
                            Food Image
                        </label>

                        <label className="inline-flex items-center justify-center px-5 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white cursor-pointer transition">

                            Choose Image

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    setImage(e.target.files[0] || null);
                                }}
                                className="hidden"
                            />

                        </label>

                        {image && (
                            <p className="text-sm text-zinc-400 mt-2">
                                {image.name}
                            </p>
                        )}

                        {food && !image && (
                            <p className="text-xs text-zinc-600 mt-2">
                                Leave empty to keep the current image.
                            </p>
                        )}

                    </div>

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-5 py-2.5 rounded-lg bg-[#AC8941] text-black font-semibold hover:bg-[#c09a4d] transition disabled:opacity-50"
                        >
                            {loading
                                ? "Saving..."
                                : food
                                    ? "Update Food"
                                    : "Add Food"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default FoodForm;