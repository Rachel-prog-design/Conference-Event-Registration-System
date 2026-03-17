import { useNavigate } from "react-router-dom";

const Review = ({ formData }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 mt-6 ml-6 max-w-lg bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">
        Review Your Information
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>Full Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Organization:</strong> {formData.organization}</p>
        <p><strong>Ticket Type:</strong> {formData.ticket}</p>
        <p><strong>Dietary Requirements:</strong> {formData.diet}</p>
        <p><strong>Additional Notes:</strong> {formData.notes}</p>
      </div>

      <div className="mt-4 flex gap-3">
        {/* Go back to edit */}
        <button
          onClick={() => navigate("/register")}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Edit
        </button>

        {/* Confirm and go to confirmation page */}
        <button
          onClick={() => navigate("/confirmation")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Review;