import React from "react";
import { GoLocation } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

export default function FooterOther() {
    return (
        <div className="footer-other">
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <h4>Reach at...</h4>
                            <a className="hover-red"><GoLocation /><span>Location</span></a>
                            <a className="hover-red"><IoCall /><span>+01-1234567890</span></a>
                            <a className="hover-red"><AiOutlineMail /><span>demo@gmail.com</span></a>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Link to="/" className="link"><h4>Famms</h4></Link>
                            <p>Necessary, making this the
                                first true<br />generator on the Internet.
                                It uses a<br />dictionary of over 200 Latin words, <br />
                                combined with</p>
                            <div className="container-row">
                                <BsFacebook className="hover-red" style={{ marginLeft: '10px', height: '25px', width: '25px' }} />
                                <AiFillTwitterCircle className="hover-red" style={{ marginLeft: '10px', height: '25px', width: '25px' }} />
                                <TiSocialLinkedinCircular className="hover-red" style={{ marginLeft: '10px', height: '25px', width: '25px' }} />
                                <BsInstagram className="hover-red" style={{ marginLeft: '10px', height: '25px', width: '25px' }} />
                                <BsPinterest className="hover-red" style={{ marginLeft: '10px', height: '25px', width: '25px' }} />
                            </div>
                            <div>
                                <hr></hr>
                                <p>?? 2022 All Rights Reserved By Free Html Templates</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}