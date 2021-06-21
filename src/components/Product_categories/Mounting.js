import React from 'react';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Product from '../Product_site/Product';
import {Products} from '../Products/Products';
import SearchBar from '../Searchbar/Searchbar';



function Mounting() {
  

  
    

    return (
    <div className="Mounting">
        
        <Header />
        <SearchBar />       
        <Product />
        <Products/>
        <Footer />
        
    </div>
    );
  }


export default Mounting;