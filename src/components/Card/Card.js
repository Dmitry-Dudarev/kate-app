import React from "react";
import "./Card.css";

function Card({ photo, openPopup, photos, index }) {
  const photoAlt = photo.name;
  const isPhotoHorizontal = (photo.position === "horizontal"
    ? "card__photo_horizontal"
    : `card-in-triple-row_${photo.sizeForTripleRow} card-in-quadro-row_${photo.sizeForQuadroRow}`);

  const photoData = {
    allPhotos: photos,
    index,
  };

  const handleClick =(data)=> {
    openPopup(data);
  } 

  return (
    <li className={`card ${isPhotoHorizontal}`} onClick={()=>handleClick(photoData)}>
      <img className="card__photo" src={photo.dataUrl} alt={photoAlt} onClick={()=>handleClick(photoData)} />
    </li>
  );
};

export default Card;