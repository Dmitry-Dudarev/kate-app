import React from "react";
import './Commercial.css';
import { CommercialSamplesList } from "../constants/CommercialSamplesList";
import { Link } from "react-router-dom";
import Preloader from '../../images/preloader.gif'
import CommercialSample from "../CommercialSample/CommercialSample";
import CommercialSampleHorizontal from "../CommercialSampleHorizontal/CommercialSampleHorizontal";

function Commercial(props) {
  return (
    <section className="commercial">

      <div className="commercial__samples">
        {
          props.imagesData.map((item, index) => {
            return (
              <CommercialSample key={index} item={item} />
            )
          })
        }
      </div>

      <div className="commercial__samples--three-in-line">
        {
          props.imagesData.map((item, index) => {
            return (
              <CommercialSampleHorizontal key={index} item={item} />
            )
          })
        }
      </div>

    </section>
  );
};

export default Commercial;
