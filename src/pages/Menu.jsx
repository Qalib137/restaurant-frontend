import hbg from "../assets/images/menu-hero-bg.png";
import pbg from "../assets/images/menu-pattern-bg.png";

import { useEffect, useState } from "react";
import api from "../services/api";
import MenuCard from "../components/Menu/MenuCard";

function Menu() {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");


useEffect(() => {
    const fetchMenu = async () => {
        try {
            
            const response = await axios.get("https://restaurant-backend-app-ljsz.onrender.com/api/foods");
            setFoods(response.data);
        } catch (error) {
            console.error("Menyu yuklenmedi:", error);
        }
    };
    fetchMenu();
}, []);

    const categories = ["all", "main", "burger", "pizza", "salad", "dessert", "drink"];

    const filteredFoods = foods.filter((food) => {
        const matchesCategory = selectedCategory === "all" || food.category === selectedCategory;
        const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-amber-600 text-xs tracking-widest uppercase font-serif">Loading Menu...</p>
            </div>
        );
    }

    return (
        <section
            className="min-h-screen bg-neutral-950 text-zinc-100 pt-32 pb-24 px-6 md:px-14 relative overflow-hidden"
            style={{
                backgroundImage: `url(${pbg})`,
                backgroundRepeat: "repeat-y",
                backgroundPosition: "center top",
                backgroundSize: "100% auto"
            }}
        >

            <div
                className="absolute top-0 left-0 w-full h-[140vh] bg-no-repeat bg-top bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage: `url(${hbg})`,
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
                    maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)"
                }}
            />

            <div
                className="absolute top-0 left-0 w-full h-[140vh] pointer-events-none z-0"
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0) 90%)"
                }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-80 bg-amber-600/10 blur-3xl pointer-events-none rounded-full z-0" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-12">
                    <span className="text-amber-600 uppercase tracking-widest text-xs font-semibold border-b border-amber-600/30 pb-1">Haute Cuisine</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-normal text-white mt-4 tracking-wide">Our Menu</h1>
                    <p className="mt-3 text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">Discover our specially crafted culinary delights prepared by award-winning chefs.</p>
                    <div className="flex items-center justify-center gap-2 mt-5">
                        <div className="w-12 h-px bg-linear-to-r from-transparent to-amber-600" />
                        <span className="text-amber-600 text-xs">◆</span>
                        <div className="w-12 h-px bg-linear-to-l from-transparent to-amber-600" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14 py-6 px-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-md">
                    <div className="text-center border-r border-zinc-800/80">
                        <p className="text-2xl font-serif text-amber-600">100%</p>
                        <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Fresh Ingredients</p>
                    </div>
                    <div className="text-center md:border-r border-zinc-800/80">
                        <p className="text-2xl font-serif text-amber-600">3 ★</p>
                        <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Michelin Standard</p>
                    </div>
                    <div className="text-center border-r border-zinc-800/80">
                        <p className="text-2xl font-serif text-amber-600">25+</p>
                        <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Master Chefs</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-serif text-amber-600">Est.</p>
                        <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">2026</p>
                    </div>
                </div>

                <div className="max-w-md mx-auto mb-10 relative">
                    <input
                        type="text"
                        placeholder="Search for a dish..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-zinc-900/80 text-zinc-100 placeholder-zinc-500 text-sm px-5 py-3 rounded-xl border border-zinc-800 focus:border-amber-600 focus:outline-none transition-all duration-300 backdrop-blur-md"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">🔍</span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2.5 rounded-xl border text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${selectedCategory === category ? "bg-amber-600 text-zinc-950 border-amber-600 shadow-lg shadow-amber-600/20 font-bold" : "bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:border-amber-600/50 hover:text-amber-600 backdrop-blur-md"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredFoods.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 bg-zinc-900/20 border border-zinc-800/40 rounded-3xl backdrop-blur-md">
                        <p className="text-zinc-400 text-lg font-serif">No dishes found matching your criteria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[25vh]">
                        {filteredFoods.map((food) => (
                            <MenuCard key={food.id} food={food} />
                        ))}
                    </div>
                )}

            </div>

        </section>
    );
}

export default Menu;