import { useEffect, useState } from "react";

const Confirmation = ({ formData }) => {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check internet connection
    if (!navigator.onLine) {
      setIsOnline(false);
      setLoading(false);
      return;
    }

    // Simulate processing delay (3 seconds)
    const timer = setTimeout(() => {
      localStorage.setItem("registration", JSON.stringify(formData));
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [formData]);

  return (
    <div className="p-4 mt-6 ml-6 max-w-lg bg-white shadow-md rounded">
      
      {loading && (
        <p className="text-gray-700">
          Processing your registration... 
        </p>
      )}

      {!loading && !isOnline && (
        <p className="text-red-500">
          ❌ Please check your internet connection and try again.
        </p>
      )}

      {!loading && isOnline && (
        <>
          <h2 className="text-2xl font-bold mb-2">
            Registration Confirmed 
          </h2>

          <p className="text-gray-700">
            Thank you for registering for the Tech Innovation Conference! 
            Your information has been successfully saved, and your seat has been reserved.
          </p>
        </>
      )}
    </div>
  );
};

export default Confirmation;