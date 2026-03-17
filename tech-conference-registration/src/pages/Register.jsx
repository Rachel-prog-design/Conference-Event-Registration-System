import { useState } from "react";

const Register = ({ setFormData }) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="organization" placeholder="Organization" onChange={handleChange} />

      <select name="ticket" onChange={handleChange}>
        <option>Standard</option>
        <option>VIP</option>
        <option>Student</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
};

export default Register;