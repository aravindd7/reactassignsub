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
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <NavLink to="/"><Navbar.Brand><img src="./images/logo.png" width="250" /></Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="li-nav"><Link to="/"><span> Home</span> </Link></Nav.Link>
                        <NavDropdown variant="light" className="dropdown-nav" title="Pages" >
                            <Dropdown.Item as="button"><Link to="/about"><span>About</span></Link></Dropdown.Item>
                            <Dropdown.Item as="button"><Link to="/testimonial"><span>Testimonial</span> </Link></Dropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="li-nav"><Link to="/products"><span> Products </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav"><Link to="/blog"><span> Blog </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav"><Link to="/contact"><span> Contact </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav cart-icon"><Link to="/cart"> <BsCartFill />  </Link></Nav.Link>
                        <Nav.Link className="li-nav"><BsSearch /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}