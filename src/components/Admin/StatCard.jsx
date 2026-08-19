function StatCard({ title, value, description }) {
    return (
        <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 sm:p-6 hover:border-[#AC8941]/40 transition-all duration-300">

            <p className="text-sm text-zinc-500">
                {title}
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 wrap-break-word">
                {value}
            </h2>

            {description && (
                <p className="text-xs text-zinc-600 mt-2">
                    {description}
                </p>
            )}

        </div>
    );
}

export default StatCard;