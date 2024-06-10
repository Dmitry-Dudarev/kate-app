import React from "react";
import "./Navpanel.css";
import { Link } from "react-router-dom";
import { AppText } from "../constants/App-text";

function Navpanel(props) {
  const colorOption = (props.position === "header" ? "navpanel__navigation-link--header" : null)
  const paddingOption = (props.position === "header" ? "navpanel--header" : null)

  return (
    <div className={`navpanel ${paddingOption}`}>
      {/* <Link
        className={`app-text app-link navpanel__navigation-link navpanel__navigation-link-works ${colorOption}`}
        to={"/works"}
      >
        {AppText.navLinkWorks}
      </Link> */}

      <Link
        className={`app-text app-link navpanel__navigation-link navpanel__navigation-link-commercial ${colorOption}`}
        to={"/commercial"}
      >
        {AppText.navLinkCommercial}
      </Link>

      <Link
        className={`app-text app-link navpanel__navigation-link navpanel__navigation-link-contacts ${colorOption}`}
        to={"/contacts"}
      >
        {AppText.navLinkContacts}
      </Link>
    </div>
  );
};

export default Navpanel;