import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function AboutContent() {
    return (
        <div className="container-about"> 
            {/* <p>Add Background</p> */}
            <div className="detail-box"> 
            <h2>#NewArrivals</h2>
            <p>Vitae fugiat laboriosam officia preferendis provident aliquid
            voluptutabis dolorem, fugit ullam sit earum id eaque nisi hic?
            Tenetur commodi, nisi rem vel, ea eaque ab ipsa autem
            similque ex ande.
            </p>
            <Link to="/products"><Button className="btn-red">Shop Now</Button></Link>
            </div>
        </div>
    );
} 