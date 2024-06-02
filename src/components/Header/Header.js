import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import menuIconBlack from "../../images/menu__icon--black.svg";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import MenuIcon from "../../MenuIcon/MenuIcon";
import Navpanel from "../Navpanel/Navpanel";


function Header(props) {
  // определим цвет иконки меню для шапки;
  return (
    <header className="header">
      <div className="header__title-block">
        <Link className="app-text app-link header__title" to={"/kate-app"}>
          {AppText.appTitle}
        </Link>

        <img
          className="app-link header__menu-icon"
          src={menuIconBlack}
          alt={AppText.menuLink}
          onClick={props.openNavbar}
        />

        <Navpanel position="header" />
      </div>
      <hr className="header__horizontal-line"></hr>
      <NavigationLinks imagesData={props.imagesData} />
    </header>
  );
};

export default Header;