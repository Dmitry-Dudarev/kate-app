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
      <ContactInfo position="footer" />
    </footer>
  );
};

export default Footer;