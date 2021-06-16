import React from 'react';
import Styles from './Product.css';
import Products from '../Products/Products';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Product() {


return (
    
  
  <div className="Telescopes_Products">
    <Products/>
    <Container>
  <Row>
    <Col lg={true}>
        <Card border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
        </Card>
    </Col>
    <Col sm={4}></Col>
  </Row>
  <Row>
    <Col sm></Col>
    <Col sm></Col>
    <Col sm></Col>
  </Row>
</Container>

</div>
    );

}


export default Product;