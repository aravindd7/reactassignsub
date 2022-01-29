import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavbarComp() {
    const [collapsedState, setCollapsedState] = useState(true);
    const [ classes, setClasses ] = useState(['true']);
    const toggleRef = useRef(null);
    const navRef = useRef(null);
    const navDropRef = useRef(null);

    useEffect(()=> {
        classes.length = 0;
        classes.push(`${collapsedState}`);
        console.log('classes: ', classes);
    },[collapsedState])

   function navToggle (e, toggleRef, navRef) {
        let event = e;
        let tempTogRef = toggleRef.current.classList;
        let tempNavRef = navRef;
        let tempcollapsedState = tempTogRef.contains('collapsed');
        console.log('tempTogRef: Navbar.Toggle', tempTogRef, 'collapsedState: ', collapsedState);
        setCollapsedState(tempcollapsedState);
    }

    function navDropToggle (e, navDropRef) {
        let temp = navDropRef;
        let ev = e;
        console.log('navDropToggle: e, ref',ev, temp );
    }

    return (
        <Navbar bg="light" expand="lg" className="nav-root" ref={navRef}>
            <Container fluid className="container-nav">
                <div className="container-logo">
                <NavLink to="/"><Navbar.Brand><img src="./images/logo.png" width="250" /></Navbar.Brand></NavLink>
                </div>
                <Navbar.Toggle className={classes} ref={toggleRef} aria-controls="basic-navbar-nav" onClick={e=>{navToggle(e, toggleRef, navRef);}}>
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
                        <Nav.Link className="li-nav"><Link to="/search"><BsSearch style={{color: "black"}}/></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}