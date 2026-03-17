import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Event Info</Link>
      <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
      <Link to="/review" style={{ marginRight: "10px" }}>Review</Link>
      <Link to="/confirmation" style={{ marginRight: "10px" }}>Confirmation</Link>
      <Link to="/submitted">Submitted</Link>
    </nav>
  );
};

export default Navbar;