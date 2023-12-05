import React from "react";
import "./Banner.css";
import BannerImage from "../../images/main-banner.jpg";
import { AppText } from "../constants/App-text";

function Banner(props) {
  return (
    <div className="banner">
    {/* <img className="banner__image" alt={AppText.bannerCaption.toUpperCase()} src={BannerImage} />
      <h2 className="app-text banner__text">{AppText.bannerCaption.toUpperCase()}</h2> */}
    </div>
  );
};

export default Banner;