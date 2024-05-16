import React from "react";
import "./Card.css";

function Card(props){
  const imageLink = props.photo
  return(
    <li className="card">
      <img className="card__photo" src={`${imageLink}`} alt="girl" />
    </li>
  );
};

export default Card;