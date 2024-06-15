import React from "react";
import './Cards.css';
import Card from "../Card/Card";

function Cards(props) {
  let photos = props.photos;

  return (
    <ul className="cards">
      {
        photos.map((photo, index) => {
          return (
            <Card
              key={index}
              photo={photo}
              openPopup={props.openPopup}
              photos={photos}
              index={index}
            />
          )
        })
      }
    </ul>
  );
};

export default Cards;