
import React, { useRef } from "react";
import styles from "./Products.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";
import image7 from "./7.png";
import image8 from "./8.png";
import image9 from "./9.png";
import image10 from "./10.png";
import image11 from "./11.png";
import image12 from "./12.png";
import image13 from "./13.png";
import image14 from "./14.png";
import image15 from "./15.png";
import image16 from "./16.png";

function GetTitle() {
  const currentURL = document.URL;
  const formattedURL = currentURL.split('/').pop()
  const capitalizedURL = formattedURL.charAt(0).toUpperCase() + formattedURL.slice(1);
return (
  capitalizedURL
);
}

function Products() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
      
    <div className="container">
        
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Products</span>
          
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
             
              <a href="/telescopes">Telescopes</a>
               <img src={image1} alt="Telescope"></img>
                      
            </li>
            <li>
              <a href="/mountings&accessories">Mountings&accessories</a>
              <img src={image2} alt="Mounting"></img>
            </li>
            <li>
              <a href="/eyepieces">Eyepieces</a>
              <img src={image3} alt="Eyepieces"></img>
            </li>
            <li>
              <a href="/filters">Filters</a>
              <img src={image4} alt="Filters"></img>
            </li>
            <li>
              <a href="/accessories">Accessories</a>
              <img src={image5} alt="Accessories"></img>
            </li>
            <li>
              <a href="/solar">Solar Observation</a>
              <img src={image7} alt="Solar"></img>
            </li>
            <li>
              <a href="/astrophotography">Astrophotography</a>
              <img src={image6} alt="Camera"></img>
            </li>
            <li>
              <a href="/spectroscopy">Spectroscopy</a>
              <img src={image8} alt="Spectro"></img>
            </li>
            <li>
              <a href="/observatories">Observatories</a>
              <img src={image9} alt="Observatory"></img>
            </li>
            
            <li>
              <a href="/planetaria&sundials">Planetaria&Sundials</a>
              <img src={image10} alt="Solar_system"></img>
            </li>
            <li>
              <a href="/binoculars">Binoculars</a>
              <img src={image12} alt="Binocular"></img>
            </li>
            <li>
              <a href="/nature">Nature</a>
              <img src={image11} alt="Nature"></img>
            </li>
            <li>
              <a href="/microscopy">Microscopy</a>
              <img src={image13} alt="Microscope"></img>
            </li>
            <li>
              <a href="/globes&maps">Globes&Maps</a>
              <img src={image14} alt="Globe"></img>
            </li>
            <li>
              <a href="/tripods">Photo Tripods</a>
              <img src={image15} alt="Tripod"></img>
            </li>
            <li>
              <a href="/maintenance&cleaning">Maintenance&Cleaning</a>
              <img src={image16} alt="Clean"></img>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export {
  Products,
  GetTitle

}