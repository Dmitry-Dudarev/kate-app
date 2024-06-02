import React from "react";
import "./CommercialSampleHorizontal.css";
import { ErrorsMessages } from "../constants/Errors";
import { AppText } from "../constants/App-text";
import { Link } from "react-router-dom";
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
          src={`${Wherego.devUrl}${magnumImage.url}`}
          alt={magnumImage.name}
        />
      </div>
      <div className="commercial-sample-horizontal__section commercial-sample-horizontal__middle-section">
        <img
          className="commercial-sample-horizontal__image commercial-sample-horizontal__image-first"
          src={`${Wherego.devUrl}${firstImage.url}`}
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
          src={`${Wherego.devUrl}${secondImage.url}`}
          alt={magnumImage.name}
        />
      </div>
    </div>
  );
};

export default CommercialSampleVertical;