import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import Navbar from "../Navbar/Navbar";
import menuIcon from "../../images/menu__icon.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link className="app-text header__title" to={"/kate-app"}>
        {AppText.appTitle}
      </Link>
      <div className="header__navbar">
        <Navbar openNavbar={props.openNavbar} isNavbarOpen={props.isNavbarOpen}/>
      </div>
      <img className="header__menu-icon" alt="menu" src={menuIcon} onClick={props.openNavbar} />
    </header>
  );
};

export default Header;