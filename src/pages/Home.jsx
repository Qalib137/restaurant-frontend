import Hero from "../sections/Hero";
import ChefSpecials from "../sections/ChefsSpecials";
import OurStory from "../components/Home/OurStory";
import ReviewsSection from "../sections/ReviewsSection";
import pbg from "../assets/images/menu-pattern-bg.png";

function Home() {
    return (
        <div
            className="min-h-screen relative overflow-hidden text-white"
            style={{
                backgroundImage: `url(${pbg})`,
                backgroundRepeat: "repeat-y",
                backgroundPosition: "center top",
                backgroundSize: "100% auto",
            }}
        >
            <Hero />

            <div className="relative z-10">
                <ChefSpecials />
                <OurStory />
                <ReviewsSection />
            </div>
        </div>
    );
}

export default Home;