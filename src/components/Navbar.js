import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <h2>E-Market</h2>
        </Link>
      </div>
      <div className="links">
        <Link to={"/"}>Shop</Link>
        <Link to={"/cart"}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
