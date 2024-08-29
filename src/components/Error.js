import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Error Aagya Bhai</h1>
            <h2 className="text-lg text-gray-700">{err.status}: {err.statusText}</h2>
        </div>
    );
};

export default Error;
