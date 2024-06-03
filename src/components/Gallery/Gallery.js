import React from "react";
import "./Gallery.css";
import Cards from "../Cards/Cards";

function Gallery(props) {

  const item = props.item;
  const photos = item.photos;

  return (
    <section className={`app-section gallery gallery__${item.name}`}>
      <h2 className={`app-text gallery__title gallery__${item.title}-title`}>
        {item.title}
      </h2>
      <p className="app-text gallery__subtitle">
        {item.subtitle}
      </p>
      <Cards photos={photos} />
    </section>
  );
};

export default Gallery;