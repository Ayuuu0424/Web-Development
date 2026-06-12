import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3">
        <div className="flex gap-3">
          <FaStore className="text-2xl text-white" />
        </div>
        <span>Fake Store</span>
        <div className="flex gap-4">
          <Link to={"/"} className="text-white hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="text-white hover:underline">
            About
          </Link>
          <Link to={"/contact"} className="text-white hover:underline">
            Contact
          </Link>
          <Link to={"/products"} className="text-white hover:underline">
            Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
