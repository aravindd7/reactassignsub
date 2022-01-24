import React from 'react';
import { Button } from 'react-bootstrap';
export default function FooterContent() {
    return(
        <div>
            <div className='container-row footer-home'>
            <div>
                <img src='../images/logo.png' width="300px"/>
                <p><span style={{fontWeight: 'bold'}}>ADDRESS:</span> 28 White tower, Street Name New York<br />City, USA</p>
                <p><span style={{fontWeight: 'bold'}}>TELEPHONE:</span> +91 9876543210</p>
                <p><span style={{fontWeight: 'bold'}}>EMAIL:</span>yourmain@gmail.com</p>
            </div>
            <div>
            <h3>Menu</h3>
            <ul className='ul-footer'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Testimonial</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            </div>
            <div>
            <h3>Account</h3>
            <ul className='ul-footer'>
                <li>Account</li>
                <li>Checkout</li>
                <li>Login</li>
                <li>Register</li>
                <li>Shopping</li>
                <li>Widget</li>
            </ul>
            </div>
            <div>
                <h3>Newsletter</h3>
                <p>Subscribe by our newsletter and get update protidin.</p>
                <div>
                    <input name="email" placeholder='Enter Your Mail' />
                    <Button className='btn-red'>Subscribe</Button>
                </div>
            </div>
            </div>
            <div className='copyright'><p>©2021 All Rights Reserved By Free Html Templates</p></div>     
        </div>
    );
}