import React from "react";
import './NavigationLinks.css';
import { Link, useLocation } from "react-router-dom";
import { AppText } from "../constants/App-text";

function NavigationLinks(props) {
  // получим текущий путь в виде массива сегментов
  // применим фильтрацию, чтобы исключить артефактные сегменты
  const locationPathSegments = useLocation().pathname.split('/').filter(segment => segment);
  // поместим сегмент в соответствующую переменную
  let sectionPathSegment = locationPathSegments[0] || '';
  let galleryPathSegment = locationPathSegments[1] || null;

  function findGalleryName(data, path) {
    if (!data) {
      return
    }
    const foundObject = data.find(obj => obj.name === path);
    return foundObject ? foundObject.title : null;
  };

  const galleryName = findGalleryName(props.imagesData, galleryPathSegment);

  return (
    <div className={`navlinks ${props.isNotFoundPageOpen && "navlinks_hidden"}`}>
      <Link
        className="app-link navlinks__link"
        to={AppText.homeURL}
      >
        <p className="app-text navlinks__link_text">
          {AppText.homeLinkText.toUpperCase()}
        </p>
      </Link>

      <span className="navlinks__breakdot">&#8226;</span>

      <Link
        className="app-link navlinks__link"
        to={`/${sectionPathSegment}`}
      >
        <p className="app-text navlinks__link_text">
          {sectionPathSegment.toUpperCase()}
        </p>
      </Link>

      {galleryPathSegment &&
        <>
          <span className="navlinks__breakdot">&#8226;</span>
          <a
            className="app-text app-link navlinks__link navlinks__link_text"
            href="#top"
          >
            {galleryName.toUpperCase()}
          </a>
        </>
      }
    </div>
  );
};

export default NavigationLinks;