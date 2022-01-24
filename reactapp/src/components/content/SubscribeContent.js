import React from "react";
import { Button } from 'react-bootstrap';
export default function SubscribeContent () {
    return (
        <div className="container-subscribe">
            <h3>Subscribe To Get Discount Offers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor</p>
            <p><input name="subscription" placeholder="Enter your Email"/></p>
            <Button className="btn-red btn-subscribe">Subscribe</Button>
        </div>
    );
}