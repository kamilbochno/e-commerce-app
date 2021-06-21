import React from 'react';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Product  from '../Product_site/Product';
import { Products } from '../Products/Products';
import SearchBar from '../Searchbar/Searchbar';



function Binoculars() {
  

  
    

    return (
    <div className="Binoculars">
        
        <Header />
        <SearchBar />       
        <Product />
        <Products/>
        <Footer />
        
    </div>
    );
  }


export default Binoculars;