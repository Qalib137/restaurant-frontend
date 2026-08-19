import Icons from "../../assets/icons/Icons";

const GOLD = "#c9a24d";

function PhilosophyCard({ Icon, title, text }) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#c9a24d]/40 hover:-translate-y-1">

            <Icon
                className="mx-auto mb-5"
                size={32}
                color={GOLD}
                strokeWidth={1.5}
            />

            <h3 className="font-serif text-lg font-semibold text-white mb-4">
                {title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
                {text}
            </p>

        </div>
    );
}

function Philosophy() {
    const cards = [
        {
            Icon: Icons.Leaf,
            title: "Fresh Ingredients",
            text: "Sourced from trusted local suppliers to ensure exceptional freshness and flavor in every dish.",
        },
        {
            Icon: Icons.ChefHat,
            title: "Crafted With Passion",
            text: "Every dish combines classical culinary techniques with modern creativity and attention to detail.",
        },
        {
            Icon: Icons.Gem,
            title: "Exceptional Experience",
            text: "From our service to our atmosphere, every detail is designed to create a memorable dining experience.",
        },
    ];

    return (
        <section className="w-full bg-neutral-950 px-6 md:px-16 lg:px-24 py-20 md:py-28">
            <div className="max-w-7xl mx-auto">

                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white text-center mb-16">
                    Our{" "}
                    <span style={{ color: GOLD }}>
                        Philosophy
                    </span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <PhilosophyCard
                            key={card.title}
                            {...card}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Philosophy;