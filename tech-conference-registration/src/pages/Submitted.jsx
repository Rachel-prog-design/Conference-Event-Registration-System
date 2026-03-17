import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Submitted = () => {
  const [registration, setRegistration] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load registration data from localStorage
    const data = localStorage.getItem("registration");
    if (data) {
      setRegistration(JSON.parse(data));
    }
  }, []);

  if (!registration) {
    return (
      <div className="p-4 mt-6 ml-6 max-w-lg bg-white shadow-md rounded">
        <p className="text-gray-700">No registration found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 mt-6 ml-6 max-w-lg bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Your Registration Details</h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>Full Name:</strong> {registration.name}</p>
        <p><strong>Email:</strong> {registration.email}</p>
        <p><strong>Phone:</strong> {registration.phone}</p>
        <p><strong>Organization:</strong> {registration.organization}</p>
        <p><strong>Ticket Type:</strong> {registration.ticket}</p>
        <p><strong>Dietary Requirements:</strong> {registration.diet}</p>
        <p><strong>Additional Notes:</strong> {registration.notes}</p>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate("/register")}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Edit Registration
        </button>
      </div>
    </div>
  );
};

export default Submitted;