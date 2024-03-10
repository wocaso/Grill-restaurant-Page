import React from "react";
import "./IntroPageSeccion1.css";

function IntroPageSeccion1() {
  return (
    <div id="IntroPageSeccion1Container">
      <img src="./assets/introLogoMainBody.png" alt="" />
      <div id="IntroPageSeccion1DownContainer">
        <div className="IntroPageSeccion1ButtonContainer">
        <button className="IntroPageSeccion1Button">Discover Grill
        <img id="IntroPageSeccion1Img"src="./assets/flecha.png" alt="" /></button>
        


        </div>
        <div className="IntroPageSeccion1ButtonContainer">
        <button className="IntroPageSeccion1Button">Visit our webshop
        <img id="IntroPageSeccion1Img" src="./assets/flecha.png" alt="" /></button>
        
        </div>

      </div>
    </div>
  );
}

export default IntroPageSeccion1;
