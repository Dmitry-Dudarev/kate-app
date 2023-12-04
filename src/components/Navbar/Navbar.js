import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppText } from "../constants/App-text";

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link
        className="app-text app-link navbar__link navbar__link-works"
        to={"/works"}
      >
        {AppText.navLinkWorks}
      </Link>

      <Link
        className="app-text app-link navbar__link navbar__link-commercial"
        to={"/commercial"}
      >
        {AppText.navLinkCommercial}
      </Link>

      <Link
        className="app-text app-link navbar__link navbar__link-contacts"
        to={"/contacts"}
      >
        {AppText.navLinkContacts}
      </Link>

    </nav>
  );
};

export default Navbar;