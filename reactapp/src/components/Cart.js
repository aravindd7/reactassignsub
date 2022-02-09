import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { removeProduct, qtyHandler, resetNotifications } from "../redux/cartReducer";
import { Button } from 'react-bootstrap';
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import useCounter from "../hooks/UseCounter";
export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartList);
    console.log('cartItems: ', cartItems);
    const [currentprice, setCurrentPrice] = useState(0);
    const [counter, increment, decrement] = useCounter(0);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('useEffect: in cart ');
        dispatch(resetNotifications());
    },[])

    function totalPriceCal () {
        console.log('totalPriceCal: called');
        let total = 0;
        cartItems.forEach(element => {
            total = total + element.price*element.quantity;
        });
        return total;
    }
    
    function deleteHandler(item) {
        console.log("deletehandler called for",item);
        dispatch(removeProduct(item));
    }

    function quantityHandler(item, type) {
        console.log('quantityHandler: called for ', item, "for", type);
        const productObj = {
            product: item,
            type: type
        }
        dispatch(qtyHandler(productObj));
    }

    return (
        <div className="container-root">
            <div className="container-cart">
                <h4>My Cart</h4>
                <div className="container-cartlist">
                
                {cartItems.map((item) => {
                    return (
                        <div className="container-cartitem" key={item.productid}>
                            <span><img width="30px" height="30px" src={item.imageURL}/></span>
                            <span>{item.type}</span>
                            <span>Price: ${item.price}&nbsp;</span>
                            <span>
                            <span onClick={e=>{quantityHandler(item, 'add')}}><AiOutlinePlusSquare />&nbsp;</span>
                            <span>Qty: {item.quantity}</span>
                            <span onClick={e=>{quantityHandler(item, 'subtract')}}><AiOutlineMinusSquare /></span>
                            </span>
                            <span onClick={e=>{deleteHandler(item);}}><BsTrashFill /></span>
                        </div>
                    );
                })}</div>
              <p>Total Price: ${totalPriceCal()}</p>
              <Button className="btn-red" >Checkout To Payment</Button>
            </div>
        </div>
    );
}