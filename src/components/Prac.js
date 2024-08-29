import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const [restaurantId, setRestaurantId] = useState(null);

    const extractIdFromUrl = () => {
        const url = window.location.href;
        const id = url.split("/").pop();
        return id;
    };
    
    useEffect(() => {
        const id = extractIdFromUrl();
        setRestaurantId(id);
    }, [window.location.href]);

    const resInfo = useRestaurantMenu(restaurantId);

    const restaurantCard = resInfo?.cards?.find(
        card => card.card?.card?.gridElements?.infoWithStyle?.restaurants?.some(restaurant => restaurant.info.id === restaurantId)
    );

    const restaurant = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants?.find(
        restaurant => restaurant.info.id === restaurantId
    );

    if (!restaurant) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwo } = restaurant.info;

    return (
        <div className="menu p-5">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <h3 className="text-lg text-gray-700 mb-2">{cuisines.join(", ")}</h3>
            <p className="text-lg text-gray-700">{costForTwo}</p>
        </div>
    );
};

export default RestaurantMenu;
