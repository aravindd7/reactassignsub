import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./Blog";
import Cart from "./Cart";
import Contact from "./Contact";
import Products from "./Products";
import Testimonial from "./Testimonial";
import About from "./About";


export default function Navbar() {
    console.log("In Nav");
    return (
        <div>
            <BrowserRouter>
                <div>
                    <ul className="ul-nav">
                        <Link to="/"><li className="li-nav">Home</li></Link>
                        {/* <ul>
                        <p>Pages</p>
                        <Link to="about"><li className="li-nav">About</li></Link>
                        <Link to="testimonial"><li className="li-nav">Testimonial</li></Link>
                        </ul> */}
                        <Link to="/products"><li className="li-nav">Products</li></Link>
                        <Link to="/blog"><li className="li-nav">Blog</li></Link>
                        <Link to="/contact"><li className="li-nav">Contact</li></Link>
                        <Link to="/cart"><li className="li-nav">Cart</li></Link>
                        <li className="li-nav">Search</li>

                    </ul>
                    <Routes>
                        <Route exact path="/"></Route>
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