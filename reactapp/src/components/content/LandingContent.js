import React from "react";
import { Button } from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, DotGroup, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function LandingContent() {
    //console.log('Carousel: ', Carousel);

    return (
        <div className="landing-box">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        >
            <Slider className="slider-landing">
                <Slide index={0} className="detail-landing">
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
                </Slide>
                <Slide index={1} className="detail-landing">
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
                </Slide>
                <Slide index={2} className="detail-landing">
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
                </Slide>
            </Slider>
            <DotGroup className="dot-group"/>
        </CarouselProvider>
        </div>
 
    );
}