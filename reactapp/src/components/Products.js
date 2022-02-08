import React, { useState, createContext } from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { addProduct, addNotifications } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import FooterOther from './content/FooterOther';
import useCounter from "../hooks/UseCounter";
//import NotificationsProvider from "../hooks/NotificationsContext";

export default function Products() {
   const [counter, increment] = useCounter(0);
   console.log('increment: ', increment);
   console.log('counter: ', counter);
   //const [counter, increment, decrement] = useCounter();
   const [data, setData] = useState([]);
   //const [notCounter, setNotCounter] = useState(0);
   const dispatch = useDispatch();
   
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

   console.log("Products", products);

   const buyHandler = function (productItem) {
      dispatch(addProduct(productItem));
      increment();
      dispatch(addNotifications(counter));
   };

   return (
         <div className="container-root">
         <Header text="Product Grid" />
         <SubHeader text="Our products" />
         <Container fluid>
            <Row>{products.map((product) => {
               return (
                  <Col key={product.productid} lg="3">
                     <Card className="card-product">
                        <Card.Img src={product.imageURL} />
                        <Card.Text>{product.type}&nbsp;${product.price}</Card.Text>
                        <div className="container-animbtns">
                        <Button className="btn btn-addto" onClick={() => { buyHandler(product); }}>Add To Cart</Button>
                        <Button className="btn btn-buy" onClick={() => { buyHandler(product); }}>Buy Now</Button>
                        </div>
                     </Card>
                  </Col>
               );
            })}</Row>
         </Container>
         <Button className="btn-box">View All Products</Button>
         <FooterOther />
      </div>
   );
}