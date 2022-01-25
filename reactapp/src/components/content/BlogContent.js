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
                        <h5>Fast Delivery</h5>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </Col>
                    <Col className="card-blog">
                        <div className="svg-icon"><Icon2 /></div>
                        <h5>Free Shipping</h5>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </Col>
                    <Col className="card-blog">
                        <div className="svg-icon"><Icon3 /></div>
                        <h5>Best Quality</h5>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}