import React from "react";
import "./Contact.css";
import { Wherego } from "../constants/Wherego";

function Contact({ item, index }) {

  const {
    name,
    instagramLinkName,
    telegramLinkName,
    instagramLinkUrl,
    telegramLinkUrl,
    photo
  } = item;

  const photoUrl = `${Wherego.devUrl}/images/contacts/${photo}`;

  const isReverse = (index > 0 && "contact_reverse");

  console.log(photoUrl)

  return (
    <div className={`contact ${isReverse}`}>
      <img className="contact__photo" src={photoUrl} alt={name} />
      <div className="contact__info">
        <p className="app-text contact__name">{name}</p>
        <a
          className='app-text app-link contact__link contact__telegram-link'
          href={telegramLinkUrl}
          target="_blank"
          rel="noopener noreferrer">
          {telegramLinkName.toLowerCase()}
        </a>
        <a
          className='app-text app-link contact__link contact__telegram-link'
          href={instagramLinkUrl}
          target="_blank"
          rel="noopener noreferrer">
          {instagramLinkName.toLowerCase()}
        </a>
      </div>
    </div>
  );
};

export default Contact;