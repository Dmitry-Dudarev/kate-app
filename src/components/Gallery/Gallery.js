import React from "react";
import "./Gallery.css";
import Cards from "../Cards/Cards";
import { useLocation } from "react-router-dom";
import { Wherego } from "../constants/Wherego";
import Preloader from "../Preloader/Preloader";

function Gallery(props) {

  const item = props.item;
  let photos = item.photos;
  const [photosForCards, setPhotosForCards] = React.useState(item.photos);

  const locationPathSegments = useLocation().pathname.split('/').filter(segment => segment);
  const sectionPathSegment = locationPathSegments[0];
  const galleryPathSegment = locationPathSegments[1];

  const horizontalPhotos = photos.filter(photo => photo.position === "horizontal");
  const verticalPhotos = photos.filter(photo => photo.position !== "horizontal");

  const [isLoading, setIsLoading] = React.useState(true);

  function sliceArr(arr) {
    const chunkSize = 10;
    const result = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  }

  const chunksArr = sliceArr(verticalPhotos);

  const positionModels = {

    model_1(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = "regular";
        item.sizeForQuadroRow = "regular";
        return (item)
      })
    },

    model_2(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = "large";
        item.sizeForQuadroRow = "regular";
        return (item)
      })
    },

    model_3(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = "regular";
        item.sizeForQuadroRow = "large";
        return (item)
      })
    },

    model_4(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = "large";
        item.sizeForQuadroRow = "regular";
        return (item)
      })
    },

    model_5(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = index < 3 ? "regular" : "large";
        item.sizeForQuadroRow = "regular";
        return (item)
      })
    },

    model_6(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = "regular";
        item.sizeForQuadroRow = "large";
        return (item)
      })
    },

    model_7(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = index < 2 || index > 4 ? "large" : "regular";
        item.sizeForQuadroRow = index < 4 ? "regular" : "large";
        return (item)
      })
    },

    model_8(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = index < 3 || index > 4 ? "regular" : "large";
        item.sizeForQuadroRow = "regular";
        return (item)
      })
    },

    model_9(arr) {
      arr.map((item, index) => {
        item.sizeForTripleRow = index < 2 || index > 4 ? "large" : "regular";
        item.sizeForQuadroRow = "regular";
        return (item)
      })
    },

    model_10(arr) {
      arr.map((item, index) => {
        if (index < 8) {
          item.sizeForTripleRow = index < 3 || index > 4 ? "regular" : "large";
        } else {
          item.sizeForTripleRow = index > 7 ? "large" : "regular";
        }
        item.sizeForQuadroRow = index < 3 || index > 6 ? "large" : "regular";
        return (item)
      })
    },
  };


  function giveModelsToPhotos(arr, modelsMethods) {
    // пройдем по комплексному массиву методом forEach,
    // работая с каждым подмассивом
    arr.forEach((chunk) => {
      // преобразуем длинну массива в название метода
      const methodName = `model_${chunk.length}`;
      // проверка наличия метода
      if (modelsMethods[methodName]) {
        modelsMethods[methodName](chunk);
      } else {
        console.error(`Method ${methodName} is not defined in positionModels.`);
      }
    })
  };

  // определим варианты оьображения для вертикальных фото в галлерее
  giveModelsToPhotos(chunksArr, positionModels);
  // создадим итоговый массив photos, 
  // объединив обработанные вертикальные фото с горизонтальными фото 
  // с шагом в 7 фото 
  const mergeAndInsertPhotos = (verticalPhotosComplexArrow, horizontalPhotos) => {
    // Объединяем все подмассивы в один простой массив
    const verticalPhotosArrow = verticalPhotosComplexArrow.flat();
    // создадим итоговый массив
    const photos = [];
    // счетчик итераций добавления горизонтальных фото
    let horizontalPhotoIndex = 0;
    // длинна массива горизонтальных фото, будет сравниваться с 
    // количеством итераций добавления горизонтальных фото в итоговый массив
    // чтобы останвить процесс добавления, когда горизонтальные фото закончатся
    const horizontalPhotosLength = horizontalPhotos.length;
    // передаем объекты из массива с вертикальными фото 
    // в итоговый массив циклом for: понадобится счетчик i
    // чтобы реализовать логику добавления горизонтальных фото
    // через каждые 7 вертикальных
    for (let i = 0; i < verticalPhotosArrow.length; i++) {
      photos.push(verticalPhotosArrow[i]);
      // вставлять горизонтальные фото будем до тех пор, пока они есть
      // поэтому через каждые 7 вертикальных фото выполним проверку
      // не закончился ли массив горизонтальных фото
      if ((i + 1) % 4 === 0 && horizontalPhotoIndex < horizontalPhotosLength) {
        //добавим горизонтальное фото в нужное место
        photos.push(horizontalPhotos[horizontalPhotoIndex]);
        // обновим счетчик
        horizontalPhotoIndex++;
      };
    };
    // Если горизонтальных фото окажется слишком много, 
    // пусть они добавляются в итоговый массив, пока не закончатся
    while (horizontalPhotoIndex < horizontalPhotosLength) {
      photos.push(horizontalPhotos[horizontalPhotoIndex]);
      horizontalPhotoIndex++;
    };

    return photos;
  };

  photos = mergeAndInsertPhotos(chunksArr, horizontalPhotos);

  // получим данные фото с сервера 
  const getServerPhoto = async (url) => {
    try {
      const serverPhoto = await fetch(url);
      return serverPhoto;
    } catch (err) {
      console.log(`ошибка при загрузке фото с сервера ${err}`);
    }
  }

  // конвертируем их в blob
  const makeBlobPhoto = async (serverPhotoItem) => {
    try {
      const blobPhoto = await serverPhotoItem.blob();
      return blobPhoto;
    } catch (err) {
      console.log(`ошибка при конвертации данных фото в blob ${err}`);
    }
  }

  // конвертируем blob в dataUrl
  const convertBlobToDataURL = (blobPhotoItem) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blobPhotoItem);
    });
  };

  //добавим каждому объекту фото свойство с его dataUrl
  const addDataUrlToPhotos = async (photosArray) => {
    try {
      const photosWithDataUrlPromises = photos.map(async (photo, index) => {
        const photoUrl = `${Wherego.prodUrl}/images/${sectionPathSegment}/${galleryPathSegment}/${photo.name}`;
        const serverPhoto = await getServerPhoto(photoUrl);
        const blobPhoto = await makeBlobPhoto(serverPhoto);
        const dataUrlPhoto = await convertBlobToDataURL(blobPhoto);
        return { ...photo, dataUrl: dataUrlPhoto };
      });

      const photosWithDataUrl = await Promise.all(photosWithDataUrlPromises);
      return photosWithDataUrl;

    } catch (err) {
      console.log(`ошибка при конвертации base64 в dataURL ${err}`);
    }
  }

  React.useEffect(() => {
    const fetchAndLoadPhotos = async () => {
      try {
        const photosWithDataUrl = await addDataUrlToPhotos(photos);
        setPhotosForCards(photosWithDataUrl);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndLoadPhotos();
  }, [props.item]);


  return (
    <section className={`app-section gallery gallery__${item.name}`}>
      <h2 className={`app-text gallery__title gallery__${item.title}-title`}>
        {item.title}
      </h2>
      {item.subtitle &&
        <p className="app-text gallery__subtitle">
          {item.subtitle}
        </p>
      }
      {isLoading
        ? <Preloader position={'gallery'} />
        : <Cards photos={photosForCards} openPopup={props.openPopup} />
      }
    </section>
  );
};

export default Gallery;