import masterChef from "../../assets/images/about/master-chef.jpg";

const GOLD = "#c9a24d";

function MasterChef() {
    return (
        <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-20 md:py-28">
            <div className="max-w-7xl mx-auto">

                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-14">
                    Master <span style={{ color: GOLD }}>Chef</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p
                            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-medium"
                            style={{ color: GOLD }}
                        >
                            Executive Chef
                        </p>

                        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-6">
                            Gabriel Vance
                        </h3>

                        <p className="text-neutral-300 leading-relaxed mb-6">
                            With years of experience in fine dining kitchens,
                            Chef Vance brings a refined approach to modern
                            restaurant cuisine.
                        </p>

                        <p className="text-neutral-300 leading-relaxed">
                            His philosophy is simple: respect the ingredients,
                            master the technique, and create dishes that leave
                            a lasting impression.
                        </p>
                    </div>

                    <div className="w-full aspect-3/2 overflow-hidden rounded-xl">
                        <img
                            src={masterChef}
                            alt="Executive Chef"
                            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default MasterChef;