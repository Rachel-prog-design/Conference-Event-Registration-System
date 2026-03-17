import { useNavigate } from "react-router-dom";

const EventInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 mt-6 ml-6 max-w-lg bg-white shadow-md rounded">
      
      <h1 className="text-3xl font-bold mb-3">
        Tech Innovation Conference 2026
      </h1>

      <p className="text-gray-700 mb-2">
        📅 Date: June 20, 2026
      </p>

      <p className="text-gray-700 mb-2">
        📍 Location: Kigali Convention Center
      </p>

      <p className="text-gray-700 mb-4">
        Join developers, designers, and entrepreneurs for an exciting event filled with innovation, networking, and learning about the latest trends in technology.
      </p>

      <button
        onClick={() => navigate("/register")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Register Now
      </button>
    </div>
  );
};

export default EventInfo;