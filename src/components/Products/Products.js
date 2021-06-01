
import React, { useRef } from "react";
import styles from "./Products.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Products() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
        <p>What are you looking for?</p>
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
            </li>
            <li>
              <a href="#">Mountings&accessories</a>
            </li>
            <li>
              <a href="#">Eyepieces</a>
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