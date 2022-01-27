import React from "react";
import { Button } from 'react-bootstrap';
export default function SubscribeContent () {
    return (
        <div className="container-subscribe">
            <h2>Subscribe To Get Discount Offers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor</p>
            <input name="subscription" placeholder="Enter your Email"/>
            <Button className="btn-red btn-subscribe">Subscribe</Button>
        </div>
    );
}