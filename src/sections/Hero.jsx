import hbg from "../assets/images/HeroSection.png";
import Icons from "../assets/icons/Icons";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden"
            style={{
                backgroundImage: `url(${hbg})`,
            }}
        >

            <div className="text-white relative z-30 ml-14 sm:ml-24">

                <h3 className="text-lg sm:text-xl md:text-3xl text-[#AC8941] font-semibold tracking-wide">
                    GOOD FOOD, GOOD MOOD
                </h3>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-2 leading-tight">
                    Delicious Food <br />
                    For Every Mood
                </h1>

                <div className="flex items-center my-6">

                    <div className="bg-[#AC8941] h-px w-24"></div>

                    <div className="mx-3 text-[#AC8941]">
                        <Icons.ForkKnife />
                    </div>

                    <div className="bg-linear-to-l from-[#AC8941] to-transparent h-px w-24"></div>

                </div>

                <p className="text-sm md:text-lg text-gray-300 max-w-md leading-relaxed">
                    Welcome to our restaurant, where we serve freshly{" "}
                    <br className="hidden sm:inline" />
                    made dishes with the finest ingredients.{" "}
                    <br className="hidden sm:inline" />
                    Come hungry, leave happy.
                </p>

                <div className="flex gap-2 mt-8">

                    <button
                        onClick={() => navigate("/menu")}
                        className="group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded bg-[#AC8941] text-white font-medium transition-all duration-300 hover:bg-[#967533] active:scale-95 shadow-lg"
                    >
                        Explore Menu

                        <Icons.FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                </div>

            </div>
 <div
                className="absolute bottom-0 left-0 w-full h-[1vh] bg-no-repeat bg-top bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage: `url(${hbg})`,
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
                    maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)"
                }}
            />
        </div>
    );
}

export default Hero;