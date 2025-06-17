export const Card = () => {
    const cardData = [
        {
            title: "Total Earnings",
            value: "₹00,000",
            icon: "💰",
            bg: "bg-gradient-to-r from-blue-600 to-blue-800",
        },
        {
            title: "Total Products",
            value: "6",
            icon: "📦",
            bg: "bg-gradient-to-r from-purple-600 to-purple-800",
        },
        {
            title: "Products Sold",
            value: "000",
            icon: "🛒",
            bg: "bg-gradient-to-r from-green-600 to-green-800",
        },
        {
            title: "Monthly Revenue",
            value: "₹00,000",
            icon: "📈",
            bg: "bg-gradient-to-r from-pink-600 to-pink-800",
        },
        {
            title: "Weekly Revenue",
            value: "₹00,000",
            icon: "📈",
            bg: "bg-gradient-to-r from-pink-600 to-pink-800",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full">
            {cardData.map((card, index) => (
                <div key={index} className={`rounded-xl p-5 text-zinc-800 shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 bg-zinc-200 `}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-4xl">{card.icon}</div>
                        <div className="text-right">
                            <h4 className="text-lg font-semibold">{card.title}</h4>
                            <p className="text-2xl font-bold mt-1">{card.value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
