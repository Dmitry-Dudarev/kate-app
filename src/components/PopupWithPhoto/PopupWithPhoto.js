import React from "react";
import "./PopupWithPhoto.css";

function PopupWithPhoto({ popupPhotoData, closePopup }) {
  const photos = popupPhotoData.photos;

  // return (
  //   <div className={`photo-popup`} >
  //     <div className="photo-popup__container">
  //       <img className="photo-popup__image photo-popup__image--prev" src={popupPhotoData.url} alt={popupPhotoData.alt} onClick={closePopup} />
  //       <img className="photo-popup__image photo-popup__image--central" src={popupPhotoData.url} alt={popupPhotoData.alt} onClick={closePopup} />
  //       <img className="photo-popup__image photo-popup__image--next" src={popupPhotoData.url} alt={popupPhotoData.alt} onClick={closePopup} />
  //     </div>
  //   </div>
  // );

  return (
    <div className={`photo-popup`} >
      <div className="photo-popup__container">
        <img className="photo-popup__image photo-popup__image--prev" src={popupPhotoData.url} alt={popupPhotoData.alt} onClick={closePopup} />
      </div>
    </div>
  )
};

export default PopupWithPhoto;