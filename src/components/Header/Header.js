import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import menuIconBlack from "../../images/menu__icon--black.svg";
import NavigationLinks from "../NavigationLinks/NavigationLinks";


function Header(props) {
  return (
    <header className="header">
      <div className="header__title-block">
        <h2 className="app-text header__title">
          {AppText.appTitle}
        </h2>
        <img
          className="app-link header__menu-link"
          src={menuIconBlack}
          alt={AppText.menuLink}
          onClick={props.openNavbar}
        />
      </div>
      <NavigationLinks />
    </header>
  );
};

export default Header;