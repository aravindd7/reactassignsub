import React, { useState } from "react";
import ProductContent from "./content/ProductContent";
import Header from "../hoc/Header";
import useSort from "../hooks/UseSort";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function SearchProducts() {

  const [products, setProducts] = useState([{
    "productid": 1,
    "type": "Men's Shirt",
    "imageURL": "./images/p1.png",
    "price": 75,
    "quantity": 1
  },
  {
    "productid": 2,
    "type": "Men's Shirt",
    "imageURL": "./images/p2.png",
    "price": 80,
    "quantity": 1
  },

  {
    "productid": 3,
    "type": "Woman's Dress",
    "imageURL": "./images/p3.png",
    "price": 68,
    "quantity": 1
  },

  {
    "productid": 4,
    "type": "Woman's Dress",
    "imageURL": "./images/p4.png",
    "price": 70,
    "quantity": 1
  },

  {
    "productid": 5,
    "type": "Woman's Dress",
    "imageURL": "./images/p5.png",
    "price": 75,
    "quantity": 1
  },

  {
    "productid": 6,
    "type": "Woman's Dress",
    "imageURL": "./images/p6.png",
    "price": 58,
    "quantity": 1
  },

  {
    "productid": 7,
    "type": "Woman's Dress",
    "imageURL": "./images/p7.png",
    "price": 80,
    "quantity": 1
  },

  {
    "productid": 8,
    "type": "Men's Shirt",
    "imageURL": "./images/p8.png",
    "price": 65,
    "quantity": 1
  },
  {
    "productid": 9,
    "type": "Men's Shirt",
    "imageURL": "./images/p9.png",
    "price": 65,
    "quantity": 1
  },
  {
    "productid": 10,
    "type": "Men's Shirt",
    "imageURL": "./images/p10.png",
    "price": 65,
    "quantity": 1
  },
  {
    "productid": 11,
    "type": "Men's Shirt",
    "imageURL": "./images/p11.png",
    "price": 65,
    "quantity": 1
  },
  {
    "productid": 12,
    "type": "Woman's Dress",
    "imageURL": "./images/p12.png",
    "price": 65,
    "quantity": 1
  }]);

  const prop1 = 'a.price';
  const prop2 = 'b.price';
  const [rootFiltered, setRootFiltered] = useState([]);
  const [sortedArray] = useSort(products, prop1, prop2);
  return (
    <div>
      <Header text="Product Grid" />
      <div className="container-filters">
        <span>Search:&nbsp;
          <input name="Search"></input></span>
        <span>Filter:&nbsp;
          <select>
            <option>Men</option>
            <option>Women</option>
          </select></span>
        <span>Sort:&nbsp;
          <select>
            <option>None</option>
            <option>Price</option>
          </select></span>
      </div>

      <Container fluid>
            <Row>{products.map((product) => {
               return (
                  <Col key={product.productid} lg="3">
                     <Card className="card-product">
                        <Card.Img src={product.imageURL} />
                        <Card.Text>{product.type}&nbsp;${product.price}</Card.Text>
                        <div className="container-animbtns">
                        <Button className="btn btn-addto" onClick={() => { 
                           }}>Add To Cart</Button>
                        <Button className="btn btn-buy" onClick={() => {
                             }}>Buy Now</Button>
                        </div>
                     </Card>
                  </Col>
               );
            })}</Row>
         </Container>
    </div>
  );
}