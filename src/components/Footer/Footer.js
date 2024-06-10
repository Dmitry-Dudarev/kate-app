import React from 'react';
import "./Footer.css";
import { AppText } from '../constants/App-text';
import ContactInfo from '../ContactInfo/ContactInfo';

function Footer(props) {
  return (
    <footer className={`footer ${props.isMainPageOpen && "footer_undisplay"}`}>
      <h3 className='app-text footer__title'>
        {AppText.footerTitle}
      </h3>
      <ContactInfo position="footer" />
    </footer>
  );
};

export default Footer;