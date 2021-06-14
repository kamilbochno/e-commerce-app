import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';

import Products from '../Products/Products';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function Home() {
    return (
        <div className="Home">
        
        <Header />
        <Searchbar />
        <Main />
        <Products />
        <Footer />
        
        </div>
    );
}

export default Home;