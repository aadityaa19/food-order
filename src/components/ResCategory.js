import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setshowIndex }) => {

    const handleClick= () => {
        setshowIndex();
        
    };
    return (
        <div className="w-full my-6 bg-gray-100 shadow-md rounded-lg p-4 hover:cursor-pointer">
            <div className="flex justify-between items-center mb-4 " onClick={handleClick}>
                <span className="font-bold text-lg text-gray-700">
                    {data.title} ({data.itemCards.length})
                </span>
                <span className="text-gray-500 hover:cursor-pointer">🔻</span>
            </div>
            { showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};


export default ResCategory;
