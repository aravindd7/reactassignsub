import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


export default function NavbarComp() {
    console.log("In Nav");
    console.log('Navbar: ', Navbar);
    console.log('Navbar: Toggle', Navbar.Toggle);
    return (
        <Navbar bg="light" expand="lg" className="nav-root">
            <Container fluid className="container-nav">
                <NavLink to="/"><Navbar.Brand><img src="./images/logo.png" width="250" /></Navbar.Brand></NavLink>
                <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" style={{border: "none", color: "black"}} />
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "none", color: "black"}}>
                <span className="icon-rotate top-line"></span>
                <span className="icon-rotate mid-line"></span>
                <span className="icon-rotate bottom-line"></span>
                </Navbar.Toggle> */}
                <Navbar.Collapse>
                    <Nav className="ul-nav">
                        <Nav.Link className="li-nav"><Link to="/" className="link-nav"><span> HOME</span></Link></Nav.Link>
                        <NavDropdown variant="light" className="dropdown-nav" title="Pages">
                            <Dropdown.Item as="button" className="nav-dropitem"><Link to="/about" className="link-nav"><span>ABOUT</span></Link></Dropdown.Item>
                            <Dropdown.Item as="button" className="nav-dropitem"><Link to="/testimonial" className="link-nav"><span>TESTIMONIAL</span> </Link></Dropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="li-nav"><Link to="/products" className="link-nav"><span> PRODUCTS </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav"><Link to="/blog" className="link-nav"><span> BLOG </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav"><Link to="/contact" className="link-nav"><span> CONTACT </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav cart-icon"><Link to="/cart" className="link-nav"> <BsCartFill />  </Link></Nav.Link>
                        <Nav.Link className="li-nav"><BsSearch /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}