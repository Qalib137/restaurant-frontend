import ourStory from "../../assets/images/about/our-story.jpg";

const GOLD = "#c9a24d";

function OurStory() {
    return (
        <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-20 md:py-28">
            <div className="max-w-7xl mx-auto">

                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-14">
                    Our <span style={{ color: GOLD }}>Story</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="w-full aspect-3/2 overflow-hidden rounded-xl">
                        <img
                            src={ourStory}
                            alt="Chef preparing food"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    <div>
                        <h3
                            className="font-serif text-xl md:text-2xl font-semibold mb-6"
                            style={{ color: GOLD }}
                        >
                            Rooted in Passion & Elegance
                        </h3>

                        <p className="text-neutral-300 leading-relaxed mb-6">
                            Founded with an unwavering dedication to exceptional
                            dining, our restaurant is a place where refined
                            flavors meet modern culinary artistry.
                        </p>

                        <p className="text-neutral-300 leading-relaxed">
                            Every dish is carefully prepared using quality
                            ingredients, bringing together tradition, creativity,
                            and a memorable dining experience.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OurStory;