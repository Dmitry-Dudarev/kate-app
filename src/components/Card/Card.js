import React from "react";
import "./Card.css";
import { useLocation } from "react-router-dom";
import { Wherego } from "../constants/Wherego";


function Card({ photo, openPopup }) {
  const locationPathSegments = useLocation().pathname.split('/').filter(segment => segment);
  const sectionPathSegment = locationPathSegments[0];
  const galleryPathSegment = locationPathSegments[1];
  const photoUrl = `${Wherego.prodUrl}/images/${sectionPathSegment}/${galleryPathSegment}/${photo.name}`;
  const photoAlt = photo.name;
  const isPhotoHorizontal = (photo.position === "horizontal"
    ? "card__photo_horizontal"
    : `card-in-triple-row_${photo.sizeForTripleRow} card-in-quadro-row_${photo.sizeForQuadroRow}`);

  const photoData = {
    url: photoUrl,
    alt: photoAlt,
  };

  const handleClick =(data)=> {
    openPopup(data);
  } 

  return (
    <li className={`card ${isPhotoHorizontal}`} onClick={()=>handleClick(photoData)}>
      <img className="card__photo" src={photoUrl} alt={photoAlt} onClick={()=>handleClick(photoData)} />
    </li>
  );
};

export default Card;