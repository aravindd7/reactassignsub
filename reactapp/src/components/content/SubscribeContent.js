import React from "react";
import { Button } from 'react-bootstrap';
export default function SubscribeContent () {
    return (
        <div className="container-subscribe">
            <p>Subscribe To Get Discount Offers</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p><input name="subscription" placeholder="Enter your Email"/></p>
            <Button className="btn-red">Subscribe</Button>
        </div>
    );
}