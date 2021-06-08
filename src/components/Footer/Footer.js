import React from 'react';
import styles from './Footer.css';

function Footer() {
    return(
        <div className="Footer_container">
           <div className="About_us">
               <h6>About Astroshop24</h6>
               <div className="Links">
               <p>About us</p>
               <p>Links</p>
               <p>Jobs</p>
               </div>
           </div>
           <div className="Questions">
             <h6>Questions</h6>
               <div className="Links">
               <p>Service</p>
               <p>Advice</p>
               <p>Contact</p>
               <p>My account</p> 
               </div>
           </div>
           <div className="Shipping">
               <h6>Shipping</h6>
               <div className="Links">
                   <p>Shipping costs</p>
               </div>
           </div>
           <div className="Security">
               <h6>Security&Privacy</h6>
               <div className="Links">
                   <p>Terms</p>
                   <p>Data protection</p>
                   
               </div>
           </div>
           <div className="Business">
               <h6>Business to Business</h6>
               <div className="Links">
               <p>Affiliate program</p>
               <p>Retailers</p>
               </div>
           </div>

        </div>
    )
}

export default Footer;