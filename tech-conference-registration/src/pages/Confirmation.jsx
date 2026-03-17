import { useEffect } from "react";

const Confirmation = ({ formData }) => {
  useEffect(() => {
    localStorage.setItem("registration", JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <h2>Registration Confirmed 🎉</h2>
      <p>Your data has been saved.</p>
    </div>
  );
};

export default Confirmation;