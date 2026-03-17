import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventInfo from "./pages/EventInfo";
import Register from "./pages/Register";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import Submitted from "./pages/Submitted";

function App({ formData, setFormData }) {
  return (
    <BrowserRouter>
      {/* Navbar must be here, outside Routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<EventInfo />} />
        <Route path="/register" element={<Register setFormData={setFormData} />} />
        <Route path="/review" element={<Review formData={formData} />} />
        <Route path="/confirmation" element={<Confirmation formData={formData} />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;