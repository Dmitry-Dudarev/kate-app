import React from "react";
import "./Main.css";
// import Banner from "../Banner/Banner";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <section className="main">
      <div className="main__background"></div>
      <div className="main__content">
        <h2 className="app-text main__title">
          {AppText.appTitle}
        </h2>
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