import React from 'react';
import { FOOTER_TITLE } from '../constants/constantsForFooter';

function Footer(props) {
  return (
    <footer className='footer'>
      <h2 className='footer-title'>
        {FOOTER_TITLE}
      </h2>
    </footer>
  );
};

export default Footer;