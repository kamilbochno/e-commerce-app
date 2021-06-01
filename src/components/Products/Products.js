
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
              <a href="#">Eyepieces</a>
            </li>
            <li>
              <a href="#">Eyepieces</a>
            </li>
            <li>
              <a href="#">Eyepieces</a>
            </li>
            <li>
              <a href="#">Eyepieces</a>
            </li>
            <li>
              <a href="#">Eyepieces</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}