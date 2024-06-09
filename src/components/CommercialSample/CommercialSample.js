import React from "react";
import './CommercialSample.css';
import { AppText } from "../constants/App-text";
import { ErrorsMessages } from "../constants/Errors";
import { Wherego } from "../constants/Wherego";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CommercialSample(props) {
  const gallery = props.item;
  const imagesArray = gallery.previews;

  // функция для поиска объекта изображения превью 
  // в данных секции
  const findPreviewImage = (type) => {
    try {
      const image = imagesArray.find(item => item.type === type);
      return image;
    } catch (err) {
      console.log(err, ErrorsMessages.notFindImageInPreviewsArray);
    };
  };

  const locationPathSegments = useLocation().pathname.split('/').filter(segment => segment);
  const sectionPathSegment = locationPathSegments[0];
  const galleryPathSegment = props.item.name;
  const photoUrlBaseSegment = `${Wherego.devUrl}/images/${sectionPathSegment}/${galleryPathSegment}`;

  // получаем доступ к объектам изображений превью
  const magnumImage = findPreviewImage(AppText.typeMagnum);
  const firstImage = findPreviewImage(AppText.typeFirst);
  const secondImage = findPreviewImage(AppText.typeSecond);

  return (
    <div className="commercial-sample">
      {/* <p className="app-text commercial-sample__subtitle">{subtitle}</p> */}
      <div className="commercial-sample__section commercial-sample__link-section">
        <div className="commercial-sample__title-section">
          <Link className="app-text app-link commercial-sample__title" to={`/commercial/${props.item.name}`}>
            {gallery.title}
          </Link>
          <img
            className="commercial-sample__image-magnum"
            src={`${photoUrlBaseSegment}/${magnumImage.name}`}
            alt={magnumImage.name}
          />
        </div>
        <div className="commercial-sample__section commercial-sample__prewiev-section_vertical">
          <img
            className="commercial-sample__image-preview commercial-sample__image-first"
            src={`${photoUrlBaseSegment}/${firstImage.name}`}
            alt={magnumImage.name}
          />
          <img
            className="commercial-sample__image-preview commercial-sample__image-second"
            src={`${photoUrlBaseSegment}/${secondImage.name}`}
            alt={magnumImage.name}
          />
        </div>

        <Link className="app-link commercial-sample__link" to={`/commercial/${props.item.name}`}>
          <img
            className="commercial-sample__link-arrow"
            src={arrow}
            alt={`to ${gallery.name}`}
          />
        </Link>
      </div>

      <div className="commercial-sample__section commercial-sample__prewiev-section_horizontal">
        <img
          className="commercial-sample__image-preview commercial-sample__image-first"
          src={`${photoUrlBaseSegment}/${firstImage.name}`}
          alt={magnumImage.name}
        />
        <img
          className="commercial-sample__image-preview commercial-sample__image-second"
          src={`${photoUrlBaseSegment}/${secondImage.name}`}
          alt={magnumImage.name}
        />
      </div>

    </div>

  );
};

export default CommercialSample;