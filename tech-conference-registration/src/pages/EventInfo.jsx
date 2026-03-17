import { useNavigate } from "react-router-dom";

const EventInfo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Tech Innovation Conference</h1>
      <p>Date: June 20, 2026</p>
      <p>Location: Kigali Convention Center</p>
      <p>Explore the future of technology with experts.</p>

      <button onClick={() => navigate("/register")}>
        Register Now
      </button>
    </div>
  );
};

export default EventInfo;