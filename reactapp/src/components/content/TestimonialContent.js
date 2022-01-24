import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Carousel } from "react-bootstrap";
import SubHeader from "../../hoc/Subheader";

export default function TestimonialContent() {
    return (
        <div className="content-testimonial">
         <SubHeader text="Customer's Testimonial"/>
         <Carousel variant="dark" indicators="false">
            <Carousel.Item>
            <img  className="img-box-inner" src="../images/client.jpg"/>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
             </Carousel.Item>
             <Carousel.Item>
            <img  className="img-box-inner" src="../images/client.jpg"/>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
             </Carousel.Item>
             <Carousel.Item>
            <img  className="img-box-inner" src="../images/client.jpg"/>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
             </Carousel.Item>
         </Carousel>
        </div>
    );
}