import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <header className="header">
      <h1 className="app-text header__title">
        {AppText.appTitle}
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;