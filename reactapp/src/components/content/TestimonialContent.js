import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SubHeader from "../../hoc/Subheader";

export default function TestimonialContent() {
    return (
        <div className="content-testimonial">
         <SubHeader text="Customer's Testimonial"/>
         <CarouselProvider        
          naturalSlideWidth={400}
          naturalSlideHeight={400}
          totalSlides={3}>
            <ButtonBack className="controls-testimonial-left">
            <BsArrowLeft style={{color: "white", width: "40px"}} />
            </ButtonBack>
            <Slider className="slider-testimonial">
            {/* <ButtonBack /> */}
            <Slide index={0} className="detail-testimonial">
            <img className="img-box-inner" src="../images/client.jpg"/>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
             </Slide>
             <Slide index={1}>
            <img  className="img-box-inner" src="../images/client.jpg"/>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
             </Slide>
             <Slide index={2}>
            <img  className="img-box-inner" src="../images/client.jpg"/>
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>Dignissimos reprehenderit repellendus nobis error quibusdam?
             Atque animi sint unde quis reprehenderit, et,<br />perspiciatis, 
             debitis totam est deserunt eius officiis ipsum ducimus ad labore 
             modi voluptatibus accusantium <br /> sapiente nam! Quaerat.
             </p>
             </Slide>
             {/* <ButtonNext /> */}
             </Slider>
             <ButtonNext className="controls-testimonial-right">
             <BsArrowRight style={{color: "white", width: "40px"}} />
             </ButtonNext>
         </CarouselProvider>
        </div>
    );
}