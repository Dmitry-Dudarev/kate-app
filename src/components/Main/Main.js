import React from "react";
import "./Main.css";
import menuIcon from "../../images/menu__icon.svg";
import { AppText } from "../constants/App-text";
import Navpanel from "../Navpanel/Navpanel";

function Main(props) {
  React.useEffect(()=>{
    props.setIsMainPageOpen(true);
    return()=>props.setIsMainPageOpen(false);
  },[]);

  return (
    <section className="main">
      <div className="main__background"></div>
      <img className={`main__menu-icon ${props.isNavbarOpen && "main__menu-icon--hidden"}`}
        src={menuIcon}
        alt={AppText.mainNavLink}
        onClick={props.openNavbar} />

      <Navpanel />

      <div className="main__content">
        <h2 className="app-text main__title">
          {AppText.appTitle.toUpperCase()}
        </h2>
        <p className="app-text main__subtitle">
          {AppText.appSubtitle.toUpperCase()}
        </p>

      </div>
    </section>
  );
};

export default Main;