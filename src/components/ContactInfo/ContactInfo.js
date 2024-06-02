import React from "react";
import "./ContactInfo.css";
import { AppText } from "../constants/App-text";

function ContactInfo(props){
  const custonMargin = (props.position === "contacts" ? "contact-info__horizontal-line--contacts" : null)
  const customColor = (props.position === "contacts" ? "contact-info__link--contacts" : null)

  return(
    <div className='contact-info'>

        <p className='app-text contact-info__section-title contact-info__photographer-section--title'>
          {AppText.photographer}
        </p>

        <div className='contact-info__links-section'>
          <a
            className={`app-text app-link contact-info__link contact-info__telegram-link ${customColor}`}
            href={AppText.photographerTelegramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.photographerTelegramLink.toLowerCase()}
          </a>
          <a
            className={`app-text app-link contact-info__link contact-info__instagram-link ${customColor}`}
            href={AppText.photographerImstagramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.photographerImstagramLink}
          </a>
        </div>


        <hr className={`contact-info__horizontal-line ${custonMargin}`} />


        <p className='app-text contact-info__section-title contact-info__agent-section--title'>
          {AppText.agent}
        </p>

        <div className='contact-info__links-section'>
          <a
            className={`app-text app-link contact-info__link contact-info__telegram-link ${customColor}`}
            href={AppText.agentTelegramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.agentTelegramLink}
          </a>
          <a
            className={`app-text app-link contact-info__link contact-info__instagram-link ${customColor}`}
            href={AppText.agentImstagramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.agentImstagramLink}
          </a>
        </div>

      </div>
  )
}

export default ContactInfo;