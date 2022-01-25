import React from "react";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Navbar() {
    console.log("In Nav");
    return (
        <div className="container-nav">
                <nav>
                    <ul className="ul-nav">
                        <NavLink to="/"><li className="li-nav navbar-brand"><img src="./images/logo.png" width="250" /></li></NavLink>
                        <NavLink to="/"><li className="li-nav"><span>&nbsp;Home&nbsp;</span></li></NavLink>
                        {/* <ul> */}
                        <li className="li-nav"><DropdownButton title="Pages" >
                        <NavLink to="about"><Dropdown.Item as="button"><span>About</span></Dropdown.Item></NavLink>
                        <NavLink to="testimonial"><Dropdown.Item as="button"><span>Testimonial</span></Dropdown.Item></NavLink>
                        </DropdownButton></li>
                        {/* </ul> */}
                        <NavLink to="/products"><li className="li-nav"><span>&nbsp;Products&nbsp;</span></li></NavLink>
                        <NavLink to="/blog"><li className="li-nav"><span>&nbsp;Blog&nbsp;</span></li></NavLink>
                        <NavLink to="/contact"><li className="li-nav"><span>&nbsp;Contact&nbsp;</span></li></NavLink>
                        <NavLink to="/cart"><li className="li-nav">&nbsp;<BsCartFill />&nbsp;</li></NavLink>
                        <li className="li-nav">&nbsp;<BsSearch />&nbsp;</li>
                    </ul>        
                </nav>
        </div>
    );
}