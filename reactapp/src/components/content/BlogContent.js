import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
export default function BlogContent() {
    return (
        <div>
            <Container className="container-row">
                <Row>
                    <Col className="card-blog">
                        <div className="svg-icon"><Icon1 /></div>
                        <p>Fast Delivery</p>
                        <p>Variations of passages of Lorem ipsum available</p>
                    </Col>
                    <Col className="card-blog">
                        <div className="svg-icon"><Icon2 /></div>
                        <p>Free Shipping</p>
                        <p>Variations of passages of Lorem ipsum available</p>
                    </Col>
                    <Col className="card-blog">
                        <div className="svg-icon"><Icon3 /></div>
                        <p>Best Quality</p>
                        <p>Variations of passages of Lorem ipsum available</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}