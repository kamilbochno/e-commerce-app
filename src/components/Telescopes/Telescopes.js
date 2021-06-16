import React from 'react';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from './Product';
import Products from '../Products/Products';
import SearchBar from '../Searchbar/Searchbar';



function Telescopes() {
  

  
    

    return (
    <div className="Telescopes">
        
        <Header />
        <SearchBar />
        
        <Product />
        <Products/>
        <Footer />
        
    </div>
    );
  }


export default Telescopes;