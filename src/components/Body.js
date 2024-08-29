import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listRes, setListRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListRes(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    const handleSearch = () => {
        const filtered = listRes.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    const handleTopRatedClick = () => {
        const topRated = listRes.filter((res) => res.info.avgRating > 4.3);
        setFilteredRestaurants(topRated);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    if (!onlineStatus) {
        return <h1 className="text-center text-red-500">Looks like you're offline! Please check your internet connection.</h1>;
    }

    if (listRes.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center bg-white shadow-md rounded-full py-2 px-4">
                <input
                        type="text"
                        className="border-none outline-none bg-gray-100 text-gray-700 rounded-full py-2 px-4 w-72"
                        placeholder="Search for restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="bg-orange-500 text-white py-2 px-4 rounded-full ml-2 transition duration-300 hover:bg-orange-600"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="bg-orange-500 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-orange-600"
                    onClick={handleTopRatedClick}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No restaurants found</p>
                )}
            </div>
        </div>
    );
};

export default Body;
