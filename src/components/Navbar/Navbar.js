import React from "react";
import "./Navbar.css";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
import menuCloseIcon from "../../images/menu__close-icon.svg";

function Navbar(props) {
  return (
    <nav className={`navbar ${props.isNavbarOpen && "navbar_opened"}`}>
      <div className="navbar__blur-overlay"></div>
      <div className="navbar__container">

        <div className="navbar__links-section">

          <div className="navbar__title-subsection">
            <h3 className="app-text navbar__title">
              {AppText.appTitle}
            </h3>
            <img
              className="navbar__close-icon"
              src={menuCloseIcon}
              alt={AppText.navbarCloseMenuIcon}
              onClick={props.openNavbar}
            />
          </div>

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

        <a
          className="app-text app-link navbar__instagram-link"
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/katyponi/"}>
          {`Inst: ${AppText.photographerImstagramAddress}`}
        </a>

      </div>
    </nav>
  );
};

export default Navbar;