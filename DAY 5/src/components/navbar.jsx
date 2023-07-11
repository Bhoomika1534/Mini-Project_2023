import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/"> Sign in </Link>
        <Link to="/Signup"> Sign up </Link>
        <Link to="/cart">
            <ShoppingCart size={28} />
        </Link>
      </div>
    </div>
  );
};
