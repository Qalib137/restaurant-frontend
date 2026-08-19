import Icons from "../../assets/icons/Icons"

function CostumerRewCard({customerName, message}) {

    const initials = customerName
        .split(" ")
        .map(word => word[0])
        .join("");

    return (
        <div className="flex flex-col gap-2 mb-8 border border-white shadow-lg rounded-2xl bg-[#e9e8e8] relative pt-8 px-4  h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#AC8941]/30 hover:border-[#AC8941]">

            <div className="w-10 h-10 rounded-full bg-[#AC8941] flex items-center justify-center self-center absolute -top-5 text-white font-medium border-2 border-[#d4a23c]">
                {initials}
            </div>

            <p className="font-medium text-lg">{customerName}</p>
            <div className="flex gap-1 justify-center">
                <Icons.FaStar className="text-[#AC8941]"/>
                <Icons.FaStar className="text-[#AC8941]"/>
                <Icons.FaStar className="text-[#AC8941]"/>
                <Icons.FaStar className="text-[#AC8941]"/>
                <Icons.FaStar className="text-[#AC8941]"/>
            </div>
            <p className="grow">{message}</p>
        </div>
    )
}

export default CostumerRewCard