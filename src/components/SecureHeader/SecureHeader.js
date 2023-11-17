import React from "react";
import { SECUREHEADER_TITLE } from "../constants/constantsForSecureHeader";

function SecureHeader(props) {
  return (
    <div className="secureHeader">
      <h2 className="secureHeader__title">
        {SECUREHEADER_TITLE}
      </h2>
    </div>
  );
};

export default SecureHeader;