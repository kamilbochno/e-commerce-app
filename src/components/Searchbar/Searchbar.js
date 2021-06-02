import React from "react";
import styles from "./Searchbar.css";
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {
  return(
      <div className="Container">
          <p>What are you looking for?</p>
          <div className="Search">
          <input type="text" placeholder="Search..." />
            
          </div>
          <div className="Searchicon">
          <SearchIcon fontSize="large" />
          </div>
      </div> 
  )

}

export default Searchbar;