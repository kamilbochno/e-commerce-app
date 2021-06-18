import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';

import styles from '../About/About.css';


import { Products } from '../Products/Products';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';



function About() {
    return (
        <div className="About">
        
        <Header />
        <Searchbar />
        <div className="About_text">
         <p className="About-us">About us </p>
         <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat laoreet tempus. Nulla facilisi. In sit amet lectus est. Etiam ultricies iaculis odio, sed consectetur sem efficitur nec. In semper sodales nisl, ut sagittis sem aliquam non. Mauris faucibus purus augue, eu cursus magna lobortis vitae. In blandit convallis pharetra. Praesent ac risus ac tortor efficitur mattis eu vel lorem. Integer non interdum libero. Proin interdum finibus enim, eget sollicitudin risus dictum ut. Praesent quis nulla vitae augue imperdiet scelerisque aliquet eget orci. In facilisis eget leo sodales pulvinar. Mauris ut quam sed ex porta congue in quis ante. Cras vel velit nisi.Quisque ornare ultrices massa ut porta. Sed vitae lorem lobortis, laoreet sem in, molestie sem. Nunc ullamcorper, risus in congue molestie, nisi arcu interdum tellus, et consectetur dolor turpis ut nulla. Maecenas eget consequat sapien. Fusce urna justo, mollis nec erat eget, interdum facilisis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vel nulla elit. Proin at quam fermentum, convallis dolor et, mollis quam.Vivamus rutrum, quam vitae feugiat congue, leo ipsum sollicitudin magna, tincidunt aliquet leo turpis sed nunc. Phasellus tristique rhoncus justo quis malesuada. Ut maximus ex non nunc efficitur malesuada. Duis tempus enim metus, in venenatis lorem varius nec. Quisque vel purus lectus. In ac sagittis lacus. Vivamus luctus ligula justo. Nullam rhoncus diam libero, in interdum dui placerat sed. Vivamus tristique sit amet nibh </p>
        </div>
        <Products />         
        <Footer />
        
         
        
        
        
        </div>
    );
}

export default About;