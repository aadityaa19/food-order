import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="flex justify-between items-start mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-1">
                        <span className="font-semibold text-gray-800 block">{item.card.info.name}</span>
                        <span className="text-green-600 font-semibold block mt-1">
                            ₹{item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}
                        </span>
                        <p className="text-gray-600 text-sm mt-2">{item.card.info.description}</p>
                    </div>
                    <div className="ml-4 text-center">
                        <img
                            src={CDN_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        <button className="bg-orange-500 text-white text-sm font-semibold py-1 px-4 mt-2 rounded-full hover:bg-green-600 transition duration-200">
                            Add +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default ItemList;
