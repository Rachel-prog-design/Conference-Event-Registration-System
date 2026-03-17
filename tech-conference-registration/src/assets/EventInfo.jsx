import { useNavigate } from "react-router-dom";
import EventInfo from "./pages/EventInfo.js";

function EventInfo({ registered }) {

  const navigate = useNavigate();

  const handleRegister = () => {

    if (registered) {
      navigate("/submitted");
    } else {
      navigate("/register");
    }

  };

  return (
    <div>

      <h1>Tech Innovation Conference 2026</h1>

      <p>Date: July 20, 2026</p>
      <p>Location: Kigali Convention Center</p>

      <p>
        Join developers, designers, and entrepreneurs to explore
        the latest technology innovations.
      </p>

      <button onClick={handleRegister}>
        Register Now
      </button>

    </div>
  );
}

export default EventInfo;