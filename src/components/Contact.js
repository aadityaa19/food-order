import React from "react";

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-5 text-center">Contact Us</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-1">Temporary Address</h2>
                    <p className="text-gray-700">1234 Street Name, City, Country</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-1">Phone Number</h2>
                    <p className="text-gray-700">+1 (234) 567-8901</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-1">About the Company</h2>
                    <p className="text-gray-700">
                        We are a leading company in the food delivery industry, committed to providing the best service to our customers. Our mission is to make delicious food accessible to everyone.
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-1">Email</h2>
                    <p className="text-gray-700">contact@company.com</p>
                </div>
                <div className="mt-5">
                    <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Send us a message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
