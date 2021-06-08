import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.css';

function Footer() {
    return(
        <div className="Footer_container">
           <div className="About_us">
               <h6>About Astroshop24</h6>
               <div className="Links">
               <NavLink activeClassName="active" to="/about">
               <p>About us</p>
               </NavLink>
               <NavLink activeClassName="active" to="/links">
               <p>Links</p>
               </NavLink>
               <NavLink activeClassName="active" to="/jobs">
               <p>Jobs</p>
               </NavLink>
               </div>
           </div>
           <div className="Questions">
             <h6>Questions</h6>
               <div className="Links">
               <NavLink activeClassName="active" to="/service">
               <p>Service</p>
               </NavLink>
               <NavLink activeClassName="active" to="/advice">
               <p>Advice</p>
               </NavLink>
               <NavLink activeClassName="active" to="/contact">
               <p>Contact</p>
               </NavLink>
               <NavLink activeClassName="active" to="/account">
               <p>My account</p> 
               </NavLink>
               </div>
           </div>
           <div className="Shipping">
               <h6>Shipping</h6>
               <div className="Links">
                   <NavLink activeClassName="active" to="/shipping">
                   <p>Shipping costs</p>
                   </NavLink>
               </div>
           </div>
           <div className="Security">
               <h6>Security&Privacy</h6>
               <div className="Links">
                   <NavLink activeClassName="active" to="/terms">
                   <p>Terms</p>
                   </NavLink>
                   <NavLink activeClassName="active" to="/data">
                   <p>Data protection</p>
                   </NavLink>
                   
               </div>
           </div>
           <div className="Business">
               <h6>Business to Business</h6>
               <div className="Links">
               <NavLink activeClassName="active" to="/affiliate">
               <p>Affiliate program</p>
               </NavLink>
               <NavLink activeClassName="active" to="/retailers">
               <p>Retailers</p>
               </NavLink>
               </div>
           </div>

        </div>
    )
}

export default Footer;