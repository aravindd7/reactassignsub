import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { removeProduct } from "../redux/cartReducer";

export default function Cart() {
    
    const cartItems = useSelector((state) => state.cart.cartList);
    console.log('cartItems: ', cartItems);
    const dispatch = useDispatch();

    
    function deleteHandler(item) {
        console.log("deletehandler called for",item);
        dispatch(removeProduct(item));
    }

    return (
        <div className="container-root">
            <div className="container-cart">
                <h4>My Cart</h4>
                <div className="container-cartlist"> {cartItems.map((item) => {
                    return (
                        <div className="container-cartitem" key={item.productid}>
                            <span><img width="30px" height="30px" src={item.imageURL}/></span>
                            <span>{item.type}</span>
                            <span>Price: {item.price}</span>
                            <span onClick={e=>{deleteHandler(item);}}><BsTrashFill /></span>
                        </div>
                    );
                })}</div>
            </div>
        </div>
    );
}