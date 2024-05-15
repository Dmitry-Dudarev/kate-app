import React from 'react';
import "./Footer.css";
import { AppText } from '../constants/App-text';
import phoneIcon from "../../images/phone__icon.svg";
import telegramIcon from "../../images/telegram__icon.svg";
import instagramIcon from "../../images/instagram__icon.svg";

function Footer(props) {
  return (
    <footer className='footer'>
      <h2 className='app-text footer__text footer__title'>{AppText.navLinkContacts}</h2>

      <div className='footer__contacts-block'>

        <div className='footer__photographer-block'>
          <p className='app-text footer__text footer__contacts-name'>{AppText.photographer}</p>
          <div className='footer__contacts'>

            <img className='footer__contacts-icon' alt='telegram icon' src={telegramIcon} />
            <p className='app-text footer__text footer__contacts-text'>
              {AppText.photographerTelegramAddress}
            </p>

            <img className='footer__contacts-icon' alt='instagram icon' src={instagramIcon} />
            <p className='app-text footer__text footer__contacts-text'>
              {AppText.photographerImstagramAddress}
            </p>
          </div>
        </div>

        <div className='footer__agent-block'>
          <p className='app-text footer__text footer__contacts-name'>{AppText.agent}</p>
          <div className='footer__contacts'>

            <img className='footer__contacts-icon' alt='telegram icon' src={telegramIcon} />
            <p className='app-text footer__text footer__contacts-text'>
              {AppText.agentTelegramAddress}
            </p>

            <img className='footer__contacts-icon' alt='instagram icon' src={instagramIcon} />
            <p className='app-text footer__text footer__contacts-text'>
              {AppText.agentImstagramAddress}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;