import aboutHero from "../../assets/images/about/about-hero.jpg";

const GOLD = "#c9a24d";

function AboutHero() {
    return (
        <section
            className="relative w-full min-h-[70vh] flex items-center justify-center px-6 bg-cover bg-center"
            style={{
                backgroundImage: `url(${aboutHero})`,
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 text-center max-w-3xl">
                <p
                    className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-medium"
                    style={{ color: GOLD }}
                >
                    Established 2024
                </p>

                <h1 className="font-serif text-white text-4xl md:text-6xl font-semibold mb-6">
                    About Our Restaurant
                </h1>

                <p className="text-neutral-300 text-sm md:text-base tracking-wide uppercase leading-relaxed">
                    An extraordinary culinary journey blending heritage
                    <br className="hidden md:block" />
                    with refined modern artistry.
                </p>
            </div>
        </section>
    );
}

export default AboutHero;