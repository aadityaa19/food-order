import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between items-center border border-gray-400 py-2 px-5 bg-gray-100">
            <img className="h-20" src={LOGO_URL} alt="Logo" />
            <div className="flex items-center">
                <ul className="flex items-center space-x-4 uppercase font-medium cursor-pointer">
                    <li>online status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button
                        className="ml-5 w-24 text-center bg-orange-500 text-white py-2 rounded-md transition duration-300 hover:bg-orange-600 hover:shadow-lg"
                        onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
