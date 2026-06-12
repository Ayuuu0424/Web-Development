import { Link } from "react-router-dom";
import logo from "../assets/images/headerLOGO.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20" />
        </Link>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-md text-white bg-[var(--color-primary)] hover:opacity-90 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-md border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
