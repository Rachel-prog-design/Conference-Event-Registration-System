const Review = ({ formData }) => {
  return (
    <div>
      <h2>Review Page</h2>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Review;