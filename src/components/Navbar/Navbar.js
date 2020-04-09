import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink exact to="/" className="navbar-brand">
      <span className="font-weight-bold p-4 font-italic h4">
        Favourite Wallpapers.
      </span>
    </NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ml-5">
          <NavLink to="/" className="nav-link">
            Top Wallpapers
          </NavLink>
        </li>
        <li className="nav-item ml-5">
          <NavLink exact to="/add" className="nav-link">
            Favourite Wallpapers
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
