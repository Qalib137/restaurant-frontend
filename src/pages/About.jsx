import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import Philosophy from "../components/About/Philosophy";
import MasterChef from "../components/About/MasterChef";
import Atmosphere from "../components/About/Atmosphere";
import AboutCTA from "../components/About/AboutCTA";

function About() {
    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <AboutHero />
            <OurStory />
            <Philosophy />
            <MasterChef />
            <Atmosphere />
            <AboutCTA />
        </div>
    );
}

export default About;