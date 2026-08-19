import OurChef from "../../assets/images/OurChef.png"

function OurStory() {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-12 mx-5 md:mx-9 lg:mx-20 mt-20 gap-10 bg-linear-to-br from-[#0d0d0d] via-[#141414] to-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-[#9e8225]/30 shadow-2xl shadow-black/50 overflow-hidden">

           
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#9e8225]/5 via-transparent to-transparent rounded-2xl"></div>

            <section className="relative md:col-span-5 flex flex-col items-center text-center md:text-left md:flex-row gap-5 md:border-r-2 border-[#9e8225]/40 md:pr-6">
                
                <div className="shrink-0 w-full md:w-auto">
                    <img 
                        src={OurChef} 
                        className="w-full max-w-70 sm:max-w-56 md:w-40 lg:w-50 xl:w-72 mx-auto p-3 border-2 border-[#9e8225] object-cover bg-black/40" 
                        alt="Our Chef" 
                    />
                </div>

                <div className="min-w-0">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-[#c9a63c] drop-shadow-md">
                        2026
                    </h1>

                    <p className="font-script text-xl md:text-xl lg:text-2xl mt-3 text-white drop-shadow-md">
                        The Legacy Begins
                    </p>
                </div>

            </section>

            <section className="relative md:col-span-7 text-center text-white flex flex-col justify-center">
                
                <p className="md:absolute md:top-0 md:left-5 font-medium text-lg text-[#c9a63c] tracking-wider uppercase">
                    Our Story
                </p>

                <h1 className="text-2xl md:text-2xl lg:text-3xl mt-10 lg:mt-6 mb-5 text-white font-bold drop-shadow-lg">
                    Crafting Culinary Excellence
                </h1>

                <p className="max-w-md lg:max-w-xl mx-auto px-1 lg:px-2 text-gray-300 leading-relaxed text-md drop-shadow-sm">
                    "It all began with a deep passion for authentic flavors. 
                    Opened in 2026, our journey started with a fresh vision: 
                    to source the finest local ingredients and blend modern 
                    creativity with exceptional culinary techniques. Though new, 
                    our foundation is built on uncompromising quality, dedication, 
                    and the pure joy of sharing great food."
                </p>

            </section>

        </div>
    )
}

export default OurStory;