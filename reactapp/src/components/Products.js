import React, { useState } from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";
import Cart from "./Cart";
import { addProduct, removeProduct } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

export default function Products () {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([ { 
        "productid": 1,
        "type": "Men's Shirt",
        "imageURL": "./images/p1.png",
        "price": 75
     },
     
     { 
         "productid": 2,
         "type": "Men's Shirt",
         "imageURL": "./images/p2.png",
         "price": 80
      },
     
     { 
        "productid": 3,
        "type": "Woman's Dress",
        "imageURL": "./images/p3.png",
        "price": 68
     },
     
     { 
         "productid": 4,
         "type": "Woman's Dress",
         "imageURL": "./images/p4.png",
         "price": 70
      },
      
     { 
         "productid": 5,
         "type": "Woman's Dress",
         "imageURL": "./images/p5.png",
         "price": 75
      },
      
     { 
         "productid": 6,
         "type": "Woman's Dress",
         "imageURL": "./images/p6.png",
         "price": 58
      },
      
     { 
         "productid": 7,
         "type": "Woman's Dress",
         "imageURL": "./images/p7.png",
         "price": 80
      },
    
     { 
         "productid": 8,
         "type": "Men's Shirt",
         "imageURL": "./images/p8.png",
         "price": 65
      },
 
      { 
         "productid": 9,
         "type": "Men's Shirt",
         "imageURL": "./images/p9.png",
         "price": 65
      },
      { 
         "productid": 10,
         "type": "Men's Shirt",
         "imageURL": "./images/p10.png",
         "price": 65
      },
      { 
         "productid": 11,
         "type": "Men's Shirt",
         "imageURL": "./images/p11.png",
         "price": 65
      },
      { 
         "productid": 12,
         "type": "Woman's Dress",
         "imageURL": "./images/p12.png",
         "price": 65
      }]);
      console.log("Products",products);
 
      const buyHandler = function(productItem) {
         dispatch(addProduct(productItem));
      }; 

    return (
     <div>
          <Header text="Product Grid"/>
          <SubHeader text="Our Products"/>
          <div>
              {products.map((product)=>{
                  return(
                      <div key={product.productid}>
                      <img src={product.imageURL} />
                      <p>{product.type}</p>
                      <p>{product.price}</p>
                      <button onClick={()=>{buyHandler(product);}}>Buy Now</button>
                      </div>
                      );                 
              })}
          </div>
     </div>
    );
}