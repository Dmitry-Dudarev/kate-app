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

  const [sectionData, setSectionData] = React.useState(null);
  const addSectionData = (data) => {
    setSectionData(data);
  };

  // React.useEffect(() => {
  //   addSectionData(props.imagesData)
  //   const galleryName = findGalleryName(sectionData, galleryPathSegment)
  // },[props]);

  // function findGalleryName(data, path) {
  //   if (!data) {
  //     return
  //   }
  //   const foundObject = data.find(obj => obj.name === path);
  //   return foundObject ? foundObject.title : null;
  // }

  // const galleryName = findGalleryName(props.imagesData, galleryPathSegment);

  console.log(props.imagesData)

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
        to={`/${sectionPathSegment}`}
      >
        <p className="navlinks__link_text">
          {sectionPathSegment.toUpperCase()}
        </p>
      </Link>



      
      {galleryPathSegment &&
        <>
          <img className="navlinks__breakdot" src={blackDot} alt="break" />
          {/* эта ссыдка не буде веси на итак открытый документ
          пусть она переносит пользователя к началу страницы */}
          <a
            className="app-text app-link navlinks__link"
            href="#top"
          >
            <p className="navlinks__link_text">
              {sectionPathSegment ?
                "Loading ..." :
                `${sectionPathSegment.toUpperCase()}`
              }
            </p>
          </a>
        </>
      }


      
    </div>
  );
};

export default NavigationLinks;