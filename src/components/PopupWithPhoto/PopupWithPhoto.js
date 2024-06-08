import React from "react";
import "./PopupWithPhoto.css";

function PopupWithPhoto({ isPopupOpen, popupPhotoData, closePopup }) {
  return (

    <div className={`photo-popup ${isPopupOpen && "photo-popup_open"}`} >
      <img className="photo-popup__image" src={popupPhotoData.url} alt={popupPhotoData.alt} onClick={closePopup} />
    </div>

  );
};

export default PopupWithPhoto;