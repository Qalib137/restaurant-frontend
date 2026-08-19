import atmosphere from "../../assets/images/about/atmosphere.jpg";

const GOLD = "#c9a24d";

function Atmosphere() {
    return (
        <section
            className="relative w-full min-h-[55vh] flex items-center justify-center px-6 text-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${atmosphere})`,
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 max-w-2xl">
                <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold mb-6">
                    Immersive Atmosphere
                </h2>

                <p className="text-neutral-300 leading-relaxed mb-8">
                    A harmonious fusion of architectural lighting,
                    elegant furnishings, and world-class hospitality
                    designed for an unforgettable dining experience.
                </p>

                <div
                    className="w-16 h-0.5 mx-auto"
                    style={{ backgroundColor: GOLD }}
                />
            </div>
        </section>
    );
}

export default Atmosphere;