import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import menuIcon from "../../images/menu__icon.svg";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <section className="main">
      <Navbar openNavbar={props.openNavbar} isNavbarOpen={props.isNavbarOpen} />
      <div className="main__background"></div>
      <img className={`main__menu-icon ${props.isNavbarOpen && "main__menu-icon--hidden"}`}
        src={menuIcon}
        alt={AppText.mainNavLink}
        onClick={props.openNavbar} />
      <div className="main__content">
        <h2 className="app-text main__title">
          {AppText.appTitle.toUpperCase()}
        </h2>
        <p className="app-text main__subtitle">
          {AppText.appSubtitle.toUpperCase()}
        </p>
        <div className="main__navigation">

          <Link
            className="app-text main__navigation-link main__navigation-link-works"
            to={"/works"}
          >
            {AppText.navLinkWorks}
          </Link>

          <Link
            className="app-text main__navigation-link main__navigation-link-commercial"
            to={"/commercial"}
          >
            {AppText.navLinkCommercial}
          </Link>

          <Link
            className="app-text main__navigation-link main__navigation-link-contacts"
            to={"/contacts"}
          >
            {AppText.navLinkContacts}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;