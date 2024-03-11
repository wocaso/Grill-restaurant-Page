import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);



  return (
    <div>
      {(scrollY<400) ? <div id="NavBarContainerVerti">
      <div id="NavBarContainer">
        <div id="NavBarContainerLeft">
            <img id="NavBarLogoLeftImg" src="./Assets/introLogoMainBody.png" alt="" />
        </div>
        <div id="NavBarContainerRight">
          <button className="NavBarContainerRightButton textWhite">Who we are ?</button>
          <div id="NavBarLineVertiWhite"></div>
          <button className="NavBarContainerRightButton textWhite">Cafes</button>
          <div id="NavBarLineVertiWhite"></div>
          <button className="NavBarContainerRightButton textWhite">Shops</button>
          <div id="NavBarLineVertiWhite"></div>
          <button className="NavBarContainerRightButton textWhite">Contact</button>
          <div id="NavBarLineVertiWhite"></div>
          <button className="NavBarContainerRightButton textWhite">Cart</button>
          <div id="NavBarLineVertiWhite"></div>
          <button className="NavBarContainerRightButton textWhite">Account</button>
          <div id="NavBarLineVertiWhite"></div>
        </div>

      </div>
      <div id="NavBarLine">

</div>
    </div> : <div id="NavBarContainerVertiWhite">
      <div id="NavBarContainer">
        <div id="NavBarContainerLeft">
            <img id="NavBarLogoLeftImg" src="./Assets/LogoNegroo.png" alt="" />
        </div>
        <div id="NavBarContainerRight">
          <button className="NavBarContainerRightButton">Who we are ?</button>
          <div id="NavBarLineVertiBlack"></div>
          <button className="NavBarContainerRightButton">Cafes</button>
          <div id="NavBarLineVertiBlack"></div>
          <button className="NavBarContainerRightButton">Shops</button>
          <div id="NavBarLineVertiBlack"></div>
          <button className="NavBarContainerRightButton">Contact</button>
          <div id="NavBarLineVertiBlack"></div>
          <button className="NavBarContainerRightButton">Cart</button>
          <div id="NavBarLineVertiBlack"></div>
          <button className="NavBarContainerRightButton">Account</button>
          <div id="NavBarLineVertiBlack"></div>
        </div>

      </div>
      <div id="NavBarLine">

</div>
    </div>}
    

    </div>
    
  );
}

export default NavBar;
