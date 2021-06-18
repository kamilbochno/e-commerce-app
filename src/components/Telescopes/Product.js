import React from 'react';
import Styles from './Product.css';
import { Products, GetTitle } from '../Products/Products';
import { Button } from 'react-bootstrap';


function Product() {


return (
    
  
  <div className="Telescopes_Products">
    <Products/>
    <h1 className="Title"><GetTitle /></h1>
    <div className="Grid-container">
    <div className="Product-item">
    <div className="Product-img"></div>
    <Button className="Add_item">Add to cart</Button>
    </div>
    <div className="Product-item">
    <div className="Product-img"></div>
    <Button className="Add_item">Add to cart</Button>
    </div>
    <div className="Product-item">
    <div className="Product-img"></div>
    <Button className="Add_item">Add to cart</Button>
    </div>
    <div className="Product-item">
    <div className="Product-img"></div>
    <Button className="Add_item">Add to cart</Button>
    </div>
    <div className="Product-item">
    <div className="Product-img"></div>
    <Button className="Add_item">Add to cart</Button>
    </div>
    <div className="Product-item">
    <div className="Product-img"></div>
    <Button className="Add_item">Add to cart</Button>
    </div>
  
</div>
</div>
    );

}


export default Product;