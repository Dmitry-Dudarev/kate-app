import React from "react";
import "./BlurOverlay.css";

function BlurOverlay(props) {
  return (
    <div className={`
    blur-overlay 
    ${props.isNavbarOpen && "blur-overlay--navbar"} 
    ${props.isPopupOpen && "blur-overlay--popup"}
    `} />
  );
};

export default BlurOverlay;