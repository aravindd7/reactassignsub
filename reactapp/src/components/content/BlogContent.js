import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ReactSVG } from "react-svg";
export default function BlogContent() {
    return (
        <div>
            <Container className="container-row">
                <Row>
                    <Col className="card-blog">
                        <p>Fast Delivery</p>
                        <p>Variations of passages of Lorem ipsum available</p>
                    </Col>
                    <Col className="card-blog">
                        <p>Free Shipping</p>
                        <p>Variations of passages of Lorem ipsum available</p>
                    </Col>
                    <Col className="card-blog">
                        <p>Best Quality</p>
                        <p>Variations of passages of Lorem ipsum available</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}