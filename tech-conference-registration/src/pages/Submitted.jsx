const Submitted = () => {
  const data = JSON.parse(localStorage.getItem("registration"));

  return (
    <div>
      <h2>Submitted Registration</h2>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No registration found.</p>
      )}
    </div>
  );
};

export default Submitted;