import React from "react";
import "./Header.css";
import { HEADER_TITLE } from "../constants/constantsForHeader";

function Header(props) {
  return (
    <header className="header">
      <h1 className="app-text header__title">
        {HEADER_TITLE}
      </h1>
    </header>
  );
};

export default Header;