import React from "react";
import "./Header.css";
import { HEADER_TITLE } from "../constants/constantsForHeader";

function Header(props) {
  return (
    <Header>
      <h1 className="header">
        {HEADER_TITLE}
      </h1>
    </Header>
  )
};

export default Header;