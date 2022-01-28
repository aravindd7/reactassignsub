import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


export default function NavbarComp() {
    const toggleRef = useRef(null);
    const navRef = useRef(null);
    const navDropRef = useRef(null);
    console.log('Navbar: Nav', Nav);

    function navToggle (e, toggleRef, navRef) {
        let event = e;
        let tempTogRef = toggleRef;
        let tempNavRef = navRef;
        console.log('tempTogRef: Navbar.Toggle', tempTogRef.current);
        console.log('tempNavRef: Navbar.Toggle', tempNavRef);
        console.log('navToggle event: ', event);
        console.log("navToggle called");
    }

    function navDropToggle (e, navDropRef) {
        let temp = navDropRef;
        let ev = e;
        console.log('navDropToggle: e, ref',ev, temp );

    }

    return (
        <Navbar bg="light" expand="lg" className="nav-root" ref={navRef}>
            <Container fluid className="container-nav">
                <NavLink to="/"><Navbar.Brand><img src="./images/logo.png" width="250" /></Navbar.Brand></NavLink>
                <Navbar.Toggle className="nav-toggle" ref={toggleRef} aria-controls="basic-navbar-nav" onClick={e=>{navToggle(e, toggleRef, navRef);}}>
                  <span className="rotate-bar top-bar"></span>
                  <span className="rotate-bar mid-bar"></span>
                  <span className="rotate-bar bot-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ul-nav">
                        <Nav.Link className="li-nav"><Link to="/" className="link-nav"><span> HOME</span></Link></Nav.Link>
                        <NavDropdown ref={navDropRef} variant="light" className="dropdown-nav" title="Pages" onClick={e=>{navDropToggle(e, navDropRef);}}>
                            <Dropdown.Item as="button" className="nav-dropitem"><Link to="/about" className="link-nav"><span>ABOUT</span></Link></Dropdown.Item>
                            <Dropdown.Item as="button" className="nav-dropitem"><Link to="/testimonial" className="link-nav"><span>TESTIMONIAL</span> </Link></Dropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="li-nav"><NavLink to="/products" className="link-nav" activeStyle={{color: 'red'}}><span> PRODUCTS </span> </NavLink></Nav.Link>
                        <Nav.Link className="li-nav"><Link to="/blog" className="link-nav"><span> BLOG </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav"><Link to="/contact" className="link-nav"><span> CONTACT </span> </Link></Nav.Link>
                        <Nav.Link className="li-nav cart-icon"><Link to="/cart" className="link-nav"> <BsCartFill style={{color: "black"}}/>  </Link></Nav.Link>
                        <Nav.Link className="li-nav"><BsSearch/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}