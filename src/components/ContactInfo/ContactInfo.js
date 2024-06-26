import React from "react";
import "./ContactInfo.css";
import { AppText } from "../constants/App-text";

function ContactInfo(props) {
  const custonContactInfoClass = props.position === "contacts" ? "contacts" :
    props.position === "footer" ? "footer" :
      null;

  return (
    <div className={`contact-info contact-info--${custonContactInfoClass}`}>

      <p className={`
      app-text 
      contact-info__section-title 
      contact-info__section-title--${custonContactInfoClass} 
      contact-info__photographer-section--title
      `}>
        {AppText.photographer}
      </p>

      <div className={`contact-info__links-section contact-info__links-section--${custonContactInfoClass}`}>
        <a
          className={`
          app-text 
          app-link 
          contact-info__link 
          contact-info__link--${custonContactInfoClass} 
          contact-info__telegram-link
          `}
          href={AppText.photographerTelegramLinkWay}
          target="_blank"
          rel="noopener noreferrer">
          {AppText.photographerTelegramLink.toLowerCase()}
        </a>
        <a
          className={`
          app-text 
          app-link 
          contact-info__link 
          contact-info__link--${custonContactInfoClass} 
          contact-info__instagram-link
          `}
          href={AppText.photographerImstagramLinkWay}
          target="_blank"
          rel="noopener noreferrer">
          {AppText.photographerImstagramLink}
        </a>
      </div>

      <hr className={`contact-info__horizontal-line contact-info__horizontal-line--${custonContactInfoClass}`} />

      <p className={`
      app-text 
      contact-info__section-title 
      contact-info__section-title--${custonContactInfoClass} 
      contact-info__agent-section--title
      `}>
        {AppText.agent}
      </p>

      <div className={`contact-info__links-section contact-info__links-section--${custonContactInfoClass}`}>
        <a
          className={`
          app-text 
          app-link 
          contact-info__link 
          contact-info__link--${custonContactInfoClass} 
          contact-info__telegram-link
          `}
          href={AppText.agentTelegramLinkWay}
          target="_blank"
          rel="noopener noreferrer">
          {AppText.agentTelegramLink}
        </a>
        <a
          className={`
          app-text 
          app-link 
          contact-info__link 
          contact-info__link--${custonContactInfoClass} 
          contact-info__instagram-link
          `}
          href={AppText.agentImstagramLinkWay}
          target="_blank"
          rel="noopener noreferrer">
          {AppText.agentImstagramLink}
        </a>
      </div>

    </div>
  );
};

export default ContactInfo;