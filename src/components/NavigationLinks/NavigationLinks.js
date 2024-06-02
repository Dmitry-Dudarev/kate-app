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


  function findGalleryName(data, path) {
    if (!data) {
      return
    }
    const foundObject = data.find(obj => obj.name === path);
    return foundObject ? foundObject.title : null;
  }

  const galleryName = findGalleryName(props.imagesData, galleryPathSegment);

  return (
    <div className="navlinks">
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
          {/* эта ссыдка не буде веси на итак открытый документ
          пусть она переносит пользователя к началу страницы */}
          <a
            className="app-text app-link navlinks__link"
            href="#top"
          >
            <p className="navlinks__link_text">
              {!galleryPathSegment ?
                "Loading ..." :
                `${galleryName.toUpperCase()}`
              }
            </p>
          </a>
        </>
      }

    </div>
  );
};

export default NavigationLinks;