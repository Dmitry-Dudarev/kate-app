import React from 'react';
import "./Footer.css";
import { AppText } from '../constants/App-text';
import telegramIcon from "../../images/telegram__icon.svg";
import instagramIcon from "../../images/instagram__icon.svg";
import ContactInfo from '../ContactInfo/ContactInfo';

function Footer(props) {
  return (
    <footer className='footer'>
      <h3 className='app-text footer__title'>
        {AppText.footerTitle}
      </h3>
      <ContactInfo />
      {/* <div className='footer__sections'>

        <p className='app-text footer__section-title footer__photographer-section--title'>
          {AppText.photographer}
        </p>

        <div className='footer__links-section'>
          <a
            className='app-text app-link footer__link footer__telegram-link'
            href={AppText.photographerTelegramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.photographerTelegramLink.toLowerCase()}
          </a>
          <a
            className='app-text app-link footer__link footer__instagram-link'
            href={AppText.photographerImstagramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.photographerImstagramLink}
          </a>
        </div>


        <hr className='footer__horizontal-line' />


        <p className='app-text footer__section-title footer__agent-section--title'>
          {AppText.agent}
        </p>

        <div className='footer__links-section'>
          <a
            className='app-text app-link footer__link footer__telegram-link'
            href={AppText.agentTelegramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.agentTelegramLink}
          </a>
          <a
            className='app-text app-link footer__link footer__instagram-link'
            href={AppText.agentImstagramLinkWay}
            target="_blank"
            rel="noopener noreferrer">
            {AppText.agentImstagramLink}
          </a>
        </div>

      </div> */}
    </footer>
  );
};

export default Footer;