import React from "react";
import { useSelector } from "react-redux";

export default function Cart () {
    const cartItems = useSelector((state)=>state.cart.cartList);
    console.log('cartItems: ', cartItems);
    return (
     <div>
         {cartItems.map((item)=>{
             return(
                 <div key={item.productid}>
                 <p>{item.type}</p>
                 <p>{item.price}</p>
                 </div>
             );
         })}
     </div>
    );
}