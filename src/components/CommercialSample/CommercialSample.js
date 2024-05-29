import React from "react";
import './CommercialSample.css';
import { AppText } from "../constants/App-text";
import { ErrorsMessages } from "../constants/Errors";
import { Wherego } from "../constants/Wherego";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

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

  // получаем доступ к объектам изображений превью
  const magnumImage = findPreviewImage(AppText.typeMagnum);
  const firstImage = findPreviewImage(AppText.typeFirst);
  const secondImage = findPreviewImage(AppText.typeSecond);

  return (
    <div className="commercial-sample">
      <Link className="app-text app-link commercial-sample__title" to={`/commercial/${props.item.name}`}>{gallery.title}</Link>
      <div className="commercial-sample__section commercial-sample__link-section">
        <img
          className="commercial-sample__image-magnum"
          src={`${Wherego.devUrl}${magnumImage.url}`}
          alt={magnumImage.name}
        />

        <Link className="app-link commercial-sample__link" to={`/commercial/${props.item.name}`}>
          <img
            className="commercial-sample__link-arrow"
            src={arrow}
            alt={`to ${gallery.name}`}
          />
        </Link>
      </div>

      <div className="commercial-sample__section commercial-sample__prewiev-section">
        <img
          className="commercial-sample__image-preview commercial-sample__image-first"
          src={`${Wherego.devUrl}${firstImage.url}`}
          alt={magnumImage.name}
        />
        <img
          className="commercial-sample__image-preview commercial-sample__image-second"
          src={`${Wherego.devUrl}${secondImage.url}`}
          alt={magnumImage.name}
        />
      </div>

    </div>
  );
}

export default CommercialSample;