import React from 'react';
import styles from './Footer.css';

function Footer() {
    return(
        <div className="Footer_container">
           <div className="About_us">
               <p>About Astroshop24</p>
           </div>
           <div className="Questions">
               <p>Questions</p>
           </div>
           <div className="Shipping">
               <p>Shipping</p>
           </div>
           <div className="Security">
               <p>Security&Privacy</p>
           </div>
           <div className="Business">
               <p>Business to Business</p>
           </div>

        </div>
    )
}

export default Footer;