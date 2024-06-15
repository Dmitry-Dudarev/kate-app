import React from "react";
import "./PopupWithPhoto.css";
import { useSwipeable } from "react-swipeable";

function PopupWithPhoto({ popupPhotoData, closePopup }) {

  const [currentImageIndex, setCurrentImageIndex] = React.useState(popupPhotoData.index)
  const [swipeState, setSwipeState] = React.useState({ deltaX: 0, deltaY: 0, moving: false });

  // свайпы
  const handlers = useSwipeable({
    onSwiping: (e) => {
      setSwipeState({ deltaX: e.deltaX, deltaY: e.deltaY, moving: true })
    },
    onSwipedLeft: (e) => {
      // если не последнее фото
      if (currentImageIndex < popupPhotoData.allPhotos.length - 1 && swipeState.deltaX < -40) {
        setCurrentImageIndex(currentImageIndex + 1)
      }
      setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
    },
    // если не первое фото
    onSwipedRight: (e) => {
      if (currentImageIndex > 0 && swipeState.deltaX > 40) {
        setCurrentImageIndex(currentImageIndex - 1)
      }
      setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
    },
    // свайп вверх закрывает
    onSwipedUp: (e) => {
      if (swipeState.deltaY < -100) {
        closePopup()
      }
      setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
    },
    onSwipedDown: (e) => {
      if (swipeState.deltaY > 100) {
        closePopup()
      }
      setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
    }
  });

  // Обработчик клавиатурных событий
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === 'ArrowRight') {
      if (currentImageIndex < popupPhotoData.allPhotos.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    } else if (event.key === 'ArrowLeft') {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    } else if (event.key === 'Escape') {
      closePopup();
    }
  }, [currentImageIndex, popupPhotoData.allPhotos.length, closePopup]);

  React.useEffect(() => {
    // убираем прокрутку страницы
    document.body.classList.add('no-scroll');
    // добавляем слушатель событий клавиатуры
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={`photo-popup`}>
      <div
        className="photo-popup__container"
        {...handlers}
        style={{
          transform: `translate(-50%, -50%) translate(${swipeState.deltaX}px, ${swipeState.deltaY}px)`,
        }}
      >
        <img
          className="photo-popup__image"
          src={popupPhotoData.allPhotos[currentImageIndex].dataUrl}
          alt={popupPhotoData.allPhotos[currentImageIndex].name}
          onClick={closePopup}
        />
      </div>
    </div>
  )
};

export default PopupWithPhoto;