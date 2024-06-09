import React from "react";
import "./CommercialSampleHorizontal.css";
import { ErrorsMessages } from "../constants/Errors";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Wherego } from "../constants/Wherego";
import arrow from "../../images/arrow.svg";

function CommercialSampleVertical(props) {
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
    <div className="commercial-sample-horizontal">
      <div className="commercial-sample-horizontal__section commercial-sample-horizontal__title-section">
        <Link className="app-text app-link commercial-sample-horizontal__title" to={`/commercial/${props.item.name}`}>
          {gallery.title}
        </Link>
        <img
          className="commercial-sample-horizontal__image commercial-sample-horizontal__image-magnum"
          src={`${photoUrlBaseSegment}/${magnumImage.name}`}
          alt={magnumImage.name}
        />
      </div>
      <div className="commercial-sample-horizontal__section commercial-sample-horizontal__middle-section">
        <img
          className="commercial-sample-horizontal__image commercial-sample-horizontal__image-first"
          src={`${photoUrlBaseSegment}/${firstImage.name}`}
          alt={magnumImage.name}
        />
      </div>
      <div className="commercial-sample-horizontal__section commercial-sample-horizontal__arrow-section">
        <Link className="app-link commercial-sample-horizontal__link" to={`/commercial/${props.item.name}`}>
          <img
            className="commercial-sample-horizontal__link-arrow"
            src={arrow}
            alt={`to ${gallery.name}`}
          />
        </Link>
        <img
          className="commercial-sample-horizontal__image commercial-sample-horizontal__image-second"
          src={`${photoUrlBaseSegment}/${secondImage.name}`}
          alt={magnumImage.name}
        />
      </div>
    </div>
  );
};

export default CommercialSampleVertical;