import React from "react";
import "./IntroPageSeccion3.css";

function IntroPageSeccion3() {
  return (
    <div id="IntroPageSeccion3Container">
      <div id="IntroPageSeccion3ContainerUp">
        <div id="IntroPageSeccion3ContainerUpLeft"></div>
        <div id="IntroPageSeccion3ContainerUpRight">
          <h1 id="IntroPageSeccion3ContainerUpRightLabelTittle">
            United States
          </h1>
          <h1 id="IntroPageSeccion3ContainerUpRightTittle">
            Can't make it to grill?
          </h1>
          <p id="IntroPageSeccion3ContainerUpRightDesc">
            Whether you are looking for a hearty mug of black coffee in the
            morning or an after-lunch espresso, learn how to brew a perfect cup
            of coffee for your needs and tastes
          </p>
          <div id="IntroPageSeccion3ContainerUpRightButtonContainer">
            <button className="IntroPageSeccion3ContainerUpRightButton">
              Learn More
            </button>
            <div id="IntroPageSeccion3ContainerUpRightButtonSpacer"></div>
            <button className="IntroPageSeccion3ContainerUpRightButton">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div id="IntroPageSeccion3ContainerDown">
        <div id="IntroPageSeccion3ContainerDownLeft">
          <img
            id="IntroPageSeccion3ContainerDownLeftImg"
            src="./assets/burger.png"
            alt=""
          />
        </div>
        <div id="IntroPageSeccion3ContainerDownRight">
          <h1 id="IntroPageSeccion3ContainerDownRightlabel">
            LIKE WHAT YOU SEE? CURIOUS TO TASTE OUR LOVINGLY ROASTED BEANS?
          </h1>
          <h1 id="IntroPageSeccion3ContainerDownRightTittle">
            TAKE A PIECE OF BOREAL HOME WITH YOU. THIS WAY TO OUR E-SHOP
          </h1>
        </div>
      </div>
      <div id="IntroPageSeccion3ContainerFooter">
        <div id="IntroPageSeccion3ContainerFooterUp">
          <div id="IntroPageSeccion3ContainerFooterUpImgContainer">
            <img
              id="IntroPageSeccion3ContainerFooterUpImg"
              src="./assets/LogoNegro.png"
              alt=""
            />
          </div>
          <div id="IntroPageSeccion3ContainerFooterUp1">
            <h1 className="IntroPageSeccion3ContainerFooterTittle">Finds us</h1>
            <p className="IntroPageSeccion3ContainerFooterText">
              We have 3 shops in Geneva and 2 in Zurich
            </p>
            <h1 className="IntroPageSeccion3ContainerFooterLink">
              Discover them
            </h1>
          </div>
          <div id="IntroPageSeccion3ContainerFooterUp2">
            <h1 className="IntroPageSeccion3ContainerFooterTittle">Support</h1>
            <p className="IntroPageSeccion3ContainerFooterText">
              Burger<br></br>Location<br></br>Politics<br></br>Other stuff
            </p>
          </div>
          <div id="IntroPageSeccion3ContainerFooterUp3">
            <h1 className="IntroPageSeccion3ContainerFooterTittle">
              Follow Us:
            </h1>
            <div id="IntroPageSeccion3ContainerFooterUp3Social">
              <img
                className="IntroPageSeccion3ContainerFooterUp3SocialImg"
                src="./assets/twitter.png"
                alt=""
              />
              <img className="IntroPageSeccion3ContainerFooterUp3SocialImg" src="./assets/instagram.png" alt="" />
              <img className="IntroPageSeccion3ContainerFooterUp3SocialImg" src=" ./assets/github.png" alt="" />
            </div>
          </div>
        </div>
        <div id="IntroPageSeccion3ContainerFooterDown">
            <h1 id="IntroPageSeccion3ContainerFooterDownLabel">Copyright © 2023-2024 Grill Bar. All rights reserved. Made by Gabriel Busato.</h1>
        </div>
      </div>
    </div>
  );
}

export default IntroPageSeccion3;
