import React from "react";
import './Cards.css';
import Card from "../Card/Card";

function Cards(props) {
  const photos = props.photos;
  return (
    <ul className="cards">
      {
        photos.map((photo, index)=> {
          return(
            <Card key={index} photo={photo} />
          )
        })
      }
    </ul>
  );
};

export default Cards;