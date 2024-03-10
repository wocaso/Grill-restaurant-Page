import React from "react";
import "./IntroPageSeccion2.css";

function IntroPageSeccion2() {
  return (
    <div id="IntroPageSeccion2Container">
      <div id="IntroPageSeccion2ContainerUp">
        <img
          className="IntroPageSeccion2Img"
          id="IntroPageSeccion2ContainerUpLeft"
          src="./assets/imgIntro1.png"
          alt=""
        />
        <div id="IntroPageSeccion2ContainerUpRight">
          <h1 id="IntroPageSeccion2ContainerUpRightLabelTittle">
            The story of ours
          </h1>
          <h1 id="IntroPageSeccion2ContainerUpRightTittle">GRILL SHOPS</h1>
          <p id="IntroPageSeccion2ContainerUpRightDesc">
            From an abandoned storage space to a convivial meeting place in the
            heart of Geneva, our first café opened in April 2009 at Rue du Stand
            60. <br></br> <br></br>
            Now in 3 locations in Geneva and 2 locations in Zürich, customers
            can expect an amazing experience from bean to cup. Boreal Coffee is
            committed to sourcing the finest quality coffee beans from farmers
            around the world, directly traded, and roasted with love each week
            in our artisanal roastery in Carouge. <br></br> <br></br>
            Boréal Coffee expose photos of Léonard Fisch.
          </p>
          <button id="IntroPageSeccion2ContainerUpRightButton">
            Discover Grill Shops{" "}
            <img id="IntroPageSeccion1Img" src="./assets/flecha.png" alt="" />
          </button>
        </div>
      </div>
      <div id="IntroPageSeccion2ContainerDown">
        <div id="IntroPageSeccion2ContainerDownLeft">
          <h1 id="IntroPageSeccion2ContainerDownRightLabelTittle">
            FROM BEAN TO CUP AT
          </h1>
          <h1 id="IntroPageSeccion2ContainerDownRightTittle">
            BOREAL'S ROASTERY
          </h1>
          <p id="IntroPageSeccion2ContainerDownRightDesc">
            We opened an artisanal roastery in Carouge where our small team of
            dedicated roasters works to match the profiles of the green coffee
            beans we import with a roast that brings out their best
            characteristics.<br></br> <br></br> And, knowing that we work directly with the farmers
            themselves wherever possible to ensure better livelihoods while
            caring for the environment, your beverage is one to feel good about.
          </p>
          <button id="IntroPageSeccion2ContainerDownRightButton">
            Go to the shop{" "}
            <img id="IntroPageSeccion1Img" src="./assets/flecha.png" alt="" />
          </button>
        </div>
        <img
          className="IntroPageSeccion2Img"
          id="IntroPageSeccion2ContainerDownRight"
          src="./assets/imgIntro2.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default IntroPageSeccion2;
