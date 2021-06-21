import React from 'react';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Product  from '../Product_site/Product';
import { Products } from '../Products/Products';
import SearchBar from '../Searchbar/Searchbar';



function Microscopy() {
  

  
    

    return (
    <div className="Microscopy">
        
        <Header />
        <SearchBar />       
        <Product />
        <Products/>
        <Footer />
        
    </div>
    );
  }


export default Microscopy