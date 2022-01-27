import React from "react";
import { Button } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";


export default function LandingContent() {
    console.log('Carousel: ', Carousel);

    const CustomCarousel = () => {
        
       return (
        <Carousel>
        <div className="carousel-inner">
            <div className="carousel-item">
                <h1>
                    <span>Sale 20% Off</span>
                    <br /> On Everything
                </h1>
                <p>Explicabo esse amet tempora quibusdam laudantium,
                    laborum<br /> eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae<br /> earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis <br />delectus repellat modi impedit sequi.
                </p>
                <Button className="btn-red">Shop Now</Button>
            </div>
        </div>
        </Carousel>
       );
    };
    
    console.log('CustomCarousel: ', CustomCarousel);

    return (
        <div className="landing-box">
            <CustomCarousel />
        </div>
    );
}