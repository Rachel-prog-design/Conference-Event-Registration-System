import { useNavigate } from "react-router-dom";

function RegisterForm({ formData, setFormData }) {

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Event Registration</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        name="organization"
        placeholder="Organization"
        value={formData.organization}
        onChange={handleChange}
      />

      <select
        name="ticket"
        value={formData.ticket}
        onChange={handleChange}
      >
        <option value="">Ticket Type</option>
        <option>Standard</option>
        <option>VIP</option>
        <option>Student</option>
      </select>

      <input
        name="diet"
        placeholder="Dietary Requirements"
        value={formData.diet}
        onChange={handleChange}
      />

      <textarea
        name="notes"
        placeholder="Additional Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">Review Registration</button>

    </form>
  );
}

export default RegisterForm;