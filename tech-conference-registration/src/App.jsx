import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import EventInfo from "./pages/EventInfo";
import RegisterForm from "./pages/RegisterForm";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import Submitted from "./pages/Submitted";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "",
    diet: "",
    notes: ""
  });

  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("registration");

    if (saved) {
      setRegistered(true);
      setFormData(JSON.parse(saved));
    }
  }, []);

  return (
    <Routes>

      <Route path="/" element={<EventInfo registered={registered} />} />

      <Route
        path="/register"
        element={
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
          />
        }
      />

      <Route
        path="/review"
        element={<Review formData={formData} />}
      />

      <Route
        path="/confirmation"
        element={
          <Confirmation
            formData={formData}
            setRegistered={setRegistered}
          />
        }
      />

      <Route
        path="/submitted"
        element={<Submitted formData={formData} />}
      />

    </Routes>
  );
}

export default App;