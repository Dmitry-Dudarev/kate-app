import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import Navbar from "../Navbar/Navbar";
import menuIcon from "../../images/menu__icon.svg";

function Header(props) {
  return (
    <header className="header">
      <h1 className="app-text header__title">
        {AppText.appTitle}
      </h1>
      <div className="header__navbar">
        <Navbar openNavbar={props.openNavbar} isNavbarOpen={props.isNavbarOpen}/>
      </div>
      <img className="header__menu-icon" alt="menu" src={menuIcon} onClick={props.openNavbar} />
    </header>
  );
};

export default Header;