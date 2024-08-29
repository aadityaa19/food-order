import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";


const RestaurantMenu = () => {
    const { id } = useParams();
    const resInfo = useRestaurantMenu(id);  // Use the custom hook

    const [showIndex, setshowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] == 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{resInfo.name}</h1>
                {categories.map((category, index) => (
                    <ResCategory key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems = {index == showIndex  ? true : false}
                    setshowIndex = {() => setshowIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
