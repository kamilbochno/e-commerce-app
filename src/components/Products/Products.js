
import React, { useRef } from "react";
import styles from "./Products.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";


export default function Products() {
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
             
              <a href="#">Telescopes</a>
               <img src={image1} alt="1"></img>
              
              
            </li>
            <li>
              <a href="#">Mountings&accessories</a>
              <img src={image2} alt="2"></img>
            </li>
            <li>
              <a href="#">Eyepieces</a>
              <img src={image3} alt="2"></img>
            </li>
            <li>
              <a href="#">Filters</a>
            </li>
            <li>
              <a href="#">Telescope accessories</a>
            </li>
            <li>
              <a href="#">Solar Observation</a>
            </li>
            <li>
              <a href="#">Astrophotography</a>
            </li>
            <li>
              <a href="#">Spectroscopy & Photometry</a>
            </li>
            <li>
              <a href="#">Observatories</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Planetaria&Sundials</a>
            </li>
            <li>
              <a href="#">Binoculars</a>
            </li>
            <li>
              <a href="#">Nature Observation</a>
            </li>
            <li>
              <a href="#">Microscopy</a>
            </li>
            <li>
              <a href="#">Globes&Maps</a>
            </li>
            <li>
              <a href="#">Photo Tripods</a>
            </li>
            <li>
              <a href="#">Maintenance&Cleaning</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}