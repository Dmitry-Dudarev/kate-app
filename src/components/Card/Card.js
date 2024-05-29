import React from "react";
import "./Card.css";
import { useLocation } from "react-router-dom";
import { Wherego } from "../constants/Wherego";


function Card({ photo }) {
  const locationPathSegments = useLocation().pathname.split('/').filter(segment => segment);
  const sectionPathSegment = locationPathSegments[0];
  const galleryPathSegment = locationPathSegments[1];
  const photoUrl = `${Wherego.devUrl}/images/${sectionPathSegment}Links/${galleryPathSegment}/${photo.name}`;
  const isPhotoHorizontal = (photo.position === "horizontal" ? "card__photo_horizontal" : null)

  return (
    <li className={`card ${isPhotoHorizontal}`}>
      <img className="card__photo" src={photoUrl} alt={photo.name} />
    </li>
  );
};

export default Card;