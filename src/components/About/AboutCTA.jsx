import { Link } from "react-router-dom";

function AboutCTA() {
    return (
        <section className="w-full bg-neutral-950 px-6 md:px-16 lg:px-24 py-20 md:py-28 text-center">

            <p className="text-[#c9a24d] text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
                Be Our Guest
            </p>

            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6">
                Begin Your Culinary Journey
            </h2>

            <p className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Reserve your table or explore our curated seasonal menu to
                experience true luxury dining.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

                <Link
                    to="/menu"
                    className="text-xs md:text-sm tracking-widest uppercase font-medium px-8 py-4 rounded-md bg-[#c9a24d] text-black hover:bg-[#d8b15e] transition"
                >
                    Explore Our Menu
                </Link>

               

            </div>

        </section>
    );
}

export default AboutCTA;