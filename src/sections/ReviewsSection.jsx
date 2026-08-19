import CostumerRewCard from "../components/Home/CustomerRewCard";
import reviews from "../Temporary/Reviews";

function ReviewsSection() {
    const fiveStarReviews = reviews
        .filter((review) => review.rating === 5)
        .slice(0, 6);

    return (
       <div className="relative py-20 px-6 mt-14 sm:px-12 md:px-20 lg:px-16 max-w-360 mx-auto text-center">
    <div className="mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Customer Experiences
        </h1>
        <div className="flex items-center justify-center mt-4 gap-2">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-[#AC8941]"></div>
            <div className="w-2 h-2 rounded-full bg-[#AC8941]"></div>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-[#AC8941]"></div>
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {fiveStarReviews.map((review) => (
            <div key={review.id} className="relative p-6 text-black h-full">
                <CostumerRewCard
                    customerName={review.customerName}
                    message={review.message}
                />
            </div>
        ))}
    </div>
</div>
    );
}

export default ReviewsSection;