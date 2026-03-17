import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setFormData }) => {
  const navigate = useNavigate(); // <-- Add this
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "Standard",
    diet: "",
    notes: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to App state
    setFormData(data);

    // Navigate to confirmation page
    navigate("/review");  // <-- This redirects user to Confirmation.jsx
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-2">Register for the Tech Innovation Conference</h2>
      <p className="mb-4 text-gray-700">
        Join hundreds of developers, designers, and tech enthusiasts for an inspiring event full of workshops, keynote speeches, and networking opportunities. Register now to secure your spot!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          name="organization"
          placeholder="Organization"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />

        <select
          name="ticket"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        <input
          name="diet"
          placeholder="Dietary Requirements"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          name="notes"
          placeholder="Additional Notes"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Register;