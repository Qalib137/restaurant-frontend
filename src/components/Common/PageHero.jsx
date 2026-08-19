function PageHero({ eyebrow, title, highlight, description }) {
    return (
        <div className="relative overflow-hidden rounded-3xl mb-10 sm:mb-14 border border-[#AC8941]/15">
            <div className="absolute inset-0 bg-linear-to-br from-[#1B2925] via-[#141F1B] to-[#0D1512]" />
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#EDE7DA_1px,transparent_0)] bg-size-[24px_24px]" />

            <div className="relative px-6 sm:px-10 py-12 sm:py-16 text-center">
                <span className="text-[#AC8941] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
                    {eyebrow}
                </span>

                <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-[#EDE7DA]">
                    {title} <span className="text-[#AC8941]">{highlight}</span>
                </h1>

                {description && (
                    <p className="mt-4 text-[#8C8577] max-w-xl mx-auto text-sm sm:text-base">
                        {description}
                    </p>
                )}

                <div className="flex items-center justify-center gap-3 mt-6">
                    <span className="h-px w-10 bg-[#AC8941]/40" />
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#AC8941]" />
                    <span className="h-px w-10 bg-[#AC8941]/40" />
                </div>
            </div>
        </div>
    );
}

export default PageHero;