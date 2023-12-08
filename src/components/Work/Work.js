import React from "react";
import { Cards } from "../../dev-cards/cards";

function Work(props) {
  // получим внутри функции ряд переменных, 
  // соответстввующих элементам карточки
  const name = props.card.nameRu;
  return(
    <div className="work">
      <div className="work__description">
        <p className="work__title">
          
        </p>
      </div>
      <div className="work__picture">

      </div>
    </div>
  );
};

export default Work;