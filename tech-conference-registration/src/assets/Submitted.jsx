function Submitted({ formData }) {

  const cancelRegistration = () => {

    localStorage.removeItem("registration");
    window.location.reload();

  };

  return (
    <div>

      <h2>You Have Already Registered</h2>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Organization: {formData.organization}</p>
      <p>Ticket: {formData.ticket}</p>
      <p>Notes: {formData.notes}</p>

      <button onClick={cancelRegistration}>
        Cancel Registration
      </button>

    </div>
  );
}

export default Submitted;