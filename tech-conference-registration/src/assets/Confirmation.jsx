import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Confirmation({ formData, setRegistered }) {

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.setItem(
      "registration",
      JSON.stringify(formData)
    );

    setRegistered(true);

  }, []);

  return (
    <div>

      <h2>Registration Successful 🎉</h2>

      <p>
        Thank you for registering for the Tech Innovation
        Conference.
      </p>

      <button onClick={() => navigate("/submitted")}>
        View Registration
      </button>

    </div>
  );
}

export default Confirmation;