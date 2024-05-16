import React from "react";
import './Commercial.css';
import { CommercialSamplesList } from "../constants/CommercialSamplesList";
import { Link } from "react-router-dom";

function Commercial(props) {
  return (
    <section className="commercial">

      <ul className="commercial__samples">

        {
          CommercialSamplesList.map((item) => {

            const image = require(`../../images/commercialLinks/${item.name}-link-image.png`);

            const unitStyle = {
              backgroundImage: `url(${image})`,
            }

            return (
              <li
                key={item.name}
                className={`commercial__unit ${item.name}`}>

                <Link
                  className={`commercial__unit__link ${item.name}__link app-text`}
                  to={`/commercial/${item.name}`}
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
