import React from "react";
import "./PopupWithPhoto.css";
import { useSwipeable } from "react-swipeable";
import turningArrow from "../../images/turning-arrow.svg";

function PopupWithPhoto({ popupPhotoData, closePopup }) {

  const [currentImageIndex, setCurrentImageIndex] = React.useState(popupPhotoData.index)
  const [swipeState, setSwipeState] = React.useState({ deltaX: 0, deltaY: 0, moving: false });
  const [transitionClass, setTransitionClass] = React.useState('');
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [opacityLevel, setOpacityLevel] = React.useState(0);
  const [isFinalPhoto, setIsFinalPhoto] = React.useState(false);
  const [isStartPhoto, setIsStartPhoto] = React.useState(false);

  // свайпы
  const handlers = useSwipeable({
    onSwiping: (e) => {
      setSwipeState({ deltaX: e.deltaX, deltaY: e.deltaY, moving: true });
      setOpacityLevel(() => {
        if (Math.abs((swipeState.deltaX / 1000).toFixed(1)) * 2 >= 1) {
          return (0.9)
        } else {
          return (Math.abs((swipeState.deltaX / 1000).toFixed(1)) * 2)
        }
      }
      );
      setIsFinalPhoto(() => {
        if (currentImageIndex === popupPhotoData.allPhotos.length - 1) {
          return true;
        }
      });
      setIsStartPhoto(() => {
        if (currentImageIndex === 0) {
          return true;
        }
      });
    },
    onSwipedLeft: (e) => {
      // если не последнее фото
      if (currentImageIndex < popupPhotoData.allPhotos.length - 1 && swipeState.deltaX < -30) {
        setTransitionClass('photo-popup__image--swipe-left');
        setTimeout(() => {
          setCurrentImageIndex(currentImageIndex + 1);
          setTransitionClass('');
          setSwipeState({ deltaX: e.deltaX, deltaY: e.deltaY, moving: false });
          setIsTransitioning(true);
        }, 200);
        setTimeout(() => {
          setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
          setIsTransitioning(false);
          setOpacityLevel(0);
        }, 400)
        //если последнее
      } else {
        setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
        setOpacityLevel(0);
      }
    },
    // если не первое фото
    onSwipedRight: (e) => {
      if (currentImageIndex > 0 && swipeState.deltaX > 30) {
        setTransitionClass('photo-popup__image--swipe-right');
        setTimeout(() => {
          setCurrentImageIndex(currentImageIndex - 1);
          setTransitionClass('');
          setSwipeState({ deltaX: e.deltaX, deltaY: e.deltaY, moving: false });
          setIsTransitioning(true);
        }, 200);
        setTimeout(() => {
          setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
          setIsTransitioning(false);
          setOpacityLevel(0);
        }, 400)
      } else {
        setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
        setOpacityLevel(0);
      }
    },
    // свайп вверх закрывает
    onSwipedUp: (e) => {
      if (swipeState.deltaY < -100) {
        closePopup()
      } else {
        setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
      }
    },
    onSwipedDown: (e) => {
      if (swipeState.deltaY > 100) {
        closePopup()
      } else {
        setSwipeState({ deltaX: 0, deltaY: 0, moving: false });
      }
    }
  });

  const handleClickLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      return;
    }
  };

  const handleClickRight = () => {
    if (currentImageIndex < popupPhotoData.allPhotos.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      return;
    }
  };

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
    } else if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown' ||
      event.key === 'Escape'
    ) {
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
    <div className={`photo-popup ${isStartPhoto && 'photo-popup--start'} ${isFinalPhoto && 'photo-popup--final'}`}>

      <div className="photo-popup__sideblock photo-popup__sideblock--left">
        <img
          className={`
          photo-popup__turn-arrow 
          photo-popup__turn-arrow--left 
          app-link
          ${currentImageIndex === 0 && 'photo-popup__turn-arrow--left_hidden'}
          `}
          src={turningArrow}
          alt={`turn left`}
          onClick={() => handleClickLeft()}
        />

        {
          (isStartPhoto && swipeState.deltaX > 0) &&
          <p
            className="app-text photo-popup__text photo-popup__start-marker"
            style={{
              display: swipeState.deltaX !== 0 ? 'block' : 'none',
              opacity: 0 + opacityLevel * 2,
            }}
          >
            The journey begins here!
          </p>
        }
      </div>

      <div className="photo-popup__sideblock photo-popup__sideblock--right">
        {
          (isFinalPhoto && swipeState.deltaX < 0) &&
          <p
            className="app-text photo-popup__text photo-popup__end-marker"
            style={{
              display: swipeState.deltaX !== 0 ? 'block' : 'none',
              opacity: 0 + opacityLevel * 2,
            }}
          >
            This is the end ... my friend
          </p>
        }

        <img
          className={`
          photo-popup__turn-arrow 
          photo-popup__turn-arrow--right
          app-link
          ${currentImageIndex === popupPhotoData.allPhotos.length - 1 && 'photo-popup__turn-arrow--right_hidden'}
          `}
          src={turningArrow}
          alt={`turn right`}
          onClick={() => handleClickRight()}
        />
      </div>

      <div
        className={`photo-popup__container`}
        {...handlers}
        style={{
          transform: `translate(-50%, -50%) translate(${swipeState.deltaX}px, ${swipeState.deltaY}px)`,
        }}
      >
        <img
          className={`photo-popup__image ${transitionClass}`}
          src={popupPhotoData.allPhotos[currentImageIndex].dataUrl}
          alt={popupPhotoData.allPhotos[currentImageIndex].name}
          onClick={closePopup}
          style={{
            display: isTransitioning ? 'none' : 'block',
            opacity: 1 - opacityLevel,
          }}
        />
      </div>
    </div>
  )
};

export default PopupWithPhoto;