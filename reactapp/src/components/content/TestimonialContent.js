import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Carousel } from "react-bootstrap";

export default function TestimonialContent() {
    return (
        <div className="content-testimonial">
         <Carousel>
            <div className="container-row">
            <BsFillArrowLeftCircleFill />
            <div>
            <div>
            <img  className="img-box-inner" src="../images/client.jpg"/>
            </div>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            </div>
            <BsFillArrowRightCircleFill />
            </div>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
         </Carousel>
        </div>
    );
}