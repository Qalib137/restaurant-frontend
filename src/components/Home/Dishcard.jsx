function Dishcard({ image, title, description, price }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm grow">{description}</p>
                <p className="text-amber-500 font-bold text-lg mt-4">
                    ${price}
                </p>
            </div>
        </div>
    );
}

export default Dishcard;