const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-8 justify-center p-5">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="w-64 h-72 bg-gray-200 rounded-lg p-5 shadow-md animate-pulse">
                    <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
