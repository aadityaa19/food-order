import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (restaurantId) {
            fetchMenu(restaurantId);
        }
    }, [restaurantId]);

    const fetchMenu = async (restaurantId) => {
        try {
            const data = await fetch(MENU_API + restaurantId);
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;
