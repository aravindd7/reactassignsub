import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./Blog";
import Cart from "./Cart";
import Contact from "./Contact";
import Products from "./Products";
import Testimonial from "./Testimonial";
import About from "./About";
import Home from './Home';
import { BsCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Navbar() {
    console.log("In Nav");
    return (
        <div>
            <BrowserRouter>
                <div>
                    <ul className="ul-nav">
                        <Link to="/"><li className="li-nav navbar-brand"><img src="./images/logo.png" width="250" /></li></Link>
                        <Link to="/home"><li className="li-nav">&nbsp;Home&nbsp;</li></Link>
                        {/* <ul> */}
                        <li className="li-nav"><DropdownButton title="Pages" >
                        <Link to="about"><Dropdown.Item as="button">About</Dropdown.Item></Link>
                        <Link to="testimonial"><Dropdown.Item as="button">Testimonial</Dropdown.Item></Link>
                        </DropdownButton></li>
                        {/* </ul> */}
                        <Link to="/products"><li className="li-nav">&nbsp;Products&nbsp;</li></Link>
                        <Link to="/blog"><li className="li-nav">&nbsp;Blog&nbsp;</li></Link>
                        <Link to="/contact"><li className="li-nav">&nbsp;Contact&nbsp;</li></Link>
                        <Link to="/cart"><li className="li-nav">&nbsp;<BsCartFill />&nbsp;</li></Link>
                        <li className="li-nav">&nbsp;<BsSearch />&nbsp;</li>

                    </ul>
                    <Routes>
                        <Route exact path="/home" element={<Home />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                        <Route path="/blog" element={<Blog />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/testimonial" element={<Testimonial />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}