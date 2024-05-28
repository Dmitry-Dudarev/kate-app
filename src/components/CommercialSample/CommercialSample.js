import React from "react";
import './CommercialSample.css';
import { AppText } from "../constants/App-text";
import { ErrorsMessages } from "../constants/Errors";
import { Wherego } from "../constants/Wherego";

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

  console.log(Wherego.devUrl)



  return (
    <div className="commercial-sample">

      <img
        className="commercial-sample__image"
        src={`${Wherego.devUrl}${magnumImage.url}`}
        alt={magnumImage.name}
      />
    </div>
  );
}

export default CommercialSample;