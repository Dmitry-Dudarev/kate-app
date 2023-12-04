import React from "react";
import "./Header.css";
import { AppText } from "../constants/App-text";

function Header(props) {
  return (
    <header className="header">
      <h1 className="app-text header__title">
        {AppText.appTitle}
      </h1>
      
    </header>
  );
};

export default Header;