import React from "react";
import './NavigationLinks.css';
import { Link, useLocation } from "react-router-dom";
import { AppText } from "../constants/App-text";
import blackDot from "../../images/header__link-black-dot.svg";

function NavigationLinks(props) {
  // получим текущий путь в виде массива сегментов
  // применим фильтрацию, чтобы исключить артефактные сегменты
  const locationPathSegments = useLocation().pathname.split('/').filter(segment => segment);
  // поместим сегмент в соответствующую переменную
  let sectionPathSegment = locationPathSegments[0];
  let galleryPathSegment = locationPathSegments[1] || null;

  // console.log(sectionPathSegment, galleryPathSegment)
  return (
    <div className="navlinks">
      <Link
        className="app-text app-link navlinks__link"
        to={AppText.homeURL}
      >
        <p className="navlinks__link_text">
          {AppText.homeLinkText.toUpperCase()}
        </p>
      </Link>

      <img className="navlinks__breakdot" src={blackDot} alt="break" />

      <Link
        className="app-text app-link navlinks__link"
        to={AppText.homeURL}
      >
        <p className="navlinks__link_text">
          {AppText.homeLinkText.toUpperCase()}
        </p>
      </Link>
    </div>
  );
};

export default NavigationLinks;