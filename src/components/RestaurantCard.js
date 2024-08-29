import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla: { deliveryTime },
    } = resData?.info;

    return (
        <Link to={`/restaurants/${resData.info.id}`}>
            <div className="w-64 h-80 p-5 border border-gray-300 rounded-lg bg-white shadow-md transition transform hover:-translate-y-1 hover:shadow-lg">
                <div className="overflow-hidden rounded-lg">
                    <img className="h-40 w-full object-cover" src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
                </div>
                <h3 className="mt-3 mb-1 text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
                <p className="text-sm text-gray-700 font-medium">{avgRating} stars</p>
                <p className="text-sm text-gray-700 font-medium">{costForTwo}</p>
                <p className="text-sm text-gray-700 font-medium">{deliveryTime} minutes</p>
            </div>
        </Link>
    );
};

export default RestaurantCard;
