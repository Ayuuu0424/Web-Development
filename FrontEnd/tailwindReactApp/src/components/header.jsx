import { Link } from "react-router-dom";
import logo from "../assets/headerLOGO.png";

function Navbar() {
  return (
    <header className="sticky top-0 w-full">
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center pl-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[85px]" />
          </Link>
        </div>

        <div className="flex gap-2 pr-4">
          <Link
            to="/login"
            className="px-4 py-2 text-white rounded loginbutton"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded register"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;