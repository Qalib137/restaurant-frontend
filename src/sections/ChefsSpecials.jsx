import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { BASE_URL } from "../services/api";
import Dishcard from "../components/Home/Dishcard";
import hbg from "../assets/images/HeroSection.png";

function ChefsSpecials() {
    const [chefSpecialMeals, setChefSpecialMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChefSpecials = async () => {
            try {
                const response = await api.get("/api/foods");

                const chefSpecials = response.data
                    .filter((dish) => dish.isChefSpecial === true)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3);

                setChefSpecialMeals(chefSpecials);

            } catch (error) {
                console.error(
                    "Chef Specials yüklənmədi:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchChefSpecials();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10 text-white bg-[#0b0300]">
                Loading...
            </div>
        );
    }

    return (
        <div className="py-16 relative">

            <div
                className="absolute top-0 left-0 w-full h-[23vh] bg-no-repeat bg-top bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage: `url(${hbg})`,
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)"
                }}
            />

            <div className="text-center mb-14 mt-20 relative z-10">

                <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
                    Our Signature
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Chef's Specials
                </h1>

                <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />

            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mx-20 gap-8 relative z-10">

                {chefSpecialMeals.map((dish) => (
                    <Link
                        to="/menu"
                        key={dish.id}
                        className="max-w-sm mx-auto w-full block transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 rounded-2xl"
                    >
                        <Dishcard
                            image={dish.image.startsWith("http") ? dish.image : `${BASE_URL}${dish.image}`}
                            title={dish.name}
                            description={dish.description}
                            price={dish.price}
                        />
                    </Link>
                ))}

            </div>

        </div>
    );
}

export default ChefsSpecials;