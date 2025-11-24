import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 shadow-sm bg-white border-bottom d-flex justify-content-between align-items-center">
      <h4 className="m-0 fw-bold text-primary">My Lectures</h4>

      <div className="d-flex gap-4">
        <Link className="text-decoration-none text-dark fw-semibold" to="/">Welcome</Link>
        <Link className="text-decoration-none text-dark fw-semibold" to="/about">About</Link>
        <Link className="text-decoration-none text-dark fw-semibold" to="/lectures">Lectures</Link>
      </div>
    </nav>
  );
};

export default Navbar;
