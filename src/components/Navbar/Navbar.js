import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppText } from "../constants/App-text";

function Navbar(props) {
  return (
    <nav className={`navbar ${props.isNavbarOpen && "navbar_opened"}`}>
      <div className="navbar__blur-overlay"></div>
      <div className="navbar__container">
        <Link
          className="app-text app-link navbar__link navbar__link-works"
          to={"/works"}
          onClick={props.openNavbar}
        >
          {AppText.navLinkWorks}
        </Link>

        <Link
          className="app-text app-link navbar__link navbar__link-commercial"
          to={"/commercial"}
          onClick={props.openNavbar}
        >
          {AppText.navLinkCommercial}
        </Link>

        <Link
          className="app-text app-link navbar__link navbar__link-contacts"
          to={"/contacts"}
          onClick={props.openNavbar}
        >
          {AppText.navLinkContacts}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;