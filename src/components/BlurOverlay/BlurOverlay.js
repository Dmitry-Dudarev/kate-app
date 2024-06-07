import React from "react";
import "./BlurOverlay.css";

function BlurOverlay (props) {
  return(
    <div className={`blur-overlay ${props.isNavbarOpen && "blur-overlay_open"}`}></div>
  );
};

export default BlurOverlay;