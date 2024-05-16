import React from "react";
import "./Gallery.css";
import Cards from "../Cards/Cards";

function Gallery(props){
  return(
    <section className={`gallery gallery__${props.item.name}`}>
      <h2 className={`gallery__title gallery__${props.item.title}-title`}>
        {props.item.title}
      </h2>
      <Cards />
    </section>
  );
};

export default Gallery;