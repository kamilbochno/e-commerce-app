import React from 'react';
import Styles from './Product.css';
import Products from '../Products/Products';
import { Container, Row, Col, Card, Button, CardDeck, CardGroup } from 'react-bootstrap';

function Product() {


return (
    
  
  <div className="Telescopes_Products">
    <Products/>
    <div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  
</div>
</div>
    );

}


export default Product;