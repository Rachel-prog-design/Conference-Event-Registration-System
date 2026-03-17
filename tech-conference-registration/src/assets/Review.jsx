import { useNavigate } from "react-router-dom";

function Review({ formData }) {

  const navigate = useNavigate();

  return (
    <div>

      <h2>Review Your Registration</h2>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Organization: {formData.organization}</p>
      <p>Ticket: {formData.ticket}</p>
      <p>Diet: {formData.diet}</p>
      <p>Notes: {formData.notes}</p>

      <button onClick={() => navigate("/register")}>
        Edit
      </button>

      <button onClick={() => navigate("/confirmation")}>
        Confirm
      </button>

    </div>
  );
}

export default Review;