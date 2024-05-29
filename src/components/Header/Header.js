import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import menuIconBlack from "../../images/menu__icon--black.svg";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import MenuIcon from "../../icons/MenuIcon";


function Header(props) {
const menuIconColor = "#282828";
  return (
    <header className="header">
      <div className="header__title-block">
        <Link className="app-text app-link header__title" to={"/kate-app"}>
          {AppText.appTitle}
        </Link>
        <MenuIcon color={menuIconColor}  openNavbar={props.openNavbar} />
        {/* <img
          className="app-link header__menu-link"
          src={menuIconBlack}
          alt={AppText.menuLink}
          onClick={props.openNavbar}
        /> */}
      </div>
      <hr className="header__horizontal-line"></hr>
      <NavigationLinks imagesData={props.imagesData} />
    </header>
  );
};

export default Header;