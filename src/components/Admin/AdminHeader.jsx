function AdminHeader() {
    return (
        <header className="w-full bg-[#181818] border-b border-zinc-800 px-6 md:px-8 py-5 flex items-center justify-between">

            <div>
                <p className="text-[#AC8941] text-xs uppercase tracking-widest font-semibold">
                    Restaurant Management
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                    Admin Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-3">

                <div className="hidden sm:block text-right">
                    <p className="text-sm font-medium text-white">
                        Administrator
                    </p>

                    <p className="text-xs text-zinc-500">
                        Admin
                    </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#AC8941] flex items-center justify-center text-white font-bold">
                    A
                </div>

            </div>

        </header>
    );
}

export default AdminHeader;