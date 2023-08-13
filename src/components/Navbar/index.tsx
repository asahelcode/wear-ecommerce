import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../CartButtons";
import NavContainer from "./style";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const currentUser = true;

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>

        {currentUser && (
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        )}

        {currentUser && (
          <li>
            <Link to="/orders">Order</Link>
          </li>
        )}
      </div>
      <CartButtons />
    </NavContainer>
  );
};

export default Navbar;
