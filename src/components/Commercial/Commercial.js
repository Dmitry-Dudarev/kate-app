import React from "react";
import './Commercial.css';
import { CommercialSamplesList } from "../constants/CommercialSamplesList";
import { Link } from "react-router-dom";
import i from "../../images/commercialLinks/viva-la-vika/commercial-viva_la_vika-preview-001.jpg"

function Commercial(props) {
  // введем переменную для данных секции
  // которые должны приходить асинхронно с сервера
  const [commercialData, setCommercialData] = React.useState(null)
  const getCommercialData = (data) => {
    setCommercialData(data);
  };

  let images;



  // добавим логику, при которой режим отрисовки секции
  // будет зависеть от прихода данных
  React.useEffect(() => {
    getCommercialData(props.imagesData)
  }, [props])


  async function getPreviewImages(data) {
    return (
      await data.map((item) => {
        return require(`../../images/commercialLinks/${item.name}/${item.previews[0].name}`)
      })
    )
  }
  if(commercialData) {
    images = getPreviewImages(commercialData);
    console.log(images)
  }


  if (!commercialData) {
    return (
      <div className="commercial__loading">
        <p className="app-text">Loading ...</p>
      </div>
    )
  }



  return (
    <section className="commercial">

      <ul className="commercial__samples">

        {
          commercialData.map((item, index) => {
            const galleryName = item.name;
            const previewGallery = item.previews;
            const photoMagnumPath = `../../images/commercialLinks/${galleryName}/${previewGallery[0].name}`;


            const image = images[index]

            {/* const image = require("../../images/commercialLinks/viva-la-vika/commercial-viva_la_vika-preview-001.jpg") */ }
            const unitStyle = {
              backgroundImage: `url(${image})`,
            }

            return (
              <li
                key={index}
                className={`commercial__unit ${galleryName}`}>

                <Link
                  className={`commercial__unit__link ${galleryName}__link app-text`}
                  to={`/commercial/${galleryName}`}
                  style={unitStyle}>
                  <div className="commercial__unit__background" />
                  <h3 className="app-text commercial__unit__title">
                    {item.title}
                  </h3>
                  {item.subtitle
                    ? (<p className="app-text commercial__unit__subtitle">{item.subtitle}</p>)
                    : null}
                </Link>
              </li>
            )
          })
        }

      </ul>


    </section>
  )
};

export default Commercial;
