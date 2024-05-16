import React from 'react';
import "./Footer.css";
import { AppText } from '../constants/App-text';
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
            <a
              className='app-text footer__text footer__link footer__contacts-text'
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.google.ru/?hl=ru"}>
              {AppText.photographerTelegramAddress}
            </a>

            <img className='footer__contacts-icon' alt='instagram icon' src={instagramIcon} />
            <a
              className='app-text footer__text footer__link footer__contacts-text'
              target="_blank"
              rel="noopener noreferrer"
              href={AppText.photographer}>
              {AppText.photographerImstagramAddress}
            </a>
          </div>
        </div>

        <div className='footer__agent-block'>
          <p className='app-text footer__text footer__contacts-name'>{AppText.agent}</p>
          <div className='footer__contacts'>

            <img className='footer__contacts-icon' alt='telegram icon' src={telegramIcon} />
            <a
              className='app-text footer__text footer__link footer__contacts-text'
              target="_blank"
              rel="noopener noreferrer"
              href={AppText.photographer}>
              {AppText.agentTelegramAddress}
            </a>

            <img className='footer__contacts-icon' alt='instagram icon' src={instagramIcon} />
            <a
              className='app-text footer__text footer__link footer__contacts-text'
              target="_blank"
              rel="noopener noreferrer"
              href={AppText.photographer}>
              {AppText.agentImstagramAddress}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;