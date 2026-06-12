import { Link } from "react-router-dom";
import logo from "../assets/images/headerLOGO.png";

function Navbar() {
  return (
    <header className="position-sticky top-0 w-100">
      <div className="navbar d-flex px-3">
        <div className="nav-link align-items-center ps-4">
          <Link to="/">
            <img src={logo} alt="logo" width="85" />
          </Link>
        </div>

        <div className="nav-link d-flex gap-2 pe-4">
          <Link to="/login" className="loginbutton btn text-light">
            Login
          </Link>

          <Link to="/register" className="register btn">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

